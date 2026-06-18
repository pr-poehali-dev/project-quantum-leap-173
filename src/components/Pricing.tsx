import Icon from "@/components/ui/icon";
import { Pill } from "./Pill";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Старт",
    price: "0 ₽",
    period: "навсегда",
    description: "Чтобы попробовать дневник и навести порядок в сделках",
    features: [
      "До 50 сделок в месяц",
      "Базовый dashboard: баланс и P&L",
      "Журнал заметок",
      "1 подключение по read-only API",
    ],
    cta: "Начать бесплатно",
    highlighted: false,
  },
  {
    name: "PRO",
    price: "990 ₽",
    period: "в месяц",
    description: "Для системной торговли и работы над ошибками",
    features: [
      "Безлимит сделок",
      "Win rate, просадки и риск-метрики",
      "Риск-карта и поведенческий анализ",
      "AI-разбор повторяющихся ошибок",
      "До 10 подключений API",
    ],
    cta: "Перейти на PRO",
    highlighted: true,
  },
  {
    name: "Команда",
    price: "По запросу",
    period: "",
    description: "Для пропов, наставников и торговых команд",
    features: [
      "Всё из PRO",
      "Совместный доступ и роли",
      "Аналитика по участникам",
      "Приоритетная поддержка",
    ],
    cta: "Связаться с нами",
    highlighted: false,
  },
];

export function Pricing({ onStart }: { onStart: () => void }) {
  return (
    <section id="pricing" className="relative z-10 bg-background py-24 md:py-32">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto">
          <Pill className="mb-6">ТАРИФЫ</Pill>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-sentient">
            Прозрачные <i className="font-light">условия</i>
          </h2>
          <p className="font-mono text-sm sm:text-base text-foreground/60 text-balance mt-6">
            Начните бесплатно и переходите на PRO, когда захотите видеть торговлю
            глубже
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-16 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                "relative flex flex-col rounded-lg border p-8 backdrop-blur-sm transition-colors duration-200",
                plan.highlighted
                  ? "border-primary/60 bg-primary/[0.04]"
                  : "border-border bg-[#0d0d0d]/60 hover:border-primary/30"
              )}
            >
              {plan.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 font-mono text-xs uppercase bg-primary text-black px-3 py-1 rounded-full">
                  Популярный
                </span>
              )}
              <h3 className="text-xl font-sentient">{plan.name}</h3>
              <div className="mt-4 flex items-end gap-2">
                <span className="text-4xl font-sentient">{plan.price}</span>
                {plan.period && (
                  <span className="font-mono text-sm text-foreground/50 mb-1">
                    {plan.period}
                  </span>
                )}
              </div>
              <p className="font-mono text-sm text-foreground/55 mt-4 leading-relaxed">
                {plan.description}
              </p>

              <ul className="mt-7 space-y-3 flex-1">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 font-mono text-sm text-foreground/70"
                  >
                    <Icon
                      name="Check"
                      size={18}
                      className="text-primary mt-0.5 shrink-0"
                    />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.highlighted ? "default" : "secondary"}
                size="sm"
                className="mt-8 w-full"
                onClick={onStart}
              >
                [{plan.cta}]
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}