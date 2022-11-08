import { Outlet } from "@remix-run/react";
import { ErrorFallback } from "~/components";

export default function HiddenParentRoute() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: { error: Error }) {
  console.error(error);

  //   return <div>An unexpected error occurred: {error.message}</div>;

  // What Codi suggest to write --------

  return <ErrorFallback>Something went wrong!</ErrorFallback>;
}
