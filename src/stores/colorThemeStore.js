import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

const colorThemes = {  
  light: {
    theme: 'light',
    background: '#F6F7F8',
    card: '#FFFFFF',
    area: '#F2F4F6',
    title: '#000000',
    paragraph: '#8B8D9A',
    star: '#1EAAF1',
    icon: '#000000',
    socials: '#000000'
  },  
  dark: {
    theme: 'dark',
    background: '#3D3D3D',
    card: '#3A3A3A',
    area: '#1A1A1A',
    title: '#E5E5E5',
    paragraph: '#AAC8E4',
    star: '#42B883',
    icon: '#4FB0C2',
    socials: '#4FB0C2'
  },
  blue: {
    theme: 'blue',
    background: '#F6F7F8',
    card: '#F3FAFF',
    area: '#C7E7FF',
    title: '#002B5C',
    paragraph: '#657D9E',
    star: '#FF6F61',
    icon: '#00000',
    socials: '#000000'
  },
  mint: {
    theme: 'mint',
    background: '#F6F7F8',
    card: '#E1FFF2',
    area: '#4df7ad',
    title: '#003B34',
    paragraph: '#536F6A',
    star: '#F74D4D',
    icon: '#4D7BF7',
    socials: '#4D7BF7'
  },
}

export const useColorThemeStore = defineStore('colorTheme', () => {
  const colorTheme = ref(colorThemes.light)
  const getColorTheme = computed(() => colorTheme.value)
  function changeColorTheme(newColorTheme) {
    colorTheme.value = colorThemes[newColorTheme]
  }

  return { colorTheme, getColorTheme, changeColorTheme }
})
