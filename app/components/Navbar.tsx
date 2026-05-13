'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, Shield } from 'lucide-react'

const navLinks = [
  { href: '/como-funciona', label: 'Como Funciona' },
  { href: '/pesquisar-marca', label: 'Pesquisar Marca' },
  { href: '/sobre', label: 'Sobre' },
  { href: '/blog', label: 'Blog' },
  { href: '/contato', label: 'Contato' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={mounted ? { y: -100 } : false}
      animate={mounted ? { y: 0 } : false}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-bg-primary/80 backdrop-blur-lg border-b border-border' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-brand to-green flex items-center justify-center transition-transform group-hover:scale-110">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-heading font-bold text-white">
              Regi<span className="text-brand">web</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors relative ${
                  pathname === link.href 
                    ? 'text-white' 
                    : 'text-text-secondary hover:text-white'
                }`}
              >
                {link.label}
                {pathname === link.href && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-brand"
                  />
                )}
              </Link>
            ))}
          </div>

          <div className="hidden md:block">
            <Link 
              href="/contato"
              className="btn-primary"
            >
              Começar Agora
            </Link>
          </div>

          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden pb-6"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-lg font-medium transition-colors ${
                    pathname === link.href ? 'text-brand' : 'text-text-secondary hover:text-white'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link 
                href="/contato"
                className="btn-primary text-center mt-4"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Começar Agora
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}