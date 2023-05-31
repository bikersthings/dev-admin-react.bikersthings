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
                    <h4>List Item</h4>
                    <div className="badge badge-primary">Boost! Voucher : [10]</div>
                </div>
            </section>
            <section className="d-flex flex-row gap-2">
                <a href="/create" className="btn btn-primary mb-4">Tambah Item</a>
                <a href="" className="btn btn-success mb-4">Import Excel Item</a>
                <a href="" className="btn btn-info mb-4">Beli Boost! Voucher</a>
            </section>
            <div className="d-flex flex-row">

            </div>
            <section className="table-item">
                <div className="card card-primary p-4">
                    <table className="table   dataTable no-footer">
                        <thead className="text-center">
                            <tr>
                                <th>
                                    #
                                </th>
                                <th>Owner</th>
                                <th>Item</th>
                                <th>Dilihat</th>
                                <th>Tipe</th>
                                <th>Kondisi</th>
                                <th>Harga</th>
                                <th>Kategori</th>
                                <th>Brand</th>
                                <th>Status</th>
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
                                <td className="align-middle">
                                    WTS
                                </td>
                                <td className="align-middle">
                                    Baru
                                </td>
                                <td className="align-middle">
                                    Rp [90.000.000]
                                </td>
                                <td className="align-middle">
                                    [Kategori]
                                </td>
                                <td className="align-middle">
                                    [Brand]
                                </td>
                                <td className="align-middle">
                                    <div className="badge badge-dark">Reguler</div> <br />
                                    <div className="badge badge-primary">Boosted!</div> <br />
                                    <div className="badge badge-danger">Banned</div>
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