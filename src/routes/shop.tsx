import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/shop")({
  validateSearch: (search: Record<string, unknown>) => ({
    collection: typeof search.collection === "string" ? search.collection : undefined,
  }),
  component: () => <Outlet />,
});
