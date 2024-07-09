import { useFormatDate } from '@/hooks/useFormatDate'
import { Container } from '@/shared/ui/Container'

import s from './Header.module.scss'

export const Header = () => {
  const currentDate = useFormatDate()

  return (
    <header className={s.header}>
      <Container>
        <h1 className={s.title}>Good morning</h1>
        <p className={s.date}>{currentDate}</p>
      </Container>
    </header>
  )
}
