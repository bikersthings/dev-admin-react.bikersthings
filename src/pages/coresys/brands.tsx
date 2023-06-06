import { faPenClip, faRocket, faTrash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Swal from 'sweetalert2'
import { Link } from "react-router-dom";

export default () => {
    const deleteItem = () => {
        Swal.fire({
            title: 'Hapus Item?',
            text: 'Item akan terhapus dan menghilang dari daftar pencarian BIKERSTHINGS',
            icon: 'info',
            showCancelButton: true,
            cancelButtonText: 'Cancel',
            confirmButtonText: 'Ok',
        }).then((prop) => {
            if (prop.isConfirmed) {
                Swal.fire({
                    title: 'Item Telah Dihapus',
                    icon: 'success',
                    confirmButtonText: 'Ok',
                })
            }
        })
    }
    const boostItem = () => {
        Swal.fire({
            title: 'Boost item?',
            text: 'Boost! voucher akan terpakai, dan status item akan menjadi Boosted!',
            icon: 'info',
            showCancelButton: true,
            cancelButtonText: 'Cancel',
            confirmButtonText: 'Ok',
        }).then((prop) => {
            if (prop.isConfirmed) {
                Swal.fire({
                    text: 'Status item menjadi Boosted!',
                    icon: 'success',
                    confirmButtonText: 'Ok',
                })
            }
        })
    }
    return (
        <>
            <section className="manage-item">
                <div className="headline">
                    <h4>List Item</h4>
                    <div className="badge badge-primary">Boost! Voucher : [10]</div>
                </div>
            </section>
            <section className="d-flex flex-row gap-2 mb-4">
                <Link to="/create" className="btn btn-primary">Tambah Item</Link>
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
                                <th>Nama</th>
                                <th>Logo</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="odd">
                                <td className="align-middle ">
                                    1
                                </td>
                                <td className="align-middle ">
                                    [Nama Toko] <br />
                                    [ID Toko 10 Digit]
                                </td>
                                <td className="">
                                    <div className="badge badge-primary mt-2">Nama Item</div>
                                    <br />
                                    [ID Item 10 Digit]
                                </td>

                                <td className="align-middle">
                                    {/* <i className="fas fa-eye mr-1"></i> 2.000 */}
                                </td>
                                <td className="align-middle ">
                                    <button className="btn btn-success" id="swalBoost" onClick={() => boostItem()}>
                                        <FontAwesomeIcon icon={faRocket} />
                                    </button>
                                    <button className="btn btn-warning mx-1 text-white">
                                        <FontAwesomeIcon icon={faPenClip} />
                                    </button>
                                    <button className="btn btn-danger" id="swalDelete" onClick={() => deleteItem()}>
                                        <FontAwesomeIcon icon={faTrash} />
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div >
            </section >
        </>
    )
}