import axios from 'axios'

const BASE_URL = import.meta.env.VITE_NEWS_API_URL
const API_KEY = import.meta.env.VITE_NEWS_API_KEY

export const getNews = async () => {
  try {
    const response = await axios.get<GetNewsResponse>(`${BASE_URL}/latest-news`, {
      params: {
        apiKey: API_KEY,
      },
    })

    return response.data
  } catch (e) {
    console.log(e)
  }
}
// type
export type GetNewsResponse = {
  // массив новостей
  news: News[]
  page: number
  status: string
}
// одна новость
export type News = {
  author: string
  category: string[]
  description: string
  id: string
  image: string
  language: string
  published: string
  title: string
  url: string
}

export type ErrorResponse = {
  code: 'ERR_NETWORK'
  config: any
  message: string
  name: 'AxiosError'
  request: any
}
