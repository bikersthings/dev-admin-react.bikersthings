export default ({
    modalShow,
    modalHeader,
    ModalBody,
    onClose,
    onSave,
    buttonTextClose,
    buttonTextSave,
}: {
    modalShow: boolean
    modalHeader?: string
    ModalBody?: JSX.Element | unknown | any
    onClose?: () => void
    onSave?: () => void
    buttonTextClose?: string
    buttonTextSave?: string
}) => {
    return (
        <>
            <div className={`modal-wrapper ${modalShow ? 'show' : ''}`}>
                <div className="modal-container">
                    <div className="modal-header">
                        {modalHeader}
                    </div>
                    <div className="modal-body">
                        <ModalBody />
                    </div>
                    <div className="modal-footer">
                        <button className="btn btn-danger mr-2" onClick={onClose}>{buttonTextClose}</button>
                        <button className="btn btn-primary" onClick={onSave}>{buttonTextSave}</button>
                    </div>
                </div>
            </div>
        </>
    )
}