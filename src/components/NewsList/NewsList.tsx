import { News } from '@/api/apiNews'
import { NewsItem } from '@/components/NewsItem/NewsItem'

import s from './NewsList.module.scss'

export const NewsList = ({ news }: { news: News[] }) => {
  return (
    <ul className={s.list}>
      {news.map(item => {
        return <NewsItem item={item} key={item.id} />
      })}
    </ul>
  )
}
