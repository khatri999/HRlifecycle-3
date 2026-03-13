import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

interface MetricCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon: LucideIcon;
  trend?: { value: string; positive: boolean };
  className?: string;
  iconClassName?: string;
  href?: string;
}

export function MetricCard({ title, value, subtitle, icon: Icon, trend, className, iconClassName, href }: MetricCardProps) {
  const content = (
    <div className={cn(
      "bg-card rounded-xl border border-border p-5 animate-fade-in transition-all duration-200",
      href && "hover:shadow-lg hover:scale-[1.02] hover:border-primary/20 cursor-pointer",
      className
    )}>
      <div className="flex items-start justify-between">
        <div className="space-y-1">
          <p className="text-sm text-muted-foreground font-medium">{title}</p>
          <p className="text-2xl font-display font-bold text-foreground">{value}</p>
          {subtitle && <p className="text-xs text-muted-foreground">{subtitle}</p>}
          {trend && (
            <p className={cn("text-xs font-medium", trend.positive ? "text-success" : "text-destructive")}>
              {trend.value}
            </p>
          )}
        </div>
        <div className={cn("p-2.5 rounded-lg", iconClassName || "bg-primary/10")}>
          <Icon className={cn("w-5 h-5", iconClassName ? "" : "text-primary")} />
        </div>
      </div>
    </div>
  );

  if (href) {
    return <Link to={href} className="block">{content}</Link>;
  }

  return content;
}
