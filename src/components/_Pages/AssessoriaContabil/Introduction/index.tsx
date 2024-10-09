import Container from '@/components/Container'
import Card from '@/components/ui/Card'

export default function IntroductionAC() {
  return (
    <section className="bg-aliceBlue py-6 md:py-12">
      <Container>
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-center text-lg font-bold md:text-2xl">
            Assessoria Contábil
          </h2>
          <div className="mt-2 h-[2px] w-8 bg-primary" />
        </div>

        <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-3">
          <Card
            icon="building-2"
            text="Contabilidade para pequenas e médias empresas"
          />
          <Card icon="computer" text="Abertura de empresas" />
          <Card icon="captions-off" text="Encerramento de empresas" />
          <Card icon="scroll-text" text="Alterações contratuais" />
          <Card
            icon="id-card"
            text="Consultoria trabalhista e previdenciária"
          />
          <Card icon="newspaper" text="Escritura fiscal" />
          <Card icon="building" text="Despartamento pessoal" />
          <Card icon="book-check" text="Legalização de empresas" />
          <Card icon="layers" text="Crédito acumulado de ICMS" />
          <Card icon="file-user" text="Imposto de renda pessoa física" />
        </div>
      </Container>
    </section>
  )
}
