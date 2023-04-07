import styles from './Post.module.css'

export default function Post () {
	return (
		<article className={styles.post}>
			<header>
				<div className={styles.author}>
					<img className={styles.avatar} src="https://github.com/edsonsantosilva.png" alt="" />
					<div className={styles.authorInfo}>
						<strong>Edson Silva</strong>
						<span>Web Developer</span>
					</div>
				</div>
				<time dateTime='2023-03-10'>Post 1h ago</time>
			</header>

			<div className={styles.content}>
				<p>This is the post title</p>
				<p>This is the post text</p>
				<p>These are the tas: #dev #react</p>
			</div>
		</article>
	)
}