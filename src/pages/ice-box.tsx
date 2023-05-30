import CardCoupon from "../components/cards/_card_coupon"
export default () => {
    return (
        <>
            <section id="toko-banner">
                <div className="container">
                    <img src="/img/banner/ban2.png" alt="" width={'100%'} style={{ height: 'fit-content' }} />
                </div>
            </section>
            <br />
            <div className="container">
                <div className="row">
                    <div className="col-lg-2">
                        <CardCoupon />
                    </div>
                </div>
            </div>
            <br />
        </>
    )
}