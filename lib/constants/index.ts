interface Project {
  name: string;
  desc: string;
  link: string;
  img: string;
  className: string;
}

export const loaderDelay = 2.5;

export const projects: Project[] = [
  {
    name: "DailyGrid",
    desc: "A Github heamtap calender like habit tracker.",
    img: "/project1.png",
    className: "col-span-2 row-span-5",
    link: "https://daily-grid-jb.vercel.app/",
  },
  {
    name: "SchedMo",
    desc: "An AI college schedule maker. Upload a table of your schedule and visualise it in a time table format.",
    img: "/project2.png",
    className: "col-span-2 row-span-3",
    link: "https://schedmo.vercel.app/",
  },
  {
    name: "Statsify",
    desc: "Track your listening habits and pattern in Spotify.",
    img: "/project3.png",
    className: "col-span-2 row-span-3",
    link: "https://statsify.streamlit.app/",
  },
  {
    name: "Let Me Cook",
    desc: "A smart ingredient recognition and recipe recommendation system. Upload an image of ingredients and get recipe recommendations.",
    img: "/project4.png",
    className: "col-span-2 row-span-4",
    link: "https://let-me-cook.streamlit.app/",
  },
  {
    name: "AI-NIMO",
    desc: "A Lasallian chatbot companion for learning. ",
    img: "/project5.png",
    className: "col-span-2 row-span-3",
    link: "https://github.com/johannbleza/ai-nimo-bot",
  },
  {
    name: "LoanDesk",
    desc: "A Github heamtap calender like for habits.",
    img: "/project6.png",
    className: "col-span-2 row-span-3",
    link: "https://loan-desk.vercel.app/",
  },
  {
    name: "Quiz Me",
    desc: "A Github heamtap calender like for habits.",
    img: "/project7.png",
    className: "col-span-2 row-span-3",
    link: "https://github.com/johannbleza/quiz-me",
  },
];
