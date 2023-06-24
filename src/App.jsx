import "./global.css";

import Header from "./components/Header";
import Post from "./components/Post";
import Sidebar from "./components/Sidebar";
import styles from "./App.module.css";

const posts = [
	{
		id: 1,
		author: {
			avatarUrl: "https://github.com/edsonsantosilva.png",
			name: "Edson Silva",
			role: "CTO",
		},
		content: [
			{ type: "paragraph", content: "Hi guys 👋" },
			{ type: "paragraph", content: "This is my React project using Vite" },
			{ type: "link", content: "jane.design/doctorcare" },
		],
		publishedAt: new Date("2023-06-17 14:00:00"),
	},
	{
		id: 2,
		author: {
			avatarUrl: "https://github.com/edsonsantosilva.png",
			name: "Francisco Silva",
			role: "Educator",
		},
		content: [
			{ type: "paragraph", content: "Hi guys 👋" },
			{ type: "paragraph", content: "This is my React project using Vite" },
			{ type: "link", content: "jane.design/doctorcare" },
		],
		publishedAt: new Date("2023-06-10 20:00:00"),
	},
];

export default function App() {
	return (
		<div className="App">
			<Header />
			<div className={styles.wrapper}>
				<Sidebar />
				<main>
					{posts.map((post) => {
						return (
							<Post
								key={post.id}
								author={post.author}
								content={post.content}
								publishedAt={post.publishedAt}
							/>
						);
					})}
				</main>
			</div>
		</div>
	);
}
