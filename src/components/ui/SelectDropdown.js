'use client';

import useSelect from '@/hooks/useSelect';
import { FaExclamation } from 'react-icons/fa6';

export default function SelectDropdown({
    value,
    onChange,
    options,
    error,
    placeholder,
    className,
}) {
    const { isOpen, selectClose, selectRef, selectToggle } = useSelect();

    return (
        <div ref={selectRef} className="relative w-full">
            <div
                onClick={selectToggle}
                className={`w-full cursor-pointer rounded-xl border px-4 py-[13px] transition-all duration-200 ease-linear outline-none hover:border-neutral-900 ${error ? 'border-red-500 bg-red-500/10 placeholder:text-red-500' : 'border-neutral-200 bg-neutral-200/10'} ${className}`}
            >
                <span
                    className={`text-base font-normal ${value ? 'text-neutral-950' : error ? 'text-red-500' : 'text-neutral-400'}`}
                >
                    {value || placeholder}
                </span>
            </div>
            {isOpen && (
                <ul className="absolute top-15 left-0 z-10 w-full overflow-hidden rounded-xl border border-neutral-200 bg-neutral-50 shadow">
                    {options.map((option) => (
                        <li
                            key={option.id}
                            onClick={() => {
                                onChange(option.type);
                                selectClose();
                            }}
                            className="cursor-pointer p-2 text-base font-normal text-neutral-950 transition-colors duration-200 ease-linear hover:bg-neutral-100"
                        >
                            {option.type}
                        </li>
                    ))}
                </ul>
            )}
            <span className="inline-flex h-4 w-full items-center text-sm text-red-500">
                {error && (
                    <>
                        <FaExclamation />
                        <span>{error}</span>
                    </>
                )}
            </span>
        </div>
    );
}
