import { ReactNode } from 'react'

import { clsx } from 'clsx'

import s from './Container.module.scss'

type PropsType = {
  children: ReactNode
  className?: string
}

export const Container = ({ children, className }: PropsType) => {
  return <div className={clsx(s.container, [className])}>{children}</div>
}
