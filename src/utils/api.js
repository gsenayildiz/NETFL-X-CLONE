import axios from "axios";

export default axios.create({
    baseURL:"https://api.themoviedb.org/3",
    //yapacağımız istekelre eklenilecek olan headerlar
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
      },
      //bütün API isteklerinde gönderilecek olan parametre
      params: { language: 'tr-TR' },
    });