import Image from 'next/image'

import { Check } from 'lucide-react'

import img1 from '@/assets/img/img1.jpg'
import Container from '@/components/Container'

export default function IntroductionBPO() {
  return (
    <section className="bg-aliceBlue py-6 md:py-12">
      <Container>
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-center text-lg font-bold md:text-2xl">
            BPO Financeiro
          </h2>
          <div className="bg-primary mt-2 h-0.5 w-8" />
        </div>
        <div className="mt-6 text-justify">
          <p>
            O que é e como funciona a terceirização financeira? Terceirização
            financeira (BPO Financeiro) é o processo de contratação de uma
            empresa especializada em serviços financeiros para cuidar de tarefas
            relacionadas ao departamento financeiro da contratante, incluindo:
          </p>
          <div className="my-4 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-0">
            <div>
              <div className="mt-4 space-y-2">
                <div className="flex items-center">
                  <Check className="text-primary" />
                  <p className="ml-2">Gestão de contas pagar</p>
                </div>
                <div className="flex items-center">
                  <Check className="text-primary" />
                  <p className="ml-2">Gestão de contas a receber</p>
                </div>
                <div className="flex items-center">
                  <Check className="text-primary" />
                  <p className="ml-2">Conciliação bancária</p>
                </div>
                <div className="flex items-center">
                  <Check className="text-primary" />
                  <p className="ml-2">Controle de fluxo de caixa</p>
                </div>
                <div className="flex items-center">
                  <Check className="text-primary" />
                  <p className="ml-2">Emissão de relatórios financeiros</p>
                </div>
                <div className="flex items-center">
                  <Check className="text-primary" />
                  <p className="ml-2">Emissão de notas fiscais e boletos</p>
                </div>
                <div className="flex items-center">
                  <Check className="text-primary" />
                  <p className="ml-2">Dentre outras atividades importantes</p>
                </div>
              </div>
              <p className="mt-4">
                Essa prática permite que as empresas contratantes se concentrem
                no seu core business (atividade principal), delegando as tarefas
                financeiras de caráter repetitivo e operacional a profissionais
                especializados.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src={img1}
                alt="contabilidade"
                quality={80}
                placeholder="empty"
                loading="lazy"
                fetchPriority="low"
                className="rounded-sm"
              />
            </div>
          </div>
          <p className="">
            Como a empresa terceirizada se responsabiliza pelas tarefas listadas
            acima e acordadas no contrato, a terceirização acaba sendo uma opção
            interessante para empresas que desejam reduzir custos e aumentar a
            eficiência de suas operações.
          </p>
        </div>
      </Container>
    </section>
  )
}
