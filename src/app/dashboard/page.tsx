import Link from "next/link";
import { AlertCircle, Bell, CalendarDays, CheckCircle2, ClipboardList, Clock, Plus } from "lucide-react";
import { AppShell } from "@/components/layout/AppShell";
import { StatCard } from "@/components/dashboard/StatCard";
import { Card } from "@/components/ui/Card";
import { EmptyState } from "@/components/ui/EmptyState";

const stats = [
  { label: "Total Assignments", icon: ClipboardList, tone: "bg-blue-50 text-blue-600 dark:bg-blue-500/10" },
  { label: "Pending", icon: Clock, tone: "bg-amber-50 text-amber-600 dark:bg-amber-500/10" },
  { label: "Completed", icon: CheckCircle2, tone: "bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10" },
  { label: "Upcoming Deadlines", icon: AlertCircle, tone: "bg-rose-50 text-rose-600 dark:bg-rose-500/10" },
  { label: "Upcoming Events", icon: CalendarDays, tone: "bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10" },
];

export default function DashboardPage() {
  return (
    <AppShell title="Dashboard" subtitle="Your campus life at a glance">
      <div className="rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-white shadow-sm sm:p-8">
        <h2 className="text-2xl font-semibold tracking-tight">Welcome back 👋</h2>
        <p className="mt-1 text-sm text-indigo-100">Your name and live statistics appear here once the database is connected (Phase 2–4).</p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link href="/assignments" className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2 text-sm font-medium text-indigo-700 transition hover:bg-indigo-50"><Plus className="h-4 w-4" />Assignments</Link>
          <Link href="/events" className="rounded-xl border border-white/30 px-4 py-2 text-sm font-medium transition hover:bg-white/10">Browse events</Link>
          <Link href="/announcements" className="rounded-xl border border-white/30 px-4 py-2 text-sm font-medium transition hover:bg-white/10">Announcements</Link>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {stats.map((s) => <StatCard key={s.label} {...s} value="—" />)}
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <h3 className="font-semibold">Assignment completion</h3>
          <div className="mt-4"><EmptyState icon={ClipboardList} title="No data yet" description="Your completion chart will appear once you add assignments." /></div>
        </Card>
        <Card>
          <h3 className="font-semibold">Upcoming deadlines</h3>
          <div className="mt-4"><EmptyState icon={Clock} title="Nothing due" description="Deadlines you add will be listed here." /></div>
        </Card>
        <Card>
          <h3 className="font-semibold">Upcoming events</h3>
          <div className="mt-4"><EmptyState icon={CalendarDays} title="No events" description="Published college events show up here." /></div>
        </Card>
        <Card className="lg:col-span-2">
          <h3 className="font-semibold">Recent announcements</h3>
          <div className="mt-4"><EmptyState icon={Bell} title="No announcements" description="Important college notices will appear here." /></div>
        </Card>
      </div>
    </AppShell>
  );
}
