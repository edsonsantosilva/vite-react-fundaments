import { format, formatDistanceToNow } from "date-fns";

import Avatar from "./Avatar";
import { Comment } from "./Comment";
import enUS from "date-fns/locale/en-US";
import styles from "./Post.module.css";
import { useState } from "react";

export default function Post({ author, publishedAt, content }) {
	const [comments, setComments] = useState(["Really nice"]);
	const [newCommentText, setNewCommentText] = useState("");

	const publishedDateFormatted = format(
		publishedAt,
		"LLL do 'at' h':'mm b..bb",
		{
			locale: enUS,
		}
	);
	const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
		locale: enUS,
		addSuffix: true,
	});
	function handleCreateNewComment(event) {
		event.preventDefault();
		setComments([...comments, newCommentText]);
	}

	function handleNewCommentChange() {
		setNewCommentText(event.target.value);
	}
	return (
		<article className={styles.post}>
			<header>
				<div className={styles.author}>
					<Avatar src="https://github.com/edsonsantosilva.png" />
					<div className={styles.authorInfo}>
						<strong>{author.name}</strong>
						<span>{author.role}</span>
					</div>
				</div>
				<time
					title={publishedDateFormatted}
					dateTime={publishedAt.toISOString()}
				>
					{publishedDateRelativeToNow}
				</time>
			</header>

			<div className={styles.content}>
				{content.map((line, index) => {
					if (line.type === "paragraph") {
						return <p key={`${index} - ${line.content}`}>{line.content}</p>;
					} else if (line.type === "link") {
						return (
							<p key={`${index} - ${line.content}`}>
								<a href="#">{line.content}</a>
							</p>
						);
					}
				})}
			</div>

			<form onSubmit={handleCreateNewComment} className={styles.commentForm}>
				<strong>Send your feedback</strong>
				<textarea
					onChange={handleNewCommentChange}
					value={newCommentText}
					placeholder="Leave your comments"
				/>
				<footer>
					<button type="submit">Comment</button>
				</footer>
			</form>

			<div className={styles.commentList}>
				{comments.map((comment, index) => {
					return <Comment key={`${index} - ${comment}`} content={comment} />;
				})}
			</div>
		</article>
	);
}
