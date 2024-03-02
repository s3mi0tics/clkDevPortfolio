import { ref, computed } from 'vue'
import { defineStore } from 'pinia'


const pages = [
  {
    id: 'home',
    subtitle: 'software engineer',
    title: 'full-stack',
    name: 'colby kauk',
    paragraph: 'Crafting dynamic, scalable, and elegant designs to enhance your experience',
    images: ['profile.png']
  },  
  {
    id: 'biography',
    subtitle: 'programmer',
    title: 'biography',
    name: 'colby kauk',
    paragraph: 'I am a determined full-stack developer proficient in Python, Java, React, mySQL, and mongoDB. Gritty and diligent engineer focused on growth, with a  willingness to learn and a curiosity to gain a deeper understanding of technologies. Skilled problem solver able to self-manage during independent projects and collaborate in a team setting. ',
  },
  {
    id: 'biography2',
    subtitle: 'developer',
    title: 'biography',
    name: 'colby kauk',
    paragraph: "I am a husband, father of two, and I find joy in both building things and learning languages. My journey into programming began after a decade barely touching a computer. Armed with a typing speed of 15 words per minute and the responsibilities of parenting. Along with grit, determination and a love for learning foreign languages, I embarked on a transformative experience by enrolling in a coding boot camp at Coding Dojo. Emerging from this experience alive, it became clear that my coding journey had just begun."
  },
  {
    id: 'biography3',
    subtitle: 'designer',
    title: 'biography',
    name: 'colby kauk',
    paragraph: "I embarked on a self-study mission, navigating LeetCode's explore cards, diving into Outsystems courses, and actively engaging in building applications. Seeking a deeper understanding, I enrolled in CS50, Harvard's Introduction to Computer Science, to unveil the what is happening 'under the hood'."
  },
  {
    id: 'biography4',
    subtitle: 'creator',
    title: 'biography',
    name: 'colby kauk',
    paragraph: "Today, my journey continues as I build and refine websites for clients, marrying precision coding with a keen eye for design and data itegrity. As the chapters unfold, I'm excited about the possibilities that lie ahead, the technologies yet to be explored, and the ever-evolving landscape of programming that keeps me fueled with curiosity and passion. I'm a creator on a quest for knowledge and the betterment of human kind. "
  },
  {
    id: 'portfolio',
    subtitle: 'SQL, Python, FLASK, Bootstrap',
    title: 'portfolio',
    name: 'installOps',
    paragraph: 'This is my final project for Harvard’s CS50. InstallOps is a Helpdesk web application designed to help a manager schedule the deliveries of products and services of a blind installation operation. The tech stack used includes Python, leveraging the Flask framework for a robust backend. Stylishly designed using Bootstrap, ensuring a seamless and responsive user interface. Executed with all custom SQLite3 schema, tables, and queries showcasing a mastery of database fundamentals.',
    link: 'https://github.com/s3mi0tics/installOps'
  },
  {
    id: 'portfolio2',
    subtitle: 'Front-end, CSS, HTML, Vue3.js',
    title: 'portfolio',
    name: 'Portfolio Site',
    paragraph: 'Welcome to my personal portfolio—a responsive website with custom color schemes, HTML, CSS, and JavaScript, powered by Vue3.js and Vite. Designed initially from a template, it served as an exercise in enhancing my skills and understanding of front-end technologies. Utilizing a Pinia store for dynamic content and states, this portfolio is deployed as a secure, public HTTPS site using AWS CloudFront and an S3 bucket.',
    link: 'https://github.com/s3mi0tics/clkDevPortfolio'
  },
  {
    id: 'portfolio3',
    subtitle: 'MERN, Material UI, Redux, Nivo',
    title: 'portfolio',
    name: 'MERN Admin',
    paragraph: 'This application encompasses various features, including a dynamic dashboard with statistics and charts, product management with detailed listings, customer information tables, server-side pagination for transactions, and a geographical overview of user locations. Utilizing technologies such as nivo for charts, Material UI for styling, and Redux Toolkit for state management, the frontend delivers an engaging user experience. The backend is powered by NodeJS and ExpressJS, and it integrates with a MongoDB cloud instance for efficient and scalable data management, leveraging the Mongoose library for MongoDB interactions. This setup ensures robust data storage, retrieval, and manipulation capabilities, contributing to the overall performance and reliability of the application.',
    link: 'https://github.com/s3mi0tics/MERN_Admin_Dashboard'
  }
]


export const usePagesStore = defineStore('pages', () => {
  const page = ref(pages[0])
  const index = ref(0) 
  const lastPage = pages.length - 1
  const getPage = computed(() => page.value)
  const getIndex = computed(() => index.value)
  function changePageById(id) {
    page.value = pages.find(page => page.id === id) || pages[0];
    index.value = pages.findIndex(page => page.id === id)
  }

  function nextPage(id) {
    let i = pages.findIndex(page => page.id === id)
    i ++
    index.value = (i < 0) ? 0 : (i > lastPage) ? lastPage : i;
    page.value = pages[index.value] || pages[0]
  }

  function previousPage(id) {
    let i = pages.findIndex(page => page.id === id)
    i --
    index.value = (i < 0) ? 0 : (i > lastPage) ? lastPage : i;
    page.value = pages[index.value] || pages[0]
  }
  
    return { page, index, lastPage, getPage, getIndex, changePageById, nextPage, previousPage };
  });
  
