'use client';

import { FaExclamation } from 'react-icons/fa6';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import validationSchema from '@/validators/SignInValidator';

export default function SignInForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(validationSchema),
    });

    const handleOnSubmit = (form) => {
        console.log(form);
    };

    return (
        <div className="w-full">
            <form onSubmit={handleSubmit(handleOnSubmit)}>
                <label htmlFor="email" className="w-full">
                    <input
                        type="text"
                        id="email"
                        {...register('email')}
                        placeholder="Email address"
                        className={`w-full rounded-xl border px-4 py-[13px] text-white caret-white outline-none focus:ring-2 ${errors?.email ? 'border-red-500 bg-red-700/20 placeholder:text-red-500 focus:ring-red-500' : 'border-neutral-700 bg-neutral-700/20 placeholder:text-neutral-500 focus:ring-white'} transition-all duration-200 ease-linear`}
                    />
                    <span className="inline-flex h-4 w-full items-center text-sm text-red-500">
                        {errors?.email?.message && (
                            <>
                                <FaExclamation />
                                <span>{errors.email.message}</span>
                            </>
                        )}
                    </span>
                </label>
                <label htmlFor="password" className="w-full">
                    <input
                        type="password"
                        id="password"
                        {...register('password')}
                        placeholder="Password"
                        className={`w-full rounded-xl border px-4 py-[13px] text-white caret-white outline-none focus:ring-2 ${errors?.password ? 'border-red-500 bg-red-700/20 placeholder:text-red-500 focus:ring-red-500' : 'border-neutral-700 bg-neutral-700/20 placeholder:text-neutral-500 focus:ring-white'} transition-all duration-200 ease-linear`}
                    />
                    <span className="inline-flex h-4 w-full items-center text-sm text-red-500">
                        {errors?.password?.message && (
                            <>
                                <FaExclamation />
                                <span>{errors.password.message}</span>
                            </>
                        )}
                    </span>
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
