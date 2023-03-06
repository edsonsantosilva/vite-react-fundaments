import Header from "./components/Header"
import Post from "./Post"
import './global.css'

export default function App() {
  return (
    <div className="App">
      <Header />
      <h1>Vite + React</h1>
      <Post author="Edson" content="Lorem ipsum dolor sit amet consectetur adipisicing elit"/>
    </div>
  )
}
