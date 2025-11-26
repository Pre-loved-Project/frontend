"use client";

export default function ProfileSkeleton() {
  return (
    <article className="flex h-[556px] w-[335px] items-center justify-center rounded-lg border border-[#353542] bg-[#252530] px-5 py-7 md:h-[601px] md:w-[509px] md:px-7 xl:h-[753px] xl:w-[340px] xl:px-5 xl:pt-10">
      <div className="flex h-full w-full animate-pulse flex-col items-center justify-between">
        <div className="h-[120px] w-[120px] rounded-full bg-[#353542] xl:h-[180px] xl:w-[180px]" />

        <div className="mt-4 w-full space-y-3">
          <div className="mx-auto h-6 w-32 rounded bg-[#353542]" />
          <div className="h-4 w-full rounded bg-[#353542]" />
          <div className="h-4 w-3/4 rounded bg-[#353542]" />
        </div>

        <div className="mt-6 w-full">
          <div className="mb-2 flex justify-between text-center">
            <div className="relative flex flex-1 flex-col items-center gap-2">
              <div className="h-5 w-10 rounded bg-[#353542]" />
              <div className="h-4 w-16 rounded bg-[#353542]" />
              <span className="absolute top-0 right-0 h-full w-px bg-[#353542]" />
            </div>

            <div className="relative flex flex-1 flex-col items-center gap-2">
              <div className="h-5 w-10 rounded bg-[#353542]" />
              <div className="h-4 w-16 rounded bg-[#353542]" />
            </div>
          </div>
        </div>

        <div className="mt-4 w-full text-center">
          <div className="mx-auto h-5 w-20 rounded bg-[#353542]" />
          <div className="mx-auto mt-2 h-4 w-24 rounded bg-[#353542]" />
        </div>

        <div className="mt-6 flex w-full flex-col gap-2.5 md:gap-4 lg:gap-5">
          <div className="h-12 w-full rounded bg-[#353542]" />
          <div className="h-12 w-full rounded bg-[#353542]" />
        </div>
      </div>
    </article>
  );
}
