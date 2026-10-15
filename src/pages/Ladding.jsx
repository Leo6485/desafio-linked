import Header from "../components/Header"
import Section from "../components/Section"
import fundo from "../assets/fundo.png"
import Button from "../components/Button"
import ImgFundo from "../components/ImgFundo"

export default function Ladding() {
    return (
        <div className="scroll-smooth">
            <Header>
                Teste
            </Header>
            <Section id="inicio">
                <div className="flex h-full">

                    <div className="flex flex-col align-top h-full w-1/2 p-10">
                        <p>Consultório de psicologia e psicoterapia</p>

                        <div className="m-auto gap-2">
                            <h2 className="text-lg">Lorem Ipsum</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <div className="flex justify-center p-2 gap-4 mt-10">
                                <Button>Agendar</Button>
                                <Button variant="secondary">Saiba Mais</Button>
                            </div>
                        </div>

                    </div>
                    <div className="w-1/2 h-full">
                        <ImgFundo src={fundo} />
                    </div>
                </div>
            </Section>
            <Section id="servicos" dark={true}>
                <div className="flex flex-col text-center justify-center h-full w-4/5 m-auto">
                    <h2>Nossos Serviços.</h2>
                    <p>Qualidades que trazem toda diferença para o paciente.</p>
                    <hr className="my-4 border-white w-1/4 m-auto"></hr>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </Section>

            <Section id="horarios">
                <div className="flex flex-col text-center justify-center h-full w-full">
                    <h2>Horário de Atendimento.</h2>
                    <p>Estamos disponíveis para agendamento de consultas e visitas.</p>
                    <div className="flex max-w-200 w-full mx-auto backdrop:blur-2xl">
                        aaaaaaaaa
                    </div>
                </div>
            </Section>

            <Section id="feedbacks" dark={true}>
                [Feedbacks]
            </Section>
            <Section id="contato">
                [Mais]
            </Section>
        </div>
    )
}