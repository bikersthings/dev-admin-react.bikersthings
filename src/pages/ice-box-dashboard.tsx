import { faPenClip, faRocket, faTrash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Swal from 'sweetalert2'


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
                    <h4>List Ice Box</h4>
                </div>
            </section>
            <section className="d-flex flex-row gap-2">
                <a href="/create" className="btn btn-primary mb-4">Tambah Ice Box</a>

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
                                <th>
                                    #
                                </th>
                                <th>Ice Box</th>
                                <th>Deskripsi</th>
                                <th>Ice-Coupon</th>
                                <th>Break-Now</th>
                                <th>Expired</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="odd">
                                <td className="align-middle ">
                                    1
                                </td>
                                <td className="text-center">
                                    <img src="http://localhost:8000/assets/img/thumbnail/item.png" alt="" style={{ width: '100px', borderRadius: '10px' }} />
                                    <br />
                                    <div className="badge badge-primary mt-2">[Nama Ice Box]</div> <br />
                                    <div>[Nama Items]</div>
                                    <div>[ID IceBox 10 Digit]</div>
                                </td>
                                <td className="">
                                    <div className="badge badge-primary mt-2">Nama Item</div>
                                    <br />
                                    [ID Item 10 Digit]
                                </td>

                                <td className="align-middle">
                                    {/* <i className="fas fa-eye mr-1"></i> 2.000 */}
                                </td>
                                <td className="align-middle">
                                    WTS
                                </td>
                                <td className="align-middle">
                                    <button className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">50 / 100 Participant </button>
                                    <br />
                                    <div className="progress my-3">
                                        <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{ width: '50%' }}></div>
                                    </div>
                                    <div className="badge badge-success">Active : [yyyy/mm/dd]</div>
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