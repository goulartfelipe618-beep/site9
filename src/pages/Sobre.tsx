import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Sun, Snowflake, Clock, Wifi, Heart, Shield } from "lucide-react";

const Sobre = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Sun size={16} /> Nossa História
            </div>
            <h1 className="text-5xl md:text-6xl text-foreground font-bold mb-4" style={{ fontFamily: 'Outfit' }}>
              Nascemos do<br /><span className="text-accent">verão</span>
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="pb-28">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-muted-foreground leading-[1.8] text-lg">
                A Riviera Transfer nasceu da paixão pelo litoral e da convicção de que o trajeto
                é parte inseparável da experiência de verão. Não somos apenas transporte —
                somos a extensão do seu dia de sol.
              </p>

              <p className="text-muted-foreground leading-[1.8] text-lg">
                Nossa frota inteiramente branca é mantida com padrão de excelência: climatização
                impecável, interiores luminosos e motoristas treinados para tornar cada percurso
                memorável. Do aeroporto ao resort, da marina ao restaurante.
              </p>

              <p className="text-muted-foreground leading-[1.8] text-lg">
                Acreditamos que o conforto não precisa esperar — ele começa no momento em que
                você entra no veículo. Ar gelado, playlist suave e aquela sensação de que o
                verão está apenas começando.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="grid grid-cols-3 md:grid-cols-6 gap-6 mt-20"
            >
              {[
                { icon: Sun, label: "Verão" },
                { icon: Snowflake, label: "Frescor" },
                { icon: Clock, label: "Pontual" },
                { icon: Wifi, label: "Wi-Fi" },
                { icon: Heart, label: "Cuidado" },
                { icon: Shield, label: "Seguro" },
              ].map((d) => (
                <div key={d.label} className="text-center">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-2">
                    <d.icon size={18} className="text-primary" />
                  </div>
                  <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">{d.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Sobre;
