import { ButtonHTMLAttributes, ReactNode } from 'react'
import styles from './Button.module.scss'

type Props = {
  children: ReactNode
} & ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({ children, className, ...rest }: Props) => {
  return (
    <button {...rest} className={`${styles.button} ${className}`}>
      {children}
    </button>
  )
}

export default Button
