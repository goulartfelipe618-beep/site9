import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { GroupForm } from "@/components/GroupForm";
import { motion } from "framer-motion";
import { Check, Heart } from "lucide-react";
import summerFleet from "@/assets/summer-fleet.jpg";
import summerSedan from "@/assets/summer-sedan.jpg";
import summerInterior from "@/assets/summer-interior.jpg";

const wishlistItems = [
  {
    img: summerFleet,
    title: "Frota premium à beira-mar",
    desc: "Veículos brancos alinhados, prontos para levar seu grupo com estilo ao destino.",
    tags: ["Grupos", "Litoral", "Premium"],
  },
  {
    img: summerSedan,
    title: "Trajeto costeiro VIP",
    desc: "Percorra a costa com conforto, ar-condicionado e vista para o mar.",
    tags: ["Exclusivo", "Costa", "Conforto"],
  },
  {
    img: summerInterior,
    title: "Conforto interior de verão",
    desc: "Bancos claros, luz natural e frescor — a extensão perfeita do seu dia de sol.",
    tags: ["Interior", "Verão", "Relaxante"],
  },
];

const services = [
  { title: "Casamentos na praia", items: ["Decoração floral no veículo", "Chegada com pontualidade impecável", "Fotos do momento da chegada"] },
  { title: "Eventos corporativos", items: ["Logística para até 200 convidados", "Frota coordenada em tempo real", "Motoristas uniformizados"] },
  { title: "Turismo costeiro", items: ["Roteiros personalizados", "Paradas para fotos panorâmicas", "Guia bilíngue opcional"] },
];

const Grupos = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Heart size={16} /> Lista de Desejos
            </div>
            <h1 className="text-5xl md:text-6xl text-foreground font-bold mb-4" style={{ fontFamily: 'Outfit' }}>
              Experiências para<br /><span className="text-primary">grupos</span>
            </h1>
            <p className="text-base text-muted-foreground max-w-md mx-auto">
              Monte a experiência ideal para seu grupo. Escolha, combine e solicite.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Wishlist layout */}
      <section className="pb-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-8">
            {wishlistItems.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="glow-card overflow-hidden flex flex-col md:flex-row"
              >
                <div className="md:w-2/5 flex-shrink-0">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover aspect-[4/3] md:aspect-auto" />
                </div>
                <div className="p-8 flex flex-col justify-center flex-1">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {item.tags.map((tag) => (
                      <span key={tag} className="text-[10px] uppercase tracking-wider bg-primary/10 text-primary px-3 py-1 rounded-full font-semibold">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl text-foreground font-bold mb-2" style={{ fontFamily: 'Outfit' }}>
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services checklist */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-xs tracking-wider uppercase text-accent font-semibold mb-3">Serviços</p>
            <h2 className="text-4xl text-foreground font-bold" style={{ fontFamily: 'Outfit' }}>
              Para cada ocasião
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glow-card-coral p-8"
              >
                <h3 className="text-lg text-foreground font-bold mb-4" style={{ fontFamily: 'Outfit' }}>
                  {s.title}
                </h3>
                <ul className="space-y-3">
                  {s.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check size={16} className="text-accent flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-28">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <GroupForm />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Grupos;
