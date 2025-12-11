"use client";

import ServerErrorPage from "@/shared/error/ui/500";

export default function GlobalError({ error }: { error: Error }) {
  return (
    <html lang="kr">
      <body className="mx-auto max-w-[1200px] bg-[#1c1c22] pt-[70px] md:pt-20 xl:pt-[100px]">
        <ServerErrorPage message={error.message} />
      </body>
    </html>
  );
}
