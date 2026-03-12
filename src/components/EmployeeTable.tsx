import { Employee } from "@/data/employees";
import { Badge } from "@/components/ui/badge";

interface EmployeeTableProps {
  employees: Employee[];
}

const statusStyles: Record<Employee["status"], string> = {
  active: "bg-success/10 text-success border-success/20",
  "on-leave": "bg-warning/10 text-warning border-warning/20",
  inactive: "bg-muted text-muted-foreground border-border",
};

const EmployeeTable = ({ employees }: EmployeeTableProps) => {
  return (
    <div className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
      <table className="w-full">
        <thead>
          <tr className="border-b border-border bg-muted/50">
            <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">Employee</th>
            <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">Role</th>
            <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">Department</th>
            <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">Status</th>
            <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">Join Date</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-border">
          {employees.map((emp) => (
            <tr key={emp.id} className="transition-colors hover:bg-muted/30">
              <td className="px-6 py-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">
                    {emp.avatar}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-card-foreground">{emp.name}</p>
                    <p className="text-xs text-muted-foreground">{emp.email}</p>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 text-sm text-card-foreground">{emp.role}</td>
              <td className="px-6 py-4 text-sm text-muted-foreground">{emp.department}</td>
              <td className="px-6 py-4">
                <Badge variant="outline" className={statusStyles[emp.status]}>
                  {emp.status === "on-leave" ? "On Leave" : emp.status.charAt(0).toUpperCase() + emp.status.slice(1)}
                </Badge>
              </td>
              <td className="px-6 py-4 text-sm text-muted-foreground">
                {new Date(emp.joinDate).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeTable;
