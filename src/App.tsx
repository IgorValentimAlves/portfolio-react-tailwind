import Header from "./components/Header"
import Sobre from "./components/Sobre"
import Tecnologias from "./components/Tecnologias"
import Projetos from "./components/Projetos"
import Experiencias from "./components/Experiencias"
import Footer from "./components/Footer"

function App() {
  return (
    <main className="min-h-screen bg-[#096873] py-10 px-4">

      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden space-y-10">

        <Header />
        <Sobre />
        <Tecnologias />
        <Projetos />
        <Experiencias />
        <Footer />

      </div>

    </main>
  )
}

export default App