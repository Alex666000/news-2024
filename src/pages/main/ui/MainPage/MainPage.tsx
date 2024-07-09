import { useEffect, useState } from 'react'

import { ErrorResponse, News, getNews } from '@/api/apiNews'
import { NewsBanner } from '@/components/NewaBanner/NewsBanner'
import { NewsList } from '@/components/NewsList/NewsList'
import { Container } from '@/shared/ui/Container'

import s from './MainPage.module.scss'

export const MainPage = () => {
  const [news, setNews] = useState<News[]>([])

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const data = await getNews()

        setNews(data.news)
      } catch (e: ErrorResponse) {}
    }

    fetchNews()
  }, [])

  return (
    <main className={s.main}>
      <Container>
        {news.length > 0 ? <NewsBanner item={news[0]} /> : null}
        <NewsList news={news} />
      </Container>
    </main>
  )
}
