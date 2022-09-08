import axios from "axios"

export const api = axios.create({
	baseURL: "http://localhost:3000/api/",
})

export const feather = (url: string) => api.get(url).then((res) => res.data)
