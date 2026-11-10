import { Shield } from "lucide-react";
import { AppShell } from "@/components/layout/AppShell";
import { EmptyState } from "@/components/ui/EmptyState";
import { FilterBar } from "@/components/ui/FilterBar";

export const metadata = { title: "Admin Overview — CampusConnect" };

export default function Page() {
  return (
    <AppShell title="Admin Overview" subtitle="Platform statistics and management">
      <FilterBar placeholder="Search…" filters={[]} />
      <EmptyState icon={Shield} title="Admin tools coming" description="Statistics, announcements and event management are built in Phase 6 with server-side role checks." />
    </AppShell>
  );
}
