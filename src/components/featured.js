import React from 'react'
import Slider from 'react-slick'

const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
}

const showSlides = ({slides}) => {
    if (slides) {
        return (
            <Slider {...settings}>
                {slides.map(slide => {
                    return (
                        <div
                            key={slide.id}
                            className="item-slider"
                            style={{background: `url(/images/covers/${slide.cover})`}}>
                            <div className="caption">
                                <h4>{slide.topic}</h4>
                                <p>{slide.title}</p>
                            </div>
                        </div>
                    )
               })}
            </Slider>
        )
    }
}

const Featured = slides =>  (
    <div>
        {showSlides(slides)}    
    </div>
)

export default Featured