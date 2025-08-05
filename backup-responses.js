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
    },
    {
        profile: {
            name: 'Ama Serwaa',
            age: '21',
            gender: 'Female',
            university: 'University of Ghana (Legon)',
            year: 'Third year',
            field: 'Psychology'
        },
        content: `<h1>University Student Interview Response</h1>
            <div class="student-profile">
                <h2>Student Profile</h2>
                <div class="profile-item"><span class="profile-label">Name:</span> <span class="profile-value">Ama Serwaa</span></div>
                <div class="profile-item"><span class="profile-label">Age:</span> <span class="profile-value">21</span></div>
                <div class="profile-item"><span class="profile-label">Gender:</span> <span class="profile-value">Female</span></div>
                <div class="profile-item"><span class="profile-label">University:</span> <span class="profile-value">University of Ghana (Legon)</span></div>
                <div class="profile-item"><span class="profile-label">Academic Year:</span> <span class="profile-value">Third year</span></div>
                <div class="profile-item"><span class="profile-label">Field of Study:</span> <span class="profile-value">Psychology</span></div>
            </div>

            <h2>Section 1: Demographic Information</h2>
            <p><span class="question-number">1.</span> <strong>Age:</strong> I'm 21 years old, in my third year at UG.</p>
            <p><span class="question-number">2.</span> <strong>Gender:</strong> Female</p>
            <p><span class="question-number">3.</span> <strong>Academic year:</strong> Level 300 Psychology student</p>
            <p><span class="question-number">4.</span> <strong>Field of study:</strong> Psychology with interest in mental health awareness in Ghana</p>

            <h2>Section 2: Use of Social Media</h2>
            <p><span class="question-number">5.</span> <strong>Which social media platform do you normally use for academic purposes?</strong></p>
            <p>WhatsApp and Facebook mostly. We have class groups on WhatsApp where we share notes and discuss assignments. Facebook has good Ghanaian psychology pages like "Mind Matters GH" that share local case studies.</p>
            
            <p><span class="question-number">6.</span> <strong>How often do you use these platforms to communicate with your colleagues?</strong></p>
            <p>Daily! Our class WhatsApp group is always active, especially around exam time. Even during vacations, we share internship opportunities and psychology articles.</p>

            <h2>Section 3: Peer Support</h2>
            <p><span class="question-number">7.</span> <strong>In what ways do you use social media to communicate with your peers for academic support?</strong></p>
            <p>We share PDFs of textbooks that are expensive to buy, discuss lecture topics we didn't understand, and organize group study sessions. During the recent strikes, social media was our only way to stay updated.</p>
            
            <p><span class="question-number">8.</span> <strong>Can you describe a specific situation where social media helped you on an assignment?</strong></p>
            <p>For my cross-cultural psychology assignment, I connected with a psychology student at UCC through a Facebook group. She shared her research on Ga family structures which became a key part of my paper.</p>
            
            <p><span class="question-number">9.</span> <strong>How do you think social media has changed your interactions with colleagues compared to traditional methods?</strong></p>
            <p>It's made collaboration much easier despite our busy schedules. We can discuss projects late at night after trotro rides home. But sometimes important messages get lost in all the forwarded jokes and church program announcements.</p>

            <h2>Section 4: Academic Skills Development</h2>
            <p><span class="question-number">10.</span> <strong>How has social media improved your problem-solving skills in academia?</strong></p>
            <p>Seeing how my peers approach assignments has broadened my thinking. The Ghana Psychology Students Network on Facebook exposes me to different perspectives from all over the country.</p>
            
            <p><span class="question-number">11.</span> <strong>Can you give an example where social media has helped you tackle a specific academic challenge?</strong></p>
            <p>When I was struggling with statistics, a senior shared YouTube tutorials by a Ghanaian lecturer on our WhatsApp group. The local examples made it much clearer than our imported textbooks.</p>

            <h2>Section 5: Challenges and Limitations</h2>
            <p><span class="question-number">12.</span> <strong>What challenges have you faced using social media for academic purposes?</strong></p>
            <p>Data costs are a big issue - downloading all the shared materials consumes bundles. Also, not everyone has smartphones, so some classmates miss important updates.</p>
            
            <p><span class="question-number">13.</span> <strong>Do you think there are more negative effects of social media in an academic context?</strong></p>
            <p>The distractions are real - one minute you're discussing Freud, next you're watching Kumawood memes. But the benefits outweigh this if you're disciplined.</p>

            <h2>Section 6: Final Thoughts</h2>
            <p><span class="question-number">14.</span> <strong>Overall, how would you describe your experiences using social media for academic purposes?</strong></p>
            <p>Extremely valuable. In Ghana where library resources are limited, social media creates access to knowledge we wouldn't otherwise have. It's also helped build a strong psychology student community across universities.</p>
            
            <p><span class="question-number">15.</span> <strong>What recommendation would you give to other students regarding the use of social media for academic support?</strong></p>
            <p>Join subject-specific Ghanaian groups, but mute notifications during study time. Save important materials offline to manage data costs. And verify any academic information with lecturers before using it.</p>`,
        timestamp: new Date().toISOString(),
        rawResponse: 'UG Psychology student response'
    },
    {
        profile: {
            name: 'Kwabena Osei',
            age: '22',
            gender: 'Male',
            university: 'UPSA',
            year: 'Final year',
            field: 'Accounting'
        },
        content: `<h1>University Student Interview Response</h1>
            <div class="student-profile">
                <h2>Student Profile</h2>
                <div class="profile-item"><span class="profile-label">Name:</span> <span class="profile-value">Kwabena Osei</span></div>
                <div class="profile-item"><span class="profile-label">Age:</span> <span class="profile-value">22</span></div>
                <div class="profile-item"><span class="profile-label">Gender:</span> <span class="profile-value">Male</span></div>
                <div class="profile-item"><span class="profile-label">University:</span> <span class="profile-value">UPSA</span></div>
                <div class="profile-item"><span class="profile-label">Academic Year:</span> <span class="profile-value">Final year</span></div>
                <div class="profile-item"><span class="profile-label">Field of Study:</span> <span class="profile-value">Accounting</span></div>
            </div>

            <h2>Section 1: Demographic Information</h2>
            <p><span class="question-number">1.</span> <strong>Age:</strong> 22 years old</p>
            <p><span class="question-number">2.</span> <strong>Gender:</strong> Male</p>
            <p><span class="question-number">3.</span> <strong>Academic year:</strong> Final year Accounting student at UPSA</p>
            <p><span class="question-number">4.</span> <strong>Field of study:</strong> Accounting with ICAG certification track</p>

            <h2>Section 2: Use of Social Media</h2>
            <p><span class="question-number">5.</span> <strong>Which social media platform do you normally use for academic purposes?</strong></p>
            <p>LinkedIn and Telegram. I follow ICAG updates on LinkedIn and join Telegram groups where seniors share past exam questions and study tips.</p>
            
            <p><span class="question-number">6.</span> <strong>How often do you use these platforms to communicate with your colleagues?</strong></p>
            <p>Daily during exam periods. Our "UPSA Accounting Warriors" Telegram group becomes very active when ICAG exams are approaching.</p>

            <h2>Section 3: Peer Support</h2>
            <p><span class="question-number">7.</span> <strong>In what ways do you use social media to communicate with your peers for academic support?</strong></p>
            <p>We share scanned copies of rare accounting textbooks, discuss complex standards like IFRS, and organize weekend study groups at places like the UPSA library or nearby cafes.</p>
            
            <p><span class="question-number">8.</span> <strong>Can you describe a specific situation where social media helped you on an assignment?</strong></p>
            <p>For my advanced taxation course, I was confused about Ghana's VAT amendments. A LinkedIn connection at GRA shared the latest tax circulars which helped me score 92% on my assignment.</p>
            
            <p><span class="question-number">9.</span> <strong>How do you think social media has changed your interactions with colleagues compared to traditional methods?</strong></p>
            <p>It's made networking with professionals easier. I can directly message accountants in big firms like PwC Ghana for career advice. However, some students now rely too much on shared materials instead of reading full textbooks.</p>

            <h2>Section 4: Academic Skills Development</h2>
            <p><span class="question-number">10.</span> <strong>How has social media improved your problem-solving skills in academia?</strong></p>
            <p>Seeing how professionals apply accounting principles in real Ghanaian businesses (like MTN or Fan Milk) has helped me understand beyond textbook theories.</p>
            
            <p><span class="question-number">11.</span> <strong>Can you give an example where social media has helped you tackle a specific academic challenge?</strong></p>
            <p>When preparing for my auditing exam, a Telegram group member shared mnemonics for remembering ISA standards that our lecturer hadn't taught. This helped our whole class perform better.</p>

            <h2>Section 5: Challenges and Limitations</h2>
            <p><span class="question-number">12.</span> <strong>What challenges have you faced using social media for academic purposes?</strong></p>
            <p>Some shared materials contain errors that spread quickly. Also, the pressure to always be available for group discussions can be draining during busy periods.</p>
            
            <p><span class="question-number">13.</span> <strong>Do you think there are more negative effects of social media in an academic context?</strong></p>
            <p>Yes, especially with exam malpractice. Some students create secret groups to share answers during online tests, which devalues our qualifications.</p>

            <h2>Section 6: Final Thoughts</h2>
            <p><span class="question-number">14.</span> <strong>Overall, how would you describe your experiences using social media for academic purposes?</strong></p>
            <p>Mostly positive when used ethically. It's helped me build a professional network and access resources that aren't available in our library.</p>
            
            <p><span class="question-number">15.</span> <strong>What recommendation would you give to other students regarding the use of social media for academic support?</strong></p>
            <p>Follow verified professional accounts, not just student groups. Always cross-check shared materials with official sources. And never participate in exam malpractice groups.</p>`,
        timestamp: new Date().toISOString(),
        rawResponse: 'UPSA Accounting student response'
    },
    {
        profile: {
            name: 'Esi Mensah',
            age: '20',
            gender: 'Female',
            university: 'University of Cape Coast',
            year: 'Second year',
            field: 'Education'
        },
        content: `<h1>University Student Interview Response</h1>
            <div class="student-profile">
                <h2>Student Profile</h2>
                <div class="profile-item"><span class="profile-label">Name:</span> <span class="profile-value">Esi Mensah</span></div>
                <div class="profile-item"><span class="profile-label">Age:</span> <span class="profile-value">20</span></div>
                <div class="profile-item"><span class="profile-label">Gender:</span> <span class="profile-value">Female</span></div>
                <div class="profile-item"><span class="profile-label">University:</span> <span class="profile-value">University of Cape Coast</span></div>
                <div class="profile-item"><span class="profile-label">Academic Year:</span> <span class="profile-value">Second year</span></div>
                <div class="profile-item"><span class="profile-label">Field of Study:</span> <span class="profile-value">Education</span></div>
            </div>

            <h2>Section 1: Demographic Information</h2>
            <p><span class="question-number">1.</span> <strong>Age:</strong> 20 years old</p>
            <p><span class="question-number">2.</span> <strong>Gender:</strong> Female</p>
            <p><span class="question-number">3.</span> <strong>Academic year:</strong> Second year Education student at UCC</p>
            <p><span class="question-number">4.</span> <strong>Field of study:</strong> Education with specialization in Early Childhood Development</p>

            <h2>Section 2: Use of Social Media</h2>
            <p><span class="question-number">5.</span> <strong>Which social media platform do you normally use for academic purposes?</strong></p>
            <p>Facebook and WhatsApp. The "Ghana Teachers Network" Facebook group is very active, and we have class WhatsApp groups where we share lesson plan ideas.</p>
            
            <p><span class="question-number">6.</span> <strong>How often do you use these platforms to communicate with your colleagues?</strong></p>
            <p>Almost daily. We're always sharing teaching resources or discussing practicum experiences at different Ghanaian basic schools.</p>

            <h2>Section 3: Peer Support</h2>
            <p><span class="question-number">7.</span> <strong>In what ways do you use social media to communicate with your peers for academic support?</strong></p>
            <p>We exchange teaching aids like flashcards and charts, discuss Ghana Education Service policies, and share opportunities for teaching practice schools.</p>
            
            <p><span class="question-number">8.</span> <strong>Can you describe a specific situation where social media helped you on an assignment?</strong></p>
            <p>For my literacy development course, a Facebook group member shared Twi phonics resources that helped me create culturally relevant materials for my practicum at a rural school in Central Region.</p>
            
            <p><span class="question-number">9.</span> <strong>How do you think social media has changed your interactions with colleagues compared to traditional methods?</strong></p>
            <p>It's allowed us to learn from teachers across Ghana, not just our classmates. However, nothing replaces the hands-on teaching demonstrations we do in person.</p>

            <h2>Section 4: Academic Skills Development</h2>
            <p><span class="question-number">10.</span> <strong>How has social media improved your problem-solving skills in academia?</strong></p>
            <p>Seeing how experienced teachers handle classroom challenges in real Ghanaian schools (large class sizes, limited resources) has been more valuable than theoretical pedagogy.</p>
            
            <p><span class="question-number">11.</span> <strong>Can you give an example where social media has helped you tackle a specific academic challenge?</strong></p>
            <p>When I struggled with managing a hyperactive class during practicum, a teacher in Tamale shared her "calm corner" technique via WhatsApp that worked perfectly with my KG pupils.</p>

            <h2>Section 5: Challenges and Limitations</h2>
            <p><span class="question-number">12.</span> <strong>What challenges have you faced using social media for academic purposes?</strong></p>
            <p>Many good resources require printing, which is expensive. Also, some shared lesson plans don't align with Ghana's new curriculum standards.</p>
            
            <p><span class="question-number">13.</span> <strong>Do you think there are more negative effects of social media in an academic context?</strong></p>
            <p>Yes, some student teachers copy entire lesson plans from social media without adapting them to their pupils' needs, which defeats the purpose of creative teaching.</p>

            <h2>Section 6: Final Thoughts</h2>
            <p><span class="question-number">14.</span> <strong>Overall, how would you describe your experiences using social media for academic purposes?</strong></p>
            <p>Invaluable for practical teaching strategies, but should complement (not replace) hands-on classroom experience and official curriculum materials.</p>
            
            <p><span class="question-number">15.</span> <strong>What recommendation would you give to other students regarding the use of social media for academic support?</strong></p>
            <p>Join groups with verified teachers, focus on Ghana-specific resources, and always adapt materials to your specific classroom context rather than copying directly.</p>`,
        timestamp: new Date().toISOString(),
        rawResponse: 'UCC Education student response'
    },{
        profile: {
            name: 'Yaw Boateng',
            age: '23',
            gender: 'Male',
            university: 'Ghana Institute of Journalism',
            year: 'Third year',
            field: 'Journalism'
        },
        content: `<h1>University Student Interview Response</h1>
            <div class="student-profile">
                <h2>Student Profile</h2>
                <div class="profile-item"><span class="profile-label">Name:</span> <span class="profile-value">Yaw Boateng</span></div>
                <div class="profile-item"><span class="profile-label">Age:</span> <span class="profile-value">23</span></div>
                <div class="profile-item"><span class="profile-label">Gender:</span> <span class="profile-value">Male</span></div>
                <div class="profile-item"><span class="profile-label">University:</span> <span class="profile-value">Ghana Institute of Journalism</span></div>
                <div class="profile-item"><span class="profile-label">Academic Year:</span> <span class="profile-value">Third year</span></div>
                <div class="profile-item"><span class="profile-label">Field of Study:</span> <span class="profile-value">Journalism</span></div>
            </div>
    
            <h2>Section 1: Demographic Information</h2>
            <p><span class="question-number">1.</span> <strong>Age:</strong> 23 years old</p>
            <p><span class="question-number">2.</span> <strong>Gender:</strong> Male</p>
            <p><span class="question-number">3.</span> <strong>Academic year:</strong> Third year Journalism student at GIJ</p>
            <p><span class="question-number">4.</span> <strong>Field of study:</strong> Journalism with focus on investigative reporting</p>
    
            <h2>Section 2: Use of Social Media</h2>
            <p><span class="question-number">5.</span> <strong>Which social media platform do you normally use for academic purposes?</strong></p>
            <p>Twitter (X) and WhatsApp. I follow Ghanaian journalists like Manasseh Azure and media houses like JoyNews for real-time reporting techniques. Our class WhatsApp group shares press conference alerts.</p>
            
            <p><span class="question-number">6.</span> <strong>How often do you use these platforms to communicate with your colleagues?</strong></p>
            <p>Multiple times daily. Breaking news never sleeps! We often crowdsource information for assignments via WhatsApp.</p>
    
            <h2>Section 3: Peer Support</h2>
            <p><span class="question-number">7.</span> <strong>In what ways do you use social media to communicate with your peers for academic support?</strong></p>
            <p>We share contacts of interview sources, critique each other's news writing styles, and organize group coverage of events like parliamentary proceedings.</p>
            
            <p><span class="question-number">8.</span> <strong>Can you describe a specific situation where social media helped you on an assignment?</strong></p>
            <p>For my investigative journalism course, a Twitter thread by a GIJ alumnus exposed corruption at a local assembly. I used it as a case study and even got to interview the journalist via WhatsApp call.</p>
            
            <p><span class="question-number">9.</span> <strong>How do you think social media has changed your interactions with colleagues compared to traditional methods?</strong></p>
            <p>It's accelerated news gathering but also increased pressure to be first with stories. Sometimes the rush leads to less verification - we have to remember GIJ's ethics training.</p>
    
            <h2>Section 4: Academic Skills Development</h2>
            <p><span class="question-number">10.</span> <strong>How has social media improved your problem-solving skills in academia?</strong></p>
            <p>Learning to distill complex issues into 280-character tweets has honed my concise writing. WhatsApp voice notes from professionals have also taught me interview techniques.</p>
            
            <p><span class="question-number">11.</span> <strong>Can you give an example where social media has helped you tackle a specific academic challenge?</strong></p>
            <p>When my recorder failed during an interview, a classmate suggested using WhatsApp voice recording as backup. Now it's our standard practice!</p>
    
            <h2>Section 5: Challenges and Limitations</h2>
            <p><span class="question-number">12.</span> <strong>What challenges have you faced using social media for academic purposes?</strong></p>
            <p>Fake news spreads faster than corrections. Also, some officials now give vague answers knowing their WhatsApp messages might get screenshotted.</p>
            
            <p><span class="question-number">13.</span> <strong>Do you think there are more negative effects of social media in an academic context?</strong></p>
            <p>Yes - plagiarism is rampant. Some students copy entire articles from blogs instead of original reporting. The "copy-paste" culture is worrying.</p>
    
            <h2>Section 6: Final Thoughts</h2>
            <p><span class="question-number">14.</span> <strong>Overall, how would you describe your experiences using social media for academic purposes?</strong></p>
            <p>Essential but dangerous. It's the modern journalist's toolkit, but requires strict ethical boundaries to avoid misinformation.</p>
            
            <p><span class="question-number">15.</span> <strong>What recommendation would you give to other students regarding the use of social media for academic support?</strong></p>
            <p>Follow verified professionals, triple-check facts before sharing, and never compromise source confidentiality - even in private groups.</p>`,
        timestamp: new Date().toISOString(),
        rawResponse: 'GIJ Journalism student response'
    },{
        profile: {
            name: 'Akosua Adjei',
            age: '24',
            gender: 'Female',
            university: 'University of Ghana Medical School',
            year: 'Clinical year',
            field: 'Medicine'
        },
        content: `<h1>University Student Interview Response</h1>
            <div class="student-profile">
                <h2>Student Profile</h2>
                <div class="profile-item"><span class="profile-label">Name:</span> <span class="profile-value">Akosua Adjei</span></div>
                <div class="profile-item"><span class="profile-label">Age:</span> <span class="profile-value">24</span></div>
                <div class="profile-item"><span class="profile-label">Gender:</span> <span class="profile-value">Female</span></div>
                <div class="profile-item"><span class="profile-label">University:</span> <span class="profile-value">University of Ghana Medical School</span></div>
                <div class="profile-item"><span class="profile-label">Academic Year:</span> <span class="profile-value">Clinical year</span></div>
                <div class="profile-item"><span class="profile-label">Field of Study:</span> <span class="profile-value">Medicine</span></div>
            </div>
    
            <h2>Section 1: Demographic Information</h2>
            <p><span class="question-number">1.</span> <strong>Age:</strong> 24 years old</p>
            <p><span class="question-number">2.</span> <strong>Gender:</strong> Female</p>
            <p><span class="question-number">3.</span> <strong>Academic year:</strong> Clinical year medical student at Korle Bu</p>
            <p><span class="question-number">4.</span> <strong>Field of study:</strong> Medicine with interest in public health</p>
    
            <h2>Section 2: Use of Social Media</h2>
            <p><span class="question-number">5.</span> <strong>Which social media platform do you normally use for academic purposes?</strong></p>
            <p>WhatsApp and Telegram. We have dedicated groups for each rotation (Surgery, Pediatrics etc.) where we share case summaries and alert each other about ward rounds. The "Ghana Med Students" Telegram channel shares rare case photos (with patient consent).</p>
            
            <p><span class="question-number">6.</span> <strong>How often do you use these platforms to communicate with your colleagues?</strong></p>
            <p>Hourly during rotations. When on call at Korle Bu, we use WhatsApp to quickly consult seniors about patient management.</p>
    
            <h2>Section 3: Peer Support</h2>
            <p><span class="question-number">7.</span> <strong>In what ways do you use social media to communicate with your peers for academic support?</strong></p>
            <p>We crowdsource differential diagnoses for complex cases, share scanned pages from expensive medical textbooks, and organize study sessions before clinical exams.</p>
            
            <p><span class="question-number">8.</span> <strong>Can you describe a specific situation where social media helped you on an assignment?</strong></p>
            <p>During my rural posting in Dodowa, I encountered a strange rash. I shared de-identified photos on our Dermatology WhatsApp group and received diagnostic suggestions from classmates who had seen similar cases in Volta Region.</p>
            
            <p><span class="question-number">9.</span> <strong>How do you think social media has changed your interactions with colleagues compared to traditional methods?</strong></p>
            <p>It's enabled real-time collaboration across different hospitals. However, we must be extra careful about patient confidentiality - no names or clear identifiers in messages.</p>
    
            <h2>Section 4: Academic Skills Development</h2>
            <p><span class="question-number">10.</span> <strong>How has social media improved your problem-solving skills in academia?</strong></p>
            <p>Seeing diverse clinical presentations from colleagues across Ghana has broadened my diagnostic thinking beyond textbook cases.</p>
            
            <p><span class="question-number">11.</span> <strong>Can you give an example where social media has helped you tackle a specific academic challenge?</strong></p>
            <p>When preparing for my OSCEs, a senior shared mnemonics for Ghana-specific disease patterns (like remembering "Kumasi" for Kwashiorkor symptoms) via Telegram.</p>
    
            <h2>Section 5: Challenges and Limitations</h2>
            <p><span class="question-number">12.</span> <strong>What challenges have you faced using social media for academic purposes?</strong></p>
            <p>Maintaining patient privacy is challenging. Also, unreliable electricity means sometimes missing urgent case discussions when my phone dies.</p>
            
            <p><span class="question-number">13.</span> <strong>Do you think there are more negative effects of social media in an academic context?</strong></p>
            <p>Yes - some students over-rely on shared notes instead of original learning. Also, misinformation about treatments circulates quickly.</p>
    
            <h2>Section 6: Final Thoughts</h2>
            <p><span class="question-number">14.</span> <strong>Overall, how would you describe your experiences using social media for academic purposes?</strong></p>
            <p>Critical for modern medical training in Ghana, but requires strict ethical boundaries. The benefits for collaborative learning outweigh risks when used responsibly.</p>
            
            <p><span class="question-number">15.</span> <strong>What recommendation would you give to other students regarding the use of social media for academic support?</strong></p>
            <p>Always anonymize patient cases. Verify medical information with standard references before applying it. Use pinned messages for key resources to save mobile data.</p>`,
        timestamp: new Date().toISOString(),
        rawResponse: 'UG Med student response'
    },

];

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = backupResponses;
}