import { User } from "lucide-react";
import { AppShell } from "@/components/layout/AppShell";
import { Card } from "@/components/ui/Card";
import { Skeleton } from "@/components/ui/Skeleton";

export const metadata = { title: "Profile — CampusConnect" };

export default function ProfilePage() {
  return (
    <AppShell title="Profile" subtitle="Manage your account">
      <Card className="max-w-xl">
        <div className="flex items-center gap-4">
          <span className="grid h-14 w-14 place-items-center rounded-2xl bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10"><User className="h-6 w-6" /></span>
          <div className="space-y-2"><Skeleton className="h-4 w-40" /><Skeleton className="h-3 w-56" /></div>
        </div>
        <p className="mt-5 text-sm text-slate-500 dark:text-slate-400">Profile editing connects to your Supabase profile in Phase 3.</p>
      </Card>
    </AppShell>
  );
}
