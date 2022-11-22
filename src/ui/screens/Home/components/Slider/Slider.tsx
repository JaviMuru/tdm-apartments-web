import imageSlider1 from '../../../../assets/images/slider/1.jpg'
import {Slide} from "./components/Slide/Slide";

const slides = [
  {
    title: 'Luxury Hotel & Best Resort',
    description: 'Enjoy a Luxury Experience',
    linkText: 'Rooms & Suites',
    image: imageSlider1
  },

]

/*const other = [{
  title: 'Unique Place to Relax & Enjoy',
  description: 'The Perfect Base For You',
  linkText: 'Rooms & Suites',
  image: imageSlider2
},
  {
    title: 'The Ultimate Luxury Experience',
    description: 'Enjoy The Best Moments of Life',
    linkText: 'Rooms & Suites',
    image: imageSlider3
  }]*/

export const Slider = () => {
  return (
    <header className="header slider-fade">
      {slides.map(slide => (
        <Slide
          title={slide.title}
          description={slide.description}
          linkText={slide.linkText}
          image={slide.image}/>
      ))}
      <div className="reservation">
        <a href="tel:8551004444">
          <div className="icon d-flex justify-content-center align-items-center">
            <i className="flaticon-call"></i>
          </div>
          <div className="call"><span>855 100 4444</span><br/>Reservation</div>
        </a>
      </div>
    </header>
  )
}
