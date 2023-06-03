
import Select, { ActionMeta } from 'react-select'
import Uploader from '../../components/_uploader'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useUserStore } from '../../zustand';
import * as React from 'react'

type SelectType = {
    value: string,
    label: string,
    type: string,
}

type AddItemType = {
    userName: string | undefined,
    itemStatus: string | undefined,
    itemType: string | undefined,
    itemCondition: string | undefined,
    itemName: string | undefined,
    itemPrice: string | undefined,
    itemImages: unknown | undefined,
    desc: string | undefined,
    category: string | undefined,
    brand: string | undefined,

};


const users: SelectType[] = [
    { value: 'user 1', label: 'User 1', type: 'golden bronze' },
    { value: 'user 2', label: 'User 2', type: 'golden bronze' },
    { value: 'user 3', label: 'User 3', type: 'golden bronze' }
]

const itemStatus: SelectType[] = [
    { value: 'normal', label: 'Normal', type: 'normal' },
    { value: 'boosted', label: 'Boosted', type: 'boosted' },
    { value: 'banned', label: 'Banned', type: 'banned' }
]


export default () => {

    const store = useUserStore()



    React.useEffect(() => {
        console.log('use effect run')
        store.setUser

    }, [])


    const { register, setValue, getValues, handleSubmit, formState: { errors } } = useForm<AddItemType>({
        resolver: yupResolver(
            yup.object({
                userName: yup.string(),
                itemStatus: yup.string(),
                itemType: yup.string(),
                itemCondition: yup.string(),
                itemName: yup.string(),
                itemPrice: yup.string(),
                itemImages: yup.object(),
                desc: yup.string(),
                category: yup.string(),
                brand: yup.string(),
            }))
    });

    const onSubmit = handleSubmit(data => {
        console.log(data, 'data')
        console.log('submit data')
    });

    const handleChangeSelect = (props: SelectType | null, actionMeta: ActionMeta<SelectType>): void => {
        switch (actionMeta.name) {
            case 'userName':
                setValue('userName', props?.value)
                break;
            case 'itemStatus':
                setValue('itemStatus', props?.value)
                break;
            case 'brand':
                setValue('brand', props?.value)
                break;
            case 'category':
                setValue('category', props?.value)
                break;
            default:
                break;
        }
    }

    const handleImageUpload = (props: any) => {
        setValue('itemImages', props[0].file.name)
    }

    return (
        <div className='pb-5'>
            <section className="manage-item">
                <div className="headline">
                    <h4>Create Item</h4>

                </div>
            </section>
            <section className="d-flex flex-row gap-2">
                <a href="/user/item/create" className="btn btn-primary mb-4">Tambah Item</a>
                <button onClick={() => console.log(store.user)}>click</button>

            </section>
            <section>
                <form onSubmit={onSubmit}>
                    <div className="row mb-4">
                        <div className="col-lg-7">
                            <div className="card card-form card-primary" data-select2-id="15">
                                <div className="card-body">
                                    <div className="form-title">Nama User</div>
                                    <div className="form-sub-title">User yang dibuatkan itemnya</div>
                                    <div className="form-group mb-0" >
                                        <Select name='userName' options={users} onChange={handleChangeSelect} />
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
                                        <Select name='itemStatus' options={itemStatus} onChange={handleChangeSelect} />
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
                                            <input {...register('itemType')} className="form-check-input" type="radio" name="itemType" id="wts" value="wts" />
                                            <label className="form-check-label" htmlFor="wts">
                                                WTS (Menjual barang/jasa)
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input {...register('itemType')} className="form-check-input" type="radio" name="itemType" id="wtb" value="wtb" />
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
                                            <input {...register('itemCondition')} className="form-check-input" type="radio" name="itemCondition" id="baru" value="baru" />
                                            <label className="form-check-label" htmlFor="baru">
                                                Baru
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input {...register('itemCondition')} className="form-check-input" type="radio" name="itemCondition" id="bekas" value="bekas" />
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
                                        <input {...register('itemName')} name='itemName' type="text" className="form-control" placeholder="AGV (Brand) + Pista GP Misano 2015 (Tipe)   /   KYT (Brand) + Kyoto (Tipe)   /   SENA (Brand) + 50r (Tipe)" />
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
                                            <input {...register('itemPrice')} name="itemPrice" type="text" className="form-control" placeholder="90.000.000" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mb-5">
                        <div className="col-lg-7">
                            <div className="card card-form card-primary">
                                <div className="card-body">
                                    <Uploader onChange={handleImageUpload} />
                                </div>
                            </div>
                        </div>
                        <div className="col-5">
                            <div className="card card-form card-primary">
                                <div className="card-body">
                                    <div className="form-title">Detail Item</div>
                                    <div className="form-sub-title">Detail kondisi, ukuran, dan kelengkapan</div>
                                    <div className="row" data-select2-id="16">
                                        <div className="col-12">
                                            <div className="form-group">
                                                <label>Deskripsi</label>
                                                <textarea {...register('desc')} name='desc' className="form-control"></textarea>
                                            </div>
                                        </div>
                                        <div className="col-lg-6" data-select2-id="15">
                                            <div className="form-group" data-select2-id="14">
                                                <label>Kategori</label>
                                                <Select options={users} onChange={handleChangeSelect} />

                                            </div>
                                        </div>
                                        <div className="col-lg-6" data-select2-id="24">
                                            <div className="form-group" data-select2-id="23">
                                                <label>Brand</label>
                                                <Select options={users} onChange={handleChangeSelect} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-end">
                        <div className="col-12 text-right d-flex flex-row justify-content-end">
                            {/* <button className="btn btn-secondary">Kembali</button>
                            <button className="btn btn-primary mx-2">Simpan &amp; Tambah Baru</button> */}
                            <button className="btn btn-success" >Simpan</button>
                        </div>
                    </div>
                </form>
            </section>
        </div>
    )
}