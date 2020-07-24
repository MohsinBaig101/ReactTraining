import axios from 'axios';
// axios.defaults.apiBaseUrl = 
axios.defaults.baseURL = 'http://mongostaging.demo.commersys.com/'
 
const apiBaseUrl = 'api/';


export const getAllAds = () =>  {
    return axios.get(apiBaseUrl+'ads').then((res)=>{
        return res.data;
    }).catch((err) => {
        return err;
    })
}

export const getLatestAds = (page_num = "",obj={}) =>  {
    return axios.post(apiBaseUrl+'ads/search?page='+page_num,obj);
}

export const signIN = (data) => {
    return axios.post(apiBaseUrl+'login',data).then((res)=>{
        return res;
    }).catch((err) => {
        return err;
    })
}
export const countries = () => {
    return axios.get(apiBaseUrl+'countries')
}
export const Categories = () => {
    return axios.get(apiBaseUrl+'categories')
}
export const getAuthUser = () => {
    const token = localStorage.getItem('token')
    return axios.get(apiBaseUrl+'user',{
        headers: {
            "Authorization":"Bearer "+ token
        }
    })
}

export const getCity = (country) => {
    return axios.get(apiBaseUrl+'city/'+country);
}
export const fakeAuthCentralState = {
    isAuthenticated:
      (localStorage.getItem("token")) ? true : false,
  };