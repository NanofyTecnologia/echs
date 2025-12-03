import Link from 'next/link'

export default function NotFound() {
  return (
    <>
      <div className="flex h-screen flex-col items-center justify-center">
        <h1 className="text-lg font-semibold">Não encontrado (404)</h1>
        <p className="mt-1 text-sm">
          A página que você procurou não existe ou foi movida.
        </p>

        <Link href="/" className="hover:text-app-primary mt-4 hover:underline">
          Clique aqui para voltar!
        </Link>
      </div>
    </>
  )
}
