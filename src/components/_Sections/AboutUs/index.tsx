import Image from 'next/image'

import echslogo from '@/assets/echs_bg.png'
import Container from '@/components/Container'

export default function AboutUs() {
  return (
    <section className="my-6 flex justify-center md:my-12" id="sobrenos">
      <Container>
        <h2 className="text-center text-base font-bold md:text-xl">
          Sobre Nós
        </h2>
        <div className="mx-auto mt-6 items-center md:grid md:grid-cols-2">
          <div>
            <Image
              src={echslogo}
              alt="Logo Echs Contabilidade"
              className="mx-auto h-28 w-28 md:h-96 md:w-max"
            />
          </div>
          <div className="mx-auto mt-5 text-justify md:mt-0">
            <div className="mx-auto space-y-4 text-sm">
              <p>
                A ECHS é uma empresa de contabilidade, que oferece soluções em
                serviços contábeis, planejamento, controladoria e finanças, para
                pequenas e médias empresas, na cidade de São Carlos e região.
              </p>
              <p>
                Deixamos de ser uma empresa contábil que só oferece um serviço
                comoditizado básico para seus clientes e passamos a entregar
                valor, de forma consistente. Dentre outros serviços, estamos
                oferecendo aos empresários a Terceirização Financeira (BPO
                Financeiro), que ao terceirizarem as atividades financeiras de
                suas empresas, eles conseguem reduzir custos, aumentar a
                eficiência e a produtividade, além de contar com a expertise de
                profissionais especializados em gestão financeira empresarial.
              </p>
              <p>
                A Gestão Financeira é o coração do seu negócio. Você deve
                controlar bem suas atividades financeiras para que sua empresa
                se mantenha de pé, ou seja, para que permaneça no mercado,
                gerando caixa e lucros.
              </p>
              <p>
                Entendemos que as finanças são a força vital de todo negócio,
                portanto o objetivo de organizá-las é fazer com que a empresa
                tenha sempre uma “Luz” para se orientar a fim de crescer de
                maneira sustentável (e consiga economizar muitos reais e muitas
                dores de cabeça).
              </p>
              <p>
                Hoje os clientes nos veem como uma consultoria financeira.
                Deixamos de ser o mal necessário, o contador do fisco, e nos
                tornamos uma peça fundamental para o sucesso do negócio.
              </p>
              <p>
                Os empresários precisam de ajuda, de um direcionamento e é
                justamente isso que de melhor fazemos.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
