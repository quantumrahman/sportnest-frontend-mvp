'use client';

import { FaExclamation } from 'react-icons/fa6';
import { facilityType } from '@/constants/facilityType';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import validationSchema from '@/validators/CreateValidator';
import SelectDropdown from './SelectDropdown';

export default function CreateForm() {
    const {
        register,
        handleSubmit,
        control,
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
                <div className="flex w-full flex-col items-center justify-center sm:flex-row sm:gap-4">
                    <label htmlFor="name" className="w-full">
                        <input
                            type="text"
                            id="name"
                            placeholder="Name"
                            {...register('name')}
                            className={`w-full rounded-xl border px-4 py-[13px] text-base font-normal text-neutral-950 transition-all duration-200 ease-linear outline-none focus:ring-1 ${errors?.name?.message ? 'border-red-500 bg-red-500/10 placeholder:text-red-500 focus:ring-red-500' : 'border-neutral-200 bg-neutral-200/10 placeholder:text-neutral-400 focus:ring-neutral-900'}`}
                        />
                        <span className="inline-flex h-4 w-full items-center text-sm text-red-500">
                            {errors?.name?.message && (
                                <>
                                    <FaExclamation />
                                    <span>{errors.name.message}</span>
                                </>
                            )}
                        </span>
                    </label>
                    <Controller
                        name="facility_type"
                        control={control}
                        render={({ field }) => (
                            <SelectDropdown
                                options={facilityType}
                                value={field.value}
                                onChange={field.onChange}
                                placeholder={'Select type'}
                                error={errors?.facility_type?.message}
                            />
                        )}
                    />
                </div>
                <div className="flex w-full flex-col items-center justify-center sm:flex-row sm:gap-4">
                    <label htmlFor="location" className="w-full">
                        <input
                            type="text"
                            id="location"
                            placeholder="Location"
                            {...register('location')}
                            className={`w-full rounded-xl border px-4 py-[13px] text-base font-normal text-neutral-950 transition-all duration-200 ease-linear outline-none focus:ring-1 ${errors?.location?.message ? 'border-red-500 bg-red-500/10 placeholder:text-red-500 focus:ring-red-500' : 'border-neutral-200 bg-neutral-200/10 placeholder:text-neutral-400 focus:ring-neutral-900'}`}
                        />
                        <span className="inline-flex h-4 w-full items-center text-sm text-red-500">
                            {errors?.location?.message && (
                                <>
                                    <FaExclamation />
                                    <span>{errors.location.message}</span>
                                </>
                            )}
                        </span>
                    </label>
                    <label htmlFor="price_per_hour" className="w-full">
                        <input
                            type="text"
                            id="price_per_hour"
                            placeholder="Price per hour"
                            {...register('price_per_hour')}
                            inputMode="numeric"
                            className={`w-full rounded-xl border px-4 py-[13px] text-base font-normal text-neutral-950 transition-all duration-200 ease-linear outline-none focus:ring-1 ${errors?.price_per_hour?.message ? 'border-red-500 bg-red-500/10 placeholder:text-red-500 focus:ring-red-500' : 'border-neutral-200 bg-neutral-200/10 placeholder:text-neutral-400 focus:ring-neutral-900'}`}
                        />
                        <span className="inline-flex h-4 w-full items-center text-sm text-red-500">
                            {errors?.price_per_hour?.message && (
                                <>
                                    <FaExclamation />
                                    <span>{errors.price_per_hour.message}</span>
                                </>
                            )}
                        </span>
                    </label>
                </div>
                <div className="flex w-full flex-col items-center justify-center sm:flex-row sm:gap-4">
                    <label htmlFor="capacity" className="w-full">
                        <input
                            type="text"
                            id="capacity"
                            placeholder="Capacity"
                            {...register('capacity')}
                            inputMode="numeric"
                            className={`w-full rounded-xl border px-4 py-[13px] text-base font-normal text-neutral-950 transition-all duration-200 ease-linear outline-none focus:ring-1 ${errors?.capacity?.message ? 'border-red-500 bg-red-500/10 placeholder:text-red-500 focus:ring-red-500' : 'border-neutral-200 bg-neutral-200/10 placeholder:text-neutral-400 focus:ring-neutral-900'}`}
                        />
                        <span className="inline-flex h-4 w-full items-center text-sm text-red-500">
                            {errors?.capacity?.message && (
                                <>
                                    <FaExclamation />
                                    <span>{errors.capacity.message}</span>
                                </>
                            )}
                        </span>
                    </label>
                    <label htmlFor="available_slots" className="w-full">
                        <input
                            type="text"
                            id="available_slots"
                            placeholder="Available slots"
                            {...register('available_slots')}
                            className={`w-full rounded-xl border px-4 py-[13px] text-base font-normal text-neutral-950 transition-all duration-200 ease-linear outline-none focus:ring-1 ${errors?.available_slots?.message ? 'border-red-500 bg-red-500/10 placeholder:text-red-500 focus:ring-red-500' : 'border-neutral-200 bg-neutral-200/10 placeholder:text-neutral-400 focus:ring-neutral-900'}`}
                        />
                        <span className="inline-flex h-4 w-full items-center text-sm text-red-500">
                            {errors?.available_slots?.message && (
                                <>
                                    <FaExclamation />
                                    <span>
                                        {errors.available_slots.message}
                                    </span>
                                </>
                            )}
                        </span>
                    </label>
                </div>
                <div className="flex w-full flex-col items-center justify-center sm:flex-row sm:gap-4">
                    <label htmlFor="thumbnail" className="w-full">
                        <input
                            type="text"
                            id="thumbnail"
                            placeholder="Thumbnail"
                            {...register('image')}
                            className={`w-full rounded-xl border px-4 py-[13px] text-base font-normal text-neutral-950 transition-all duration-200 ease-linear outline-none focus:ring-1 ${errors?.image?.message ? 'border-red-500 bg-red-500/10 placeholder:text-red-500 focus:ring-red-500' : 'border-neutral-200 bg-neutral-200/10 placeholder:text-neutral-400 focus:ring-neutral-900'}`}
                        />
                        <span className="inline-flex h-4 w-full items-center text-sm text-red-500">
                            {errors?.image?.message && (
                                <>
                                    <FaExclamation />
                                    <span>{errors.image.message}</span>
                                </>
                            )}
                        </span>
                    </label>
                    <label htmlFor="owner_email" className="w-full">
                        <input
                            type="text"
                            id="owner_email"
                            placeholder="Email"
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
                </div>
                <div className="justify-centers flex w-full flex-col items-center">
                    <label htmlFor="description" className="h-fit w-full">
                        <textarea
                            name="description"
                            id="description"
                            rows={5}
                            placeholder="Description"
                            {...register('description')}
                            className={`w-full resize-none rounded-xl border px-4 py-[13px] text-base font-normal text-neutral-950 transition-all duration-200 ease-linear outline-none focus:ring-1 ${errors?.description?.message ? 'border-red-500 bg-red-500/10 placeholder:text-red-500 focus:ring-red-500' : 'border-neutral-200 bg-neutral-200/10 placeholder:text-neutral-400 focus:ring-neutral-900'}`}
                        />
                        <span className="inline-flex h-4 w-full items-center text-sm text-red-500">
                            {errors?.description?.message && (
                                <>
                                    <FaExclamation />
                                    <span>{errors.description.message}</span>
                                </>
                            )}
                        </span>
                    </label>
                    <button
                        type="submit"
                        className="hover w-fit cursor-pointer rounded-full bg-neutral-900 px-4 py-[11px] text-base font-medium text-neutral-50 transition-colors duration-200 ease-linear hover:bg-neutral-800"
                    >
                        Publish facility
                    </button>
                </div>
            </form>
        </div>
    );
}
