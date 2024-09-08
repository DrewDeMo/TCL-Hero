import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'

interface NavLinkProps {
  href: string
  label: string
  isActive: boolean
  onClick: (href: string) => void
  textColorClass: string
}

const NavLink: React.FC<NavLinkProps> = ({ href, label, isActive, onClick, textColorClass }) => {
  return (
    <button
      onClick={() => onClick(href)}
      className={`
        text-sm font-medium px-4 py-2 rounded-full
        transition-all duration-200 ease-in-out
        flex items-center justify-center
        ${textColorClass}
        ${isActive ? 'border border-current border-opacity-40' : 'hover:bg-opacity-10 hover:bg-white'}
      `}
    >
      {label}
    </button>
  )
}

interface ViteNavigationProps {
  currentSection: number;
  sectionColors: string[];
  onNavClick: (href: string) => void;
}

export default function ViteNavigation({ currentSection, sectionColors, onNavClick }: ViteNavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const links = [
    { href: "#home", label: "Home" },
    { href: "#services", label: "Services" },
    { href: "#about", label: "About" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#contact", label: "Contact" },
  ]

  const handleLinkClick = (href: string) => {
    setIsMenuOpen(false)
    onNavClick(href)
  }

  const currentBgColorClass = sectionColors[currentSection]
  const textColorClass = currentBgColorClass.includes('bg-white') || currentBgColorClass.includes('bg-gray-100') ? 'text-[#cc5500]' : 'text-white'

  return (
    <header className={`${currentBgColorClass} transition-colors duration-300`}>
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-20">
          <button onClick={() => handleLinkClick('#home')} className={`text-2xl font-bold tracking-tighter transform hover:scale-105 transition-all duration-300 ease-in-out ${textColorClass}`}>
            <span className={`${currentBgColorClass === 'bg-white' || currentBgColorClass === 'bg-gray-100' ? 'bg-[#cc5500] bg-opacity-15' : 'bg-white bg-opacity-15'} ${textColorClass} px-2 py-1 rounded`}>TCL</span>
            <span className="ml-2">Marketing</span>
          </button>
          <div className="hidden lg:flex space-x-1">
            {links.map((link, index) => (
              <NavLink
                key={link.href}
                href={link.href}
                label={link.label}
                isActive={index === currentSection}
                onClick={handleLinkClick}
                textColorClass={textColorClass}
              />
            ))}
          </div>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden ${textColorClass} focus:outline-none transform hover:scale-105 transition-transform duration-200 ease-in-out`}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>
      <div 
        className={`
          lg:hidden absolute top-20 left-0 right-0 z-50 
          transition-all duration-300 ease-in-out overflow-hidden
          ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
        `}
      >
        <nav className={`flex flex-col space-y-2 p-4 ${currentBgColorClass}`}>
          {links.map((link, index) => (
            <NavLink
              key={link.href}
              href={link.href}
              label={link.label}
              isActive={index === currentSection}
              onClick={handleLinkClick}
              textColorClass={textColorClass}
            />
          ))}
        </nav>
      </div>
    </header>
  )
}