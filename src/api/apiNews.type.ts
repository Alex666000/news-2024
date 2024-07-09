// types
export type NewsApiResponse = {
  // массив новостей: News
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

// Categories
export type Categories =
  | 'CS'
  | 'EE'
  | 'academia'
  | 'academic'
  | 'art'
  | 'auto'
  | 'business'
  | 'celebrity'
  | 'commodity'
  | 'crap'
  | 'culture'
  | 'design'
  | 'economy'
  | 'education'
  | 'energy'
  | 'entertainment'
  | 'entrepreneur'
  | 'environment'
  | 'estate'
  | 'fashion'
  | 'finance'
  | 'food'
  | 'funny'
  | 'gadgets'
  | 'game'
  | 'general'
  | 'health'
  | 'lifestyle'
  | 'medical'
  | 'mobile'
  | 'movie'
  | 'music'
  | 'notsure'
  | 'opinion'
  | 'politics'
  | 'programming'
  | 'redundant'
  | 'regional'
  | 'review'
  | 'science'
  | 'security'
  | 'sports'
  | 'technology'
  | 'television'
  | 'travel'
  | 'world'
