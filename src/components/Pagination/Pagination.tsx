import s from './Pagination.module.scss'

type Props = {
  currentPage: number
  handleNextPage: () => void
  handlePageClick: (pageNumber: number) => void
  handlePreviousPage: () => void
  totalPages: number
}

/** Переиспользуемый компонент - все данные получает только через "props" */
const Pagination = (props: Props) => {
  const { currentPage, handleNextPage, handlePageClick, handlePreviousPage, totalPages } = props

  return (
    <div className={s.pagination}>
      <button className={s.arrow} disabled={currentPage <= 1} onClick={handlePreviousPage}>
        {'<'}
      </button>
      <div className={s.list}>
        {[...Array(totalPages)].map((_, index) => {
          return (
            <button
              className={s.pageNumber}
              disabled={index + 1 === currentPage}
              key={index}
              onClick={() => handlePageClick(index + 1)}
            >
              {index + 1}
            </button>
          )
        })}
      </div>

      <button className={s.arrow} disabled={currentPage >= totalPages} onClick={handleNextPage}>
        {'>'}
      </button>
    </div>
  )
}

export default Pagination
