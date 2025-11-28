import { Suspense } from "react";
import LoginPageClient from "@/widgets/main/ui/Client/LoginPage.client";

export default function Page() {
  return (
    <Suspense fallback={"loading..."}>
      <LoginPageClient />
    </Suspense>
  );
}
