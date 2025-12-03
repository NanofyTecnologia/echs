'use client'

import React, { useEffect, useRef, useState } from 'react'
import { Link as ScrollLink } from 'react-scroll'

import Container from '@/components/Container'
import Image from 'next/image'

import Link from 'next/link'
import echslogo from '@/assets/echs_bg.png'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [windowScrolled, setWindowScrolled] = useState<boolean>(false)
  const menuRef = useRef<HTMLDivElement | null>(null)

  const handleScroll = () => {
    const { scrollY } = window

    if (scrollY > 65) {
      setWindowScrolled(true)
      return
    }

    setWindowScrolled(false)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  useEffect(() => {
    handleScroll()

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (isOpen && !menuRef.current?.contains(event.target as Node)) {
        closeMenu()
      }
    }

    document.addEventListener('click', handleOutsideClick)

    return () => {
      document.removeEventListener('click', handleOutsideClick)
    }
  }, [isOpen])
  return (
    <>
      <div className="block h-16 md:h-[72px]"></div>
      <nav
        className={`fixed left-0 top-0 z-50 w-full bg-[#F3F6FB] px-1 transition-colors duration-200 md:px-6 ${
          windowScrolled ? 'fixed h-16 shadow-md md:h-[72px]' : ''
        }`}
      >
        <Container>
          <div className="flex w-full items-center justify-between text-black">
            <ScrollLink
              to="/"
              offset={0}
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              <Image
                src={echslogo}
                alt="Logo Echs Contabilidade"
                className="my-4 h-8 w-12 object-cover md:h-10 md:w-14"
              />
            </ScrollLink>
            <div
              className={`md:text-md hidden sm:visible sm:flex sm:items-center md:gap-2 ${
                windowScrolled ? 'text-black' : ''
              }`}
            >
              <ul className="inline-flex gap-4 uppercase md:gap-12">
                <li>
                  <Link href="//#inicio" className="hover:text-primary">
                    Início
                  </Link>
                </li>
                <li>
                  <Link href="//#sobrenos" className="hover:text-primary">
                    Sobre
                  </Link>
                </li>
                <li>
                  <Link href="//#servicos" className="hover:text-primary">
                    Serviços
                  </Link>
                </li>
                <li>
                  <Link href="//#contato" className="hover:text-primary">
                    Contato
                  </Link>
                </li>
              </ul>
            </div>

            <div className="relative sm:hidden">
              <button
                onClick={() => setIsOpen((prev) => !prev)}
                className="flex h-8 w-8 items-center justify-center text-4xl"
                aria-label="Menu"
              >
                {isOpen ? (
                  <X className="h-full" />
                ) : (
                  <Menu className="h-full" />
                )}
              </button>
              {isOpen && (
                <div
                  ref={menuRef}
                  className="absolute -right-5 z-10 duration-1000"
                >
                  <ul className="mt-4 h-screen w-64 bg-secondary  px-5 py-2 text-black shadow-md">
                    <li className="py-4 text-white">
                      <Link href="//#inicio">
                        <div>Inicio</div>
                      </Link>
                    </li>
                    <li className="py-4 text-white">
                      <Link href="//#sobrenos">
                        <div>Sobre</div>
                      </Link>
                    </li>
                    <li className="py-4 text-white">
                      <Link href="//#servicos">
                        <div>Serviços</div>
                      </Link>
                    </li>
                    <li className="py-4 text-white">
                      <Link href="//#contato">
                        <div>Contato</div>
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </Container>
      </nav>
    </>
  )
}
