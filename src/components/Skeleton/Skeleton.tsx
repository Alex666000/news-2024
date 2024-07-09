import styles from './Skeleton.module.scss'

/** Пока загружаются данные  с сервера надо показать загрузку иначе экран будет пустой - повторяет размер основных блоков
 * count - количество блоков: если кол-во  больше 1 покажем список, иначе покажем 1 элемент
 * */

type Props = {
  count?: number
  type: 'banner' | 'item'
}
const Skeleton = ({ count = 1, type = 'banner' }: Props) => {
  return (
    <>
      {count > 1 ? (
        <ul className={styles.list}>
          {[...Array(count)].map((_, index) => (
            <li className={type === 'banner' ? styles.banner : styles.item} key={index}></li>
          ))}
        </ul>
      ) : (
        <li className={type === 'item' ? styles.item : styles.banner}></li>
      )}
    </>
  )
}

export default Skeleton
