import { Comment } from "./Comment";
import styles from "./Post.module.css";

export default function Post() {
	return (
		<article className={styles.post}>
			<header>
				<div className={styles.author}>
					<img
						className={styles.avatar}
						src="https://github.com/edsonsantosilva.png"
						alt=""
					/>
					<div className={styles.authorInfo}>
						<strong>Edson Silva</strong> <span>Web Developer</span>
					</div>
				</div>
				<time dateTime="2023-03-10">Post 1h ago</time>
			</header>

			<div className={styles.content}>
				<p>This is the post title</p>
				<p>This is the post text</p>
				<a href="https://github.com/edsonsantosilva">Github Link</a>
				<p>
					These are the tas:{" "}
					<a href="https://github.com/edsonsantosilva">#dev #react</a>
				</p>
			</div>

			<form className={styles.commentForm}>
				<strong>Send your feedback</strong>
				<textarea placeholder="Leave your comments" />
				<footer>
					<button type="submit">Comment</button>
				</footer>
			</form>

			<div className={styles.commentList}>
				<Comment />
				<Comment />
				<Comment />
			</div>
		</article>
	);
}
