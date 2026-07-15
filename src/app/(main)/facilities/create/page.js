'use client';

import CreateForm from '@/components/ui/CreateForm';

export default function FacilityCreate() {
    return (
        <div className="w-full bg-neutral-50 px-5 pb-10 transition-all duration-200 ease-linear md:px-10">
            <section className="border-b border-neutral-200 py-16 text-center transition-all duration-200 ease-linear md:py-20 lg:py-24 xl:py-[120px]">
                <div className="mx-auto w-full max-w-7xl">
                    <h1 className="text-[32px] leading-tight font-semibold text-neutral-950 transition-all duration-200 ease-linear md:text-[44px] lg:text-[56px]">
                        Create Facility
                    </h1>
                    <p className="text-base font-normal text-neutral-500 transition-all duration-200 ease-linear">
                        Add venue details and make it available for booking.
                    </p>
                </div>
            </section>
            <section className="w-full py-10">
                <div className="mx-auto w-full max-w-5xl">
                    <CreateForm />
                </div>
            </section>
        </div>
    );
}
