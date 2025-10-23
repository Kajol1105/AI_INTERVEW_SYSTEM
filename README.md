🧠 AI Mock Interview System

An AI-powered mock interview platform that helps users practice real-time interviews with voice interaction, instant feedback, and performance insights.

🚀 Features

🎤 Voice-based Interview Simulation – AI asks and listens to your answers using TTS & STT.

🧩 AI Feedback & Scoring – Instant feedback on tone, clarity, and content using Google Gemini.

🔐 User Authentication – Secure login and registration with Firebase Auth.

📊 Performance Report – View transcripts, accuracy, and feedback history; export as PDF.

💾 Cloud Integration – Stores all interview data in Firestore Database.

💬 Smart Question Generation – Personalized interview questions based on topic and experience.

🛠️ Tech Stack

Next.js 16 (Turbopack) – Modern, fast full-stack framework

Firebase – Authentication & database

Tailwind CSS + shadcn/ui – Beautiful, responsive UI

Google Gemini API (via Vapi AI) – AI question and feedback generation

Zod – Secure form validation

Figma – UI/UX design planning

📈 Advantages over existing tools

Fully voice-interactive and AI-adaptive experience

Stores progress and provides AI-driven improvement suggestions

⚠️ Limitations

Requires stable internet for STT and TTS

Current version supports only English interviews

🔮 Future Scope

🗣️ Add multilingual interview support

🧾 Integrate AI-powered resume analysis & PPT report generation

📹 Add video interview mode with emotion recognition


This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
