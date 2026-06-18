import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Pill } from "./Pill";
import Icon from "@/components/ui/icon";

export function StartDialog({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <Dialog
      open={open}
      onOpenChange={(v) => {
        onOpenChange(v);
        if (!v) setSubmitted(false);
      }}
    >
      <DialogContent className="bg-[#0a0a0a] border-border sm:max-w-md">
        {submitted ? (
          <div className="text-center py-6">
            <div className="inline-flex items-center justify-center size-14 rounded-full bg-primary/10 text-primary mb-5">
              <Icon name="Check" size={28} />
            </div>
            <DialogTitle className="text-2xl font-sentient">
              Вы в списке!
            </DialogTitle>
            <p className="font-mono text-sm text-foreground/55 mt-3">
              Мы отправим приглашение на {email} и проведём вас через онбординг.
            </p>
            <Button
              size="sm"
              className="mt-7"
              onClick={() => onOpenChange(false)}
            >
              [Закрыть]
            </Button>
          </div>
        ) : (
          <>
            <DialogHeader>
              <Pill className="mb-3 self-start">НАЧАТЬ РАБОТУ</Pill>
              <DialogTitle className="text-2xl font-sentient text-left">
                Заведите дневник трейдера
              </DialogTitle>
              <DialogDescription className="font-mono text-sm text-foreground/55 text-left">
                Регистрация займёт минуту. Дальше — подключение данных и
                настройка рабочего пространства.
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="mt-2 space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="font-mono text-xs uppercase">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@email.com"
                  className="bg-[#141414] border-border"
                />
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor="password"
                  className="font-mono text-xs uppercase"
                >
                  Пароль
                </Label>
                <Input
                  id="password"
                  type="password"
                  required
                  placeholder="••••••••"
                  className="bg-[#141414] border-border"
                />
              </div>
              <Button type="submit" size="sm" className="w-full mt-2">
                [Создать аккаунт]
              </Button>
              <p className="font-mono text-xs text-foreground/40 text-center">
                Подключение бирж только через read-only API
              </p>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
