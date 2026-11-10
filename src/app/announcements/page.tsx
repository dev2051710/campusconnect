import { Bell } from "lucide-react";
import { AppShell } from "@/components/layout/AppShell";
import { EmptyState } from "@/components/ui/EmptyState";
import { FilterBar } from "@/components/ui/FilterBar";

export const metadata = { title: "Announcements — CampusConnect" };

export default function Page() {
  return (
    <AppShell title="Announcements" subtitle="Important college notices">
      <FilterBar placeholder="Search announcements…" filters={[{ label: "All priorities", options: ["Normal", "Important", "Urgent"] }]} />
      <EmptyState icon={Bell} title="No announcements" description="Published announcements will appear here after Phase 5." />
    </AppShell>
  );
}
