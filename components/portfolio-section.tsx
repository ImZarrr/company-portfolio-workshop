import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"

export function PortfolioSection() {
  const projects = [
    {
      title: "E-Commerce Platform",
      category: "Web Development",
      description: "Platform e-commerce lengkap dengan sistem pembayaran terintegrasi dan dashboard admin.",
      image: "/placeholder.svg?height=300&width=400&query=modern ecommerce website interface",
      tags: ["React", "Node.js", "MongoDB"],
    },
    {
      title: "Mobile Banking App",
      category: "Mobile App",
      description: "Aplikasi mobile banking dengan fitur keamanan tinggi dan interface yang intuitif.",
      image: "/placeholder.svg?height=300&width=400&query=mobile banking app interface",
      tags: ["React Native", "Firebase", "Biometric"],
    },
    {
      title: "ERP System",
      category: "Enterprise",
      description: "Sistem ERP komprehensif untuk manajemen inventory, keuangan, dan SDM.",
      image: "/placeholder.svg?height=300&width=400&query=enterprise ERP dashboard interface",
      tags: ["Vue.js", "Laravel", "PostgreSQL"],
    },
    {
      title: "IoT Dashboard",
      category: "IoT Solution",
      description: "Dashboard monitoring real-time untuk perangkat IoT dengan analytics mendalam.",
      image: "/placeholder.svg?height=300&width=400&query=IoT monitoring dashboard with charts",
      tags: ["Angular", "Python", "InfluxDB"],
    },
    {
      title: "Learning Management System",
      category: "Education",
      description: "Platform pembelajaran online dengan fitur video streaming dan assessment.",
      image: "/placeholder.svg?height=300&width=400&query=online learning platform interface",
      tags: ["Next.js", "Prisma", "AWS"],
    },
    {
      title: "Healthcare Portal",
      category: "Healthcare",
      description: "Portal kesehatan terintegrasi untuk manajemen pasien dan rekam medis.",
      image: "/placeholder.svg?height=300&width=400&query=healthcare patient management portal",
      tags: ["React", "Express", "MySQL"],
    },
  ]

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Portofolio Kami</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Lihat beberapa proyek terbaik yang telah kami kerjakan untuk berbagai industri dan skala bisnis
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <ExternalLink className="h-8 w-8 text-white" />
                </div>
              </div>
              <CardContent className="p-6">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary">{project.category}</Badge>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
