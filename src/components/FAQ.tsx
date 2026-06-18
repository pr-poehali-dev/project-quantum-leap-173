import { Pill } from "./Pill";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Безопасно ли подключать биржу?",
    answer:
      "Да. Мы используем только read-only API-ключи — у TradeumDiary нет доступа к выводу средств и совершению сделок. Сервис лишь читает вашу историю торговли.",
  },
  {
    question: "Какие данные я увижу в обзоре?",
    answer:
      "Баланс, общий и периодический P&L, win rate, график баланса, лучшие и худшие сделки, просадки и список последних операций — всё на одном экране.",
  },
  {
    question: "Чем PRO отличается от бесплатного тарифа?",
    answer:
      "PRO открывает безлимит сделок, риск-карту, поведенческий анализ и AI-разбор повторяющихся ошибок — инструменты, которые помогают улучшать результаты от сессии к сессии.",
  },
  {
    question: "Нужно ли вносить сделки вручную?",
    answer:
      "Нет. После подключения источника данных по API история сделок подтягивается автоматически. Вручную вы добавляете только заметки и контекст в журнал.",
  },
  {
    question: "Можно ли отменить подписку в любой момент?",
    answer:
      "Да, подписка управляется в настройках в один клик. После отмены доступ к PRO сохраняется до конца оплаченного периода.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="relative z-10 bg-background py-24 md:py-32">
      <div className="container max-w-3xl">
        <div className="text-center">
          <Pill className="mb-6">FAQ</Pill>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-sentient">
            Частые <i className="font-light">вопросы</i>
          </h2>
        </div>

        <Accordion type="single" collapsible className="mt-14 w-full">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="border-border"
            >
              <AccordionTrigger className="font-sentient text-lg text-left hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="font-mono text-sm text-foreground/55 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
