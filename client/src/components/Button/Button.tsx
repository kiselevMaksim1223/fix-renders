import { ButtonHTMLAttributes, ReactNode } from 'react'
import styles from './Button.module.scss'

type Props = {
  children: ReactNode
} & ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({ children, ...rest }: Props) => {
  return (
    <button {...rest} className={styles.button}>
      {children}
    </button>
  )
}

export default Button
