'use client';

import SignInForm from '@/components/ui/SignInForm';
import Link from 'next/link';
import { FaGoogle } from 'react-icons/fa6';

export default function SigninPage() {
    return (
        <div className="flex min-h-screen w-full items-center justify-center bg-neutral-900 px-5 md:px-10">
            <div className="flex w-full max-w-[450px] flex-col items-center justify-center">
                <div className="mb-5 w-full text-center">
                    <Link href={'/'} className="mx-auto block w-fit">
                        <h1 className="text-lg font-bold text-neutral-50 uppercase">
                            SportNest
                        </h1>
                    </Link>
                </div>
                <div className="flex w-full flex-col items-center text-center">
                    <h2 className="text-[32px] font-semibold text-neutral-50">
                        Welcome back
                    </h2>
                    <p className="mt-2 w-full max-w-[400px] text-sm text-neutral-400">
                        Welcome back! Sign in to access your SportNest account
                        and manage your bookings.
                    </p>
                </div>
                <button className="mt-10 flex w-full cursor-pointer items-center justify-center gap-2 rounded-full border border-neutral-700 py-2.5 text-base font-medium text-neutral-50 transition-colors duration-200 ease-linear hover:bg-neutral-700/20">
                    <FaGoogle />
                    Sign in with Google
                </button>
                <div className="my-5 flex w-full items-center justify-center gap-2">
                    <div className="h-px w-full bg-neutral-700"></div>
                    <p className="text-sm font-medium text-neutral-500">or</p>
                    <div className="h-px w-full bg-neutral-700"></div>
                </div>
                <SignInForm />
                <div className="mt-3 w-full text-center">
                    <p className="text-center text-xs text-neutral-400">
                        By continuing, you agree to SportNest{' '}
                        <span className="cursor-pointer underline">Terms</span>{' '}
                        of Service and{' '}
                        <span className="cursor-pointer underline">
                            Privacy Policy
                        </span>
                        .
                    </p>
                    <p className="mt-4 text-sm text-neutral-400">
                        Don{`'`}t have an account?{' '}
                        <Link href={'/auth/signup'} className="hover:underline">
                            Sign Up
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
