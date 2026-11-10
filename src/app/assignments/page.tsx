import { ClipboardList } from "lucide-react";
import { AppShell } from "@/components/layout/AppShell";
import { EmptyState } from "@/components/ui/EmptyState";
import { FilterBar } from "@/components/ui/FilterBar";

export const metadata = { title: "Assignments — CampusConnect" };

export default function Page() {
  return (
    <AppShell title="Assignments" subtitle="Track every deadline">
      <FilterBar placeholder="Search assignments…" filters={[{ label: "All subjects", options: [] }, { label: "All statuses", options: ["Pending", "Completed", "Overdue"] }, { label: "Sort: deadline", options: ["Earliest first", "Latest first"] }]} />
      <EmptyState icon={ClipboardList} title="No assignments yet" description="Create, edit and complete assignments here once Phase 4 is built." />
    </AppShell>
  );
}
