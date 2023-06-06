import { faPenClip, faRocket, faTrash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
export default ({ tableHeads, tableRows }: { tableHeads: string[], tableRows: string[] }) => {
    return (
        <>
            <table className="table   dataTable no-footer">
                <thead className="text-center">
                    <tr>
                        {tableHeads &&
                            tableHeads.map(head => {
                                return (
                                    <>
                                        <th>
                                            #
                                        </th>
                                    </>
                                )
                            })
                        }
                    </tr>
                </thead>
                <tbody>
                    <tr className="odd">
                        {tableRows &&
                            tableRows.map(item => {
                                return (
                                    <>
                                        <tr>

                                        </tr>
                                    </>
                                )
                            })
                        }
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
                            <button className="btn btn-success" id="swalBoost">
                                <FontAwesomeIcon icon={faRocket} />
                            </button>
                            <button className="btn btn-warning mx-1 text-white">
                                <FontAwesomeIcon icon={faPenClip} />
                            </button>
                            <button className="btn btn-danger" id="swalDelete">
                                <FontAwesomeIcon icon={faTrash} />
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table></>
    )
}