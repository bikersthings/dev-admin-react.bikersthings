import Modal from '../../components/modal/index'

export default ({
    modal,
    onSubmit,
    brandName,
    brandLogo,
}: {
    modal?: any
    onSubmit?: (name: string, logo: any) => void
    brandName?: string
    brandLogo?: any
}) => {
    let name = brandName ? brandName : ''
    let logo = brandLogo
    return (
        <>
            <Modal isOpen={modal.isOpen} modalHeader="Brands">
                <div className="form-group">
                    <label>Nama</label>
                    <input type="Text" className="form-control" onChange={(e) => name = e.target.value} />
                </div>
                <div className="form-group mb-3">
                    <label>Logo</label>
                    <input type="file" className="form-control" onChange={(e) => logo = e.target.files} />
                </div>
                <div className="d-flex flex-row justify-content-end gap-2">
                    <button className="btn btn-danger" onClick={() => modal.close()}>
                        close
                    </button>
                    <button className="btn btn-primary" onClick={() => onSubmit?.(name, logo)}>
                        Save
                    </button>
                </div>
            </Modal>
        </>
    )
}