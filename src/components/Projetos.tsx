const Projetos = () => {
    
    return (
        
        <section className="p-8">

            <h2 className="text-3xl font-bold text-center text-[#096873] mb-8">
                Projetos
            </h2>

            <div className="grid md:grid-cols-2 gap-6">

                <a href="https://github.com/IgorValentimAlves/to-do-list">
                    <div className="bg-[#F5F7F7] p-6 rounded-2xl shadow-md hover:scale-105 duration-300">
                        <h3 className="text-2xl font-bold text-[#096873] mb-3">
                            To-Do List
                        </h3>
                        <p className="text-gray-700">
                            Aplicação de tarefas com CRUD, organização de estados
                            e integração entre front-end e back-end.
                        </p>
                    </div>
                </a>

                <a href="https://github.com/IgorValentimAlves/petshop-site">
                    <div className="bg-[#F5F7F7] p-6 rounded-2xl shadow-md hover:scale-105 duration-300">
                        <h3 className="text-2xl font-bold text-[#096873] mb-3">
                            PetShop
                        </h3>
                        <p className="text-gray-700">
                            Website responsivo para pet shop com foco em UI moderna
                            e experiência do usuário.
                        </p>
                    </div>
                </a>

                <a href="https://github.com/IgorValentimAlves/gerador-frases-motivacionais">
                    <div className="bg-[#F5F7F7] p-6 rounded-2xl shadow-md hover:scale-105 duration-300">
                        <h3 className="text-2xl font-bold text-[#096873] mb-3">
                            Frases Motivacionais
                        </h3>
                        <p className="text-gray-700">
                            Projeto em JavaScript consumindo lógica dinâmica
                            e manipulação de DOM.
                        </p>
                    </div>
                </a>

                <a href="">
                    <div className="bg-[#F5F7F7] p-6 rounded-2xl shadow-md hover:scale-105 duration-300">
                        <h3 className="text-2xl font-bold text-[#096873] mb-3">
                            Portfólio React
                        </h3>
                        <p className="text-gray-700">
                            Portfólio moderno desenvolvido com React,
                            TypeScript e TailwindCSS.
                        </p>
                    </div>
                </a>

            </div>

        </section>
    )
}

export default Projetos