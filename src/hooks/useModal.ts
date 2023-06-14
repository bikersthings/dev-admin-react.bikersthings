import { useState } from 'react';

// export default function useModal() {
//     const [isOpen, setIsOpen] = useState<boolean>(false);

//     const openModal = () => {
//         setIsOpen(true);
//     };

//     const closeModal = () => {
//         setIsOpen(false);
//     };

//     const props = {
//         isOpen,
//         onRequestClose: closeModal,
//     };

//     return {
//         openModal,
//         closeModal,
//         props,
//     };
// }
export default function useModal(): Modal {
    const [isOpen, setOpen] = useState(false);
    return {
        isOpen,
        open() {
            setOpen(true);
        },
        close() {
            setOpen(false);
        },
    };
}

interface Modal {
    isOpen: boolean;
    open(): void;
    close(): void;
}