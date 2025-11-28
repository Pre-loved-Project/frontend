"use client";
import ServerErrorPage from "@/shared/error/ui/500";
export default function GlobalError({ error }: { error: Error }) {
  return (
    <html>
      <body>
        <ServerErrorPage message={error.message} />
      </body>
    </html>
  );
}
