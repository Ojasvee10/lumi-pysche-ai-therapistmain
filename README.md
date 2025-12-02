# LUMIPSYCHE - AI Mental Health Therapist Chatbot

An intelligent, empathetic AI-powered mental health therapy chatbot designed specifically for Indian users. LUMIPSYCHE provides emotional support, therapeutic exercises, and wellness resources through natural conversation.

## Features

- **AI-Powered Emotional Analysis** - Detects emotional states through sentiment analysis
- **Personalized Therapy Recommendations** - Suggests breathing exercises and mental health techniques based on detected emotions
- **User Authentication** - Secure sign-up and login for personalized experience
- **Mood Tracking** - Track your emotional journey with mood charts and session history
- **Breathing Exercises** - Guided exercises like 4-7-8 breathing, box breathing, and coherent breathing
- **Mental Health Exercises** - Gratitude practices, grounding techniques, and meditation
- **Journal** - Private journaling feature to express and reflect on your thoughts
- **Crisis Resources** - Emergency contacts and crisis helpline information
- **Privacy First** - End-to-end encrypted conversations, no data sharing

## Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **UI Components**: Radix UI, Tailwind CSS
- **Sentiment Analysis**: Custom emotion detection engine
- **State Management**: React hooks with localStorage
- **Charts**: Recharts for mood visualization

## Getting Started

### Prerequisites

- Node.js 18+ ([Download](https://nodejs.org/))
- npm 9+ or yarn/pnpm

### Installation

1. **Clone the repository**
   \`\`\`bash
   git clone https://github.com/yourusername/lumipsyche.git
   cd lumipsyche
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   \`\`\`

3. **Run development server**
   \`\`\`bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   \`\`\`

4. **Open in browser**
   - Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

\`\`\`bash
npm run build
npm run start
\`\`\`

## Project Structure

\`\`\`
lumipsyche/
├── app/
│   ├── about/                 # About page
│   ├── auth/                  # Authentication pages and components
│   ├── breathing/             # Breathing exercises
│   ├── chat/                  # Main AI chat interface
│   ├── contact/               # Contact page
│   ├── dashboard/             # User dashboard with mood tracking
│   ├── exercises/             # Mental health exercises
│   ├── features/              # Features page
│   ├── home/                  # Home page
│   ├── journal/               # Journal feature
│   ├── notifications/         # Notifications
│   ├── support/               # Support center
│   ├── layout.tsx             # Root layout
│   ├── page.tsx               # Landing page
│   └── globals.css            # Global styles
├── components/
│   ├── ui/                    # Shadcn UI components
│   └── theme-provider.tsx     # Theme configuration
├── hooks/                     # Custom React hooks
├── lib/                       # Utility functions
├── public/                    # Static assets
├── styles/                    # Global stylesheets
├── next.config.mjs            # Next.js configuration
├── tailwind.config.ts         # Tailwind CSS configuration
├── tsconfig.json              # TypeScript configuration
└── package.json               # Dependencies
\`\`\`

## Usage

### For Users

1. **Sign Up** - Create account with email and password
2. **Start Chatting** - Begin conversation with LUMI (the AI therapist)
3. **Get Recommendations** - Receive personalized therapy suggestions based on your emotions
4. **Try Exercises** - Follow guided breathing exercises or mental health practices
5. **Track Progress** - Monitor mood patterns in your dashboard
6. **Journal** - Write reflections and track your mental health journey

### For Developers

#### Adding New Features

1. Create new components in appropriate folder (e.g., `app/newfeature/`)
2. Follow existing component patterns and TypeScript types
3. Use Tailwind CSS for styling with existing design tokens
4. Import UI components from `components/ui/`

#### Modifying AI Responses

Edit the sentiment analysis and response generation in `app/chat/page.tsx`:

\`\`\`tsx
// Add new emotional patterns
if (emotionAnalysis.depression > 0.7) {
  // Add custom responses
}
\`\`\`

#### Styling Customization

Modify design tokens in `app/globals.css`:

\`\`\`css
:root {
  --primary: 0 84% 60%;
  --secondary: 0 94% 89%;
  --accent: 0 74% 55%;
}
\`\`\`

## Environment Setup

No environment variables required for local development. The app works with client-side data storage (localStorage).

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari 14+, Chrome Android)

## Performance

- **Optimized Bundle Size** - Tree-shaking and code splitting
- **Fast Load Times** - Next.js server-side rendering and static generation
- **Responsive Design** - Mobile-first approach
- **Smooth Animations** - CSS animations with Tailwind

## Testing

\`\`\`bash
# Run type checking
npm run type-check

# Run linting
npm run lint
\`\`\`

## Deployment

### Deploy to Vercel (Recommended)

1. Push code to GitHub
2. Import project in [Vercel Dashboard](https://vercel.com)
3. Click Deploy

### Deploy to Other Platforms

The app can be deployed to any platform supporting Node.js 18+:
- AWS Amplify
- Netlify
- DigitalOcean
- Heroku
- Docker containers

## Contributing

Contributions are welcome! Please:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Code of Conduct

Be respectful and supportive. This is a mental health app - let's maintain a positive community.

## License

This project is licensed under the MIT License - see LICENSE file for details.

## Privacy & Security

- All conversations are stored locally in your browser
- No personal data is sent to external servers
- Session history can be cleared anytime
- No cookies or tracking

## Support

- **Email**: support@lumipsyche.com
- **Issues**: GitHub Issues
- **Emergency**: National Suicide Prevention Lifeline: 1-800-273-8255 (US) or AASRA: 9820466726 (India)

## Acknowledgments

- Radix UI for accessible components
- Tailwind CSS for styling
- Recharts for data visualization
- Next.js for the amazing framework

## Roadmap

- [ ] Multi-language support (Hindi, Tamil, Telugu, Bengali)
- [ ] Offline functionality with service workers
- [ ] Integration with professional therapists
- [ ] Mobile app (React Native)
- [ ] Voice chat support
- [ ] Peer support community
- [ ] Integration with wearables for mood tracking

---

**Disclaimer**: LUMIPSYCHE is a supportive tool and not a replacement for professional mental health treatment. Always consult qualified mental health professionals for serious concerns.
