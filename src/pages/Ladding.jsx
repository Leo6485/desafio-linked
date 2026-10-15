import Header from "../components/Header"
import Section from "../components/Section"


export default function Ladding() {
    return (
        <div>
            <Header>
                Teste
            </Header>
            <Section>
                [Inicio]
            </Section>
            <Section dark={true}>
                [Nossos Serviços]
            </Section>
            <Section>
                [Horário de Atendimento]
            </Section>
            <Section dark={true}>
                [Feedbacks]
            </Section>
            <Section>
                [Mais]
            </Section>
        </div>
    )
}