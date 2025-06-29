"use client"

import { useEffect, useRef, useState } from "react"
import { Code, Server, Cloud, Zap, Lightbulb, Target } from "lucide-react"

const stats = [
  { number: "10+", label: "Projects Completed" },
  { number: "2+", label: "Years Experience" },
  { number: "15+", label: "Technologies Mastered" },
  { number: "500+", label: "Users Served" },
]

const highlights = [
  {
    icon: Code,
    title: "Full Stack Development",
    description: "MERN stack and modern web technologies",
    color: "#888888",
  },
  {
    icon: Server,
    title: "Backend Engineering",
    description: "Node.js, Express.js, and database design",
    color: "#B0B0B0",
  },
  {
    icon: Cloud,
    title: "DevOps & Cloud",
    description: "AWS, Docker, Kubernetes deployment",
    color: "#444444",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Fast load times and efficient solutions",
    color: "#E0E0E0",
  },
]

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true)

            if (typeof window !== "undefined" && window.gsap) {
              const tl = window.gsap.timeline()

              // Animate stats
              const statsChildren = statsRef.current?.children
              if (statsChildren) {
                tl.fromTo(
                  Array.from(statsChildren),
                  { opacity: 0, y: 30 },
                  { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power2.out" },
                )
              }

              // Animate cards
              const cardsChildren = cardsRef.current?.children
              if (cardsChildren) {
                tl.fromTo(
                  Array.from(cardsChildren),
                  { opacity: 0, scale: 0.8, rotation: 5 },
                  { opacity: 1, scale: 1, rotation: 0, duration: 0.8, stagger: 0.15, ease: "back.out(1.7)" },
                  "-=0.3",
                )
              }
            }
          }
        })
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [isVisible])

  return (
    <section id="about" ref={sectionRef} className="py-20 px-4 bg-[#121212]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 text-[#E0E0E0]">About Me</h2>

        {/* Stats Section */}
        <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#E0E0E0] mb-2">{stat.number}</div>
              <div className="text-[#B0B0B0] text-sm md:text-base">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <p className="text-lg text-[#B0B0B0] leading-relaxed">
              I'm Vedant Singh Rajput, a passionate Full Stack Developer and DevOps enthusiast currently pursuing my
              Bachelor's in Computer Science and Engineering at Lovely Professional University. My journey in tech is
              driven by curiosity and a desire to build impactful solutions.
            </p>
            <p className="text-lg text-[#B0B0B0] leading-relaxed">
              With expertise in the MERN stack, cloud technologies, and modern development practices, I specialize in
              creating scalable web applications and implementing robust CI/CD pipelines. I've successfully delivered
              projects serving 500+ monthly users with optimized performance.
            </p>
            <p className="text-lg text-[#B0B0B0] leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or
              working on innovative solutions that solve real-world problems.
            </p>

            {/* Philosophy */}
            <div className="bg-[#444444]/20 p-6 rounded-lg border border-[#444444]">
              <h3 className="text-xl font-semibold mb-3 text-[#E0E0E0] flex items-center gap-2">
                <Lightbulb className="w-5 h-5" />
                My Philosophy
              </h3>
              <p className="text-[#B0B0B0] italic">
                "Code is not just about solving problems; it's about creating experiences that make a difference in
                people's lives."
              </p>
            </div>
          </div>

          <div ref={cardsRef} className="grid grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="bg-[#444444]/10 p-6 rounded-lg border border-[#444444] hover:border-[#888888] transition-all duration-300 hover:transform hover:scale-105"
              >
                <item.icon className="w-12 h-12 mb-4 text-[#888888]" />
                <h3 className="text-xl font-semibold mb-2 text-[#E0E0E0]">{item.title}</h3>
                <p className="text-[#B0B0B0]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mission Statement */}
        <div className="text-center bg-gradient-to-r from-[#444444]/20 to-[#888888]/20 p-8 rounded-lg border border-[#444444]">
          <Target className="w-12 h-12 text-[#E0E0E0] mx-auto mb-4" />
          <h3 className="text-2xl font-semibold mb-4 text-[#E0E0E0]">Mission</h3>
          <p className="text-lg text-[#B0B0B0] max-w-3xl mx-auto">
            To leverage cutting-edge technologies and best practices to build scalable, efficient, and user-centric
            applications that drive innovation and create meaningful impact in the digital world.
          </p>
        </div>
      </div>
    </section>
  )
}
