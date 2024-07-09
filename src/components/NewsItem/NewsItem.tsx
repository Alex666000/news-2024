import { NewsType } from '@/api/apiNews'
import { formatTimeAgo } from '@/helpers/formatTimeAgo'

import s from './NewsItem.module.scss'

export const NewsItem = ({ item }: { item: News }) => {
  return (
    <li className={s.item}>
      <div className={s.wrapper} style={{ backgroundImage: `url(${item.image})` }}></div>
      <div className={s.info}>
        <h3>{item.title}</h3>
        <p>
          {formatTimeAgo(item.published)} by {item.author}
        </p>
      </div>
    </li>
  )
}
