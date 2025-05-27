import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Target, Users, Zap } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Tentang TechCorp</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                TechCorp adalah perusahaan teknologi yang berdedikasi untuk memberikan solusi digital inovatif. Dengan
                tim ahli yang berpengalaman, kami telah membantu ratusan perusahaan mencapai tujuan bisnis mereka
                melalui teknologi.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-green-500" />
                <span className="text-gray-700">Pengalaman lebih dari 5 tahun</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-green-500" />
                <span className="text-gray-700">Tim profesional bersertifikat</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-green-500" />
                <span className="text-gray-700">Teknologi terdepan dan terpercaya</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-green-500" />
                <span className="text-gray-700">Support 24/7 untuk semua klien</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0 text-center space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-gray-900">Misi Kami</h3>
                <p className="text-sm text-gray-600">
                  Memberikan solusi teknologi yang mengubah cara bisnis beroperasi
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0 text-center space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-gray-900">Visi Kami</h3>
                <p className="text-sm text-gray-600">Menjadi partner teknologi terpercaya untuk transformasi digital</p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow col-span-2">
              <CardContent className="p-0 text-center space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-gray-900">Nilai Kami</h3>
                <p className="text-sm text-gray-600">
                  Integritas, inovasi, dan komitmen untuk memberikan hasil terbaik bagi setiap klien
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
