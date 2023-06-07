import { faEye, faTrash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Swal from 'sweetalert2'
import { Link } from "react-router-dom";
import { useCategoryStore } from "../../zustand";
import { useEffect } from "react";

export default () => {
    const getCategory = useCategoryStore((state) => state.getCategory)
    const categoryStore = useCategoryStore((state) => state.category)

    useEffect(() => {
        if (!categoryStore) getCategory()
    }, [getCategory])


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
                    <h4>List Category</h4>
                </div>
            </section>
            <section className="d-flex flex-row gap-2 mb-4">
                <Link to="/brand" className="btn btn-primary">Tambah Category</Link>

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
                                <th>Icon</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {categoryStore && categoryStore.map((item, index) => {
                                return (
                                    <tr className="odd" key={index}>
                                        <td className="align-middle ">
                                            {index + 1}
                                        </td>
                                        <td className="align-middle ">
                                            {index + 1}
                                        </td>
                                        <td className="">
                                            {item.nama_kategori}
                                        </td>
                                        <td className="align-middle">
                                            <img src={item.icon_kategori ? item.icon_kategori : "http://via.placeholder.com/100x100"} alt={item.nama_kategori} />
                                        </td>
                                        <td className="align-middle ">
                                            <button className="btn btn-info mx-2" id="swalBoost" onClick={() => boostItem()}>
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
        </>
    )
}