export default function Post(props) {
	return (
	<div>
		<strong>Post from {props.author}</strong>
		<p>{props.content}</p>
	</div>
	)
}
