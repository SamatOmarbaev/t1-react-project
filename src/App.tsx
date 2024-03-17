import { Footer } from "./components/organisms/Footer/Footer"
import { Header } from "./components/organisms/Header/Header"
import { HomePage } from "./components/pages/HomePage"

function App() {
  return (
    <>
      <Header />
      <main className="mainContent">
        <HomePage />
      </main>
      <Footer />
    </>
  )
}

export default App
