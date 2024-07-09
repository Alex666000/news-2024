// types
export type NewsApiResponseType = {
  // массив новостей: News
  news: NewsType[]
  page: number
  status: string
}
// одна новость
export type NewsType = {
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

export type ErrorResponseType = {
  code: 'ERR_NETWORK'
  config: any
  message: string
  name: 'AxiosError'
  request: any
}
