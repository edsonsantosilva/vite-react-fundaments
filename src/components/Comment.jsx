import { ThumbsUp, Trash } from '@phosphor-icons/react';

import styles from "./Comment.module.css";

export function Comment() {
	return (
		<div className={styles.comment}>
			<img src="https://github.com/edsonsantosilva.png" alt="" />

			<div className={styles.commentBox}>
				<div className={styles.commentContent}>
					<header>
						<div className={styles.authorAndTime}>
							<strong>Edson Silva</strong>
							<time dateTime="2023-04-07 08:13:00">
								1h ago
							</time>
						</div>

						<button title="Delet comment">
							<Trash size={20} />
						</button>
					</header>

					<p>Very good</p>
				</div>

				<footer>
					<button>
						<ThumbsUp />
						Like <span>20</span>
					</button>
				</footer>
			</div>
		</div>
	);
}
