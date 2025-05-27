import { Card, CardContent } from "@/components/ui/card"
import { Linkedin, Twitter, Github } from "lucide-react"

export function TeamSection() {
  const team = [
    {
      name: "Ahmad Rizki",
      position: "CEO & Founder",
      image: "/placeholder.svg?height=300&width=300&query=professional CEO portrait",
      bio: "Visioner dengan pengalaman 10+ tahun di industri teknologi",
    },
    {
      name: "Sarah Putri",
      position: "CTO",
      image: "/placeholder.svg?height=300&width=300&query=professional female CTO portrait",
      bio: "Expert dalam arsitektur sistem dan pengembangan scalable solutions",
    },
    {
      name: "Budi Santoso",
      position: "Lead Developer",
      image: "/placeholder.svg?height=300&width=300&query=professional male developer portrait",
      bio: "Full-stack developer dengan spesialisasi dalam modern web technologies",
    },
    {
      name: "Maya Sari",
      position: "UI/UX Designer",
      image: "/placeholder.svg?height=300&width=300&query=professional female designer portrait",
      bio: "Creative designer yang fokus pada user experience dan interface design",
    },
  ]

  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Tim Kami</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Bertemu dengan tim profesional yang berdedikasi untuk memberikan solusi teknologi terbaik
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <Card key={index} className="group text-center hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="relative">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-32 h-32 rounded-full mx-auto object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                    <p className="text-primary font-medium">{member.position}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                  </div>
                  <div className="flex justify-center space-x-3">
                    <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors cursor-pointer">
                      <Linkedin className="h-4 w-4" />
                    </div>
                    <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors cursor-pointer">
                      <Twitter className="h-4 w-4" />
                    </div>
                    <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors cursor-pointer">
                      <Github className="h-4 w-4" />
                    </div>
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
