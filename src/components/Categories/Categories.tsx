import { CategoriesType } from '@/api/apiCategories.type.ts'

import s from './Categories.module.scss'

type Props = {
  categories: CategoriesType[]
  selectedCategory: CategoriesType | null
  setSelectedCategory: (category: CategoriesType | null) => void
}

/**  Категории + Табы */
export const Categories = ({ categories, selectedCategory, setSelectedCategory }: Props) => {
  return (
    <div className={s.categories}>
      {categories?.map(category => {
        return (
          <button
            /* если выбранная категория === категории по которой мапимся тогда "подсветить" её */
            className={selectedCategory === category ? s.active : s.item}
            key={category}
            /* "сеттаем" выбираем категорию */
            onClick={() => setSelectedCategory?.(category)}
          >
            {category}
          </button>
        )
      })}
    </div>
  )
}
