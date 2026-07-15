'use client';

import FacilityCard from '@/components/ui/FacilityCard';

export default function FacilitiesPage() {
    return (
        <div className="w-full bg-neutral-50 px-5 pb-10 transition-all duration-200 ease-linear md:px-10">
            <section className="border-b border-neutral-200 py-16 text-center transition-all duration-200 ease-linear md:py-20 lg:py-24 xl:py-[120px]">
                <div className="mx-auto w-full max-w-7xl">
                    <h2 className="text-[32px] leading-tight font-semibold text-neutral-950 transition-all duration-200 ease-linear md:text-[44px] lg:text-[56px]">
                        Browse Facilities
                    </h2>
                    <p className="text-base font-normal text-neutral-500 transition-all duration-200 ease-linear">
                        Discover top-rated venues for every game.
                    </p>
                </div>
            </section>
            <section className="w-full py-10">
                <div className="mx-auto grid w-full max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    <FacilityCard />
                    <FacilityCard />
                    <FacilityCard />
                </div>
            </section>
        </div>
    );
}
