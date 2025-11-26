import { notFound, redirect } from "next/navigation";
import { AuthorizationError, NotFoundError, ServerError } from "./error";

export function handleError(error: unknown) {
  if (error instanceof AuthorizationError) {
    redirect("/login?expired=true");
  }

  if (error instanceof NotFoundError) {
    notFound(); //가장 가까운 not-found.tsx로 이동
  }

  if (error instanceof ServerError) {
    throw error;
  }

  throw error;
}
