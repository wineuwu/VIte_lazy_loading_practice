const picDom = document.querySelector('.showPic .container');
const API_TOKEN = import.meta.env.VITE_PEXEL_API_TOKEN;
const url =`https://api.unsplash.com/photos/?client_id=${API_TOKEN}&per_page=20`;

const creatImg = async () => {
  const resp = await requestData(url) ;
  const img =resp.map(item => {
    return `
    <img src="${item.urls.small}">
  `
  }).join('');
  picDom.insertAdjacentHTML("beforeend",img);
}

const requestData = (url) =>{
  const response = fetch(url,{
    headers:{
      'Authorization': `${API_TOKEN}`
    }
  }).then(res => res.json()).then(item => item)

  return response;
} 

creatImg();


























