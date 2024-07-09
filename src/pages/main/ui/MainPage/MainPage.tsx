import type { CategoriesType } from '@/api/apiCategories.type.ts'
import type { ErrorResponseType, NewsType } from '@/api/apiNews.type.ts'

import { useEffect, useState } from 'react'

import { GetNewsArgsType, getCategories, getNews } from '@/api/apiNews.ts'
import { Categories } from '@/components/Categories/Categories.tsx'
import { NewsBanner } from '@/components/NewaBanner/NewsBanner'
import { NewsList } from '@/components/NewsList/NewsList'
import Pagination from '@/components/Pagination/Pagination.tsx'
import Skeleton from '@/components/Skeleton/Skeleton.tsx'
import { Container } from '@/shared/ui/Container'

import s from './MainPage.module.scss'

export const MainPage = () => {
  const [news, setNews] = useState<NewsType[]>([])
  const [isLoading, setIsLoading] = useState(true)

  // данные пагинации
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = 10 // кол-во страниц хардкодим в доке нет т.к такого параметра
  const pageSize = 10 // размер страницы

  // данные фильтров для выбранной категории (Табами выбираем + подсвечиваем выбранную selectedCategory)
  const [categories, setCategories] = useState<CategoriesType[]>([])
  const [selectedCategory, setSelectedCategory] = useState<CategoriesType>('movie')

  // получаем новости
  const fetchNews = async (currentPage: number) => {
    try {
      setIsLoading(true)
      const data = await getNews({
        category: selectedCategory == 'All' ? null : selectedCategory, // фильтр новостей по категриям мне пришли
        page_number: currentPage,
        page_size: pageSize,
      } as GetNewsArgsType)

      setNews(data.news)
      setIsLoading(false)
    } catch (e: ErrorResponseType) {
      // console.log(e);
    }
  }

  // получаем категории
  const fetchCategories = async () => {
    try {
      const data = await getCategories()

      setCategories(['All', ...data.categories])
    } catch (e: ErrorResponseType) {
      // console.log(e);
    }
  }

  console.log(categories)

  useEffect(() => {
    fetchCategories()
  }, [])

  useEffect(() => {
    fetchNews(currentPage)
  }, [currentPage, selectedCategory])

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
    }
  }

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }
  /** Кликаем на конкретную страницу */
  const handlePageClick = pageNumber => {
    setCurrentPage(pageNumber)
  }

  return (
    <main className={s.main}>
      <Container>
        <Categories
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        {news.length > 0 && !isLoading ? (
          <NewsBanner item={news[0]} />
        ) : (
          <Skeleton count={1} type={'banner'} />
        )}
        <Pagination
          currentPage={currentPage}
          handleNextPage={handleNextPage}
          handlePageClick={handlePageClick}
          handlePreviousPage={handlePreviousPage}
          totalPages={totalPages}
        />
        <NewsList news={news} />
        {!isLoading ? <NewsList news={news} /> : <Skeleton count={10} type={'item'} />}
      </Container>
      <Pagination
        currentPage={currentPage}
        handleNextPage={handleNextPage}
        handlePageClick={handlePageClick}
        handlePreviousPage={handlePreviousPage}
        totalPages={totalPages}
      />
    </main>
  )
}
