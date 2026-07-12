'use client';

import { FaExclamation } from 'react-icons/fa6';

export default function SignInForm() {
    return (
        <div className="w-full">
            <form>
                <label htmlFor="email" className="w-full">
                    <input
                        type="text"
                        id="email"
                        placeholder="Email address"
                        className="w-full rounded-xl border border-neutral-700 bg-neutral-700/20 px-4 py-[13px] text-white caret-white outline-none placeholder:text-neutral-500 focus:ring-2 focus:ring-white"
                    />
                    <span className="inline-flex h-4 w-full items-center text-sm text-red-500"></span>
                </label>
                <label htmlFor="password" className="w-full">
                    <input
                        type="password"
                        id="password"
                        placeholder="Password"
                        className="w-full rounded-xl border border-neutral-700 bg-neutral-700/20 px-4 py-[13px] text-white caret-white outline-none placeholder:text-neutral-500 focus:ring-2 focus:ring-white"
                    />
                    <span className="inline-flex h-4 w-full items-center text-sm text-red-500"></span>
                </label>
                <button
                    type="submit"
                    className="hover flex w-full cursor-pointer items-center justify-center rounded-full bg-neutral-50 py-2.5 text-base font-medium text-neutral-950 transition-colors duration-200 ease-linear hover:bg-neutral-200"
                >
                    Continue
                </button>
            </form>
        </div>
    );
}
