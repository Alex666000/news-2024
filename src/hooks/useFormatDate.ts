import { useEffect, useState } from 'react'

import { formatDate } from '@/helpers/formatDate'

export const useFormatDate = () => {
  const [currentDate, setCurrentDate] = useState(formatDate(new Date()))

  /* для обновления даты каждый день */
  useEffect(() => {
    const intervalId = setInterval(
      () => {
        setCurrentDate(formatDate(new Date()))
      },
      24 * 60 * 60 * 1000
    ) // Обновление каждые 24 часа

    return () => clearInterval(intervalId)
  }, [])

  return currentDate
}
