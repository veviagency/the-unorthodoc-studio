import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/shop")({
  validateSearch: (search: Record<string, unknown>): { collection?: string } =>
    typeof search['collection'] === "string" ? { collection: search['collection'] as string } : {},
  component: () => <Outlet />,
});
