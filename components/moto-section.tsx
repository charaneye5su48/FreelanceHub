"use client"
export function MotoSection() {
    return (
        <section className="bg-black pt-24 pb-8 border-b border-white/30">
            <div className="mx-auto flex flex-col items-center justify-center px-6 text-center">
                <span
                    className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight"
                    style={{ fontFamily: "var(--font-heading)" }}
                >
                    <span className="text-[#dc2626]">okay, </span>
                    <span className="text-white">we'll get you hired.</span>
                </span>
                <p className="mt-4 text-sm sm:text-base leading-relaxed text-white/50 max-w-2xl">
                    "real talk: the job market is honestly cooked right now, but your future doesn't have to be.
                    don't give up. let's get you that role today."
                </p>
            </div>
        </section>
    )
}
