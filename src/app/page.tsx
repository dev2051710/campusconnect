import Link from "next/link";
import { Bell, CalendarDays, CheckCircle2, ClipboardList, LineChart, ShieldCheck, Smartphone, Sparkles } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

const features = [
  { icon: ClipboardList, title: "Assignment tracking", text: "Add assignments with subject, priority and due date. Search, filter and never miss a deadline." },
  { icon: CalendarDays, title: "College events", text: "Browse workshops, fests, competitions and lectures published by your college." },
  { icon: Bell, title: "Announcements", text: "Important notices from the administration, front and centre on your dashboard." },
  { icon: LineChart, title: "Progress analytics", text: "See your completion rate and upcoming workload in clear charts." },
  { icon: ShieldCheck, title: "Secure by design", text: "Row Level Security means you only ever see your own assignments." },
  { icon: Smartphone, title: "Works everywhere", text: "A responsive layout with light and dark themes for phone, tablet and desktop." },
];

const btnPrimary = "rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition hover:-translate-y-0.5 hover:opacity-95";
const btnGhost = "rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold transition hover:-translate-y-0.5 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:hover:bg-slate-800";

export default function LandingPage() {
  return (
    <div className="bg-white dark:bg-slate-950">
      <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/80 backdrop-blur dark:border-slate-800 dark:bg-slate-950/80">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
          <Logo />
          <nav className="hidden gap-6 text-sm text-slate-600 dark:text-slate-400 md:flex">
            <a href="#features" className="hover:text-slate-900 dark:hover:text-white">Features</a>
            <a href="#preview" className="hover:text-slate-900 dark:hover:text-white">Preview</a>
            <a href="#benefits" className="hover:text-slate-900 dark:hover:text-white">Benefits</a>
          </nav>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Link href="/login" className="rounded-xl px-3 py-2 text-sm font-medium hover:bg-slate-100 dark:hover:bg-slate-800">Login</Link>
            <Link href="/signup" className="hidden rounded-xl bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-indigo-700 sm:block">Get Started</Link>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 via-white to-white dark:from-indigo-950/40 dark:via-slate-950 dark:to-slate-950">
        <div className="mx-auto max-w-4xl px-4 py-20 text-center sm:py-28">
          <span className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white px-3 py-1 text-xs font-medium text-indigo-700 dark:border-indigo-500/30 dark:bg-slate-900 dark:text-indigo-300">
            <Sparkles className="h-3.5 w-3.5" />Built for college students
          </span>
          <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-6xl">
            Manage Your <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Campus Life</span> in One Place.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
            Track assignments and deadlines, discover college events and stay on top of announcements — all from one clean dashboard.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/signup" className={btnPrimary}>Get Started</Link>
            <Link href="/login" className={btnGhost}>Login</Link>
          </div>
        </div>
      </section>

      <section id="features" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <h2 className="text-center text-3xl font-bold tracking-tight">Everything you need for campus life</h2>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-slate-800 dark:bg-slate-900">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400"><Icon className="h-5 w-5" /></span>
              <h3 className="mt-4 font-semibold">{title}</h3>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="preview" className="bg-slate-50 py-20 dark:bg-slate-900/40">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 sm:px-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <p className="text-xs font-semibold uppercase tracking-wider text-indigo-600">Assignment management</p>
            <h3 className="mt-1 text-xl font-semibold">Stay ahead of every deadline</h3>
            <div className="mt-5 space-y-3">
              {[["Priority", "High", "bg-rose-100 text-rose-700"], ["Priority", "Medium", "bg-amber-100 text-amber-700"], ["Status", "Completed", "bg-emerald-100 text-emerald-700"]].map(([k, v, c]) => (
                <div key={v} className="flex items-center justify-between rounded-xl border border-slate-200 p-3 dark:border-slate-800">
                  <div className="space-y-1.5"><div className="h-3 w-36 rounded bg-slate-200 dark:bg-slate-700" /><div className="h-2.5 w-24 rounded bg-slate-100 dark:bg-slate-800" /></div>
                  <span className={`rounded-full px-2.5 py-1 text-xs font-medium ${c}`}>{k}: {v}</span>
                </div>
              ))}
            </div>
            <p className="mt-3 text-xs text-slate-400">Illustrative preview</p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <p className="text-xs font-semibold uppercase tracking-wider text-indigo-600">College events</p>
            <h3 className="mt-1 text-xl font-semibold">Never miss what's happening</h3>
            <div className="mt-5 grid grid-cols-2 gap-3">
              {["Workshop", "Fest", "Competition", "Lecture"].map((c) => (
                <div key={c} className="rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 p-4 text-white">
                  <CalendarDays className="h-5 w-5 opacity-80" /><p className="mt-6 text-sm font-semibold">{c}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-xs text-slate-400">Illustrative preview</p>
          </div>
        </div>
      </section>

      <section id="benefits" className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6">
        <h2 className="text-3xl font-bold tracking-tight">Why students choose CampusConnect</h2>
        <ul className="mx-auto mt-8 grid max-w-2xl gap-3 text-left sm:grid-cols-2">
          {["Free to sign up", "Your data stays private", "One place for everything", "Clean, distraction-free design"].map((b) => (
            <li key={b} className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 text-sm font-medium dark:border-slate-800 dark:bg-slate-900">
              <CheckCircle2 className="h-5 w-5 text-emerald-500" />{b}
            </li>
          ))}
        </ul>
        <Link href="/signup" className={`${btnPrimary} mt-10 inline-block`}>Create your free account</Link>
      </section>

      <footer className="border-t border-slate-200 py-8 dark:border-slate-800">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 text-sm text-slate-500 sm:flex-row sm:px-6">
          <Logo />
          <p>© {new Date().getFullYear()} CampusConnect. A college project.</p>
        </div>
      </footer>
    </div>
  );
}
