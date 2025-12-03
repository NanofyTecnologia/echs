import Container from '@/components/Container'
import ChevronsText from '@/components/ui/ChevronsText'

export default function IntroductionPF() {
  return (
    <section className="bg-aliceBlue py-6 text-justify md:py-12">
      <Container>
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-center text-lg font-bold md:text-2xl">
            Planejamento Financeiro
          </h2>
          <div className="bg-primary mt-2 h-0.5 w-8" />
        </div>

        <div className="mt-6 space-y-4">
          <p>
            Planejamento financeiro nada mais é do que ajudar o cliente a ter
            uma visão de médio e longo prazo sobre a evolução da situação
            financeira dele. É muito importante que o empresário tenha em mãos a
            projeção de fluxo de caixa da empresa dele, para saber como
            contornar os riscos de curto prazo.
          </p>
          <p>
            Quando falamos de planejamento financeiro, nos referimos ao
            horizonte temporal seguinte, ou seja, olhamos para além das contas a
            pagar e a receber que já estão acordadas com clientes e
            fornecedores. Isso significa falar dos meses e/ou anos seguintes.
          </p>
          <p>
            Quanto fazemos o planejamento financeiro de um cliente, o ajudamos a
            responder perguntas como:
          </p>
          <ChevronsText text="Vou continuar de portas abertas até o final do ano?" />
          <ChevronsText text="Quanto devo crescer no ano que vem?" />
          <ChevronsText text="Quanto devo colocar no bolso na forma de lucros ao longo dos próximos anos?" />
          <ChevronsText text="Como vou financiar minha estratégia de crescimento?" />
          <ChevronsText text="Vou ter caixa suficiente para isso ou vou precisar pensar em sócios e/ou credores?" />
          <ChevronsText text="Qual a melhor estratégia?" />
          <ChevronsText text="Meu negócio é viável a longo prazo?" />
        </div>
      </Container>
    </section>
  )
}
