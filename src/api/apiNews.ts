import { CategoriesApiResponseType, CategoriesType } from '@/api/apiCategories.type.ts'
import { ErrorResponseType, NewsApiResponseType, NewsType } from '@/api/apiNews.type.ts'
import axios from 'axios'

const BASE_URL = import.meta.env.VITE_NEWS_API_URL
const API_KEY = import.meta.env.VITE_NEWS_API_KEY

export type GetNewsArgsType = { category: CategoriesType; page_number: number; page_size: number }

export const getNews = async ({ category, page_number = 1, page_size = 10 }: GetNewsArgsType) => {
  try {
    const response = await axios.get<NewsApiResponseType>(`${BASE_URL}/latest-news`, {
      params: {
        apiKey: API_KEY,
        category,
        page_number,
        page_size,
      },
    })

    return response.data
  } catch (e: ErrorResponseType) {
    // console.log(e)
  }
}

export const getCategories = async () => {
  try {
    const response = await axios.get<CategoriesApiResponseType>(
      `${BASE_URL}/available/categories`,
      {
        params: {
          apiKey: API_KEY,
        },
      }
    )

    return response.data
  } catch (e: ErrorResponseType) {
    // console.log(e)
  }
}
