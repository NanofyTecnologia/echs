import Link from 'next/link'

import {
  ChartNoAxesCombined,
  FileSearch2,
  FileChartColumn,
  NotepadText,
  HandCoins,
} from 'lucide-react'

import Container from '@/components/Container'

export default function Services() {
  return (
    <section className="bg-aliceBlue py-6 md:py-12" id="servicos">
      <Container>
        <div className="text-center">
          <h2 className="text-center text-lg font-bold md:text-xl">Serviços</h2>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="border-primary h-full w-full border-t-2 bg-white px-5 py-10 shadow-md">
            <div className="flex justify-center">
              <ChartNoAxesCombined className="h-10 w-auto" />
            </div>

            <div className="mt-5 mb-4 text-center text-lg font-bold">
              Assessoria Contábil
            </div>

            <p className="text-center text-sm text-black/80">
              Soluções personalizadas para empresas de todos os portes.
              Economize tempo e dinheiro com uma assessoria contábil completa.
            </p>
            <Link
              href="/assessoria-contabil"
              aria-label="saiba mais"
              rel="noreferrer noopener"
            >
              <div className="border-primary text-primary hover:bg-primary mt-8 flex h-11 w-full items-center justify-center border text-sm duration-300 hover:text-white">
                Saiba mais
              </div>
            </Link>
          </div>
          <div className="border-primary h-full w-full border-t-2 bg-white px-5 py-10 shadow-md">
            <div className="flex justify-center">
              <FileChartColumn className="h-10 w-auto" />
            </div>

            <div className="mt-5 mb-4 text-center text-lg font-bold">
              BPO Financeiro
            </div>

            <p className="text-center text-sm text-black/80">
              Simplifique sua gestão financeira! Concentre-se no crescimento do
              seu negócio enquanto cuidamos de suas contas.
            </p>
            <Link
              href="/bpo-financeiro"
              aria-label="saiba mais"
              rel="noreferrer noopener"
            >
              <div className="border-primary text-primary hover:bg-primary mt-8 flex h-11 w-full items-center justify-center border text-sm duration-300 hover:text-white">
                Saiba mais
              </div>
            </Link>
          </div>
          <div className="border-primary h-full w-full border-t-2 bg-white px-5 py-10 shadow-md">
            <div className="flex justify-center">
              <NotepadText className="h-10 w-auto" />
            </div>

            <div className="mt-5 mb-4 text-center text-lg font-bold">
              Aconselhamento Financeiro
            </div>

            <p className="text-center text-sm text-black/80">
              O sucesso do seu negócio começa com uma contabilidade eficiente.
              Invista em um futuro financeiro seguro!
            </p>
            <Link
              href="aconselhamento-financeiro"
              aria-label="saiba mais"
              rel="noreferrer noopener"
            >
              <div className="border-primary text-primary hover:bg-primary mt-8 flex h-11 w-full items-center justify-center border text-sm duration-300 hover:text-white">
                Saiba mais
              </div>
            </Link>
          </div>
          <div className="border-primary h-full w-full border-t-2 bg-white px-5 py-10 shadow-md">
            <div className="flex justify-center">
              <FileSearch2 className="h-10 w-auto" />
            </div>

            <div className="mt-5 mb-4 text-center text-lg font-bold">
              Planejamento Financeiro
            </div>

            <p className="text-center text-sm text-black/80">
              Análises precisas e decisões assertivas. Um bom planejamento
              financeiro é a bússola que guia seu negócio para o sucesso.
            </p>
            <Link
              href="/planejamento-financeiro"
              aria-label="saiba mais"
              rel="noreferrer noopener"
            >
              <div className="border-primary text-primary hover:bg-primary mt-8 flex h-11 w-full items-center justify-center border text-sm duration-300 hover:text-white">
                Saiba mais
              </div>
            </Link>
          </div>
          <div className="border-primary h-full w-full border-t-2 bg-white px-5 py-10 shadow-md">
            <div className="flex justify-center">
              <HandCoins className="h-10 w-auto" />
            </div>

            <div className="mt-5 mb-4 text-center text-lg font-bold">
              Dobre seus Lucros
            </div>

            <p className="text-center text-sm text-black/80">
              Desvende os segredos e descubra como otimizar seus recursos,
              reduzir custos e aumentar sua rentabilidade.
            </p>
            <Link
              href="/dobre-seus-lucros"
              aria-label="saiba mais"
              rel="noreferrer noopener"
            >
              <div className="border-primary text-primary hover:bg-primary mt-8 flex h-11 w-full items-center justify-center border text-sm duration-300 hover:text-white">
                Saiba mais
              </div>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  )
}
