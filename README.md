### Autor

Leonardo Guimarães de Oliveira

# Sobre o projeto

Landing page desenvolvida para um consultório de psicologia e psicoterapia, com base em um design no Figma para o desafio técnico da Linked.
Apresenta os serviços do consultório, horários de funcionamento, depoimentos de clientes, mapa de localização e formulário de contato para agendamentos.

# Como rodar o projeto localmente

``` bash
npm install
```

```bash
npm run dev
```

# Tecnologias e ferramentas utilizadas

## Bibliotecas e módulos

- React
- Vite
- Tailwind CSS
- AOS (Animate On Scroll)
- React Icons

## Ferramentas

- Antigravity IDE


# Decisões técnicas

## GIT

Todo o desenvolvimento foi feito na branch `main` e sem revisão, pois o escopo do projeto é pequeno e o desenvolvimento foi realizado individualmente, tornando desnecessária a adoção de certas práticas.

## Ativos

PNGs foram convertidos para WEBPs, reduzindo o tamanho dos arquivos e o tempo de carregamento da página.

O PNG do relógio foi refeito em SVG (`assets/clock.svg`) e ajustado para a cor adequada.

As curvas SVG sobrepostas à imagem da seção inicial foram unificadas em um único arquivo (`assets/line.svg`), simplificando seu uso e manipulação.

## Responsividade e estilo

Adicionado um menu hambúrguer para telas pequenas e médias, substituindo a navegação direta pelo header.

O layout das seções inicial e de feedbacks foi ajustado para comportar as respectivas imagens mesmo em telas pequenas.

AOS foi utilizado para iniciar animações durante a rolagem da página.

Implementada a rolagem suave.

As fontes `Inter` e `Inria Serif` foram utilizadas no desenvolvimento, conforme o modelo no Figma.

## Acessibilidade

Navegação por âncoras.