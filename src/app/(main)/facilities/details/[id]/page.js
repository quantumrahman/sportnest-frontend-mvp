'use client';

import {
    FaCircleCheck,
    FaClock,
    FaMapLocationDot,
    FaUser,
} from 'react-icons/fa6';

export default function FacilityDetailsPage() {
    return (
        <div className="w-full bg-neutral-50 px-5 pb-10 transition-all duration-200 ease-linear md:px-10">
            <section className="border-b border-neutral-200 py-16 text-center transition-all duration-200 ease-linear md:py-20 lg:py-24 xl:py-[120px]">
                <div className="mx-auto w-full max-w-7xl">
                    <h1 className="text-[32px] leading-tight font-semibold text-neutral-950 transition-all duration-200 ease-linear md:text-[44px] lg:text-[56px]">
                        Facility Details
                    </h1>
                    <p className="text-base font-normal text-neutral-500 transition-all duration-200 ease-linear">
                        View facility details, pricing, availability, and book
                        your preferred slot.
                    </p>
                </div>
            </section>
            <section className="w-full py-10">
                <div className="mx-auto flex w-full max-w-7xl flex-col items-start justify-between gap-6 lg:flex-row">
                    <div className="flex w-full flex-2 flex-col gap-6">
                        <div className="w-full">
                            <span className="w-fit rounded-full bg-neutral-950 px-2 py-1 text-sm font-medium text-neutral-50">
                                Football
                            </span>
                            <h2 className="mt-4 text-2xl font-medium capitalize sm:text-3xl">
                                Green Football Turf Arena
                            </h2>
                            <div className="mt-5 flex w-full flex-wrap items-center gap-4">
                                <div className="flex items-center justify-center gap-2">
                                    <FaMapLocationDot className="mb-0.5 text-base text-neutral-900" />
                                    <p className="text-base font-normal text-neutral-500">
                                        Location:{' '}
                                        <span className="text-neutral-900">
                                            Gulshan, Dhaka
                                        </span>
                                    </p>
                                </div>
                                <div className="flex items-center justify-center gap-2">
                                    <FaUser className="mb-0.5 text-base text-neutral-900" />
                                    <p className="text-base font-normal text-neutral-500">
                                        Capacity:{' '}
                                        <span className="text-neutral-900">
                                            22 player
                                        </span>
                                    </p>
                                </div>
                                <div className="flex items-center justify-center gap-2">
                                    <FaClock className="mb-0.5 text-base text-neutral-900" />
                                    <p className="text-base font-normal text-neutral-500">
                                        Time:{' '}
                                        <span className="text-neutral-900">
                                            6AM-12PM
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full">
                            <div className="relative aspect-video overflow-hidden rounded-xl bg-neutral-100"></div>
                            <div className="mt-6 h-px w-full bg-neutral-200"></div>
                        </div>
                        <div className="w-full">
                            <div className="flex w-full flex-col items-center justify-center">
                                <div className="w-full space-y-2">
                                    <h3 className="text-base font-medium text-neutral-900">
                                        About facility
                                    </h3>
                                    <div className="h-0.5 w-10 bg-neutral-900"></div>
                                    <p className="mt-4 text-base font-normal text-neutral-500">
                                        Lorem ipsum dolor sit, amet consectetur
                                        adipisicing elit. Veniam voluptates
                                        quaerat quae voluptatum porro neque?
                                        Quae quisquam atque ipsum id, architecto
                                        voluptatum saepe, enim quam corporis
                                        repellat explicabo cum, harum est
                                        accusantium quidem aut vero eius a illo
                                        dolore iusto impedit provident nisi
                                        neque! Animi autem dicta vero beatae vel
                                        unde cum necessitatibus adipisci eveniet
                                        deleniti.
                                    </p>
                                </div>
                                <div className="mt-8 w-full space-y-2 rounded-xl border border-neutral-200 p-5">
                                    <h3 className="text-base font-medium text-neutral-900">
                                        Amenities
                                    </h3>
                                    <div className="h-0.5 w-10 bg-neutral-900"></div>
                                    <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
                                        <p className="flex items-center justify-center gap-2 text-base font-normal text-neutral-500">
                                            <FaCircleCheck className="text-neutral-900" />{' '}
                                            Parking Area
                                        </p>
                                        <p className="flex items-center justify-center gap-2 text-base font-normal text-neutral-500">
                                            <FaCircleCheck className="text-neutral-900" />{' '}
                                            Changing Room
                                        </p>
                                        <p className="flex items-center justify-center gap-2 text-base font-normal text-neutral-500">
                                            <FaCircleCheck className="text-neutral-900" />{' '}
                                            Field Light
                                        </p>
                                        <p className="flex items-center justify-center gap-2 text-base font-normal text-neutral-500">
                                            <FaCircleCheck className="text-neutral-900" />{' '}
                                            Restaurants
                                        </p>
                                        <p className="flex items-center justify-center gap-2 text-base font-normal text-neutral-500">
                                            <FaCircleCheck className="text-neutral-900" />{' '}
                                            First Aid
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex-1">
                        <p className="w-full rounded-xl bg-neutral-900 px-4 py-[11px] text-center text-sm font-medium text-neutral-50">
                            Free cancellation up to 2 hours before
                        </p>
                        <div className="mt-4 w-full rounded-xl border border-neutral-200 p-4">
                            <form>
                                <label htmlFor="owner_email" className="w-full">
                                    <input
                                        type="text"
                                        id="owner_email"
                                        placeholder="Booking date e.g. 2026-01-16"
                                        className={`w-full rounded-xl border px-4 py-[13px] text-base font-normal text-neutral-950 transition-all duration-200 ease-linear outline-none focus:ring-1 ${false ? 'border-red-500 bg-red-500/10 placeholder:text-red-500 focus:ring-red-500' : 'border-neutral-200 bg-neutral-200/10 placeholder:text-neutral-400 focus:ring-neutral-900'}`}
                                    />
                                    <span className="inline-flex h-4 w-full items-center text-sm text-red-500">
                                        {/* {errors?.name?.message && (
                                            <>
                                                <FaExclamation />
                                                <span>{errors.name.message}</span>
                                            </>
                                        )} */}
                                    </span>
                                </label>
                                <label htmlFor="owner_email" className="w-full">
                                    <input
                                        type="text"
                                        id="owner_email"
                                        placeholder="Booking slot"
                                        className={`w-full rounded-xl border px-4 py-[13px] text-base font-normal text-neutral-950 transition-all duration-200 ease-linear outline-none focus:ring-1 ${false ? 'border-red-500 bg-red-500/10 placeholder:text-red-500 focus:ring-red-500' : 'border-neutral-200 bg-neutral-200/10 placeholder:text-neutral-400 focus:ring-neutral-900'}`}
                                    />
                                    <span className="inline-flex h-4 w-full items-center text-sm text-red-500">
                                        {/* {errors?.name?.message && (
                                            <>
                                                <FaExclamation />
                                                <span>{errors.name.message}</span>
                                            </>
                                        )} */}
                                    </span>
                                </label>
                                <label htmlFor="owner_email" className="w-full">
                                    <input
                                        type="text"
                                        id="owner_email"
                                        placeholder="Booking slot"
                                        className={`w-full rounded-xl border px-4 py-[13px] text-base font-normal text-neutral-950 transition-all duration-200 ease-linear outline-none focus:ring-1 ${false ? 'border-red-500 bg-red-500/10 placeholder:text-red-500 focus:ring-red-500' : 'border-neutral-200 bg-neutral-200/10 placeholder:text-neutral-400 focus:ring-neutral-900'}`}
                                    />
                                    <span className="inline-flex h-4 w-full items-center text-sm text-red-500">
                                        {/* {errors?.name?.message && (
                                            <>
                                                <FaExclamation />
                                                <span>{errors.name.message}</span>
                                            </>
                                        )} */}
                                    </span>
                                </label>
                                <div className="flex w-full flex-col items-center justify-center gap-4">
                                    <div className="flex w-full items-center justify-between border border-dashed border-neutral-200 p-3">
                                        <h3 className="text-base font-medium text-neutral-900">
                                            Total Price
                                        </h3>
                                        <p className="text-lg font-semibold text-neutral-900">
                                            $500
                                        </p>
                                    </div>
                                    <button
                                        type="submit"
                                        className="hover mt- w-full cursor-pointer rounded-full bg-neutral-900 px-4 py-[11px] text-base font-medium text-neutral-50 transition-colors duration-200 ease-linear hover:bg-neutral-800"
                                    >
                                        Publish facility
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div className="mt-4 w-full">
                            <p className="text-base">
                                <strong className="text-neutral-900">
                                    Booking Policy:
                                </strong>{' '}
                                <span className="text-neutral-500">
                                    Minimum booking duration is 1 hour. Please
                                    arrive 10 minutes before your scheduled
                                    time. Bookings are confirmed after
                                    successful payment. Cancellation policies
                                    may vary by facility.
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
