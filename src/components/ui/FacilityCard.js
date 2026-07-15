import { FaArrowRight } from 'react-icons/fa6';

import Link from 'next/link';

export default function FacilityCard() {
    return (
        <article className="space-y-2">
            <div className="flex w-full flex-col gap-4">
                <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-neutral-100">
                    <span className="absolute top-4 right-4 z-10 rounded-full bg-neutral-950 px-2 py-1 text-xs text-white md:text-sm">
                        Football
                    </span>
                </div>
                <div className="w-full space-y-1">
                    <h3 className="text-xl leading-tight font-semibold text-neutral-950">
                        Green arena football club
                    </h3>
                    <div className="my-1 flex w-full items-center justify-between">
                        <p className="text-base text-neutral-950/60">
                            Gulshan, Dhaka
                        </p>
                        <p className="text-lg font-semibold text-neutral-950">
                            $500
                        </p>
                    </div>
                </div>
            </div>
            <Link
                href={'/'}
                className="group inline-flex w-fit transform items-center gap-2 text-base leading-snug text-neutral-950/60 underline transition-all duration-200 ease-linear hover:text-neutral-950"
            >
                Book Now
                <FaArrowRight
                    size={12}
                    className="transition-transform duration-200 ease-linear group-hover:translate-x-1"
                />
            </Link>
        </article>
    );
}
