import { useState } from "react";
import { toast } from "@/hooks/use-toast";

type TripType = "ida" | "ida-volta" | "hora";

export const TransferForm = () => {
  const [step, setStep] = useState(1);
  const [tripType, setTripType] = useState<TripType>("ida");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "☀️ Reserva confirmada!", description: "Entraremos em contato para confirmar os detalhes." });
    setStep(1);
  };

  const labelClass = "text-xs text-muted-foreground mb-2 block font-medium";

  return (
    <div className="glow-card p-8 md:p-12">
      <div className="mb-8">
        <p className="text-xs tracking-wider uppercase text-accent font-semibold mb-2">Cotação Rápida</p>
        <h3 className="text-2xl text-foreground font-bold" style={{ fontFamily: 'Outfit' }}>
          Agende seu transfer
        </h3>
      </div>

      <div className="flex gap-2 mb-8">
        {([["ida", "Somente Ida"], ["ida-volta", "Ida e Volta"], ["hora", "Por Hora"]] as const).map(
          ([val, label]) => (
            <button
              key={val}
              type="button"
              onClick={() => setTripType(val)}
              className={`flex-1 py-3 text-xs font-medium rounded-full transition-all duration-300 ${
                tripType === val
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-muted text-muted-foreground hover:text-foreground"
              }`}
            >
              {label}
            </button>
          )
        )}
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {step === 1 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className={labelClass}>Passageiros</label>
                <input type="number" min={1} placeholder="Nº" required className="summer-input" />
              </div>
              <div>
                <label className={labelClass}>Data</label>
                <input type="date" required className="summer-input" />
              </div>
              <div>
                <label className={labelClass}>Hora</label>
                <input type="time" required className="summer-input" />
              </div>
            </div>

            {tripType === "hora" && (
              <div>
                <label className={labelClass}>Horas de Serviço</label>
                <input type="number" min={1} placeholder="Quantas horas?" required className="summer-input" />
              </div>
            )}

            <div>
              <label className={labelClass}>Embarque</label>
              <input placeholder="Endereço de partida" required className="summer-input" />
            </div>
            <div>
              <label className={labelClass}>Destino</label>
              <input placeholder="Para onde deseja ir" required className="summer-input" />
            </div>

            {tripType === "ida-volta" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className={labelClass}>Data Retorno</label>
                  <input type="date" className="summer-input" />
                </div>
                <div>
                  <label className={labelClass}>Hora Retorno</label>
                  <input type="time" className="summer-input" />
                </div>
              </div>
            )}

            <div>
              <label className={labelClass}>Observações</label>
              <textarea placeholder="Alguma preferência?" rows={2} className="summer-input resize-none" />
            </div>

            <div className="pt-2">
              <button type="button" onClick={() => setStep(2)} className="summer-btn w-full">
                Próximo →
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>Nome</label>
                <input placeholder="Seu nome completo" required className="summer-input" />
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
                  <option value="instagram">Instagram</option>
                  <option value="outro">Outro</option>
                </select>
              </div>
            </div>

            <div className="pt-2 flex gap-3">
              <button type="button" onClick={() => setStep(1)} className="summer-btn-outline flex-1">
                ← Voltar
              </button>
              <button type="submit" className="summer-btn-coral flex-1">
                Confirmar ☀️
              </button>
            </div>
          </>
        )}
      </form>
    </div>
  );
};
