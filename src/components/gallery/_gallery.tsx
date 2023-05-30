import { useEffect, useRef, useState } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';


export default () => {
    const slider1 = useRef(null);
    const slider2 = useRef(null);

    const [state, setState] = useState({
        nav1: null,
        nav2: null,
    });

    useEffect(() => {
        slider1?.current.sync(slider2?.current?.splide);
    }, [slider1, slider2]);

    useEffect(() => {
        setState({
            nav1: slider1.current,
            nav2: slider2.current,
        });
    }, []);
    return (
        <>
            <Splide
                ref={slider1}
                options={{
                    type: 'fade',
                    rewind: true,
                    pagination: false,
                    arrows: false,

                }}
            >
                <SplideSlide>
                    <img src="/img/thumbnail/thumb1.png" alt="thumb1" />
                </SplideSlide>
                <SplideSlide>
                    <img src="/img/thumbnail/thumb2.png" alt="thumb2" />
                </SplideSlide>
                <SplideSlide>
                    <img src="/img/thumbnail/thumb3.png" alt="thumb3" />
                </SplideSlide>
                <SplideSlide>
                    <img src="/img/thumbnail/thumb4.png" alt="thumb4" />
                </SplideSlide>
                <SplideSlide>
                    <img src="/img/thumbnail/thumb5.png" alt="thumb5" />
                </SplideSlide>

            </Splide>
            <Splide
                ref={slider2}
                options={{
                    fixedWidth: 100,
                    fixedHeight: 60,
                    gap: 10,
                    rewind: true,
                    pagination: false,
                    cover: true,
                    isNavigation: true,
                    breakpoints: {
                        600: {
                            fixedWidth: 60,
                            fixedHeight: 44,
                        },
                    },
                }}
            >
                <SplideSlide>
                    <img src="/img/thumbnail/thumb1.png" alt="thumb1" />
                </SplideSlide>
                <SplideSlide>
                    <img src="/img/thumbnail/thumb2.png" alt="thumb2" />
                </SplideSlide>
                <SplideSlide>
                    <img src="/img/thumbnail/thumb3.png" alt="thumb3" />
                </SplideSlide>
                <SplideSlide>
                    <img src="/img/thumbnail/thumb4.png" alt="thumb4" />
                </SplideSlide>
                <SplideSlide>
                    <img src="/img/thumbnail/thumb5.png" alt="thumb5" />
                </SplideSlide>

            </Splide>
        </>
    );
}

