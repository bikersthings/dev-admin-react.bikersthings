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
                <a href="/user/item/create" className="btn btn-primary mb-4">Tambah Item</a>
                <a href="" className="btn btn-success mb-4">Import Excel Item</a>
                <a href="" className="btn btn-info mb-4">Beli Boost! Voucher</a>
            </section>
            <div className="d-flex flex-row">

            </div>
            <section className="table-item">
                <div className="card card-primary">
                    <table className="table table-striped dataTable no-footer">
                        <thead className="text-center">
                            <tr role="row">
                                <th className="sorting_desc" tabIndex={0} aria-controls="dataTable" rowSpan={1} colSpan={1} aria-label="
                                                #
                                            : activate to sort column ascending" aria-sort="descending">
                                    #
                                </th>
                                <th className="sorting" aria-controls="dataTable" rowSpan={1} colSpan={1} aria-label="Produk: activate to sort column ascending">Produk</th>
                                <th className="sorting" aria-controls="dataTable" rowSpan={1} colSpan={1} aria-label="Dilihat: activate to sort column ascending" >Dilihat</th>
                                <th className="sorting" aria-controls="dataTable" rowSpan={1} colSpan={1} aria-label="Harga: activate to sort column ascending"  >Harga</th>
                                <th className="sorting" aria-controls="dataTable" rowSpan={1} colSpan={1} aria-label="Kategori: activate to sort column ascending"  >Kategori</th>
                                <th className="sorting" aria-controls="dataTable" rowSpan={1} colSpan={1} aria-label="Brand: activate to sort column ascending"  >Brand</th>
                                <th className="sorting" aria-controls="dataTable" rowSpan={1} colSpan={1} aria-label="Tipe: activate to sort column ascending"  >Tipe</th>
                                <th className="sorting_disabled" rowSpan={1} colSpan={1} aria-label="Status" >Status</th>
                                <th className="sorting" aria-controls="dataTable" rowSpan={1} colSpan={1} aria-label="Action: activate to sort column ascending"  >Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>Otto</td>
                                <td>Otto</td>
                                <td>Otto</td>
                                <td>Otto</td>
                                <td>
                                    <div className="badge badge-dark">Reguler</div>
                                    <div className="badge badge-warning">On Hold</div>
                                    <div className="badge badge-primary">Boosted!</div>
                                </td>
                                <td className="align-middle text-center">
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