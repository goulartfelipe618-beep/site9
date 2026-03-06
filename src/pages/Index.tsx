import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { TransferForm } from "@/components/TransferForm";
import { motion } from "framer-motion";
import { Sun, Wifi, Clock, Snowflake } from "lucide-react";
import summerSedan from "@/assets/summer-sedan.jpg";
import summerInterior from "@/assets/summer-interior.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={summerSedan} alt="Sedã premium na costa" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-transparent" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative container mx-auto px-6 py-32"
        >
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Sun size={16} /> Premium de Verão
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl leading-[1.05] mb-6 text-foreground font-bold" style={{ fontFamily: 'Outfit' }}>
              Seu verão<br />
              merece um<br />
              <span className="text-primary">transfer premium</span>
            </h1>
            <p className="text-base text-muted-foreground leading-relaxed mb-10 max-w-md">
              Frota branca, ar-condicionado impecável, motoristas atenciosos e toda a luminosidade
              que o litoral pode oferecer.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#cotacao" className="summer-btn-coral inline-block">
                Cotação rápida ☀️
              </a>
              <a href="#frota" className="summer-btn-outline inline-block">
                Conhecer a frota
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Fleet */}
      <section id="frota" className="py-28">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <p className="text-xs tracking-wider uppercase text-accent font-semibold mb-3">Nossa Frota</p>
            <h2 className="text-4xl md:text-5xl text-foreground font-bold" style={{ fontFamily: 'Outfit' }}>
              Pensada para o verão
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="glow-card overflow-hidden"
            >
              <img src={summerSedan} alt="Sedã premium" className="w-full aspect-[16/10] object-cover" />
              <div className="p-8">
                <h3 className="text-xl text-foreground mb-2 font-bold" style={{ fontFamily: 'Outfit' }}>Sedã Premium</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Bancos em couro branco, climatização perfeita e acabamento que brilha sob o sol.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="glow-card-coral overflow-hidden"
            >
              <img src={summerInterior} alt="Interior luminoso" className="w-full aspect-[16/10] object-cover" />
              <div className="p-8">
                <h3 className="text-xl text-foreground mb-2 font-bold" style={{ fontFamily: 'Outfit' }}>Interior Luminoso</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Luz natural, espaço generoso e aquele frescor que faz o trajeto virar parte do passeio.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { icon: Snowflake, title: "AR gelado", desc: "Climatização premium" },
                { icon: Sun, title: "Frota branca", desc: "Elegância de verão" },
                { icon: Clock, title: "Pontualidade", desc: "Sempre no horário" },
                { icon: Wifi, title: "Wi-Fi a bordo", desc: "Conectado sempre" },
              ].map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center"
                >
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <f.icon size={22} className="text-primary" />
                  </div>
                  <p className="text-sm text-foreground font-semibold mb-1">{f.title}</p>
                  <p className="text-xs text-muted-foreground">{f.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Form */}
      <section id="cotacao" className="py-28">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <TransferForm />
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
