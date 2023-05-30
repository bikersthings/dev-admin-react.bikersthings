import FilterAccordion from "../components/accordion/_filter_accordion"
import CardWtb from "../components/cards/_card_wtb"
export default () => {
    return (
        <>
            <div className="container my-5">
                <div className="row">
                    <div className="col-lg-3">
                        <FilterAccordion />
                    </div>
                    <div className="col-lg-9">
                        <div className="row">
                            <div className="col-lg-3">
                                <CardWtb />
                            </div>
                            <div className="col-lg-3">
                                <CardWtb />
                            </div>
                            <div className="col-lg-3">
                                <CardWtb />
                            </div>
                            <div className="col-lg-3">
                                <CardWtb />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}