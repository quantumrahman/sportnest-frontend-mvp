import { FaTriangleExclamation } from 'react-icons/fa6';

export default function ToastContent({ message }) {
    return (
        <div className="flex w-fit items-center justify-center gap-2 rounded-xl bg-white p-2">
            <FaTriangleExclamation
                className="mb-0.5 text-neutral-950"
                size={16}
            />
            <span className="text-base font-medium text-neutral-950">
                {message}
            </span>
        </div>
    );
}
