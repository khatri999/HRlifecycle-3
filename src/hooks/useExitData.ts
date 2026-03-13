import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useRealtimeSubscription } from "./useRealtimeSubscription";
import { useMemo } from "react";

export function useExitClearanceForms() {
  return useQuery({
    queryKey: ["exit_clearance_forms"],
    queryFn: async () => {
      const { data, error } = await supabase.from("exit_clearance_forms").select("*");
      if (error) throw error;
      return data;
    },
  });
}

export function useExitDeptTasks() {
  return useQuery({
    queryKey: ["exit_dept_tasks"],
    queryFn: async () => {
      const { data, error } = await supabase.from("exit_dept_tasks").select("*");
      if (error) throw error;
      return data;
    },
  });
}

const realtimeConfigs = [
  { table: "exit_dept_tasks" as const, queryKeys: [["exit_dept_tasks"]] },
  { table: "exit_clearance_forms" as const, queryKeys: [["exit_clearance_forms"]] },
];

export function useExitDataWithRealtime() {
  useRealtimeSubscription(realtimeConfigs);

  const formsQuery = useExitClearanceForms();
  const tasksQuery = useExitDeptTasks();

  const exitClearanceData = useMemo(() => {
    if (!formsQuery.data || !tasksQuery.data) return [];

    return formsQuery.data.map((form) => {
      const tasks = tasksQuery.data.filter((t) => t.employee_id === form.employee_id);
      const completed = tasks.filter((t) => t.status === "completed").length;
      const progress = tasks.length > 0 ? Math.round((completed / tasks.length) * 100) : 0;
      return {
        id: form.id,
        name: form.employee_name,
        avatar: form.employee_name.split(" ").map((n) => n[0]).join("").slice(0, 2),
        lastWorkingDay: form.last_working_day,
        progress,
        completed,
        total: tasks.length,
      };
    });
  }, [formsQuery.data, tasksQuery.data]);

  return {
    exitClearanceData,
    isLoading: formsQuery.isLoading || tasksQuery.isLoading,
    forms: formsQuery.data ?? [],
    tasks: tasksQuery.data ?? [],
  };
}
