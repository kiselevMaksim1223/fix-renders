import { InputHTMLAttributes } from 'react'
import styles from './Input.module.scss'

type Props = InputHTMLAttributes<HTMLInputElement>;

const Input = ({...rest}: Props) => {
	return (
		<input
			className={styles.input}
			type="text"
			{...rest}
		/>
	);
}	

export default Input;