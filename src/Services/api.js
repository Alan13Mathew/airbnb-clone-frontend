import axios from "axios";

let loadingStateHandler = null;

export const setLoadingStateHandler = (handler) => {
  loadingStateHandler = handler;
};

const api = axios.create({
  baseURL: "http://localhost:3000/api",
  withCredentials: true,
});


//request interceptor to add token to header

api.interceptors.request.use((config)=>{
    const token = localStorage.getItem("token");
    if(token){
        config.headers.Authorization = `Bearer ${token}`;
    }

    if(loadingStateHandler){
        loadingStateHandler(true);
    }

    return config;
})


//response interceptor to handle loading state
api.interceptors.response.use((response)=>{
    if(loadingStateHandler){
        loadingStateHandler(false);
    }
    return response;
},
(error)=>{
    if(loadingStateHandler){
        loadingStateHandler(false);
    }
    return Promise.reject(error);
}
)

export const authApi = {
    register: (data) => api.post("/auth/register", data),
    login: (data) => api.post("/auth/login", data),
}

export default api;