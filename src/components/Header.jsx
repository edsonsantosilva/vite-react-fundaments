import styles from './Header.module.css'
import logo from '../assets/headerLogo.svg'

export default function Header() {
	return (
		<header className={styles.header}>
			<img src={logo} alt="Logo from Header" />
		</header>
	)
}