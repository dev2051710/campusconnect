import Link from "next/link";
import { GraduationCap } from "lucide-react";

export function Logo({ href = "/" }: { href?: string }) {
  return (
    <Link href={href} className="flex items-center gap-2 font-semibold tracking-tight">
      <span className="grid h-8 w-8 place-items-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-sm">
        <GraduationCap className="h-4 w-4" />
      </span>
      <span className="text-lg">CampusConnect</span>
    </Link>
  );
}
