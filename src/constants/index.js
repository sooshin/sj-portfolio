import {

  java,
  kotlin,

  git,


  androidSDK,
  jetpackCompose,
  firebase,

  u2medtek,
  ninetyNineGroup,
  razer,
  guardianNewsFeed,
  popularMovies,

  sweetAI,
  nnwork,
  sinusApp,
  razerApps,

} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const services = [
  { title: "Mobile Architecture", icon: kotlin },
  { title: "Health-Tech & MedTech", icon: androidSDK },
  { title: "Full SDLC Ownership", icon: jetpackCompose },
  { title: "International Experience", icon: firebase },
];

export const technologies = [
  { name: "Jetpack Compose", icon: jetpackCompose },
  { name: "Android SDK", icon: androidSDK },
  { name: "Firebase", icon: firebase },
  { name: "Git", icon: git },
];

export const experiences = [
  {
    title: "Senior Android Engineer",
    company_name: "U2medtek | Seoul, South Korea",
    company_link: "https://www.u2medtek.com",
    icon: u2medtek,
    iconBg: "#FFFFFF",
    date: "Jan 2023 - Present",
    points: [
      "Sole Android engineer responsible for the full SDLC of three production apps — from architecture decisions and API integration through release management.",

      "Built SweetAI, an AI-based blood glucose prediction app that helped the company secure a $750K Kakao investment, a $37K G-Star Dreamers grant (1st place), and CES 2024 selection.",

      "Engineered the SinusView medical device tablet app with offline-first architecture, socket-based device communication, ML Kit face detection, and end-to-end encrypted image transmission — porting Python ML algorithms to Kotlin via OpenCV for fully offline inference.",

      "Integrated 100+ REST APIs along with third-party SDKs (FoodLens, body-fat scale) to deliver a comprehensive health monitoring experience with trend visualization.",

      "Set up GitHub Actions CI/CD for automated builds and Firebase App Distribution, maintaining production stability through Crashlytics monitoring.",
    ],
  },
  {
    title: "Android Engineer",
    company_name: "99 Group | Singapore",
    company_link: "https://www.99.co",
    icon: ninetyNineGroup,
    iconBg: "#216bff",
    date: "May 2022 - Dec 2022",
    points: [
      "Shipped Smart Video Phase 1 for the 99.co app (100K+ downloads) within a 4-person Android team — building video insertion, reordering, and AI-powered voice and background music customization from scratch.",

      "Led a full codebase migration from RxJava to Kotlin Coroutines, removing callback complexity across all async flows and replacing deprecated APIs with modern alternatives.",

      "Built new product features including a Project Detail Page and enhanced internal agent tools, collaborating cross-functionally with PMs, designers, backend, iOS, and QA in an Agile Scrum workflow.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Razer Inc. | Singapore",
    company_link: "https://www.razer.com",
    icon: razer,
    iconBg: "#000000",
    date: "Mar 2020 - Apr 2022",
    points: [
      "Contributed to four global consumer apps — Audio (1M+ downloads, 4.4★), Streaming, Zephyr, and Kishi — delivering custom UI components, animations, and responsive layouts across a wide range of Android devices.",

      "Translated high-fidelity Sympli designs into production-ready Kotlin code using MVP/MVVM patterns, ensuring pixel-perfect design fidelity across varied screen sizes.",

      "Maintained cross-device stability through systematic testing on diverse Android hardware, and upheld engineering standards through code reviews and pair programming.",
    ],
  },
];

export const someOfMyWork = [
  {
    name: "SinusView — Medical Device App",
    description:
      "The challenge: Medical clinics needed a reliable tablet interface for the SinusView examination device — fully offline, with no cloud dependency or latency in clinical settings. I designed Clean Architecture with offline-first data handling via Room and socket-based device I/O, choosing this approach to ensure zero data loss even during network outages. The hardest part was porting Python image-analysis algorithms to Kotlin using OpenCV, enabling fully on-device ML inference without cloud round-trips. I integrated ML Kit face detection for automated clinical positioning and implemented end-to-end encrypted image transmission to meet medical data security requirements.",
    tags: [
      { name: "Clean Architecture", color: "blue-text-gradient" },
      { name: "OpenCV & ML Kit", color: "green-text-gradient" },
      { name: "Offline-first", color: "green-text-gradient" },
      { name: "Socket Communication", color: "pink-text-gradient" },
    ],
    image: sinusApp,
    source_code_link: "",
  },
  {
    name: "SweetAI — AI Blood Glucose Prediction",
    description:
      "The challenge: Build an AI-based blood glucose prediction app as the sole Android engineer — from an empty repository to a production-ready product. I chose MVVM architecture to keep the UI layer cleanly separated from the data and business logic, making it straightforward to integrate the FoodLens SDK for food image recognition. I built animations and polished UI interactions with Jetpack Compose, collaborating closely with an external designer, a backend engineer, and an iOS engineer to align the experience across platforms. The app's quality directly contributed to securing a $750K Kakao investment, winning the G-Star Dreamers Program (1st place, $37K grant), and being selected for CES 2024 through the POSCO-POSTECH program.",
    tags: [
      { name: "Jetpack Compose", color: "blue-text-gradient" },
      { name: "FoodLens SDK Integrations", color: "green-text-gradient" },
      { name: "CI/CD", color: "pink-text-gradient" },
      { name: "MVVM", color: "pink-text-gradient" },
    ],
    image: sweetAI,
    source_code_link: "",
  },
  {
    name: "99.co — Smart Video Feature",
    description:
      "The challenge: 99.co (100K+ downloads) needed agents to create compelling video listings without professional editing tools. Within a 4-person Android team, I contributed to Smart Video Phase 1 — working on video insertion, drag-to-reorder, and AI-powered voice narration with background music customization, all within Clean Architecture boundaries to keep the feature independently testable. I also led the full RxJava-to-Coroutines migration, eliminating callback nesting across all async flows and adding analytics tracking to collect user behaviour data.",
    tags: [
      { name: "Kotlin Coroutines", color: "blue-text-gradient" },
      { name: "Clean Architecture", color: "green-text-gradient" },
      { name: "RxJava Migration", color: "pink-text-gradient" },
      { name: "Agile/Scrum", color: "pink-text-gradient" },
    ],
    image: nnwork,
    source_code_link: "https://play.google.com/store/apps/details?id=co.ninetynine.android",
  },
  {
    name: "Razer Audio — Global Consumer App",
    description:
      "The challenge: Razer's hardware ecosystem required companion apps for a global consumer base — with millions of users across diverse Android devices, visual fidelity and cross-device stability were non-negotiable. As part of a 5-person Android team, I contributed to four global apps (Audio, Streaming, Zephyr, Kishi), translating Sympli design specs into pixel-accurate Kotlin UI components using MVP/MVVM patterns — balancing design fidelity with responsive layout requirements across varied screen sizes. I established systematic cross-device testing practices to ensure stability for Razer's diverse global user base.",
    tags: [
      { name: "Custom UI & Animations", color: "blue-text-gradient" },
      { name: "1M+ Downloads", color: "green-text-gradient" },
      { name: "Multi-device Testing", color: "pink-text-gradient" },
      { name: "MVP/MVVM", color: "pink-text-gradient" },
    ],
    image: razerApps,
    source_code_link: "https://play.google.com/store/apps/details?id=com.razer.audiocompanion",
  },
];

export const projects = [
  {
    name: "Reel Mind — Movies & TV Shows",
    description:
      "A self-initiated project to explore the latest Android technologies in a production-deployed app, not a toy demo. I adopted Navigation3 shortly after its release to get hands-on with the newest navigation approach, and used Paging 3 for scalable list loading from the TMDB API with offline caching via Room. I implemented a Baseline Profile and measured the result: 4.6% cold-start improvement with before/after Macrobenchmark traces. Applied Shared Element Transitions on select detail screens for smoother navigation. Live on Google Play.",
    tags: [
      { name: "Navigation3 & Paging", color: "blue-text-gradient" },
      { name: "Shared Element Transitions", color: "green-text-gradient" },
      { name: "Baseline Profiles", color: "pink-text-gradient" },
      { name: "Clean Architecture", color: "pink-text-gradient" },
    ],
    image: popularMovies,
    source_code_link: "https://play.google.com/store/apps/details?id=com.soojeongshin.reelmind",
  },
  {
    name: "News Feed for Guardian",
    description:
      "Originally built in 2019 with Java, then fully rewritten in Kotlin and Jetpack Compose before re-launching on Google Play — achieving 1,000+ downloads, 4.0★ rating, and 99% crash-free sessions. I chose MVI architecture for unidirectional state flow because it's simpler to reason about and debug than MVVM when managing complex podcast playback states. Also upgraded ExoPlayer to Media3 — a migration that required careful compatibility testing.",
    tags: [
      { name: "Kotlin & Compose", color: "blue-text-gradient" },
      { name: "Media3 Podcasts", color: "green-text-gradient" },
      { name: "MVI Architecture", color: "pink-text-gradient" },
      { name: "99% Crash-free", color: "pink-text-gradient" },
    ],
    image: guardianNewsFeed,
    source_code_link: "https://play.google.com/store/apps/details?id=com.soojeongshin.newsfeed.free",
  },
];
