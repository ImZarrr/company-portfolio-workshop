"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-primary">
              TechCorp
            </Link>
          </div>

          <nav className="hidden md:flex space-x-8">
            <Link href="#home" className="text-gray-600 hover:text-primary transition-colors">
              Beranda
            </Link>
            <Link href="#about" className="text-gray-600 hover:text-primary transition-colors">
              Tentang
            </Link>
            <Link href="#services" className="text-gray-600 hover:text-primary transition-colors">
              Layanan
            </Link>
            <Link href="#portfolio" className="text-gray-600 hover:text-primary transition-colors">
              Portofolio
            </Link>
            <Link href="#team" className="text-gray-600 hover:text-primary transition-colors">
              Tim
            </Link>
            <Link href="#contact" className="text-gray-600 hover:text-primary transition-colors">
              Kontak
            </Link>
          </nav>

          <div className="hidden md:flex">
            <Button>Hubungi Kami</Button>
          </div>

          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <Link href="#home" className="block px-3 py-2 text-gray-600 hover:text-primary">
                Beranda
              </Link>
              <Link href="#about" className="block px-3 py-2 text-gray-600 hover:text-primary">
                Tentang
              </Link>
              <Link href="#services" className="block px-3 py-2 text-gray-600 hover:text-primary">
                Layanan
              </Link>
              <Link href="#portfolio" className="block px-3 py-2 text-gray-600 hover:text-primary">
                Portofolio
              </Link>
              <Link href="#team" className="block px-3 py-2 text-gray-600 hover:text-primary">
                Tim
              </Link>
              <Link href="#contact" className="block px-3 py-2 text-gray-600 hover:text-primary">
                Kontak
              </Link>
              <div className="px-3 py-2">
                <Button className="w-full">Hubungi Kami</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
