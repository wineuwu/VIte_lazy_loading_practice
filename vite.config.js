
import path from "path";
export default { 

  bulid: {
    rollupOptions: {
      input: {
          main: {
            entry: path.resolve(__dirname, 'main.js'),
          },
      }
    }
  },

}


