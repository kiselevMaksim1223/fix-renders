import { memo, ReactNode } from 'react'

type Props = {
  children: ReactNode
}

const SubTitle = memo(({ children }: Props) => {
  return <h2 className={'list-subtitle'}>Active Item ID: {children}</h2>
})

export default SubTitle
