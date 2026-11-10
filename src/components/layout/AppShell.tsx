"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Bell, CalendarDays, ClipboardList, LayoutDashboard, LogOut, Menu, Shield, User, X, type LucideIcon } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { useToast } from "@/components/ui/Toast";
import { cn } from "@/lib/utils/cn";

type NavItem = { href: string; label: string; icon: LucideIcon };

const nav: NavItem[] = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/assignments", label: "Assignments", icon: ClipboardList },
  { href: "/events", label: "Events", icon: CalendarDays },
  { href: "/announcements", label: "Announcements", icon: Bell },
  { href: "/profile", label: "Profile", icon: User },
];
const adminNav: NavItem[] = [
  { href: "/admin", label: "Admin Overview", icon: Shield },
  { href: "/admin/events", label: "Manage Events", icon: CalendarDays },
];

export function AppShell({ title, subtitle, children }: { title: string; subtitle?: string; children: React.ReactNode }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const toast = useToast();

  const links = (items: NavItem[]) =>
    items.map(({ href, label, icon: Icon }) => {
      const active = pathname === href;
      return (
        <Link key={href} href={href} onClick={() => setOpen(false)}
          className={cn("flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium transition",
            active ? "bg-indigo-50 text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-300"
                   : "text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800")}>
          <Icon className="h-4 w-4" />{label}
        </Link>
      );
    });

  const sidebar = (
    <div className="flex h-full flex-col gap-6 p-4">
      <div className="px-2 pt-1"><Logo href="/dashboard" /></div>
      <nav className="flex flex-col gap-1">{links(nav)}</nav>
      <div>
        <p className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-slate-400">Admin</p>
        <nav className="flex flex-col gap-1">{links(adminNav)}</nav>
      </div>
      <Link href="/login" onClick={() => toast("Real sign-out arrives with authentication in Phase 3.", "info")}
        className="mt-auto flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800">
        <LogOut className="h-4 w-4" />Log out
      </Link>
    </div>
  );

  return (
    <div className="min-h-screen lg:grid lg:grid-cols-[16rem_1fr]">
      <aside className="sticky top-0 hidden h-screen border-r border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900 lg:block">{sidebar}</aside>

      {open && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-slate-900/50" onClick={() => setOpen(false)} />
          <aside className="absolute left-0 top-0 h-full w-64 bg-white shadow-xl dark:bg-slate-900">
            <button aria-label="Close menu" onClick={() => setOpen(false)} className="absolute right-3 top-4 text-slate-500"><X className="h-5 w-5" /></button>
            {sidebar}
          </aside>
        </div>
      )}

      <div className="min-w-0">
        <header className="sticky top-0 z-30 flex items-center gap-3 border-b border-slate-200 bg-white/80 px-4 py-3 backdrop-blur dark:border-slate-800 dark:bg-slate-950/80 sm:px-8">
          <button aria-label="Open menu" onClick={() => setOpen(true)} className="grid h-9 w-9 place-items-center rounded-xl border border-slate-200 dark:border-slate-800 lg:hidden"><Menu className="h-4 w-4" /></button>
          <div className="min-w-0 flex-1">
            <h1 className="truncate text-lg font-semibold tracking-tight">{title}</h1>
            {subtitle && <p className="truncate text-xs text-slate-500 dark:text-slate-400">{subtitle}</p>}
          </div>
          <ThemeToggle />
        </header>
        <main className="mx-auto max-w-6xl space-y-6 p-4 sm:p-8">{children}</main>
      </div>
    </div>
  );
}
