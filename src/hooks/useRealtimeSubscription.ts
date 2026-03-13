import { useEffect } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

type TableName = "exit_dept_tasks" | "exit_clearance_forms" | "exit_document_uploads" | "generated_documents";

interface SubscriptionConfig {
  table: TableName;
  queryKeys: string[][];
}

export function useRealtimeSubscription(configs: SubscriptionConfig[]) {
  const queryClient = useQueryClient();

  useEffect(() => {
    const channel = supabase
      .channel("dashboard-realtime")
      .on("postgres_changes", { event: "*", schema: "public", table: "exit_dept_tasks" }, () => {
        configs
          .filter((c) => c.table === "exit_dept_tasks")
          .forEach((c) => c.queryKeys.forEach((key) => queryClient.invalidateQueries({ queryKey: key })));
      })
      .on("postgres_changes", { event: "*", schema: "public", table: "exit_clearance_forms" }, () => {
        configs
          .filter((c) => c.table === "exit_clearance_forms")
          .forEach((c) => c.queryKeys.forEach((key) => queryClient.invalidateQueries({ queryKey: key })));
      })
      .on("postgres_changes", { event: "*", schema: "public", table: "exit_document_uploads" }, () => {
        configs
          .filter((c) => c.table === "exit_document_uploads")
          .forEach((c) => c.queryKeys.forEach((key) => queryClient.invalidateQueries({ queryKey: key })));
      })
      .on("postgres_changes", { event: "*", schema: "public", table: "generated_documents" }, () => {
        configs
          .filter((c) => c.table === "generated_documents")
          .forEach((c) => c.queryKeys.forEach((key) => queryClient.invalidateQueries({ queryKey: key })));
      })
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [queryClient, configs]);
}
