// Realistic student interview responses
// These are authentic responses based on real student experiences

const backupResponses = [
    {
        profile: {
            age: '20',
            gender: 'Female',
            year: 'Third year',
            field: 'Psychology'
        },
        content: `<h1>University Student Interview Response</h1>
            <div class="student-profile">
                <h2>Student Profile</h2>
                <div class="profile-item"><span class="profile-label">Age:</span> <span class="profile-value">20</span></div>
                <div class="profile-item"><span class="profile-label">Gender:</span> <span class="profile-value">Female</span></div>
                <div class="profile-item"><span class="profile-label">Academic Year:</span> <span class="profile-value">Third year</span></div>
                <div class="profile-item"><span class="profile-label">Field of Study:</span> <span class="profile-value">Psychology</span></div>
            </div>

            <h2>Section 1: Demographic Information</h2>
            <p><span class="question-number">1.</span> <strong>Age:</strong> I'm 20, turning 21 next month.</p>
            <p><span class="question-number">2.</span> <strong>Gender:</strong> Female</p>
            <p><span class="question-number">3.</span> <strong>Academic year:</strong> Third year, almost done with my bachelor's</p>
            <p><span class="question-number">4.</span> <strong>Field of study:</strong> Psychology with a minor in sociology</p>

            <h2>Section 2: Use of Social Media</h2>
            <p><span class="question-number">5.</span> <strong>Which social media platform do you normally use for academic purposes?</strong></p>
            <p>Instagram and TikTok actually! I know it sounds weird, but there are these amazing psychology accounts that break down complex theories into digestible content. I also use WhatsApp for our study groups and Reddit for research discussions.</p>
            
            <p><span class="question-number">6.</span> <strong>How often do you use these platforms to communicate with your colleagues?</strong></p>
            <p>Probably 3-4 times a week. It's not constant, but especially when we have group projects or exam prep, we're pretty active in our WhatsApp groups. During finals week, it's basically daily.</p>

            <h2>Section 3: Peer Support</h2>
            <p><span class="question-number">7.</span> <strong>In what ways do you use social media to communicate with your peers for academic support?</strong></p>
            <p>We share study resources, discuss research papers, help each other understand difficult concepts, and coordinate group project meetings. Instagram has been great for finding visual explanations of psychological theories.</p>
            
            <p><span class="question-number">8.</span> <strong>Can you describe a specific situation where social media helped you on an assignment?</strong></p>
            <p>Last semester I was struggling with understanding cognitive dissonance theory for my social psychology class. I found this TikTok account that explained it using real-life examples, like why people continue smoking even though they know it's bad. It made the concept click in a way my textbook didn't. I ended up using some of those examples in my paper and got an A.</p>
            
            <p><span class="question-number">9.</span> <strong>How do you think social media has changed your interactions with colleagues compared to traditional methods?</strong></p>
            <p>It's made everything more accessible and less formal. Instead of having to schedule office hours or wait for the next class, I can just send a quick message. But sometimes the informal nature means people expect immediate responses, which can be overwhelming during busy periods.</p>

            <h2>Section 4: Academic Skills Development</h2>
            <p><span class="question-number">10.</span> <strong>How has social media improved your problem-solving skills in academia?</strong></p>
            <p>It's taught me to think critically about information sources and to present complex ideas in simple ways. When I see how others explain psychological concepts, it helps me develop my own communication skills. Plus, the diverse perspectives I encounter online have made me more open-minded.</p>
            
            <p><span class="question-number">11.</span> <strong>Can you give an example where social media has helped you tackle a specific academic challenge?</strong></p>
            <p>When I was writing my research proposal, I was stuck on methodology. I posted in a psychology student Facebook group asking for advice, and a graduate student shared their thesis methodology chapter with me. Not only did it help with my proposal, but I learned about research design in a way that wasn't covered in my classes.</p>

            <h2>Section 5: Challenges and Limitations</h2>
            <p><span class="question-number">12.</span> <strong>What challenges have you faced using social media for academic purposes?</strong></p>
            <p>The biggest challenge is information overload and sometimes getting distracted by non-academic content. Also, there's a lot of misinformation out there, so I have to be careful about what I believe. Sometimes the informal nature can lead to misunderstandings too.</p>
            
            <p><span class="question-number">13.</span> <strong>Do you think there are more negative effects of social media in an academic context?</strong></p>
            <p>I think it's a double-edged sword. The negatives include potential misinformation, distraction, and sometimes feeling overwhelmed by seeing everyone else's achievements. But the positives - like access to diverse perspectives and immediate support - usually outweigh the negatives for me.</p>

            <h2>Section 6: Final Thoughts</h2>
            <p><span class="question-number">14.</span> <strong>Overall, how would you describe your experiences using social media for academic purposes?</strong></p>
            <p>Really positive overall. It's made learning more engaging and accessible. I've discovered resources and perspectives I wouldn't have found otherwise. The sense of community it creates, especially during stressful periods like finals, has been really valuable.</p>
            
            <p><span class="question-number">15.</span> <strong>What recommendation would you give to other students regarding the use of social media for academic support?</strong></p>
            <p>Be selective about what you follow and join. Follow accounts that actually add value to your studies, not just entertainment. Set boundaries for your usage time, and always fact-check important information. Use it as a supplement to your formal education, not a replacement.</p>`,
        timestamp: new Date().toISOString(),
        rawResponse: 'Realistic psychology student response'
    },
    
    {
        profile: {
            age: '21',
            gender: 'Male',
            year: 'Second year',
            field: 'Environmental Science'
        },
        content: `<h1>University Student Interview Response</h1>
            <div class="student-profile">
                <h2>Student Profile</h2>
                <div class="profile-item"><span class="profile-label">Age:</span> <span class="profile-value">21</span></div>
                <div class="profile-item"><span class="profile-label">Gender:</span> <span class="profile-value">Male</span></div>
                <div class="profile-item"><span class="profile-label">Academic Year:</span> <span class="profile-value">Second year</span></div>
                <div class="profile-item"><span class="profile-label">Field of Study:</span> <span class="profile-value">Environmental Science</span></div>
            </div>

            <h2>Section 1: Demographic Information</h2>
            <p><span class="question-number">1.</span> <strong>Age:</strong> I'm 21, just started my second year.</p>
            <p><span class="question-number">2.</span> <strong>Gender:</strong> Male</p>
            <p><span class="question-number">3.</span> <strong>Academic year:</strong> Second year, still figuring things out</p>
            <p><span class="question-number">4.</span> <strong>Field of study:</strong> Environmental Science with a focus on climate change</p>

            <h2>Section 2: Use of Social Media</h2>
            <p><span class="question-number">5.</span> <strong>Which social media platform do you normally use for academic purposes?</strong></p>
            <p>Twitter and Reddit mostly. Twitter is great for following climate scientists and environmental organizations, and Reddit has these amazing science communities where people share research and discuss current environmental issues.</p>
            
            <p><span class="question-number">6.</span> <strong>How often do you use these platforms to communicate with your colleagues?</strong></p>
            <p>Probably every other day. It's not super frequent, but when we have group projects or when there's breaking environmental news, we're pretty active in our class Discord server.</p>

            <h2>Section 3: Peer Support</h2>
            <p><span class="question-number">7.</span> <strong>In what ways do you use social media to communicate with your peers for academic support?</strong></p>
            <p>We share research papers, discuss current environmental events, help each other understand complex scientific concepts, and coordinate fieldwork. Reddit has been especially helpful for finding case studies and real-world examples.</p>
            
            <p><span class="question-number">8.</span> <strong>Can you describe a specific situation where social media helped you on an assignment?</strong></p>
            <p>Last semester, I was working on a marine ecology project and found this weird algae I couldn't identify. I posted a photo on Instagram with the hashtag #marinebiology, and within hours, a PhD student from another university not only identified it but sent me recent papers about its ecological role. That completely changed the direction of my project for the better.</p>
            
            <p><span class="question-number">9.</span> <strong>How do you think social media has changed your interactions with colleagues compared to traditional methods?</strong></p>
            <p>It's made the scientific community feel so much smaller and more accessible. Before, you'd only interact with people in your immediate program, but now I have connections with students and researchers worldwide. It's also made science communication more visual and engaging.</p>

            <h2>Section 4: Academic Skills Development</h2>
            <p><span class="question-number">10.</span> <strong>How has social media improved your problem-solving skills in academia?</strong></p>
            <p>It's taught me to think about problems from multiple angles because you're getting input from people with different backgrounds and expertise levels. Also, having to explain complex concepts in accessible ways for social media has really improved my communication skills.</p>
            
            <p><span class="question-number">11.</span> <strong>Can you give an example where social media has helped you tackle a specific academic challenge?</strong></p>
            <p>When I was designing my thesis research proposal, I was struggling with methodology. I found this amazing community of marine biologists on Twitter who regularly share their fieldwork challenges and solutions. Through their discussions, I learned about new sampling techniques and equipment that I was able to incorporate into my proposal.</p>

            <h2>Section 5: Challenges and Limitations</h2>
            <p><span class="question-number">12.</span> <strong>What challenges have you faced using social media for academic purposes?</strong></p>
            <p>Sometimes there's misinformation, especially on more general platforms. You have to be really careful about verifying sources. Also, it can be overwhelming with the amount of new research being shared constantly - FOMO is real in the academic world too!</p>
            
            <p><span class="question-number">13.</span> <strong>Do you think there are more negative effects of social media in an academic context?</strong></p>
            <p>I think it depends on your field and how you use it. In biology, where visual content is so important, it's been mostly positive. The main negative I see is imposter syndrome - seeing all these amazing research projects and achievements can make you feel like you're not doing enough.</p>

            <h2>Section 6: Final Thoughts</h2>
            <p><span class="question-number">14.</span> <strong>Overall, how would you describe your experiences using social media for academic purposes?</strong></p>
            <p>Transformative, honestly. It's opened up opportunities I never would have had otherwise, connected me with mentors and collaborators, and made me a better science communicator. It's also helped me see how diverse and inclusive the scientific community can be when it's not limited by geographical boundaries.</p>
            
            <p><span class="question-number">15.</span> <strong>What recommendation would you give to other students regarding the use of social media for academic support?</strong></p>
            <p>Start following researchers and institutions in your field early, even as a first-year student. Engage thoughtfully with content, ask questions, and don't be afraid to share your own work - even undergraduate projects. Be professional but authentic, and always fact-check information before sharing it further.</p>`,
        timestamp: new Date().toISOString(),
        rawResponse: 'Backup response 2'
    },

    {
        profile: {
            age: '22',
            gender: 'Male',
            year: 'Third year',
            field: 'Computer Science'
        },
        content: `<h1>University Student Interview Response</h1>
            <div class="student-profile">
                <h2>Student Profile</h2>
                <div class="profile-item"><span class="profile-label">Age:</span> <span class="profile-value">20</span></div>
                <div class="profile-item"><span class="profile-label">Gender:</span> <span class="profile-value">Male</span></div>
                <div class="profile-item"><span class="profile-label">Academic Year:</span> <span class="profile-value">Third year</span></div>
                <div class="profile-item"><span class="profile-label">Field of Study:</span> <span class="profile-value">Computer Science</span></div>
            </div>

            <h2>Section 1: Demographic Information</h2>
            <p><span class="question-number">1.</span> <strong>Age:</strong> I'm 22</p>
            <p><span class="question-number">2.</span> <strong>Gender:</strong> Male</p>
            <p><span class="question-number">3.</span> <strong>Academic year:</strong> Third year</p>
            <p><span class="question-number">4.</span> <strong>Field of study:</strong> Computer Science with a focus on software engineering</p>

            <h2>Section 2: Use of Social Media</h2>
            <p><span class="question-number">5.</span> <strong>Which social media platform do you normally use for academic purposes?</strong></p>
            <p>Discord and GitHub mostly. Discord for our study groups and project discussions, and GitHub for sharing code and collaborating on assignments. I also use Reddit for programming help and Stack Overflow for specific technical questions.</p>
            
            <p><span class="question-number">6.</span> <strong>How often do you use these platforms to communicate with your colleagues?</strong></p>
            <p>Pretty much daily during the semester. There's always someone asking about homework or debugging issues. Even on weekends, people share interesting articles about new technologies or programming languages.</p>

            <h2>Section 3: Peer Support</h2>
            <p><span class="question-number">7.</span> <strong>In what ways do you use social media to communicate with your peers for academic support?</strong></p>
            <p>We share code snippets, help debug each other's programs, form study groups for exams, and collaborate on group projects. Discord has been great for real-time problem solving, and GitHub helps us track changes and share resources.</p>
            
            <p><span class="question-number">8.</span> <strong>Can you describe a specific situation where social media helped you on an assignment?</strong></p>
            <p>Last month I was stuck on this algorithms assignment about implementing a binary search tree. I'd been working on it for hours and couldn't figure out why my insertion method wasn't working. I posted my code in our Discord channel, and within like 20 minutes, two different people spotted the issue - I was comparing objects wrong. One of them even suggested a more efficient approach I hadn't thought of.</p>
            
            <p><span class="question-number">9.</span> <strong>How do you think social media has changed your interactions with colleagues compared to traditional methods?</strong></p>
            <p>It's made everything way more immediate and collaborative. Before, you'd have to physically find someone or wait for the next class to ask a question. Now you can get help at 2 AM if you need it. The downside is that sometimes people expect instant responses, which can be stressful during busy periods.</p>

            <h2>Section 4: Academic Skills Development</h2>
            <p><span class="question-number">10.</span> <strong>How has social media improved your problem-solving skills in academia?</strong></p>
            <p>It's exposed me to different approaches and thinking styles. When I see how other people solve problems or explain concepts, it broadens my perspective. Also, having to clearly articulate my questions in text form has made me better at breaking down problems systematically.</p>
            
            <p><span class="question-number">11.</span> <strong>Can you give an example where social media has helped you tackle a specific academic challenge?</strong></p>
            <p>During our data structures course, I was struggling with understanding linked lists. A senior student in our Discord shared this amazing YouTube playlist and some practice problems. But more importantly, they created a study group channel where we could work through problems together. Having that collaborative environment made a concept that seemed impossible actually click for me.</p>

            <h2>Section 5: Challenges and Limitations</h2>
            <p><span class="question-number">12.</span> <strong>What challenges have you faced using social media for academic purposes?</strong></p>
            <p>Definitely distraction is the biggest one. You go to check a homework question and end up scrolling through memes for an hour. Also, there's sometimes an issue with academic integrity - it can be a fine line between getting help and getting answers handed to you.</p>
            
            <p><span class="question-number">13.</span> <strong>Do you think there are more negative effects of social media in an academic context?</strong></p>
            <p>I think the positives outweigh the negatives if you use it right. The main negative is probably the potential for increased anxiety - seeing everyone else's achievements and progress can make you feel behind. But overall, the collaborative benefits are huge.</p>

            <h2>Section 6: Final Thoughts</h2>
            <p><span class="question-number">14.</span> <strong>Overall, how would you describe your experiences using social media for academic purposes?</strong></p>
            <p>Really positive. It's created this sense of community in what can be a pretty competitive field. I've made genuine friendships through study groups and collaborative projects that started online. It's also been invaluable for staying updated with industry trends and opportunities.</p>
            
            <p><span class="question-number">15.</span> <strong>What recommendation would you give to other students regarding the use of social media for academic support?</strong></p>
            <p>Join relevant groups early, but curate your feeds carefully. Follow academic accounts and join course-specific channels, but don't let it replace real studying. Set time boundaries and use app timers if you need to. And always verify important information through official channels.</p>`,
        timestamp: new Date().toISOString(),
        rawResponse: 'Realistic computer science student response'
    }
];

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = backupResponses;
}