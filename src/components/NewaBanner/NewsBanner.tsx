import { NewsType } from '@/api/apiNews'
import { Image } from '@/components/Image/Image'
import { formatTimeAgo } from '@/helpers/formatTimeAgo'

import s from './NewsBanner.module.scss'

type Props = { item: News }

export const NewsBanner = ({ item }: Props) => {
  return (
    <div className={s.banner}>
      <Image image={item.image} />
      <h3 className={s.title}>{item.description}</h3>
      <p className={s.extra}>
        {formatTimeAgo(item.published)} by {item.author}
      </p>
    </div>
  )
}
