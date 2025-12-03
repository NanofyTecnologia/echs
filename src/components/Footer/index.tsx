'use client'

import Container from '../Container'
import Link from 'next/link'

export default function Footer() {
  return (
    <>
      <footer className="bg-secondary py-10">
        <Container>
          <div className="grid grid-cols-1 space-y-8 md:grid-cols-3 md:space-y-0">
            <div className="flex flex-col items-center justify-center gap-2 md:flex-row">
              <div className="space-y-1 text-sm text-lightgray">
                <h5>ECHS Empresa de Contabilidade LTDA.</h5>
                <h6 className="text-center md:text-start">
                  CNPJ: 06.138.346/0001-37
                </h6>
              </div>
            </div>
            <div className="text-center text-[#d4d4d4]">
              <h5 className="text-white">Navegação</h5>
              <ul className="space-y-2">
                <li>
                  <Link href="//#inicio" className="cursor-pointer">
                    Início
                  </Link>
                </li>
                <li>
                  <Link href="//#sobrenos" className="cursor-pointer">
                    Sobre Nós
                  </Link>
                </li>
                <li>
                  <Link href="//#servicos" className="cursor-pointer">
                    Serviços
                  </Link>
                </li>
                <li>
                  <Link href="//#contato" className="cursor-pointer">
                    Contato
                  </Link>
                </li>
              </ul>
            </div>
            <div className="text-center text-[#d4d4d4]">
              <h5 className="text-white">Informações</h5>
              <ul className="space-y-2">
                <li>
                  <h5>contato@echs.com.br</h5>
                </li>
                <li>
                  <h6>(16) 3374-6730</h6>
                </li>
                <li>
                  <h6>(16) 3371-9014</h6>
                </li>
                <li>
                  <Link
                    className="hover:underline"
                    href="https://www.instagram.com/echs.contabilidade"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Instagram
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </footer>
    </>
  )
}
