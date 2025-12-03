import Container from '@/components/Container'
import Card from '@/components/ui/Card'

export default function IntroductionDSL() {
  return (
    <section className="bg-aliceBlue py-6 text-justify md:py-12">
      <Container>
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-center text-lg font-bold md:text-2xl">
            Dobre seus Lucros
          </h2>
          <div className="bg-primary mt-2 h-0.5 w-8" />
        </div>

        <div className="mt-6 space-y-4">
          <p>Você acredita que sua empresa gera todo o lucro de que é capaz?</p>
          <p>
            Você empresário, pode de forma fácil e rápida, dobrar seus lucros e
            ao mesmo tempo potencializar o ânimo, o dinamismo e o valor da sua
            empresa
          </p>
          <p>
            Todo custo pode ser reduzido. O primeiro passo no sentido de reduzir
            custos é encarar todo custo como, na melhor das hipóteses, um mal
            necessário.
          </p>
          <p>
            Para reduzir custos e maximizar os lucros, você não precisa de alta
            tecnologia e sim de resolução e determinação. Se realmente quiser
            dobrar os lucros da sua empresa, se for persistente nisso, a coisa é
            fácil. Mas se não estiver realmente disposto a fazer o que deve ser
            feito, seja pessoalmente ou contratando alguém de fora, então é
            impossível.
          </p>
          <p>
            Com a nossa ajuda, você empreendedor, vai conseguir reduzir os
            custos, aumentar as vendas e melhorar drasticamente os resultados de
            sua empresa em seis meses ou menos.
          </p>
          <p>
            A ECHS Contabilidade, trabalha com metodologia consultiva que reduz
            os desperdícios; ensina a lidar com os fornecedores; a motivar seus
            vendedores; aumentar a produtividade e o preço dos produtos ou
            serviços, sem perder o cliente ou deixá-lo insatisfeito.
          </p>
          <p>
            Contratando os serviços de nossa empresa, você terá contratado a
            ajuda das pessoas mais dedicadas e dinâmicas que você já viu na
            vida. Toda a nossa capacidade, expertise e todo o nosso talento
            serão direcionados para fazer o que você precisa. Mais do que você
            mesmo, seremos motivados a atender às suas necessidades. Por você,
            enfrentaremos qualquer risco se necessário, com certeza. Muito
            obrigado.
          </p>
        </div>
        <div className="mt-6 flex flex-wrap justify-center gap-5 md:justify-between md:gap-0">
          <Card icon="star" text="Criar a cultura" />
          <Card icon="ticket-percent" text="Reduzir os custos" />
          <Card icon="chart-no-axes-combined" text="Aumentar as vendas" />
        </div>
      </Container>
    </section>
  )
}
