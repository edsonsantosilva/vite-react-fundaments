import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import Post from "./Post"
import './global.css'
import styles from './App.module.css'

export default function App() {
  return (
    <div className="App">
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post author="Edson" content="Lorem ipsum dolor sit amet consectetur adipisicing elitLorem ipsum dolor sit amet consectetur adipisicing elitLorem ipsum dolor sit amet consectetur adipisicing elitLorem ipsum dolor sit amet consectetur adipisicing elitLorem ipsum dolor sit amet consectetur adipisicing elitLorem ipsum dolor sit amet consectetur adipisicing elit"/>
        </main>
      </div>
    </div>
  )
}
