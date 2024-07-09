import s from './Image.module.scss'

/** Если нет картинки то будет Скелетон картинки - серый блок */
export const Image = ({ image }: { image: string | undefined }) => {
  return (
    <div className={s.wrapper}>
      {image ? <img alt={'news'} className={s.image} src={image} /> : null}
    </div>
  )
}
