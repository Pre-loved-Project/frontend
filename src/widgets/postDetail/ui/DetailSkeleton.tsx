"use client";

export function PostDetailSkeleton() {
  return (
    <section className="flex animate-pulse flex-col px-4 md:px-10 xl:flex-row xl:gap-10 xl:px-16">
      <div className="-mx-1 md:-mx-2.5 xl:mx-0 xl:w-1/2">
        <div className="h-64 w-full rounded-lg bg-[#353542] md:h-96 xl:h-[480px]" />

        <div className="mx-4 mt-4 flex gap-3 md:mx-6 xl:mx-0">
          <div className="h-12 w-12 rounded-full bg-[#353542] md:h-16 md:w-16 xl:h-14 xl:w-14" />
          <div className="h-4 w-24 self-center rounded bg-[#353542]" />
        </div>

        <div className="mx-4 mt-4 h-px bg-gray-600 xl:hidden" />
      </div>

      <div className="flex flex-col justify-between gap-5 py-6 md:pt-8 xl:w-1/2 xl:pt-0 xl:pb-[88px]">
        <div className="flex flex-col gap-5">
          <div className="h-6 w-3/4 rounded bg-[#353542]" />
          <div className="h-5 w-1/3 rounded bg-[#353542]" />
          <div className="h-24 w-full rounded bg-[#353542]" />
        </div>

        <div className="flex flex-col gap-5">
          <div className="flex gap-2">
            <div className="h-4 w-10 rounded bg-[#353542]" />
            <div className="h-4 w-10 rounded bg-[#353542]" />
            <div className="h-4 w-10 rounded bg-[#353542]" />
          </div>

          <div className="flex items-center justify-center gap-2.5">
            <div className="h-10 w-full rounded bg-[#353542]" />
            <div className="h-10 w-10 rounded-full bg-[#353542]" />
          </div>
        </div>
      </div>
    </section>
  );
}
