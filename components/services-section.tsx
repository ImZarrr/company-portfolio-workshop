import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Smartphone, Globe, Database, Shield, BarChart } from "lucide-react"

export function ServicesSection() {
  const services = [
    {
      icon: Globe,
      title: "Pengembangan Website",
      description:
        "Website responsif dan modern dengan teknologi terdepan untuk meningkatkan presence online bisnis Anda.",
    },
    {
      icon: Smartphone,
      title: "Aplikasi Mobile",
      description: "Aplikasi mobile native dan cross-platform yang user-friendly untuk iOS dan Android.",
    },
    {
      icon: Code,
      title: "Sistem Custom",
      description: "Pengembangan sistem khusus sesuai kebutuhan bisnis dengan arsitektur yang scalable.",
    },
    {
      icon: Database,
      title: "Manajemen Data",
      description: "Solusi database dan analytics untuk mengoptimalkan pengelolaan data perusahaan.",
    },
    {
      icon: Shield,
      title: "Keamanan Cyber",
      description: "Implementasi sistem keamanan tingkat enterprise untuk melindungi aset digital.",
    },
    {
      icon: BarChart,
      title: "Konsultasi IT",
      description: "Konsultasi strategis untuk transformasi digital dan optimasi infrastruktur teknologi.",
    },
  ]

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Layanan Kami</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Kami menyediakan berbagai layanan teknologi komprehensif untuk memenuhi kebutuhan digital bisnis modern
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
