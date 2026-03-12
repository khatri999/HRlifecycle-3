import { Users, UserCheck, UserMinus, Building2 } from "lucide-react";
import StatCard from "@/components/StatCard";
import EmployeeTable from "@/components/EmployeeTable";
import { employees, departments } from "@/data/employees";

const Dashboard = () => {
  const activeCount = employees.filter((e) => e.status === "active").length;
  const onLeaveCount = employees.filter((e) => e.status === "on-leave").length;

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-foreground">Dashboard</h1>
        <p className="mt-1 text-sm text-muted-foreground">Overview of your organization</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard icon={Users} title="Total Employees" value={employees.length} change="+2 this month" changeType="positive" />
        <StatCard icon={UserCheck} title="Active" value={activeCount} />
        <StatCard icon={UserMinus} title="On Leave" value={onLeaveCount} change="1 returning soon" changeType="neutral" />
        <StatCard icon={Building2} title="Departments" value={departments.length} />
      </div>

      <div>
        <h2 className="mb-4 text-lg font-semibold text-foreground">Recent Employees</h2>
        <EmployeeTable employees={employees.slice(0, 5)} />
      </div>
    </div>
  );
};

export default Dashboard;
