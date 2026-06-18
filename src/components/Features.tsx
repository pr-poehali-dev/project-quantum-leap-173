import Icon from "@/components/ui/icon";
import { Pill } from "./Pill";

const features = [
  {
    icon: "LayoutDashboard",
    title: "Обзор",
    description:
      "Главный dashboard: баланс, P&L, win rate, график баланса и список последних сделок в одном экране.",
  },
  {
    icon: "ArrowLeftRight",
    title: "Сделки",
    description:
      "Удобная таблица всех сделок с фильтрами, сетапами и метриками. Полное управление историей торговли.",
  },
  {
    icon: "NotebookPen",
    title: "Журнал",
    description:
      "Заметки, контекст и разбор торгового дня. Фиксируйте решения, чтобы понимать причины каждой сделки.",
  },
  {
    icon: "Wallet",
    title: "Кошельки",
    description:
      "Подключение источников данных через read-only API. Управляйте ключами безопасно и без доступа к средствам.",
  },
  {
    icon: "Sparkles",
    title: "PRO-аналитика",
    description:
      "Риск-карта, AI-разбор поведения и поиск повторяющихся ошибок. Расширенная аналитика для роста результатов.",
  },
  {
    icon: "SlidersHorizontal",
    title: "Настройки",
    description:
      "Профиль, управление подпиской и кастомизация интерфейса под ваш стиль торговли.",
  },
];

export function Features() {
  return (
    <section id="features" className="relative z-10 bg-background py-24 md:py-32">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto">
          <Pill className="mb-6">ВОЗМОЖНОСТИ</Pill>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-sentient">
            Вся торговля <i className="font-light">как система</i>
          </h2>
          <p className="font-mono text-sm sm:text-base text-foreground/60 text-balance mt-6">
            Шесть разделов, которые превращают историю сделок в понятный рабочий
            процесс
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-16">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group relative bg-[#0d0d0d]/60 backdrop-blur-sm border border-border rounded-lg p-7 transition-colors duration-200 hover:border-primary/40"
            >
              <div className="inline-flex items-center justify-center size-12 rounded-lg bg-primary/10 text-primary mb-5">
                <Icon name={feature.icon} size={24} />
              </div>
              <h3 className="text-xl font-sentient mb-3">{feature.title}</h3>
              <p className="font-mono text-sm text-foreground/55 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
