import Container from '@/components/Container'
import CheckText from '@/components/ui/CheckText'

export default function IntroductionAF() {
  return (
    <section className="bg-aliceBlue py-6 text-justify md:py-12">
      <Container>
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-center text-lg font-bold md:text-2xl">
            Aconselhamento Financeiro
          </h2>
          <div className="bg-primary mt-2 h-0.5 w-8" />
        </div>

        <div className="mt-6 space-y-4">
          <p>
            De posse de um relatório financeiro em ordem, ou inputs estruturados
            que permita o Contador Consultor, gerar um relatório, esse
            profissional consegue ajudá-lo a ter uma visão mais clara sobre suas
            finanças.
          </p>
          <p>
            Fazer aconselhamento financeiro nada mais é do que nós Contadores
            Consultores, ajudar seu cliente a:
          </p>
          <CheckText text="Entender o que está acontecendo com as finanças da empresa dele;" />
          <CheckText text="Focar a atenção dele à execução do que vai trazer mais resultado;" />
          <CheckText text="Tomar as melhores decisões possíveis." />
          <p>
            Muita gente tem aversão ao assunto “finanças” e que consideram o
            tema complexo e de difícil entendimento. De fato, dentro do universo
            financeiro existem tópicos extremamente sofisticados, como
            precificação de ativos, derivados e afins.
          </p>
          <p>
            No entanto, em nossa humilde opinião, a aversão que muitos sentem em
            relação aos conceitos básicos de finanças (básicos, porém muito
            poderosos no mundo empresarial) é mais uma falta de capacidade de
            quem explica, do que quem ouve. Às vezes, aqueles que falam sobre o
            tema tendem a complicar demais, dificultando a vida de quem precisa
            de conselhos.
          </p>
        </div>
      </Container>
    </section>
  )
}
