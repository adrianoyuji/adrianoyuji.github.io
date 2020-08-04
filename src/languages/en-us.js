export default {
  language: "english",
  app: {
    modalTitles: {
      about: "ABOUT ME",
      projects: "PROJECTS",
    },
  },
  //layout
  footer: {
    contactTitle: "CONTACT",
    madeWithLove: "Made with ❤ by Adriano Vasconcelos",
  },
  header: { languageChanger: "Language: " },
  projectItem: {},
  //sections
  about: {
    firstParagraph:
      "Hey! My name is Adriano Yuji Sato de Vasconcelos and I am a Front-end Software developer! I am currently finishing my graduation as a Computer Engineer in Brazil. I started focusing software development skills in late 2019 when I realized I wanted to work with both design and programming.",
    secondParagraph:
      "I seek to become a professional software developer and I am always open for new challenges. Right now I am honing my front-end abilities so later I can start focusing on back-end technologies and become a Full-Stack developer.",
    skills: {
      title: "SKILLS",
      frontend: "Front End",
      tools: "Tools",
      methodologies: "Methodologies",
    },
  },
  home: {
    softwareDeveloper: "FRONT-END SOFTWARE DEVELOPER",
    navigationButtons: {
      about: "About",
      projects: "Projects",
      resume: "Resume",
    },
  },
  projects: {
    header1:
      "Welcome to my Project Portfolio! Feel free to check out my personal projects. Check out my ",
    header2: "GitHub Profile",
    header3: " page if you want to see the code!",
  },
  projectList: [
    {
      title: "SUSHI STORE",
      imgUrl: "https://media0.giphy.com/media/W6LUMXo3EuU01OWJBo/giphy.gif",
      liveUrl: "https://sushi-store.onrender.com/",
      description:
        "This website features a menu catalog, a shopping cart and a checkout system.",
      githubUrl: "https://github.com/adrianoyuji/sushi-store-website",
      technologies: ["React", "CSS", "Firebase", "Bootstrap"],
    },
    {
      title: "SATO REAL ESTATE",
      imgUrl: "https://media2.giphy.com/media/XftZSLhso9dDUt5Rtw/giphy.gif",
      liveUrl: "https://sato-real-estate.onrender.com/",
      description:
        "This project simulates a real estate website! It features a responsive map and properties list.",
      githubUrl: "https://github.com/adrianoyuji/sato-real-estate",
      technologies: ["React", "SCSS"],
    },
    {
      title: "ROCK PAPER SCISSORS",
      imgUrl: "https://media0.giphy.com/media/PmSNCIkpqq6FyHfahi/giphy.gif",
      liveUrl: "https://rock-paper-scissors-master-navy.vercel.app/",
      description:
        "A simples website that lets you play Rock Paper Scissors with a simple Artifical Intelligence, the website stores you score!",
      githubUrl: "https://github.com/adrianoyuji/rock-paper-scissors-master",
      technologies: ["Javascript", "CSS", "HTML"],
    },
  ],
};

/* projectName: {
  title: "",
  gifUrl: "",
  liveUrl: "",
  description: "",
  githubUrl: "",
}, */
