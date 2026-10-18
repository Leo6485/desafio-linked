import Header from "../components/Header"
import Section from "../components/Section"
import Button from "../components/Button"

import { FaTasks, FaDotCircle } from "react-icons/fa"
import ImgFundo from "../components/ImgFundo"
import fundo from "../assets/fundo.png"

import clock from "../assets/clock.svg"
import Table from "../components/Table.jsx"

import imagemAgenda from "../assets/imagem-agenda.png"
import Feedbacks from "../components/Feedbacks.jsx"

import FormContato from "../components/FormContato"
import Endereco from "../components/Endereco.jsx"
import Footer from "../components/Footer.jsx"
import mapa from "../assets/mapa.png"


export default function Ladding() {
    return (
        <div className="scroll-smooth">


            <Header/>


            <Section id="inicio">
                <div
                    style={{ "--fundo": `url(${fundo})` }}
                    className="text-gray-800 md:text-black flex min-h-dvh justify-between bg-(image:--fundo) md:bg-none md:bg-white bg-cover"
                >

                    <div className="max-md:bg-white/50 flex flex-col align-top md:p-10">
                        <p
                        className="w-full max-md:p-10 max-md:text-center max-md:bg-brand max-md:text-white mb-10"
                        >
                            Consultório de psicologia e psicoterapia
                        </p>

                        <div className="max-md:bg-white m-5 max-md:shadow-xl p-4 max-md:rounded-2xl gap-2">
                            <h2 className="text-center md:text-start text-lg">Lorem Ipsum</h2>
                            <p className="text-center md:text-start">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 p-2 gap-10 mt-5 md:mt-10">
                                <Button icon={FaTasks}>Agendar</Button>
                                <Button icon={FaDotCircle} variant="secondary">Saiba Mais</Button>
                            </div>
                        </div>

                    </div>
                    <ImgFundo/>
                </div>
            </Section>


            <Section id="servicos" dark={true}>
                <div data-aos="fade-up" className="flex flex-col text-center justify-center h-full w-4/5 m-auto">
                    <h2>Nossos Serviços.</h2>
                    <p>Qualidades que trazem toda diferença para o paciente.</p>
                    <hr className="my-4 border-white w-1/4 m-auto mb-10"></hr>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </Section>


            <Section id="horarios" flowers={1}>
                <div data-aos="fade-up" className="flex flex-col text-center justify-center items-center p-2 h-full w-full">
                    <h2 className="text-brand">Horário de Atendimento.</h2>
                    <p className="text-brand">Estamos disponíveis para agendamento de consultas e visitas.</p>
                    <hr className="my-4 border-brand w-1/10 m-auto"></hr>
                    {/* Horários card */}
                    <div className="flex sm:border p-4 border-brand max-w-200 w-9/10 mx-auto backdrop:blur-3xl bg-white/47 rounded-2xl">
                        <img
                            className="hidden sm:flex w-auto max-w-1/4 aspect-square mx-20"
                            src={clock}
                            >
                        </img>

                        <Table/>

                    </div>
                </div>
            </Section>


            <Section id="feedbacks" dark={true}>
                <div data-aos="fade-up" className="flex flex-col lg:flex-row items-center justify-between h-full w-4/5 max-w-6xl mx-auto gap-10 lg:gap-16 py-8">

                    <Feedbacks />

                    <div className="hidden sm:flex lg:w-2/5 h-full items-center justify-center">
                        <img
                            src={imagemAgenda}
                            alt="Anotações na prancheta durante atendimento"
                            className="max-h-[75vh] w-auto max-w-full object-cover rounded-3xl shadow-2xl"
                        />
                    </div>
                </div>
            </Section>


            <Section id="contato" flowers={1}>
                <div data-aos="fade-up" className="w-full mx-auto flex flex-col gap-4 py-2 px-10 h-full justify-center">
                    <div className="grid max-w-4xl grid-cols-1 sm:grid-cols-2 gap-10 mt-10 mx-auto">

                        <Endereco/>

                        <img
                            src={mapa}
                            className="rounded-2xl w-full object-cover shadow-xl"
                        />
                    </div>

                    <FormContato/>
                </div>
            </Section>


            <Footer/>
        </div>
    )
}