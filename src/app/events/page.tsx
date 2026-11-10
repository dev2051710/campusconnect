import { CalendarDays } from "lucide-react";
import { AppShell } from "@/components/layout/AppShell";
import { EmptyState } from "@/components/ui/EmptyState";
import { FilterBar } from "@/components/ui/FilterBar";

export const metadata = { title: "College Events — CampusConnect" };

export default function Page() {
  return (
    <AppShell title="College Events" subtitle="Upcoming and past events">
      <FilterBar placeholder="Search events…" filters={[{ label: "All categories", options: ["Workshop", "Fest", "Competition", "Lecture"] }, { label: "Upcoming", options: ["Past"] }]} />
      <EmptyState icon={CalendarDays} title="No events published" description="Published college events will be listed here after Phase 5." />
    </AppShell>
  );
}
