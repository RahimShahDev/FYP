import { Autoplay, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';


const HomeComponent = () => {

    // Hero Section Details 
    const slides = [
      {
        id: 1,
        title: "Online Vehicle FIR Verification",
        desc: "Verify your vehicle's FIR status instantly with our secure online platform",
        image: "/assets/images/1.jpg",
        link: "/about"
      },
      {
        id: 2,
        title: "Fast & Reliable Checks",
        desc: "Get real-time verification results in seconds, saving you time and hassle",
        image: "/assets/images/2.jpg",
        link: "about"
      },
      {
        id: 3,
        title: "24/7 Access Anywhere",
        desc: "Check your vehicle FIR status anytime, anywhere through our online portal",
        image: "/assets/images/3.jpg",
        link: "/about"
      },
      {
        id: 4,
        title: "Secure & Confidential",
        desc: "Your vehicle information is protected with bank-level security measures",
        image: "/assets/images/4.jpg",
        link: "/about"
      },
      {
        id: 5,
        title: "Official Police Records",
        desc: "Direct access to authentic police FIR records for complete peace of mind",
        image: "/assets/images/5.jpg",
        link: "/about"
      },
      {
        id: 6,
        title: "Get Verified Today",
        desc: "Start your vehicle verification process now with just a few clicks",
        image: "/assets/images/6.jpg",
        link: "/about"
      }
    ];

  return (

    // Hero Section 
    <section className="relative w-full text-white">
      <Swiper
        modules={[Autoplay, Pagination]} // ✅ Modern usage
        autoplay={{ delay: 5000 }}
        loop={true}
        pagination={{ clickable: true }}
        className="w-full h-[500px]"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-[500px] w-full overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="absolute inset-0 bg-black bg-opacity-50" />
              </div>
              <div className="relative z-10 h-full flex items-center justify-center px-4">
                <div className="text-center max-w-2xl mx-auto p-8 bg-black bg-opacity-40 rounded-lg">
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                    {slide.title}
                  </h1>
                  <p className="text-white text-lg md:text-xl font-light leading-relaxed">
                    {slide.desc}
                  </p>
                  <Link
                  to={slide.link.startsWith('/') ? slide.link : `/${slide.link}`}
                  className="inline-block mt-6 px-8 py-3 text-base font-medium bg-red-600 text-white rounded-full hover:bg-red-700 shadow-lg transition-all duration-300 transform hover:scale-105"
                  >
                  Explore More
                  </Link>


                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HomeComponent;
