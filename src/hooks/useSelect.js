'use client';

import { useState, useRef, useEffect } from 'react';

export default function useSelect() {
    const [isOpen, setIsOpen] = useState(false);
    const selectRef = useRef(null);

    const selectOpen = () => {
        setIsOpen(true);
    };

    const selectClose = () => {
        setIsOpen(false);
    };

    const selectToggle = () => {
        setIsOpen((prev) => !prev);
    };

    useEffect(() => {
        const handleSelectClick = (e) => {
            if (selectRef.current && !selectRef.current.contains(e.target)) {
                selectClose();
            }
        };

        document.addEventListener('mousedown', handleSelectClick);

        return () =>
            document.removeEventListener('mousedown', handleSelectClick);
    }, []);

    return { isOpen, selectOpen, selectClose, selectToggle, selectRef };
}
