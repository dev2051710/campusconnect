import { CalendarDays } from "lucide-react";
import { AppShell } from "@/components/layout/AppShell";
import { EmptyState } from "@/components/ui/EmptyState";
import { FilterBar } from "@/components/ui/FilterBar";

export const metadata = { title: "Manage Events — CampusConnect" };

export default function Page() {
  return (
    <AppShell title="Manage Events" subtitle="Create, publish and edit events">
      <FilterBar placeholder="Search events…" filters={[{ label: "All statuses", options: ["Published", "Draft"] }]} />
      <EmptyState icon={CalendarDays} title="No events to manage" description="Admin event CRUD is built in Phase 6." />
    </AppShell>
  );
}
