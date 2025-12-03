import imageBanner from '@/assets/img/contabil.jpg'
import Container from '@/components/Container'
import BannerImage from '@/components/ui/BannerImage'
import ChevronsText from '@/components/ui/ChevronsText'

export default function BenefitsBPO() {
  return (
    <section className="my-6 md:my-12">
      <Container>
        <h2 className="text-lg font-bold md:text-xl">
          Quais os benefícios da terceirização financeira para empresas?
        </h2>

        <div className="mt-6 text-justify">
          <p>
            Via de regra, a terceirização financeira pode oferecer muitos
            benefícios, e, por sinal, é justamente em função disso que um número
            cada vez maior de organizações buscam e contratam esse tipo de
            serviço.
          </p>
          <p className="mt-4">
            Dentre os principais benefícios da terceirização financeira para
            empresas, podemos destacar:
          </p>
          <div className="mt-4 space-y-2">
            <ChevronsText
              title="Redução de custos:"
              text="A contratação de uma empresa
                de terceirização financeira pode ser mais econômica que
                contratar funcionários internos, e arcar com os custos de
                salários, benefícios, encargos sociais, férias, ausências
                inesperadas, estrutura física e treinamento."
            />
            <ChevronsText
              title="Melhoria de processos:"
              text="A terceirização
                financeira pode ajudar a melhorar os processos de gestão
                financeira da contratante, pois as empresas de terceirização
                possuem processos, procedimentos e tecnologias específicas."
            />
            <ChevronsText
              title="Foco na atividade principal:"
              text="Ao terceirizar a
                área financeira, a empresa pode se concentrar em suas atividades
                principais (core business), deixando a parte financeira nas mãos
                de especialistas."
            />
            <ChevronsText
              title="Flexibilidade:"
              text="A terceirização financeira
                oferece flexibilidade em relação ao volume de trabalho a ser
                realizado, permitindo que a empresa contratante aumente ou
                diminua a demanda de serviços com facilidade, sem precisar
                contratar ou desligar funcionários."
            />
            <ChevronsText
              title="Acesso a relatórios e indicadores:"
              text="Por fim, não
                poderíamos deixar de comentar sobre os indicadores e relatórios
                que uma empresa de terceirização financeira pode entregar,
                colaborando para uma gestão assertiva dos negócios de seus
                clientes."
            />
          </div>
          <p className="mt-4">
            Diante de todos os itens listados e de alguns outros que poderíamos
            listar aqui, não restam dúvidas, optar pela terceirização financeira
            é a melhor escolha para a maior parte das empresas.
          </p>
        </div>
        <BannerImage img={imageBanner} />
      </Container>
    </section>
  )
}
