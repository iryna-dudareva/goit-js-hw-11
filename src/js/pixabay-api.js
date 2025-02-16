import axios from 'axios';
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


/*const axios = require('axios').default;*/

const instance = axios.create({
  baseURL: 'https://pixabay.com/api/',
    params: {
        key: '48884243-7c5376715b9f7ca682882ed04',
        image_type: 'photo',
        
    }

});

/*instance.get('', { params: { q: 'cats' } });*/

export function getImgs(imgsOf) { 
    return instance.get('', { params: { q: `${imgsOf}` } }).then(r => { 
        if (r.data.hits.length === 0) { 
            iziToast.error({
                title: 'Error',
                message: 'Sorry, there are no images matching your search query. Please try again!',
        });
        }
    }
    );
 }

