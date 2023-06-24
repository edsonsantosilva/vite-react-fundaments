import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";
import { format, formatDistanceToNow } from "date-fns";

import Avatar from "./Avatar";
import { Comment } from "./Comment";
import enUS from "date-fns/locale/en-US";
import styles from "./Post.module.css";

interface Author {
	name: string;
	role: string;
	avatarUrl: string;
}

interface Content {
	type: "paragraph" | "link";
	content: string;
}

export interface PostType {
	id: number;
	author: Author;
	publishedAt: Date;
	content: Content[];
}

interface PostProps {
	post: PostType;
}

export function Post({ post }: PostProps) {
	const [comments, setComments] = useState(["Really nice"]);
	const [newCommentText, setNewCommentText] = useState("");

	const publishedDateFormatted = format(
		post.publishedAt,
		"LLL do 'at' h':'mm b..bb",
		{
			locale: enUS,
		}
	);

	const publishedDateRelativeToNow = formatDistanceToNow(post.publishedAt, {
		locale: enUS,
		addSuffix: true,
	});

	function handleCreateNewComment(event: FormEvent) {
		event.preventDefault();
		setComments([...comments, newCommentText]);
		setNewCommentText("");
	}

	function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
		setNewCommentText(event.target.value);
	}

	function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
		event.target.setCustomValidity("Your comment is empty");
	}

	function deleteComment(commentToDelete: string) {
		const comentsWithoutDeletedOne = comments.filter((comment) => {
			return comment !== commentToDelete;
		});

		setComments(comentsWithoutDeletedOne);
	}

	const isNewCommentEmpty = newCommentText.length === 0;
	return (
		<article className={styles.post}>
			<header>
				<div className={styles.author}>
					<Avatar src="https://github.com/edsonsantosilva.png" />
					<div className={styles.authorInfo}>
						<strong>{post.author.name}</strong>
						<span>{post.author.role}</span>
					</div>
				</div>
				<time
					title={publishedDateFormatted}
					dateTime={post.publishedAt.toISOString()}
				>
					{publishedDateRelativeToNow}
				</time>
			</header>

			<div className={styles.content}>
				{post.content.map((line, index) => {
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
					onInvalid={handleNewCommentInvalid}
					required
				/>
				<footer>
					<button type="submit" disabled={isNewCommentEmpty}>
						Comment
					</button>
				</footer>
			</form>

			<div className={styles.commentList}>
				{comments.map((comment, index) => {
					return (
						<Comment
							key={`${index} - ${comment}`}
							content={comment}
							onDeleteComment={deleteComment}
						/>
					);
				})}
			</div>
		</article>
	);
}
