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
