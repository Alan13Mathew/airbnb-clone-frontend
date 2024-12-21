import api from "./api";

const BASE_URL = import.meta.env.VITE_API_URL;

export const hotelApi = {
    getAllHotels: () => {
        return api.get("/hotels");
    },
    getHotelById: (id) => {
        return api.get(`/hotels/${id}`);
    }
}

export default hotelApi;