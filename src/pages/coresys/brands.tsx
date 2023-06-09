import { faEye, faTrash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom";
import { useBrandStore } from "../../zustand";
import { useEffect, useState } from "react";
import Modal from "../../components/modal/modal";

export default () => {
    const [modalShow, setModalShow] = useState<boolean>(false)
    const [name, setName] = useState<string>('')
    const [files, setFiles] = useState<any>()

    const getBrands = useBrandStore((state) => state.getBrands)
    const brandStore = useBrandStore((state) => state.brands)

    useEffect(() => {
        if (!brandStore) getBrands()
    }, [getBrands])

    const deleteItem = () => {
        console.log('delete')
    }

    const ModalBody = () => {
        return (
            <>
                <div className="form-group">
                    <label>Nama</label>
                    <input type="Text" value={name} className="form-control" onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Logo</label>
                    <input type="file" value={files} className="form-control" onChange={(e) => setFiles(e.target.value)} />
                </div>
            </>
        )
    }

    const handleModalSave = () => {
        console.log('save')
    }



    return (
        <>
            <section className="manage-item">
                <div className="headline">
                    <h4>List Brand</h4>
                </div>
            </section>
            <section className="d-flex flex-row gap-2 mb-4">
                <Link to="/brand" className="btn btn-primary">Tambah Brand</Link>
            </section>

            <section className="table-item">
                <div className="card card-primary p-4">
                    <div className="row justify-content-between">
                        <div className="form-group d-flex flex-row align-items-center justify-content-left mb-3 col-2">
                            <label htmlFor="">Show</label>
                            <select name="" id="" className="form-control mx-3">
                                <option value="">10</option>
                                <option value="">20</option>
                            </select>
                            <label htmlFor="">Entries</label>
                        </div>
                        <div className="form-group d-flex flex-row align-items-center justify-content-left mb-3 col-4">
                            <label htmlFor="" className="mx-2">Show</label>
                            <input type="text" className="form-control" />
                        </div>
                    </div>
                    <table className="table   dataTable no-footer">
                        <thead className="text-center">
                            <tr>
                                <th> # </th>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Logo</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {brandStore && brandStore.map((item, index) => {
                                return (
                                    <tr className="odd" key={index}>
                                        <td className="align-middle ">
                                            {index + 1}
                                        </td>
                                        <td className="align-middle ">
                                            {index + 1}
                                        </td>
                                        <td className="">
                                            {item.nama_brand}
                                        </td>
                                        <td className="align-middle">
                                            <img src={item.logo_brand ? item.logo_brand : "http://via.placeholder.com/100x100"} alt={item.nama_brand} />
                                        </td>
                                        <td className="align-middle ">
                                            <button className="btn btn-info mx-2" id="swalBoost" onClick={() => setModalShow(true)}>
                                                <FontAwesomeIcon icon={faEye} />
                                            </button>

                                            <button className="btn btn-danger" id="swalDelete" onClick={() => deleteItem()}>
                                                <FontAwesomeIcon icon={faTrash} />
                                            </button>
                                        </td>
                                    </tr>
                                )
                            })}

                        </tbody>
                    </table>
                </div >
            </section >
            <Modal
                modalShow={modalShow}
                modalHeader={'Brand'}
                ModalBody={ModalBody}
                onClose={() => setModalShow(false)}
                onSave={() => handleModalSave()}
                buttonTextClose={'Close'}
                buttonTextSave={'Save'}
            />
        </>
    )
}