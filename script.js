// Interview Response Generator
// Main JavaScript file for handling API calls, response generation, and document management

class InterviewResponseGenerator {
    constructor() {
        this.apiKey = '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';
        this.apiUrl = 'https://openrouter.ai/api/v1/chat/completions';
        this.quill = null;
        this.storedResponses = [];
        this.currentResponse = null;
        
        this.init();
    }

    init() {
        this.initQuill();
        this.loadStoredResponses();
        this.bindEvents();
        this.updateResponseCount();
        this.displayWelcomeMessage();
    }

    initQuill() {
        // Initialize Quill editor with custom toolbar
        this.quill = new Quill('#editor', {
            theme: 'snow',
            modules: {
                toolbar: [
                    [{ 'header': [1, 2, 3, false] }],
                    ['bold', 'italic', 'underline'],
                    [{ 'list': 'ordered'}, { 'list': 'bullet' }],
                    ['link'],
                    [{ 'align': [] }],
                    ['clean']
                ]
            },
            placeholder: 'Interview response will appear here...'
        });
    }

    bindEvents() {
        document.getElementById('generateBtn').addEventListener('click', () => {
            this.generateNewResponse();
        });

        document.getElementById('loadFromStorageBtn').addEventListener('click', () => {
            this.loadRandomStoredResponse();
        });

        document.getElementById('copyBtn').addEventListener('click', () => {
            this.copyDocument();
        });

        document.getElementById('downloadBtn').addEventListener('click', () => {
            this.downloadDocument();
        });

        document.getElementById('closeModal').addEventListener('click', () => {
            this.hideModal();
        });
    }

    displayWelcomeMessage() {
        const welcomeContent = `
            <h1>University Student Interview Response Generator</h1>
            <h2>Welcome</h2>
            <p>This tool generates realistic interview responses from university students about their use of social media for academic purposes.</p>
            <p><strong>Features:</strong></p>
            <ul>
                <li>Generate unique student profiles with varied demographics</li>
                <li>Create authentic, conversational responses</li>
                <li>Export responses in document format</li>
                <li>Copy content for use in research documents</li>
            </ul>
            <p><em>Click "Generate New Response" to create a new interview response, or "Load Random Stored Response" to view a previously generated response.</em></p>
        `;
        this.quill.root.innerHTML = welcomeContent;
    }

    async generateNewResponse() {
        this.showLoading(true);
        this.disableButtons(true);

        try {
            const response = await this.callOpenRouterAPI();
            
            if (response && response.content) {
                this.currentResponse = response;
                this.displayResponse(response);
                this.saveResponse(response);
                this.showSuccess('New interview response generated successfully!');
            } else {
                throw new Error('Invalid response from API');
            }
        } catch (error) {
            console.error('Error generating response:', error);
            this.showError('Failed to generate response. Loading a backup response instead.');
            this.loadBackupResponse();
        } finally {
            this.showLoading(false);
            this.disableButtons(false);
        }
    }

    async callOpenRouterAPI() {
        const prompt = `You are a university student participating in a research interview. Your task is to respond to the interview guide below based on your real experience with social media for academic purposes. Be realistic and casual.

IMPORTANT: Format your response EXACTLY like this example with proper line breaks and spacing:

INTERVIEW GUIDE (Completed – Simple Version)

Section 1: Demographic Information
1. Age: 22
2. Gender: Female
3. Academic year: 3rd Year
4. Field of study: Computer Science

Section 2: Use of Social Media
5. Which social media platform do you normally use for academic purposes?
   Mostly WhatsApp and Telegram.
6. How often do you use these platforms to communicate with your colleagues?
   Daily.

Section 3: Peer Support
7. In what ways do you use social media to communicate with your peers for academic support?
   I use group chats to ask questions, share notes, and talk about assignments.
8. Can you describe a specific situation where social media helped you on an assignment?
   Yes, during a group project, we used WhatsApp to plan, share ideas, and work together. It really helped us finish on time.
9. How do you think social media has changed your interactions with colleagues compared to traditional methods?
   It makes it easier to reach people anytime. Before, we had to wait to meet in person, but now we can chat anytime.

Section 4: Academic Skills Development
10. How has social media improved your problem-solving skills in academia?
    When I see how others solve problems, it gives me new ideas and ways to approach things.
11. Can you give an example where social media has helped you tackle a specific academic challenge?
    I was stuck on a coding question, and someone in the group explained it and sent a video. That helped me a lot.

Section 5: Challenges and Limitations
12. What challenges have you faced using social media for academic purposes?
    Sometimes there's too much chatting and jokes, so it gets distracting.
13. Do you think there are more negative effects of social media in academic context? If any, please elaborate.
    Yes, it can waste time if you're not careful. It's easy to get distracted.

Section 6: Final Thoughts
14. Overall, how would you describe your experiences using social media for academic purposes?
    It's been helpful. I've learned a lot and worked better with others.
15. What recommendation would you give to other students regarding the use of social media for academic support?
    Use it for learning, not just fun. Focus on what helps you and avoid distractions.

Use EXACTLY this format with proper line breaks, spacing, and indentation. Keep answers concise (1-2 sentences per question).`;

        const requestBody = {
            model: "mistralai/mistral-7b-instruct",
            messages: [
                { role: "user", content: prompt }
            ],
            temperature: 0.8,
            max_tokens: 2000
        };

        const response = await fetch(this.apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.apiKey}`,
                'HTTP-Referer': window.location.origin,
                'X-Title': 'Interview Response Generator'
            },
            body: JSON.stringify(requestBody)
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error('API Error Response:', errorText);
            throw new Error(`API request failed: ${response.status} - ${errorText}`);
        }

        const data = await response.json();
        const content = data.choices[0].message.content;
        
        return this.parseResponse(content);
    }

    createPrompt() {
        return `You are a university student participating in a research interview about using social media for academic purposes. 

Please provide realistic, natural responses to all 15 questions below. Make your answers sound conversational and authentic, like a real student would speak during an interview.

Create a unique student profile with:
- Age: 18-25
- Gender: Male/Female/Non-binary/Prefer not to say
- Academic year: First year/Second year/Third year/Fourth year/Graduate student
- Field of study: (choose any realistic field)

Interview Questions:

Section 1: Demographic Information
1. Age
2. Gender  
3. Academic year
4. Field of study

Section 2: Use of Social Media
5. Which social media platform do you normally use for academic purposes?
6. How often do you use these platforms to communicate with your colleagues? (Options: Daily, Weekly, Occasionally, Rarely)

Section 3: Peer Support
7. In what ways do you use social media to communicate with your peers for academic support?
8. Can you describe a specific situation where social media helped you on an assignment?
9. How do you think social media has changed your interactions with colleagues compared to the traditional methods?

Section 4: Academic Skills Development
10. How has social media improved your problem-solving skills in academia?
11. Can you give an example where social media has helped you tackle a specific academic challenge?

Section 5: Challenges and Limitations
12. What challenges have you faced using social media for academic purposes?
13. Do you think there are more negative effects of social media in an academic context? If yes, please elaborate.

Section 6: Final Thoughts
14. Overall, how would you describe your experiences using social media for academic purposes?
15. What recommendation would you give to other students regarding the use of social media for academic support?

Format your response as:
STUDENT_PROFILE: Age|Gender|Year|Field
RESPONSE_START
[Your natural, conversational answers to all 15 questions, organized by section]
RESPONSE_END`;
    }

    parseResponse(content) {
        try {
            // Extract student profile
            const profileMatch = content.match(/STUDENT_PROFILE:\s*(.+)/);
            let profile = { age: '21', gender: 'Student', year: 'Third year', field: 'Computer Science' };
            
            if (profileMatch) {
                const profileParts = profileMatch[1].split('|');
                if (profileParts.length >= 4) {
                    profile = {
                        age: profileParts[0].trim(),
                        gender: profileParts[1].trim(),
                        year: profileParts[2].trim(),
                        field: profileParts[3].trim()
                    };
                }
            }

            // Extract response content
            const responseMatch = content.match(/RESPONSE_START\s*([\s\S]*?)\s*RESPONSE_END/);
            let responseContent = content;
            
            if (responseMatch) {
                responseContent = responseMatch[1].trim();
            }

            // Format the response for display
            const formattedContent = this.formatResponseContent(responseContent, profile);

            return {
                profile: profile,
                content: formattedContent,
                timestamp: new Date().toISOString(),
                rawResponse: content
            };
        } catch (error) {
            console.error('Error parsing response:', error);
            return this.createSampleResponse();
        }
    }

    formatResponseContent(content, profile) {
        // Create a well-formatted interview document
        let formatted = `<h1>INTERVIEW GUIDE (Completed – Simple Version)</h1>`;
        
        // Add student profile section
        formatted += `<div class="student-profile">
            <h2>Student Profile</h2>
            <div class="profile-item"><span class="profile-label">Age:</span> <span class="profile-value">${profile.age}</span></div>
            <div class="profile-item"><span class="profile-label">Gender:</span> <span class="profile-value">${profile.gender}</span></div>
            <div class="profile-item"><span class="profile-label">Academic Year:</span> <span class="profile-value">${profile.academicYear}</span></div>
            <div class="profile-item"><span class="profile-label">Field of Study:</span> <span class="profile-value">${profile.fieldOfStudy}</span></div>
        </div>`;

        // Format the content with proper line breaks and structure
        let formattedContent = content;
        
        // Clean up the content and add proper formatting
        formattedContent = formattedContent
            // Replace multiple spaces with single space
            .replace(/\s+/g, ' ')
            // Add line breaks after section headers
            .replace(/(Section \d+: [^0-9]+)/g, '\n\n$1\n')
            // Add line breaks after question numbers
            .replace(/(\d+\.)/g, '\n$1')
            // Add line breaks after answers (before next question)
            .replace(/([.!?])\s*(\d+\.)/g, '$1\n\n$2')
            // Add line breaks after demographic answers
            .replace(/(\d+\. [^:]+:)\s*([^0-9\n]+)/g, '$1\n   $2')
            // Add line breaks after question answers
            .replace(/(\d+\. [^?]+\?)\s*([^0-9\n]+)/g, '$1\n   $2')
            // Force line breaks between questions and answers
            .replace(/(\d+\. [^:?]+[:?])\s*([^0-9\n]+)/g, '$1\n   $2')
            // Clean up extra spaces
            .replace(/\n\s+/g, '\n')
            .replace(/\n{3,}/g, '\n\n')
            // Convert to HTML with proper line breaks
            .replace(/\n\n/g, '</p><p>')
            .replace(/\n/g, '<br>')
            .replace(/^/, '<p>')
            .replace(/$/, '</p>');

        // Parse and format the content manually
        formattedContent = this.parseAndFormatContent(content);
        
        formatted += formattedContent;

        return formatted;
    }

    addSectionHeaders(content) {
        // Add section headers based on question patterns
        let formatted = content;
        
        const sectionMarkers = [
            { pattern: /(?:1\.|Question 1|Age)/i, header: '<h2>Section 1: Demographic Information</h2>' },
            { pattern: /(?:5\.|Question 5|Which social media platform)/i, header: '<h2>Section 2: Use of Social Media</h2>' },
            { pattern: /(?:7\.|Question 7|In what ways)/i, header: '<h2>Section 3: Peer Support</h2>' },
            { pattern: /(?:10\.|Question 10|How has social media improved)/i, header: '<h2>Section 4: Academic Skills Development</h2>' },
            { pattern: /(?:12\.|Question 12|What challenges)/i, header: '<h2>Section 5: Challenges and Limitations</h2>' },
            { pattern: /(?:14\.|Question 14|Overall)/i, header: '<h2>Section 6: Final Thoughts</h2>' }
        ];

        sectionMarkers.forEach(marker => {
            formatted = formatted.replace(marker.pattern, marker.header + '\n$&');
        });

        return formatted;
    }

    addQuestionNumbering(content) {
        // Add consistent question numbering
        let questionNumber = 1;
        
        return content.replace(/(?:Question \d+:?|^\d+\.)/gm, () => {
            return `<span class="question-number">${questionNumber++}.</span>`;
        });
    }

    parseAndFormatContent(content) {
        // Clean up the content first
        let cleanContent = content.replace(/\s+/g, ' ').trim();
        
        // Split into sections
        const sections = cleanContent.split(/(Section \d+: [^0-9]+)/);
        
        let formattedContent = '';
        
        for (let i = 0; i < sections.length; i++) {
            const section = sections[i].trim();
            if (!section) continue;
            
            // Check if this is a section header
            if (section.match(/^Section \d+: /)) {
                formattedContent += `<h2>${section}</h2>`;
            } else {
                // This is section content - parse questions and answers
                const questions = section.split(/(\d+\.)/);
                
                for (let j = 0; j < questions.length; j++) {
                    const question = questions[j].trim();
                    if (!question) continue;
                    
                    // Check if this is a question number
                    if (question.match(/^\d+\.$/)) {
                        formattedContent += `<p><strong>${question}</strong>`;
                    } else {
                        // This is question text or answer
                        if (question.includes(':')) {
                            // This is a demographic question (e.g., "Age: 22")
                            formattedContent += `${question}</p>`;
                        } else if (question.includes('?')) {
                            // This is a question with answer
                            const parts = question.split(/([^?]+\?)/);
                            if (parts.length > 1) {
                                formattedContent += `${parts[1]}`;
                                if (parts[2]) {
                                    formattedContent += `<br>   ${parts[2].trim()}</p>`;
                                } else {
                                    formattedContent += `</p>`;
                                }
                            } else {
                                formattedContent += `${question}</p>`;
                            }
                        } else {
                            // This is just an answer
                            formattedContent += `   ${question}</p>`;
                        }
                    }
                }
            }
        }
        
        return formattedContent;
    }

    displayResponse(response) {
        this.quill.root.innerHTML = response.content;
        this.updateStudentInfo(response.profile);
        this.showStudentInfo(true);
    }

    updateStudentInfo(profile) {
        document.getElementById('studentAge').textContent = profile.age;
        document.getElementById('studentGender').textContent = profile.gender;
        document.getElementById('studentYear').textContent = profile.year;
        document.getElementById('studentField').textContent = profile.field;
    }

    showStudentInfo(show) {
        const studentInfo = document.getElementById('studentInfo');
        if (show) {
            studentInfo.classList.remove('hidden');
        } else {
            studentInfo.classList.add('hidden');
        }
    }

    loadRandomStoredResponse() {
        if (this.storedResponses.length === 0) {
            this.loadSampleResponse();
            return;
        }

        const randomIndex = Math.floor(Math.random() * this.storedResponses.length);
        const response = this.storedResponses[randomIndex];
        
        this.currentResponse = response;
        this.displayResponse(response);
        this.showSuccess('Loaded stored response successfully!');
    }

    loadBackupResponse() {
        // Load backup responses from the backup-responses.js file
        if (typeof backupResponses !== 'undefined' && backupResponses.length > 0) {
            const randomIndex = Math.floor(Math.random() * backupResponses.length);
            const backupResponse = backupResponses[randomIndex];
            
            // Convert backup response to the expected format
            const response = {
                profile: backupResponse.profile,
                content: backupResponse.content,
                timestamp: new Date().toISOString(),
                rawResponse: backupResponse.rawResponse || 'Backup response'
            };
            
            this.currentResponse = response;
            this.displayResponse(response);
            this.saveResponse(response);
            this.showSuccess('Loaded backup response!');
        } else {
            // Fallback to sample response if no backup responses available
            const sampleResponse = this.createSampleResponse();
            this.currentResponse = sampleResponse;
            this.displayResponse(sampleResponse);
            this.saveResponse(sampleResponse);
            this.showSuccess('Loaded sample response!');
        }
    }

    createSampleResponse() {
        return {
            profile: {
                age: '22',
                gender: 'Female',
                year: 'Third year',
                field: 'Psychology'
            },
            content: `<h1>University Student Interview Response</h1>
                <div class="student-profile">
                    <h2>Student Profile</h2>
                    <div class="profile-item"><span class="profile-label">Age:</span> <span class="profile-value">22</span></div>
                    <div class="profile-item"><span class="profile-label">Gender:</span> <span class="profile-value">Female</span></div>
                    <div class="profile-item"><span class="profile-label">Academic Year:</span> <span class="profile-value">Third year</span></div>
                    <div class="profile-item"><span class="profile-label">Field of Study:</span> <span class="profile-value">Psychology</span></div>
                </div>

                <h2>Section 1: Demographic Information</h2>
                <p><span class="question-number">1.</span> <strong>Age:</strong> I'm 22 years old.</p>
                <p><span class="question-number">2.</span> <strong>Gender:</strong> Female</p>
                <p><span class="question-number">3.</span> <strong>Academic year:</strong> I'm in my third year of university.</p>
                <p><span class="question-number">4.</span> <strong>Field of study:</strong> I'm studying Psychology with a minor in Statistics.</p>

                <h2>Section 2: Use of Social Media</h2>
                <p><span class="question-number">5.</span> <strong>Which social media platform do you normally use for academic purposes?</strong></p>
                <p>I mainly use Discord and WhatsApp for academic stuff. Discord is great for our study groups because we can have different channels for different subjects, and WhatsApp is more for quick questions or urgent announcements.</p>
                
                <p><span class="question-number">6.</span> <strong>How often do you use these platforms to communicate with your colleagues?</strong></p>
                <p>I'd say daily, especially during exam periods. Even on regular days, there's usually someone asking questions or sharing notes in our group chats.</p>

                <h2>Section 3: Peer Support</h2>
                <p><span class="question-number">7.</span> <strong>In what ways do you use social media to communicate with your peers for academic support?</strong></p>
                <p>We use it for so many things! Sharing notes, asking clarification questions about lectures, forming study groups, reminding each other about deadlines, and even just moral support during stressful times. It's like having a 24/7 study buddy system.</p>
                
                <p><span class="question-number">8.</span> <strong>Can you describe a specific situation where social media helped you on an assignment?</strong></p>
                <p>Oh, definitely! Last semester I was struggling with a statistics assignment that was due the next day. I posted in our class Discord around 11 PM, and three classmates jumped in to help. One shared a really helpful YouTube video, another explained the concept in simpler terms, and the third actually worked through a similar problem with me step by step. I probably would have failed that assignment without their help.</p>
                
                <p><span class="question-number">9.</span> <strong>How do you think social media has changed your interactions with colleagues compared to traditional methods?</strong></p>
                <p>It's made everything so much more accessible and immediate. Before, if you missed something in class, you'd have to wait until you saw someone in person to ask. Now, you can get help instantly. It's also less intimidating to ask questions in a group chat than raising your hand in a lecture hall. The downside is that sometimes the conversations can get a bit chaotic with everyone talking at once.</p>

                <h2>Section 4: Academic Skills Development</h2>
                <p><span class="question-number">10.</span> <strong>How has social media improved your problem-solving skills in academia?</strong></p>
                <p>I think it's taught me to be more resourceful and collaborative. When I'm stuck on something, I've learned to break down my question clearly so others can understand it, and I've gotten better at explaining concepts to others too. It's also shown me different approaches to the same problem since everyone has their own way of thinking.</p>
                
                <p><span class="question-number">11.</span> <strong>Can you give an example where social media has helped you tackle a specific academic challenge?</strong></p>
                <p>When we had to do our research methods project, I was completely lost on how to analyze the data. I posted in our psychology student Facebook group, and a graduate student shared this amazing statistical software tutorial series. Not only did it help with that specific project, but I've used those skills in other classes too. It really opened up a whole new resource network beyond just my immediate classmates.</p>

                <h2>Section 5: Challenges and Limitations</h2>
                <p><span class="question-number">12.</span> <strong>What challenges have you faced using social media for academic purposes?</strong></p>
                <p>The biggest challenge is distraction, honestly. You open Instagram to check a study group message and suddenly you're watching cat videos for an hour. Also, sometimes misinformation spreads really quickly in group chats – like wrong exam dates or incorrect assignment details – and it can cause unnecessary panic.</p>
                
                <p><span class="question-number">13.</span> <strong>Do you think there are more negative effects of social media in an academic context?</strong></p>
                <p>I think it depends on how you use it. The negative effects are definitely there – distractions, comparing yourself to others, the pressure to be constantly available for group work. But if you can set boundaries and use it purposefully, the benefits outweigh the negatives. It's all about self-control and being intentional with your usage.</p>

                <h2>Section 6: Final Thoughts</h2>
                <p><span class="question-number">14.</span> <strong>Overall, how would you describe your experiences using social media for academic purposes?</strong></p>
                <p>Overall, it's been really positive. It's made learning more collaborative and accessible. I feel more connected to my classmates and professors, and it's created this sense of community that extends beyond the classroom. Sure, there are challenges, but I can't imagine going through university without these digital connections.</p>
                
                <p><span class="question-number">15.</span> <strong>What recommendation would you give to other students regarding the use of social media for academic support?</strong></p>
                <p>I'd say join academic groups and create study groups early, but set clear boundaries. Turn off notifications during study time, and don't feel pressured to respond immediately to every message. Also, verify important information through official channels, not just social media. And most importantly, use it as a supplement to, not a replacement for, in-person studying and office hours with professors.</p>`,
            timestamp: new Date().toISOString(),
            rawResponse: 'Sample response'
        };
    }

    saveResponse(response) {
        this.storedResponses.push(response);
        this.saveToLocalStorage();
        this.updateResponseCount();
    }

    saveToLocalStorage() {
        try {
            localStorage.setItem('interviewResponses', JSON.stringify(this.storedResponses));
        } catch (error) {
            console.error('Error saving to localStorage:', error);
        }
    }

    loadStoredResponses() {
        try {
            const stored = localStorage.getItem('interviewResponses');
            if (stored) {
                this.storedResponses = JSON.parse(stored);
            }
        } catch (error) {
            console.error('Error loading from localStorage:', error);
            this.storedResponses = [];
        }
    }

    updateResponseCount() {
        document.getElementById('responseCount').textContent = `Stored Responses: ${this.storedResponses.length}`;
    }

    copyDocument() {
        if (!this.currentResponse) {
            this.showError('No document to copy. Please generate a response first.');
            return;
        }

        const content = this.quill.root.innerHTML;
        const textContent = this.quill.getText();

        // Create a temporary textarea to copy plain text
        const textarea = document.createElement('textarea');
        textarea.value = this.htmlToPlainText(content);
        document.body.appendChild(textarea);
        textarea.select();
        
        try {
            document.execCommand('copy');
            this.showSuccess('Document copied to clipboard! You can now paste it into Google Docs or Word.');
        } catch (error) {
            console.error('Copy failed:', error);
            this.showError('Copy failed. Please select and copy the content manually.');
        } finally {
            document.body.removeChild(textarea);
        }
    }

    htmlToPlainText(html) {
        // Convert HTML to plain text while preserving structure
        const div = document.createElement('div');
        div.innerHTML = html;
        
        // Replace headers with formatted text
        const headers = div.querySelectorAll('h1, h2, h3');
        headers.forEach(header => {
            const text = header.textContent;
            const level = header.tagName;
            let replacement = '';
            
            if (level === 'H1') {
                replacement = `\n${text.toUpperCase()}\n${'='.repeat(text.length)}\n`;
            } else if (level === 'H2') {
                replacement = `\n\n${text}\n${'-'.repeat(text.length)}\n`;
            } else {
                replacement = `\n\n${text}\n`;
            }
            
            header.outerHTML = replacement;
        });

        // Replace paragraphs with line breaks
        const paragraphs = div.querySelectorAll('p');
        paragraphs.forEach(p => {
            p.outerHTML = p.textContent + '\n';
        });

        // Clean up and return
        return div.textContent
            .replace(/\n\n\n+/g, '\n\n')
            .trim();
    }

    downloadDocument() {
        if (!this.currentResponse) {
            this.showError('No document to download. Please generate a response first.');
            return;
        }

        const content = this.createDownloadableContent();
        const blob = new Blob([content], { type: 'text/html' });
        const url = URL.createObjectURL(blob);
        
        const a = document.createElement('a');
        a.href = url;
        a.download = `interview-response-${Date.now()}.html`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        
        this.showSuccess('Document downloaded successfully!');
    }

    createDownloadableContent() {
        const content = this.quill.root.innerHTML;
        
        return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Interview Response - ${this.currentResponse.profile.field} Student</title>
    <style>
        body {
            font-family: 'Times New Roman', serif;
            font-size: 12pt;
            line-height: 1.6;
            max-width: 8.5in;
            margin: 0 auto;
            padding: 1in;
            color: #333;
        }
        h1 {
            text-align: center;
            font-size: 16pt;
            margin-bottom: 30px;
            text-transform: uppercase;
            letter-spacing: 1px;
        }
        h2 {
            font-size: 14pt;
            margin: 25px 0 10px 0;
            color: #2c3e50;
            border-bottom: 2px solid #3498db;
            padding-bottom: 5px;
        }
        .student-profile {
            background: #f8f9fa;
            border-left: 4px solid #3498db;
            padding: 15px;
            margin: 20px 0;
        }
        .question-number {
            color: #3498db;
            font-weight: bold;
        }
        .profile-label {
            font-weight: bold;
            color: #2c3e50;
        }
        .profile-item {
            display: inline-block;
            margin-right: 30px;
            margin-bottom: 5px;
        }
        @media print {
            body { margin: 0; padding: 0.5in; }
        }
    </style>
</head>
<body>
    ${content}
    <hr style="margin-top: 40px; border: none; border-top: 1px solid #ccc;">
    <p style="text-align: center; font-size: 10pt; color: #666;">
        Generated on ${new Date().toLocaleDateString()} | Interview Response Generator
    </p>
</body>
</html>`;
    }

    showLoading(show) {
        const skeleton = document.getElementById('contentSkeleton');
        const studentInfo = document.getElementById('studentInfo');
        const editorContainer = document.getElementById('editorContainer');
        
        if (show) {
            // Show skeleton, hide real content
            skeleton.classList.remove('hidden');
            studentInfo.classList.add('hidden');
            editorContainer.classList.add('hidden');
        } else {
            // Hide skeleton, show real content
            skeleton.classList.add('hidden');
            editorContainer.classList.remove('hidden');
        }
    }

    disableButtons(disable) {
        const buttons = ['generateBtn', 'loadFromStorageBtn', 'copyBtn', 'downloadBtn'];
        buttons.forEach(id => {
            document.getElementById(id).disabled = disable;
        });
    }

    showSuccess(message) {
        document.getElementById('successMessage').textContent = message;
        document.getElementById('successModal').classList.remove('hidden');
        document.getElementById('successModal').classList.add('flex');
    }

    showError(message) {
        this.showSuccess(message); // Using the same modal for now
    }

    hideModal() {
        document.getElementById('successModal').classList.add('hidden');
        document.getElementById('successModal').classList.remove('flex');
    }
}

// Initialize the application when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new InterviewResponseGenerator();
});