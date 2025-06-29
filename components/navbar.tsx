"use client"

import { useState, useEffect } from "react"
import { Menu, X, Home, User, Code, Briefcase, Award, Mail, GraduationCap } from "lucide-react"

const navItems = [
  { name: "Home", href: "#", icon: Home },
  { name: "About", href: "#about", icon: User },
  { name: "Skills", href: "#skills", icon: Code },
  { name: "Projects", href: "#projects", icon: Briefcase },
  { name: "Education", href: "#education", icon: GraduationCap },
  { name: "Certifications", href: "#certifications", icon: Award },
  { name: "Contact", href: "#contact", icon: Mail },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50
      setScrolled(isScrolled)

      // Update active section based on scroll position
      const sections = ["home", "about", "skills", "projects", "education", "certifications", "contact"]
      const currentSection = sections.find((section) => {
        const element = section === "home" ? document.body : document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })

      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setIsOpen(false)
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" })
    } else {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-[#121212]/95 backdrop-blur-md border-b border-[#444444]" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick("#")
                }}
                className="text-[#E0E0E0] text-xl font-bold hover:text-[#B0B0B0] transition-colors duration-300"
              >
                VSR
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navItems.map((item) => {
                  const isActive =
                    (item.href === "#" && activeSection === "home") ||
                    (item.href !== "#" && activeSection === item.href.slice(1))

                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault()
                        handleNavClick(item.href)
                      }}
                      className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                        isActive
                          ? "text-[#E0E0E0] bg-[#444444]"
                          : "text-[#B0B0B0] hover:text-[#E0E0E0] hover:bg-[#444444]/50"
                      }`}
                    >
                      <item.icon className="w-4 h-4" />
                      {item.name}
                    </a>
                  )
                })}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-[#B0B0B0] hover:text-[#E0E0E0] hover:bg-[#444444] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#888888] transition-colors duration-300"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 bg-[#121212]/95 backdrop-blur-md border-t border-[#444444]">
            {navItems.map((item) => {
              const isActive =
                (item.href === "#" && activeSection === "home") ||
                (item.href !== "#" && activeSection === item.href.slice(1))

              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick(item.href)
                  }}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 flex items-center gap-3 ${
                    isActive
                      ? "text-[#E0E0E0] bg-[#444444]"
                      : "text-[#B0B0B0] hover:text-[#E0E0E0] hover:bg-[#444444]/50"
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  {item.name}
                </a>
              )
            })}
          </div>
        </div>
      </nav>

      {/* Spacer to prevent content from hiding behind fixed navbar */}
      <div className="h-16"></div>
    </>
  )
}
