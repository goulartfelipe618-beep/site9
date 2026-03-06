import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Mail, Phone, MessageCircle } from "lucide-react";

const Contato = () => {
  const info = [
    { icon: Mail, label: "E-mail", value: "contato@rivieratransfer.com.br", href: "mailto:contato@rivieratransfer.com.br" },
    { icon: Phone, label: "Telefone", value: "(11) 99999-9999", href: "tel:+5511999999999" },
    { icon: MessageCircle, label: "WhatsApp", value: "(11) 99999-9999", href: "https://wa.me/5511999999999" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <p className="text-xs tracking-wider uppercase text-accent font-semibold mb-4">Contato</p>
            <h1 className="text-5xl md:text-6xl text-foreground font-bold" style={{ fontFamily: 'Outfit' }}>
              Fale <span className="text-primary">conosco</span>
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="pb-28">
        <div className="container mx-auto px-6 max-w-lg">
          <div className="glow-card p-10 md:p-14">
            <div className="space-y-6">
              {info.map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-2xl hover:bg-muted transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <item.icon size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">{item.label}</p>
                    <p className="text-foreground font-medium">{item.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            <div className="mt-8">
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="summer-btn-coral block text-center w-full"
              >
                Falar pelo WhatsApp ☀️
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contato;
