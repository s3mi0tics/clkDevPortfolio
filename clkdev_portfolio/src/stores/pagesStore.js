import { ref, computed } from 'vue'
import { defineStore } from 'pinia'


const pages = [  
  {
    id: 'home',
    subtitle: 'software engineer',
    title: 'full-stack',
    name: 'colby kauk',
    paragraph: 'Crafting dynamic, scalable, and elegant designs to enhance your experience',
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
    paragraph: "I embarked on a self-study mission, navigating LeetCode's explore cards, diving into Outsystems courses, and actively engaging in building applications. Seeking a deeper understanding, I enrolled in CS50, Harvard's Introduction to Computer Science, to unveil the what is happing 'under the hood'."
  },
  {
    id: 'biography4',
    subtitle: 'creator',
    title: 'biography',
    name: 'colby kauk',
    paragraph: "Today, my journey continues as I build and refine websites for clients, marrying precision coding with a keen eye for design and data itegrity. As the chapters unfold, I'm excited about the possibilities that lie ahead, the technologies yet to be explored, and the ever-evolving landscape of programming that keeps me fueled with curiosity and passion. I'm a creator on a quest for knowledge and the betterment of human kind. "
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
    console.log(index.value)
    let i = pages.findIndex(page => page.id === id)
    i ++
    index.value = (i < 0) ? 0 : (i > lastPage) ? lastPage : i;
    page.value = pages[index.value] || pages[0]
  }

  function previousPage(id) {
    console.log(index.value)
    let i = pages.findIndex(page => page.id === id)
    i --
    index.value = (i < 0) ? 0 : (i > lastPage) ? lastPage : i;
    page.value = pages[index.value] || pages[0]
  }
  
    return { page, index, lastPage, getPage, getIndex, changePageById, nextPage, previousPage };
  });
  
