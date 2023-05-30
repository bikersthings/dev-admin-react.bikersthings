import CardWtb from "../components/cards/_card_wtb"
export default () => {
    return (
        <>
            <section id="toko-banner">
                <div className="container">
                    <img src="/img/banner/ban1.png" alt="" style={{ width: '100%' }} />
                </div>
            </section>
            <section id="toko-info" className="mb-3">
                <div className="container text-center">
                    <div className="item-seller-nama" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <img src="/img/logo/tab-icon.png" alt="" style={{ height: '50px' }} />
                        <b style={{ fontSize: '24px', margin: '0px 20px' }}>RC b19 Store</b>
                        <img src="/img/badge/verif.png" alt="" />
                    </div>
                </div>
            </section>
            <section id="toko-sosmed">
                <div className="row justify-content-center">
                    <div className="col-lg-2 col-6">
                        <button className="btn btn-sosmed"><img src="/img/sosmed/sosmed-wa.png" alt="" /> Whats App</button>
                    </div>
                    <div className="col-lg-2 col-6">
                        <button className="btn btn-sosmed"><img src="/img/sosmed/sosmed-line.png" alt="" /> Line</button>
                    </div>
                    <div className="col-lg-2 col-6">
                        <button className="btn btn-sosmed"><img src="/img/sosmed/sosmed-ig.png" alt="" /> Instagram</button>
                    </div>
                    <div className="col-lg-2 col-6">
                        <button className="btn btn-sosmed"><img src="/img/sosmed/sosmed-tele.png" alt="" /> Telegram</button>
                    </div>
                </div>
            </section>
            <section id="all-item">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="wrapper head-section" >
                                <div>
                                    Semua Item di <b>BIKERSTHINGS</b>
                                </div>
                                <div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-2 col-6">
                            <CardWtb isWtb={false} />
                        </div>
                        <div className="col-lg-2 col-6">
                            <CardWtb isWtb={true} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 text-center">
                            <button className="btn btn-gradient">Muat Lebih Banyak</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}