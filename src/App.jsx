import React from 'react';
import './App.css';
import { Button } from './components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card';
import { Badge } from './components/ui/badge';
import { Sun, Zap, Shield, TrendingUp, Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

// Importando as imagens
import heroImage from './assets/BjCGHL22HaVn.jpeg';
import installationImage from './assets/abbFkTeBQtZk.jpg';
import solarPanelsImage from './assets/XNoqB2kW6ll8.png';
import houseImage from './assets/bb9VwN62tNeb.jpg';

function App() {
  const whatsappNumber = '5548996765932';
  const whatsappMessage = 'Olá! Gostaria de saber mais sobre energia solar.';
  
  const openWhatsApp = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary text-primary-foreground shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Sun className="h-8 w-8" />
              <h1 className="text-2xl font-bold">PMA Energia Solar</h1>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#sobre" className="hover:text-accent transition-colors">Sobre</a>
              <a href="#vantagens" className="hover:text-accent transition-colors">Vantagens</a>
              <a href="#projetos" className="hover:text-accent transition-colors">Projetos</a>
              <a href="#contato" className="hover:text-accent transition-colors">Contato</a>
            </nav>
            <Button onClick={openWhatsApp} className="bg-accent hover:bg-accent/90">
              <MessageCircle className="h-4 w-4 mr-2" />
              Solicitar Orçamento
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-20">
        <div className="absolute inset-0 opacity-20">
          <img src={heroImage} alt="Energia Solar" className="w-full h-full object-cover" />
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold mb-6">Economize com Energia Solar</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Reduza sua conta de luz com energia solar. É mais simples do que você imagina!
          </p>
          <Button onClick={openWhatsApp} size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <MessageCircle className="h-5 w-5 mr-2" />
            Solicite um Orçamento Grátis
          </Button>
        </div>
      </section>

      {/* Economia Section */}
      <section className="py-16 bg-accent/10">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-8">Veja a economia gerada já no primeiro mês!</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-accent">Residencial</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-primary">Até 95%</p>
                <p className="text-muted-foreground">de economia na conta de luz</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-accent">Comercial</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-primary">Até 90%</p>
                <p className="text-muted-foreground">de redução nos custos</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-accent">Industrial</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-primary">Até 85%</p>
                <p className="text-muted-foreground">de economia energética</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Vantagens Section */}
      <section id="vantagens" className="py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12">Mais do que uma tendência, energia solar é sinônimo de vantagens</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-accent/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <TrendingUp className="h-8 w-8 text-accent" />
              </div>
              <h4 className="font-semibold mb-2">Economia Garantida</h4>
              <p className="text-muted-foreground">Reduza drasticamente sua conta de energia elétrica</p>
            </div>
            <div className="text-center">
              <div className="bg-accent/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Shield className="h-8 w-8 text-accent" />
              </div>
              <h4 className="font-semibold mb-2">Sustentabilidade</h4>
              <p className="text-muted-foreground">Energia limpa e renovável para um futuro melhor</p>
            </div>
            <div className="text-center">
              <div className="bg-accent/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Zap className="h-8 w-8 text-accent" />
              </div>
              <h4 className="font-semibold mb-2">Tecnologia Avançada</h4>
              <p className="text-muted-foreground">Equipamentos de última geração e alta eficiência</p>
            </div>
            <div className="text-center">
              <div className="bg-accent/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Sun className="h-8 w-8 text-accent" />
              </div>
              <h4 className="font-semibold mb-2">Valorização do Imóvel</h4>
              <p className="text-muted-foreground">Aumente o valor do seu imóvel com energia solar</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre a Empresa */}
      <section id="sobre" className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">Somos a PMA Energia Solar</h3>
              <p className="text-lg mb-6">
                Sua independência energética começa aqui. Trabalhamos com dedicação para oferecer as melhores soluções em energia solar.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Badge variant="secondary">✓</Badge>
                  <span>Especialistas em energia solar</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Badge variant="secondary">✓</Badge>
                  <span>Equipamentos de alta qualidade</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Badge variant="secondary">✓</Badge>
                  <span>Atendimento personalizado</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Badge variant="secondary">✓</Badge>
                  <span>Garantia e suporte técnico</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img src={installationImage} alt="Instalação de Energia Solar" className="rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Projetos Section */}
      <section id="projetos" className="py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12">Conheça alguns de nossos projetos</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <img src={solarPanelsImage} alt="Projeto Residencial" className="w-full h-48 object-cover rounded-t-lg" />
                <CardTitle>Projeto Residencial</CardTitle>
                <CardDescription>Sistema fotovoltaico residencial</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p><strong>Potência:</strong> 5,5 kWp</p>
                  <p><strong>Economia:</strong> R$ 450/mês</p>
                  <p><strong>Localização:</strong> Florianópolis, SC</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <img src={houseImage} alt="Projeto Comercial" className="w-full h-48 object-cover rounded-t-lg" />
                <CardTitle>Projeto Comercial</CardTitle>
                <CardDescription>Sistema para estabelecimento comercial</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p><strong>Potência:</strong> 15,2 kWp</p>
                  <p><strong>Economia:</strong> R$ 1.200/mês</p>
                  <p><strong>Localização:</strong> São José, SC</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <img src={installationImage} alt="Projeto Industrial" className="w-full h-48 object-cover rounded-t-lg" />
                <CardTitle>Projeto Industrial</CardTitle>
                <CardDescription>Sistema de grande porte</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p><strong>Potência:</strong> 45,8 kWp</p>
                  <p><strong>Economia:</strong> R$ 3.800/mês</p>
                  <p><strong>Localização:</strong> Palhoça, SC</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12">Dúvidas Frequentes</h3>
          <div className="max-w-3xl mx-auto space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Como funciona a energia solar?</CardTitle>
              </CardHeader>
              <CardContent>
                <p>A energia solar é gerada por painéis solares que convertem a luz do sol em eletricidade através de células fotovoltaicas. A energia gerada pode ser usada imediatamente ou injetada na rede elétrica.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Quanto tempo leva para instalar?</CardTitle>
              </CardHeader>
              <CardContent>
                <p>A instalação típica de um sistema solar leva de 1 a 3 dias, dependendo do tamanho e complexidade do projeto.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Qual é o retorno do investimento?</CardTitle>
              </CardHeader>
              <CardContent>
                <p>O retorno do investimento varia entre 3 a 6 anos, dependendo do consumo e tamanho do sistema. Após esse período, a economia é praticamente total.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contato Section */}
      <section id="contato" className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12">Entre em Contato</h3>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h4 className="text-xl font-semibold mb-6">Fale Conosco</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5" />
                  <span>(48) 99676-5932</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5" />
                  <span>pma.eng.oficial@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5" />
                  <span>Número 102, CEP 88115-275</span>
                </div>
              </div>
              <Button onClick={openWhatsApp} className="mt-6 bg-accent hover:bg-accent/90 text-accent-foreground">
                <MessageCircle className="h-4 w-4 mr-2" />
                Conversar no WhatsApp
              </Button>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-6">Nosso Compromisso</h4>
              <p className="mb-4">
                Na PMA Energia Solar, nos dedicamos à excelência em energia solar, combinando inovação, sustentabilidade e integridade.
              </p>
              <p>
                Escolher a PMA Energia Solar é optar por um parceiro confiável na jornada para um futuro mais verde e econômico.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Sun className="h-6 w-6 text-accent" />
            <span className="font-semibold">PMA Energia Solar</span>
          </div>
          <p className="text-muted-foreground">
            © 2024 PMA Energia Solar. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
