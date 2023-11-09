import "./App.css";
import { images } from "./assets/images";
import { slide } from "./assets/slide";
import { Swiper, SwiperSlide } from "swiper/react";

function App() {
  //const hora = moment().format("HH:mm");
  const data = [
    { id: 1, slide: slide.banner, banner: "banner" },
    { id: 2, slide: slide.banner2, banner: "banner2" },
    { id: 3, slide: slide.banner3, banner: "banner3" },
  ];

  return (
    <main className="min-h-screen flex flex-col">
      <header className="flex h-[6rem] bg-yellow-100 shadow-md z-10">
        <div className="flex flex-1 px-[3.3rem] py-4 items-center justify-between">
          <div className="flex space-x-2 items-center">
            <a>
              <img src={images.logo} />
            </a>
            <div>
              <h1 className="font-bold text-lg">LocalPet</h1>
            </div>
          </div>

          <div className="flex space-x-6 items-center">
            <a>
              <img src={images.search} />
            </a>
        
            <button className="flex w-22 h-[15.3] bg-slate-50 rounded shadow">
              <a href="#" className="flex space-x-[0.4] m-3">
                <img src={images.profile} alt="Profile" className="flex mr-2" />
                <span>Entrar</span>
              </a>
        
            </button>
              
            <button className="flex w-22 h-[15.3] bg-slate-50 rounded shadow" >
              <span className="flex m-4 h-5 items-center">Cadastrar</span>
            </button>  

            <a>
              <img src={images.cart} />
            </a>
          </div>
        </div>
      </header>
      <section>
        <Swiper
          autoplay={{ delay: 7000 }}
          slidesPerView={1}
          pagination={{ clickable: true }}
          navigation
        >
          {data.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="flex justify-center">
                <img src={item.slide} alt="Slider" className="slide-item" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </main>
  );
}

export default App;
