
export default ({
    isOpen,
    modalHeader,
    children
}: {
    isOpen: boolean
    modalHeader?: string
    ModalBody?: JSX.Element | unknown | any
    children: React.ReactNode
}) => {
    return (
        <>
            {isOpen &&
                <div className={`modal-wrapper ${isOpen ? 'show' : ''}`}>
                    <div className="modal-container">
                        <div className="modal-header">
                            {modalHeader}
                        </div>
                        <div className="modal-body">
                            {children}
                        </div>
                    </div>
                </div>
            }
        </>
    )
}