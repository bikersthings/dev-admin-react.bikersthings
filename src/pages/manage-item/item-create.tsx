
import Select from 'react-select'
import Uploader from '../../components/_uploader'
import { ReactElement } from 'react'
import { FilePondBaseProps } from 'filepond'

type SelectType = {
    value: string | number,
    label: string,
    type: string,
}

const users: SelectType[] = [
    { value: '1', label: 'User 1', type: 'golden bronze' },
    { value: '2', label: 'User 2', type: 'golden bronze' },
    { value: '3', label: 'User 3', type: 'golden bronze' }
]

const itemStatus: SelectType[] = [
    { value: '1', label: 'Normal', type: 'normal' },
    { value: '2', label: 'Boosted', type: 'boosted' },
    { value: '3', label: 'Banned', type: 'banned' }
]


export default () => {

    const handleChangeSelect = (props: SelectType | null): void => {
        console.log(props)
    }

    const handleImageUpload = (props: any) => {
        console.log(props, 'image uplopad')
    }

    return (
        <>
            <section className="manage-item">
                <div className="headline">
                    <h4>Create Item</h4>

                </div>
            </section>
            <section className="d-flex flex-row gap-2">
                <a href="/user/item/create" className="btn btn-primary mb-4">Tambah Item</a>

            </section>
            <div className="row mb-4">
                <div className="col-lg-7">
                    <div className="card card-form card-primary" data-select2-id="15">
                        <div className="card-body">
                            <div className="form-title">Nama User</div>
                            <div className="form-sub-title">User yang dibuatkan itemnya</div>
                            <div className="form-group mb-0" >
                                <Select options={users} onChange={handleChangeSelect} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-5">
                    <div className="card card-form card-primary">
                        <div className="card-body">
                            <div className="form-title">Status Item</div>
                            <div className="form-sub-title">Status item yang di buat</div>
                            <div className="form-group mb-0" >
                                <Select options={itemStatus} onChange={handleChangeSelect} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mb-4">
                <div className="col-lg-7">
                    <div className="card card-form card-primary">
                        <div className="card-body">
                            <div className="form-title">Tipe Item</div>
                            <div className="form-sub-title">WTS untuk item dijual, dan WTB untuk item dibeli/dicari</div>
                            <div className="d-flex flex-row align-items-center gap-4">
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="tipe-item" id="wts" value="wts" />
                                    <label className="form-check-label" htmlFor="wts">
                                        WTS (Menjual barang/jasa)
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="tipe-item" id="wtb" value="wtb" />
                                    <label className="form-check-label" htmlFor="wtb">
                                        WTB (Membeli/mencari barang/jasa)
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-5">
                    <div className="card card-form card-primary">
                        <div className="card-body">
                            <div className="form-title">Kondisi Item</div>
                            <div className="form-sub-title">Sesuaikan dengan kondisi item</div>
                            <div className="d-flex flex-row align-items-center gap-4">
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="item-condition" id="baru" value="baru" />
                                    <label className="form-check-label" htmlFor="baru">
                                        Baru
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="item-condition" id="bekas" value="bekas" />
                                    <label className="form-check-label" htmlFor="bekas">
                                        Bekas
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mb-4">
                <div className="col-lg-7">
                    <div className="card card-form card-primary">
                        <div className="card-body">
                            <div className="form-title">Nama Item</div>
                            <div className="form-sub-title">Sebaiknya Nama Item terdiri dari Brand dan Tipe item</div>
                            <div className="form-group mb-0">
                                <input type="text" className="form-control" placeholder="AGV (Brand) + Pista GP Misano 2015 (Tipe)   /   KYT (Brand) + Kyoto (Tipe)   /   SENA (Brand) + 50r (Tipe)" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-5">
                    <div className="card card-form card-primary">
                        <div className="card-body">
                            <div className="form-title">Harga Item</div>
                            <div className="form-sub-title">Harga jual atau budget pembelian</div>
                            <div className="form-group mb-0">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <div className="input-group-text">Rp</div>
                                    </div>
                                    <input type="number" className="form-control" placeholder="90.000.000" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="card card-form card-primary">
                        <div className="card-body">
                            <Uploader onChange={handleImageUpload} />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}