import { utilityBarMessage } from "@/data/homepage";

export function UtilityBar() {
  return (
    <div className="border-b border-border bg-primary text-primary-foreground">
      <p className="px-4 py-2 text-center text-[11px] font-medium uppercase tracking-[0.18em]">
        {utilityBarMessage}
      </p>
    </div>
  );
}
