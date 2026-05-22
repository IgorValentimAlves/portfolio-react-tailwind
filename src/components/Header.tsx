import foto from "../assets/imagens/foto.jpg"

const Header = () => {
    return (
        <header className="text-center p-8 bg-[#04ADBF] rounded-b-3xl">

            <img
                src={foto}
                alt="Igor Valentim Alves"
                className="mt-6 w-52 h-52 rounded-full object-cover mx-auto border-4 border-white shadow-lg"
            />

            <h1 className="text-4xl font-bold text-white mt-6">
                Igor Valentim Alves
            </h1>

            <p className="text-[#EAFBFC] mt-2 text-lg">
                Desenvolvedor Front-End em formação
            </p>

        </header>
    )
}

export default Header