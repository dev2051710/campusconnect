"use client";
import { useState } from "react";
import { Search } from "lucide-react";

const ctl = "rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 dark:border-slate-700 dark:bg-slate-900";

export function FilterBar({ placeholder, filters }: { placeholder: string; filters: { label: string; options: string[] }[] }) {
  const [q, setQ] = useState("");
  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
        <input value={q} onChange={(e) => setQ(e.target.value)} placeholder={placeholder} className={`${ctl} w-full pl-9`} />
      </div>
      {filters.map((f) => (
        <select key={f.label} aria-label={f.label} className={ctl} defaultValue="">
          <option value="">{f.label}</option>
          {f.options.map((o) => <option key={o}>{o}</option>)}
        </select>
      ))}
    </div>
  );
}
