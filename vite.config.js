
import path from "path";

export default { 
  sever:{
    proxy:{
      "api":{
        target:'http',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/,'')
      }
    }, 
  },
  bulid: {
    rollupOptions: {
      input: {
        main: {
          entry: {
            js:path.resolve(__dirname, 'main.js'),
              
          }   
        },
      }
    }
  },

}


