import './scss/main.scss'

const picDom = document.querySelector('.showPic');
const pic = picDom.querySelectorAll('.container .pic-col img');

const API_TOKEN = import.meta.env.VITE_PEXEL_API_TOKEN;
const url =`https://api.unsplash.com/photos/?client_id=${API_TOKEN}&per_page=20`;


const lazyLoading =(entry) => {
  entry.forEach((img,idx) => {
    if(img.isIntersecting){
      console.log(img.target);
      observer.unobserve(img.target)
    }
  
  })
 
}
const observer = new IntersectionObserver(lazyLoading, {
  root:null,
  rootMargin: "0px 0px 0px 0px",
  threshold: [0]
})

pic.forEach(img => observer.observe(img))


// const creatImg = async () => {
//   const resp = await requestData(url) ;
//   const img =resp.map(item => {
//     return `
//     <div class="pic-col">
//       <img src="${item.urls.small}"  loading="lazy">
//     </div>
//   `
//   }).join('');
//   picDom.insertAdjacentHTML("beforeend",img);
// }

// const requestData = (url) =>{
//   const response = fetch(url,{
//     headers:{
//       'Authorization': `${API_TOKEN}`
//     }
//   }).then(res => res.json()).then(item => item)

//   return response;
// } 
// creatImg();


























