"use client";
import { createContext, useCallback, useContext, useState } from "react";
import { CheckCircle2, Info, XCircle } from "lucide-react";

type Kind = "success" | "error" | "info";
type ToastItem = { id: number; kind: Kind; message: string };
const Ctx = createContext<(message: string, kind?: Kind) => void>(() => {});

export const useToast = () => useContext(Ctx);

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const push = useCallback((message: string, kind: Kind = "info") => {
    const id = Date.now() + Math.random();
    setToasts((t) => [...t, { id, kind, message }]);
    setTimeout(() => setToasts((t) => t.filter((x) => x.id !== id)), 4000);
  }, []);

  const icon = { success: CheckCircle2, error: XCircle, info: Info };
  const color = { success: "text-emerald-500", error: "text-red-500", info: "text-indigo-500" };

  return (
    <Ctx.Provider value={push}>
      {children}
      <div className="fixed bottom-4 right-4 z-[100] flex w-[calc(100%-2rem)] max-w-sm flex-col gap-2">
        {toasts.map((t) => {
          const Icon = icon[t.kind];
          return (
            <div key={t.id} role="status" className="toast-in flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-lg dark:border-slate-800 dark:bg-slate-900">
              <Icon className={`mt-0.5 h-5 w-5 shrink-0 ${color[t.kind]}`} />
              <p className="text-sm">{t.message}</p>
            </div>
          );
        })}
      </div>
    </Ctx.Provider>
  );
}
