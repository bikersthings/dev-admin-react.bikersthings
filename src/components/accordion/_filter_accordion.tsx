import Accordion from 'react-bootstrap/Accordion';
import Select from 'react-select'

const category = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
]

const brands = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
]
export default () => {
    return (
        <>
            <section className='filter'>
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header className='filter-title'>Filter</Accordion.Header>
                        <Accordion.Body>
                            <p>Spesifikasi</p>
                            <div className="form-group mb-3">
                                <label htmlFor="">Katergori</label>
                                <Select options={category} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Brand</label>
                                <Select options={brands} />
                            </div>

                        </Accordion.Body>
                        <Accordion.Body>
                            <div className="form-group">
                                <label htmlFor="">Harga</label>
                                <div className="input-group mb-2">
                                    <div className="input-group-prepend">
                                        <div className="input-group-text">Rp</div>
                                    </div>
                                    <input type="text" className="form-control" placeholder="Harga Minimum" />
                                </div>
                                <div className="input-group mb-2">
                                    <div className="input-group-prepend">
                                        <div className="input-group-text">Rp</div>
                                    </div>
                                    <input type="text" className="form-control" placeholder="Harga Maksimum" />
                                </div>
                            </div>
                        </Accordion.Body>
                        <Accordion.Body>
                            <div className="filter-title">
                                Kondisi
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked={true} />
                                <label className="form-check-label" htmlFor="gridRadios1">
                                    Baru
                                </label>
                            </div>
                            <div className="form-check mb-4">
                                <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2" />
                                <label className="form-check-label" htmlFor="gridRadios2">
                                    Second
                                </label>
                            </div>
                            <button className="btn btn-gradient w-100" >Filter</button>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </section >
        </>
    );
}
