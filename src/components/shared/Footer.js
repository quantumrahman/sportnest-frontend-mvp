import Link from 'next/link';

import { FaFacebookF, FaXTwitter, FaLinkedinIn } from 'react-icons/fa6';

export default function Footer() {
    return (
        <div className="w-full bg-neutral-900 px-5 pt-10 pb-5 md:px-10">
            <footer className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center">
                <div className="flex w-full flex-col items-center justify-between gap-5 md:flex-row">
                    <nav className="w-fit">
                        <ul className="flex flex-wrap items-center justify-center gap-5">
                            <li className="w-fit text-base font-normal">
                                <Link
                                    href={'/'}
                                    className="text-neutral-400 transition-colors duration-200 ease-linear hover:text-neutral-50"
                                >
                                    Privacy policy
                                </Link>
                            </li>
                            <li className="w-fit text-base font-normal">
                                <Link
                                    href={'/'}
                                    className="text-neutral-400 transition-colors duration-200 ease-linear hover:text-neutral-50"
                                >
                                    Cookies policy
                                </Link>
                            </li>
                            <li className="w-fit text-base font-normal">
                                <Link
                                    href={'/'}
                                    className="text-neutral-400 transition-colors duration-200 ease-linear hover:text-neutral-50"
                                >
                                    Terms of use
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    <div className="flex w-fit items-center justify-center gap-3">
                        <Link
                            href={'/'}
                            className="rounded-md bg-neutral-50 p-2 text-neutral-900 transition-colors duration-200 ease-linear hover:bg-neutral-200"
                        >
                            <FaFacebookF />
                        </Link>
                        <Link
                            href={'/'}
                            className="rounded-md bg-neutral-50 p-2 text-neutral-900 transition-colors duration-200 ease-linear hover:bg-neutral-200"
                        >
                            <FaXTwitter />
                        </Link>
                        <Link
                            href={'/'}
                            className="rounded-md bg-neutral-50 p-2 text-neutral-900 transition-colors duration-200 ease-linear hover:bg-neutral-200"
                        >
                            <FaLinkedinIn />
                        </Link>
                    </div>
                </div>
                <div className="mt-10 h-px w-full bg-neutral-800"></div>
                <div className="mt-5 w-full text-center">
                    <span className="text-sm text-neutral-400">
                        &copy; {new Date().getFullYear()} SportNest. All rights
                        reserved
                    </span>
                </div>
            </footer>
        </div>
    );
}
