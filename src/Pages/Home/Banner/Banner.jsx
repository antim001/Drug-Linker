import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import medi1 from '../../../assets/image/medi1.jpg'
import medi2 from '../../../assets/image/medi2.jpg'
import medi3 from '../../../assets/image/medi3 .jpg'
import medi4 from '../../../assets/image/medi4.jpg'

const Banner = () => {
    return (
        <Carousel>
                <div>
                    <img src={medi1} />
                    
                </div>
                <div>
                    <img src={medi2} />
                    
                </div>
                <div>
                    <img src={medi3} />
                    
                </div>
                <div>
                    <img src={medi4} />
                    
                </div>
               
                  </Carousel>
    );
};

export default Banner;