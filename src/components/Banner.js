import { Carousel } from 'react-responsive-carousel';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css'

function Banner() {
    return (
        <div className="relative">
            <div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20" />
            <Carousel
                autoPlay
                infiniteLoop
                showStatus={false}
                showIndicators={false}
                showThumbs={false}
                interval={5000}
            >
                <div>
                    <img loading="lazy" src="https://m.media-amazon.com/images/I/81IAgXHr1kL._SX3000_.jpg" alt="" />
                </div>
                <div>
                    <img loading="lazy" src="https://m.media-amazon.com/images/I/61-e1sYEjoL._SX3740_.jpg" alt="" />
                </div>
                <div>
                    <img loading="lazy" src="https://m.media-amazon.com/images/I/61pxhbXv8tL._SX3740_.jpg" alt="" />
                </div>
            </Carousel>
        </div>
    )
}

export default Banner
