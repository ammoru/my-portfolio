export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Expreience", link: "#experience" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Hi! I'm   KUNCHAPU AMMORU, a MERN Stack Developer.",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/bb2.png",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently   building a   React Native App",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Late Comer Tracking System",
    des: "A web application for educational institutions to track student and faculty in-time and out-time, focusing on late arrivals, with automated email and SMS notifications.",
    img: "/latecomer1.jpg",
    iconLists: [
      { id: 1, name: "React", image: "/re.svg" },
      { id: 2, name: "JavaScript", image: "/js.svg" },
      { id: 3, name: "Tailwind CSS", image: "/tail.svg" },
      { id: 4, name: "MongoDB", image: "/mongodb.png" },
      { id: 5, name: "Express", image: "/Express.svg" },
    ],
    link: "https://adityauniversity.in/latecomers/login",
  },
  {
    id: 2,
    title: "Bus Live Tracking System",
    des: "A web application utilizing IoT and GPS to provide real-time bus tracking, navigation, and route optimization for improved public transportation management.",
    img: "/bus-tracking.webp",
    iconLists: [
      { id: 1, name: "React", image: "/re.svg" },
      { id: 2, name: "JavaScript", image: "/js.svg" },
      { id: 3, name: "Tailwind CSS", image: "/tail.svg" },
      { id: 4, name: "MongoDB", image: "/mongodb.png" },
      { id: 5, name: "Express", image: "/Express.svg" },
      { id: 6, name: "IoT", image: "/iot.png" },
    ],
    link: "https://adityatransporthub.vercel.app/",
  },
  {
    id: 3,
    title: "Finance Tracker",
    des: "Track your income and expenses effortlessly with our Finance Tracker App. Manage transactions, visualize financial data, and stay on top of your budget.",
    img: "/finance_tracker.avif",
    iconLists: [
      { id: 1, name: "React", image: "/re.svg" },
      { id: 2, name: "Firebase", image: "/Firebase.svg" },
      { id: 3, name: "CSS", image: "/csslogo.png" },
      { id: 4, name: "Chart.js", image: "/chartJS.png" },
      { id: 5, name: "Tailwind CSS", image: "/tail.svg" },
    ],
    link: "https://finance-tracker-232cc.web.app/",
  },
  {
    id: 4,
    title: "Car Repair & Maintenance Service",
    des: "Professional car repair services with expert mechanics and top-quality maintenance solutions.",
    img: "/car_repair.jpg",
    iconLists: [
      { id: 1, name: "React", image: "/re.svg" },
      { id: 2, name: "HTML", image: "/htmllogo.png" },
      { id: 3, name: "CSS", image: "/csslogo.png" },
      { id: 4, name: "JavaScript", image: "/js.svg" },
    ],
    link: "https://ammoru.github.io/car_repair/",
  },
  {
    id: 5,
    title: "Tic-Tac-Toe Game in React",
    des: "Built an interactive Tic-Tac-Toe game using React, featuring state management with hooks and dynamic game logic.",
    img: "/tictactoe.jpg",
    iconLists: [
      { id: 1, name: "React", image: "/re.svg" },
      { id: 2, name: "HTML", image: "/htmllogo.png" },
      { id: 3, name: "CSS", image: "/csslogo.png" },
    ],
    link: "https://ammoru.github.io/react_tic-tac-toe/",
  },
  {
    id: 6,
    title: "TuneTogether - Music & Chat",
    des: "A React Native music streaming app with integrated AI-powered recommendations and real-time chat rooms for users to share and discuss music.",
    img: "/coming-soon.jpg",
    iconLists: [
      { id: 1, name: "React Native", image: "/reactnativelogo.png" },
      { id: 2, name: "JavaScript", image: "/js.svg" },
      { id: 3, name: "Firebase", image: "/Firebase.svg" },
      { id: 4, name: "Express.js", image: "/Express.svg" },
      { id: 5, name: "AI Integration", image: "/ai.jpg" },
    ],
    link: "#home",
  },
];


export const skills = [
  {
    id: 1,
    name: "Python",
    img: "/pythonlogo.png",
  },
  {
    id: 2,
    name: "AWS",
    img: "/awslogo.png",
  },
  {
    id: 3,
    name: "React Native",
    img: "/reactnativelogo.png",
  },
  {
    id: 4,
    name: "CSS",
    img: "/csslogo.png",
  },
  {
    id: 5,
    name: "HTML",
    img: "/htmllogo.png",
  },
  {
    id: 6,
    name: "React",
    img: "/reactlogo.png",
  },
  {
    id: 7,
    name: "Java",
    img: "/java.svg",
  },
  {
    id: 8,
    name: "JavaScript",
    img: "/js.svg",
  },
  {
    id: 9,
    name: "Bootstrap",
    img: "/bootstrap.svg",
    
  },
  {
    id: 10,
    name: "Tailwind CSS",
    img: "/tailwind-css.svg",
  },
  {
    id: 11,
    name: "cpp",
    img: "/Cpp.svg",
  },{
    id: 12,
    name: "Firebase",
    img: "/Firebase.svg",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Dev -  React Native ",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Data Structure  And  Algorithm Intern",
    desc: "Optimizing solutions with efficient algorithms and robust data structures",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Java Intern",
    desc: "Building scalable solutions with Java, one class at a time!",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/ammoru",
  },
  {
    id: 2,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/ammoru-kunchapu-874177258/",
  },
];
