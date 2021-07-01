import './scss/main.scss'

const API_TOKEN = import.meta.env.VITE_PEXEL_API_TOKEN;

const requestData = async(url) => {
  const res = await fetch(url).then(res=> res.json());
  
}

const appDom = document.querySelector('#app')
