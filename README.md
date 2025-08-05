# Interview Response Generator

A web application that generates realistic university student interview responses about using social media for academic purposes. Built with vanilla JavaScript, TailwindCSS, and Quill editor.

## Features

- 🤖 **AI-Powered Generation**: Uses DeepSeek API to generate unique, realistic interview responses
- 📝 **Rich Text Editor**: Quill editor for professional document formatting
- 👤 **Diverse Student Profiles**: Generates varied demographics, academic years, and fields of study
- 💾 **Local Storage**: Automatically saves generated responses for later use
- 📋 **Copy & Export**: Easy copying to clipboard and HTML download functionality
- 🎨 **Professional Styling**: TailwindCSS with custom academic document formatting
- 🔄 **Backup Responses**: Fallback to pre-generated responses if API is unavailable

## File Structure

```
interview-bot-v1/
├── index.html              # Main application interface
├── styles.css              # Custom CSS for Quill editor and document formatting
├── script.js               # Main JavaScript application logic
├── backup-responses.js     # Pre-generated sample responses
├── README.md              # This documentation
└── sk-e11c2cc46d244c6faac5ee983bcb33c0.txt  # API key file
```

## Setup & Usage

1. **Open the Application**
   - Simply open `index.html` in any modern web browser
   - No additional setup required - all dependencies are loaded via CDN

2. **Generate Responses**
   - Click "Generate New Response" to create a unique interview response using AI
   - Click "Load Random Stored Response" to view previously generated responses
   - Each response includes a unique student profile with varied demographics

3. **Document Management**
   - **Copy Document**: Copies formatted text to clipboard for pasting into Google Docs/Word
   - **Download**: Saves as HTML file with professional formatting
   - **Edit**: Use the Quill editor toolbar to modify content as needed

## Interview Questions Covered

The application generates responses for 15 comprehensive interview questions across 6 sections:

### Section 1: Demographic Information
1. Age
2. Gender
3. Academic year
4. Field of study

### Section 2: Use of Social Media
5. Which social media platform do you normally use for academic purposes?
6. How often do you use these platforms to communicate with your colleagues?

### Section 3: Peer Support
7. In what ways do you use social media to communicate with your peers for academic support?
8. Can you describe a specific situation where social media helped you on an assignment?
9. How do you think social media has changed your interactions with colleagues compared to traditional methods?

### Section 4: Academic Skills Development
10. How has social media improved your problem-solving skills in academia?
11. Can you give an example where social media has helped you tackle a specific academic challenge?

### Section 5: Challenges and Limitations
12. What challenges have you faced using social media for academic purposes?
13. Do you think there are more negative effects of social media in an academic context?

### Section 6: Final Thoughts
14. Overall, how would you describe your experiences using social media for academic purposes?
15. What recommendation would you give to other students regarding the use of social media for academic support?

## Generated Response Characteristics

Each response features:
- **Unique Demographics**: Ages 18-25, varied genders, academic years, and fields of study
- **Authentic Voice**: Natural, conversational student language
- **Specific Examples**: Realistic scenarios and experiences
- **Platform Diversity**: Different social media platforms (Discord, WhatsApp, Instagram, Twitter, etc.)
- **Academic Realism**: Field-appropriate examples and challenges

## Technical Details

### API Integration
- Uses DeepSeek Chat API for response generation
- Automatic fallback to backup responses if API fails
- Configurable temperature settings for response variation

### Document Formatting
- Academic paper styling with Times New Roman font
- Professional section headers and numbering
- Clipboard-ready plain text conversion
- Print-optimized layouts

### Data Persistence
- Automatic local storage of generated responses
- Response counter and management
- Cross-session data preservation

## Browser Compatibility

- Chrome/Chromium (recommended)
- Firefox
- Safari
- Edge

## Usage Tips

1. **For Research**: Each generated response represents a unique student perspective suitable for qualitative research analysis
2. **For Documents**: Use the copy feature to paste directly into Google Docs, Word, or other document editors
3. **For Variation**: Generate multiple responses to get diverse perspectives and examples
4. **For Backup**: The application automatically saves responses locally - no data loss on refresh

## Troubleshooting

- **API Issues**: Application automatically falls back to backup responses if API is unavailable
- **Copy Problems**: If clipboard copy fails, manually select and copy the editor content
- **Formatting Issues**: Download the HTML version for consistent formatting across platforms

## Support

This application is designed for academic research purposes. Each generated response represents realistic student perspectives and experiences with social media in academic contexts.