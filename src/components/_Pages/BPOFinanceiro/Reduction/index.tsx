import Container from '@/components/Container'
import { ChevronsRight } from 'lucide-react'

export default function ReductionBPO() {
  return (
    <section className="bg-aliceBlue py-6 md:py-12">
      <Container>
        <h2 className="text-lg font-bold md:text-xl">
          Redução de custos: como a terceirização financeira pode ajudar a
          economizar dinheiro
        </h2>

        <div className="mt-6 text-justify">
          <p>
            A terceirização pode ajudar as empresas a economizar dinheiro de
            várias maneiras. Abaixo estão algumas delas:
          </p>
          <div className="mt-4 space-y-2">
            <div className="inline-flex items-start">
              <div>
                <ChevronsRight className=" mt-[2px] h-auto w-6 text-primary" />
              </div>
              <p className="ml-2">
                <strong>Redução de despesas com pessoal:</strong> Ao terceirizar
                a área financeira, as empresas não precisam aumentar os custos
                de contratação, treinamento, salários e benefícios de
                funcionários em tempo integral.
              </p>
            </div>
            <div className="inline-flex items-start">
              <div>
                <ChevronsRight className=" mt-[2px] h-auto w-6 text-primary" />
              </div>
              <p className="ml-2">
                <strong>
                  Redução de despesas com equipamentos e tecnologia:
                </strong>{' '}
                Ao terceirizar o financeiro, as empresas não precisam investir
                em equipamentos e tecnologias caras, como softwares de gestão
                financeira e equipamentos de escritório.
              </p>
            </div>
            <div className="inline-flex items-start">
              <div>
                <ChevronsRight className=" mt-[2px] h-auto w-6 text-primary" />
              </div>
              <p className="ml-2">
                <strong>Redução de despesas com treinamento:</strong> As
                empresas de terceirização geralmente investem em treinamento e
                desenvolvimento de seus funcionários, garantindo que estejam
                sempre atualizados sobre práticas mais recentes. Em
                contrapartida, quem contrata uma empresa de terceirização, não
                precisa preocupar com esse tipo de custo.
              </p>
            </div>
            <div className="inline-flex items-start">
              <div>
                <ChevronsRight className=" mt-[2px] h-auto w-6 text-primary" />
              </div>
              <p className="ml-2">
                <strong>Redução de erros financeiros:</strong> Quando as
                empresas contam com uma equipe interna para lidar com finanças,
                há sempre um risco de erros financeiros. Esses erros podem
                custar caro, principalmente quando envolvem multas ou
                penalidades. Ao terceirizar o financeiro, as empresas podem
                minimizar esse risco, economizando dinheiro a longo prazo.
              </p>
            </div>
          </div>
          <p className="mt-4">
            Sem dúvida alguma, com todos os itens listados, só pela economia
            gerada já valeria a pena terceirizar o financeiro, mas, como vimos
            anteriormente, empresas que optam por essa ferramenta, ainda podem
            fazer proveito de benefícios importantes.
          </p>
        </div>
      </Container>
    </section>
  )
}
