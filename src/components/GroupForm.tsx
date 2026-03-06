import { useState } from "react";
import { toast } from "@/hooks/use-toast";

export const GroupForm = () => {
  const [step, setStep] = useState(1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "☀️ Solicitação enviada!", description: "Entraremos em contato para organizar seu grupo." });
    setStep(1);
  };

  const labelClass = "text-xs text-muted-foreground mb-2 block font-medium";

  return (
    <div className="glow-card p-8 md:p-12">
      <div className="mb-8">
        <p className="text-xs tracking-wider uppercase text-accent font-semibold mb-2">Grupos</p>
        <h3 className="text-2xl text-foreground font-bold" style={{ fontFamily: 'Outfit' }}>
          Solicite para seu grupo
        </h3>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {step === 1 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>Veículo</label>
                <select className="summer-input">
                  <option value="">Selecione</option>
                  <option value="van">Van Executiva</option>
                  <option value="micro">Micro-ônibus</option>
                  <option value="onibus">Ônibus Executivo</option>
                </select>
              </div>
              <div>
                <label className={labelClass}>Passageiros</label>
                <input type="number" min={1} placeholder="Nº" required className="summer-input" />
              </div>
            </div>
            <div>
              <label className={labelClass}>Embarque</label>
              <input placeholder="Endereço de partida" required className="summer-input" />
            </div>
            <div>
              <label className={labelClass}>Destino</label>
              <input placeholder="Para onde seguirão" required className="summer-input" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>Data/Hora Ida</label>
                <input type="datetime-local" required className="summer-input" />
              </div>
              <div>
                <label className={labelClass}>Data/Hora Retorno</label>
                <input type="datetime-local" className="summer-input" />
              </div>
            </div>
            <div>
              <label className={labelClass}>Detalhes do Evento</label>
              <textarea placeholder="Descreva o evento" rows={3} className="summer-input resize-none" />
            </div>
            <div className="pt-2">
              <button type="button" onClick={() => setStep(2)} className="summer-btn w-full">Próximo →</button>
            </div>
          </>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>Nome</label>
                <input placeholder="Seu nome" required className="summer-input" />
              </div>
              <div>
                <label className={labelClass}>E-mail</label>
                <input type="email" placeholder="seu@email.com" required className="summer-input" />
              </div>
              <div>
                <label className={labelClass}>WhatsApp</label>
                <input placeholder="(00) 00000-0000" required className="summer-input" />
              </div>
              <div>
                <label className={labelClass}>Como nos encontrou?</label>
                <select className="summer-input">
                  <option value="">Selecione</option>
                  <option value="indicacao">Indicação</option>
                  <option value="google">Google</option>
                  <option value="outro">Outro</option>
                </select>
              </div>
            </div>
            <div className="pt-2 flex gap-3">
              <button type="button" onClick={() => setStep(1)} className="summer-btn-outline flex-1">← Voltar</button>
              <button type="submit" className="summer-btn-coral flex-1">Solicitar ☀️</button>
            </div>
          </>
        )}
      </form>
    </div>
  );
};
