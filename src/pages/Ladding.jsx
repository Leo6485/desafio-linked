import Header from "../components/Header"
import Section from "../components/Section"


export default function Ladding() {
    return (
        <div>
            <Header>
                Teste
            </Header>
            <Section></Section>
            <Section dark={true}></Section>
            <Section></Section>
            <Section dark={true}></Section>
            <Section></Section>
            <Section dark={true}></Section>
        </div>
    )
}