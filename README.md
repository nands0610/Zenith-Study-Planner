# AI‑Powered Study Planner

An intelligent, mood‑driven study planning app that helps students manage their time, connect with friends, and stay motivated. Powered by reinforcement learning, personalized recommendations, and social features.

---

## 🚀 Project Overview

**AI‑Powered Study Planner** leverages state‑of‑the‑art AI and data insights to:

* **Automatically generate** optimal daily/weekly study schedules based on past performance, real‑time mood input, and sleep patterns.
* **Continuously learn** and adapt via Proximal Policy Optimization (PPO) to improve time allocations that maximize academic success.
* **Facilitate social engagement** through friend recommendations, competitions, and collaborative goals.
* **Encourage healthy habits** with personalized study breaks, sleep/rest planning, and motivational content.

---

## 🔑 Key Features

### 1. Reinforcement‑Learning‑Driven Scheduler

* **PPO optimization loop**: updates policy to converge on schedules that maximize academic reward.
* **Adaptive planning**: refines daily/weekly plans as new performance and mood data arrives.
* **Sleep‑aware scheduling**: integrates historical sleep patterns to ensure study sessions balance productivity and rest.

### 2. KNN‑Based Friend Recommendations

* **Study‑habit clustering**: analyzes duration, frequency, subject preferences to find peers with similar habits.
* **Weekly friend goals**: sets collaborative challenges and tracks progress with recommended friends.
* **Contest mode**: friendly competitions that rank users locally or among friends on metrics like hours studied or topics mastered.

### 3. Chatbot with Document Q\&A

* **Gemini AI integration**: powers an interactive chatbot that can parse documents and generate context‑aware responses.
* **Document upload & analysis**: users can submit PDFs, text files, or DOCX; the chatbot ingests the content, indexes it with FAISS, and enables targeted QA.
* **Interactive queries**: ask the chatbot questions about the uploaded document—definitions, summaries, or clarifications—and receive precise, AI‑generated answers.

### 4. Mood‑Driven Customization

* **User mood input**: options like “stressed,” “focused,” or “relaxed” guide session intensity.
* **Dynamic session design**: adjusts length, break type, and resource difficulty to suit emotional state.

### 5. Smart Content & Break Suggestions

* **Study‑history analytics**: ML‑driven recommendations for reinforcing weaker subjects or advancing strong areas.
* **Creative breaks**: mini‑games, mindfulness exercises, guided stretches—solo or social.

### 6. Sleep Tracker Integration

* **Historical sleep data**: tracks and analyzes nightly rest via user input or wearable integration.
* **Optimal rest recommendations**: suggests bedtimes and wake‑up times to align study intensity with recovery needs.
* **Schedule adjustment**: proactive rebalancing of study sessions if sleep patterns deviate from healthy norms.

### 7. Gamification & Social Engagement

* **Leaderboards**: rank friends and local users by study metrics (hours, streaks, quiz scores).
* **Achievements & badges**: earn rewards for consistency, milestones, and collaborative wins.
* **Local challenges**: participate in community‑wide study events and compare performance on area‑specific boards.

### 8. Progress Visualization

* **Interactive timeline**: visual map of completed sessions, upcoming tasks, and milestones.
* **Social feed**: showcases friends’ streaks, contest highlights, and shared achievements.

---

## 🏗️ Tech Stack

* **Frontend**: React (Vite) with JavaScript, Tailwind CSS, Framer Motion, and Recharts.
* **Backend**: Python with Flask for REST APIs.
* **Vector Search**: FAISS for fast document embedding retrieval.
* **AI Services**: Gemini AI for natural‑language understanding and response generation.
* **Database**: Firebase Realtime Database and Firestore for user data, schedules, social graphs, and sleep logs.

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Please follow these steps:

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -m 'Add YourFeature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a Pull Request and describe your changes.

Please adhere to the project’s code style and ensure new features include tests.

---
