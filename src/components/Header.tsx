import foto from "../assets/imagens/foto.jpg"

const Header = () => {
    return (
        <header className="p-8 bg-[#04ADBF] rounded-b-3xl flex flex-col md:flex-row items-center justify-between">

            <div className="">
                <img
                    src={foto}
                    alt="Igor Valentim Alves"
                    className="mt-6 w-52 h-52 rounded-full object-cover mx-auto border-4 border-white shadow-lg"
                />
                <h1 className="text-4xl font-bold text-white mt-6 text-center md:text-left">
                    Igor Valentim Alves
                </h1>
                <p className="text-[#EAFBFC] mt-2 text-lg">
                    Desenvolvedor Full Stack em formação
                </p>
            </div>

            <div className="mt-6 space-y-2 text-white text-lg text-left ">

                <h1 className="font-bold text-2xl">Informações de Contato</h1>

                <p>
                    📱 (24) 99915-8141
                </p>

                <p>
                    💼
                    <a
                        href="https://www.linkedin.com/in/igor-valentim-alves"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-2 hover:underline"
                    >
                        LinkedIn
                    </a>
                </p>

                <p>
                    💻
                    <a
                        href="https://github.com/IgorValentimAlves"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-2 hover:underline"
                    >
                        GitHub
                    </a>
                </p>

            </div>

        </header>
    )
}

export default Header