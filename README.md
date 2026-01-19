# LUMIPSYCHE - AI Mental Health Therapist Chatbot

## Problem
Early detection of anxiety and depression from social media text to enable timely intervention.

## Solution
An ML-powered pipeline using BERT to classify mental health conditions with 85% accuracy.

## Project structure
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

## Why These Choices?
- BERT over traditional ML: better context understanding in short text
- Flask: lightweight API for real-time inference
- SQLite: fast reads for low-scale clinical prototypes


**Disclaimer**: LUMIPSYCHE is a supportive tool and not a replacement for professional mental health treatment. Always consult qualified mental health professionals for serious concerns.
