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
  { title: "Kotlin", icon: kotlin },
  { title: "Java", icon: java },
];

export const technologies = [
  { name: "Jetpack Compose", icon: jetpackCompose },
  { name: "Android SDK", icon: androidSDK },
  { name: "Firebase", icon: firebase },
  { name: "Git", icon: git },
];

export const experiences = [
  {
    title: "Android Engineer",
    company_name: "U2medtek | Seoul, South Korea",
    company_link: "https://www.u2medtek.com",
    icon: u2medtek,
    iconBg: "#FFFFFF",
    date: "Jan 2023 - Present",
    points: [
      "Develop SweetAI, an AI-based blood glucose prediction app, in close collaboration with a backend engineer. ",

      "Recognized as the top-ranked project (1st place) in the G-Star Dreamers Program ($37K award), selected by POSCO–POSTECH for CES 2024, and contributed to securing a $750K investment from Kakao through product innovation.",

      "Build a Blood Glucose & Weight Management app integrating 100+ APIs, a CGM device, SDKs (FoodLens, Body Fat Scale), and social logins (Naver, Kakao, Google).",

      "Develop a tablet app connecting to medical examination equipment via socket communication, enabling reliable offline-first data processing and device connectivity.",

      "Using Jetpack Compose, Kotlin Coroutines, Flow, Dagger Hilt, Room, Retrofit, WorkManager, MVVM, Firebase Remote Config.",
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
      "Implemented Smart Video Phase 1 features for the 99.co Singapore app, enabling video insertion, rearrangement, and AI voice/background music customization.",

      "Improved Agent tools, developed a new project detail page, migrated RxJava to coroutines, and replaced deprecated APIs.",

      "Collaborated with PMs, designers, backend, iOS, and QA engineers under Agile Scrum.",

      "Utilized Kotlin, View Binding, LiveData, Retrofit, and Clean Architecture to deliver maintainable and scalable features.",
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
      "Developed and maintained multiple Android apps, including Audio, Zephyr, and Streaming, refining custom UI components and animations.",

      "Integrated UI into MVP/MVVM architectures using Kotlin, Navigation, LiveData, and Room.",

      "Conducted multi-device feature testing, collaborated closely with UX, backend, and QA teams, and participated in code reviews and pair programming.",
    ],
  },
];

export const someOfMyWork = [
  {
    name: "SinusView app",
    description:
      "A purpose-built tablet application designed to interface seamlessly with the SinusView examination device through stable socket-based communication. Its offline-first design ensures uninterrupted data capture and review, even in clinics with limited connectivity. Currently in pre-release development, the app focuses on delivering dependable workflow support for medical professionals.",
    tags: [
      { name: "Jetpack Compose", color: "blue-text-gradient" },
      { name: "Offline-first", color: "green-text-gradient" },
      { name: "Kotlin", color: "green-text-gradient" },
      { name: "Coroutines & Flow", color: "pink-text-gradient" },
      { name: "Room", color: "pink-text-gradient" },
    ],
    image: sinusApp,
    source_code_link: "",
  },
  {
    name: "SweetAI",
    description:
      "A next-generation health care app that predicts post-meal glucose responses from food images using modern Compose-based architecture. Real-time predictions guide users to maintain balanced eating patterns within the Green Zone. A lightweight gamified layer with Piggy logic and progression systems enhances long-term adherence.",
    tags: [
      { name: "Jetpack Compose", color: "blue-text-gradient" },
      { name: "Kotlin", color: "green-text-gradient" },
      { name: "Coroutines & Flow", color: "pink-text-gradient" },
      { name: "MVVM", color: "pink-text-gradient" },
    ],
    image: sweetAI,
    source_code_link: "",
  },
  {
    name: "99.co SG",
    description:
      "A modern real-estate platform empowering users to explore properties with an intuitive mobile experience. Enhanced with smart video tools, interactive media, and streamlined listing workflows, the app helps agents and home-seekers navigate property data with greater clarity and engagement.",
    tags: [
      { name: "Kotlin", color: "blue-text-gradient" },
      { name: "Coroutines", color: "green-text-gradient" },
      { name: "Clean Architecture", color: "pink-text-gradient" },
      { name: "Retrofit", color: "pink-text-gradient" },
    ],
    image: nnwork,
    source_code_link: "https://play.google.com/store/apps/details?id=co.ninetynine.android",
  },
  {
    name: "Razer Audio",
    description:
      "A companion Android app for Razer's peripheral ecosystem, providing seamless device pairing, customisation, and real-time controls. Focused on crafting polished UI components and motion-driven interactions to elevate the overall user experience across multiple hardware products.",
    tags: [
      { name: "Kotlin", color: "blue-text-gradient" },
      { name: "Custom UI", color: "green-text-gradient" },
      { name: "Animations", color: "pink-text-gradient" },
      { name: "Navigation", color: "pink-text-gradient" },
    ],
    image: razerApps,
    source_code_link: "https://play.google.com/store/apps/details?id=com.razer.audiocompanion",
  },
];

export const projects = [
  {
    name: "Guardian News Feed",
    description:
      "Developed a Guardian news & podcast Android app from scratch, achieving 2.5K+ downloads and a 3.96 rating on Google Play.",
    tags: [
      { name: "Kotlin & Java", color: "blue-text-gradient" },
      { name: "Retrofit", color: "green-text-gradient" },
      { name: "MVVM", color: "pink-text-gradient" },
      { name: "Firebase", color: "pink-text-gradient" },
    ],
    image: guardianNewsFeed,
    source_code_link: "https://github.com/sooshin/android-news-app",
  },
  {
    name: "Popular Movies",
    description:
      "Developed an Android app to discover and bookmark popular and upcoming movies, showcasing trailers, reviews, and a responsive UI. Achieved 5K+ downloads.",
    tags: [
      { name: "Paging", color: "blue-text-gradient" },
      { name: "LiveData", color: "green-text-gradient" },
      { name: "Room", color: "pink-text-gradient" },
      { name: "MVVM", color: "pink-text-gradient" },
    ],
    image: popularMovies,
    source_code_link: "https://github.com/sooshin/android-popular-movies-app",
  },
];
