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
      <header className="flex h-[6rem] bg-[#FFF7E0] shadow-md z-10">
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

            <button 
            className="flex w-22 h-[15.3]
             bg-slate-50 
             rounded 
             shadow
             hover:bg-yellow-50">
              
              <a href="#" className="flex space-x-[0.4] m-3">
                <img src={images.profile} alt="Profile" className="flex mr-2" />
                <span>Entrar</span>
              </a>
            </button>

            <button
              className="flex w-22 h-[15.3]
               bg-slate-50
                rounded 
                shadow
               hover:bg-yellow-50 
                transition">
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
                <img src={item.slide} alt="Slider" className="slide-item flex w-full" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex justify-between h-1 py-12 px-20 text-lg">
          <span className="font-bold m-1">Produtos Recomendados</span>
          <span>9 Produtos</span>
        </div>

        <hr className="bg-[#eee]"/>

        <div className="flex justify-between py-5 px-20">

          <div className="flex flex-col gap-10">
            <div>
              <a href="#" className="border border-solid border-gray-300 w-72 rounded-lg p-1 text-center flex flex-col items-center">
                <img src={images.gspFrangoCarne} className="w-44 object-cover rounded-lg"/>
                <span className="font-semibold text-[#1D1D1D] text-lg">Ração Golden Special - Frango e Carne</span>
                <span className="text-[#0326a6] text-lg">R$154,90</span>
              </a>
            </div>
            <div>
              <a href="#" className="border border-solid border-gray-300 w-72 rounded-lg p-1 text-center flex flex-col items-center">
                <img src={images.premier} className="w-44 object-cover rounded-lg"/>
                <span className="font-semibold text-[#1D1D1D] text-lg">Ração Premier - Frango</span>
                <span className="text-[#0326a6] text-lg">R$258,00</span>
              </a>
            </div>
            <div>
              <a href="#" className="border border-solid border-gray-300 w-72 rounded-lg p-1 text-center flex flex-col items-center">
                <img src={images.racaoggFrango} className="w-44 object-cover rounded-lg"/>
                <span className="font-semibold text-[#1D1D1D] text-lg">Ração Golden para Gatos - Sabor Frango</span>
                <span className="text-[#0326a6] text-lg">R$50,00</span>
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-10">
            <div>
              <a href="#" className="border border-solid border-gray-300 w-72 rounded-lg p-1 text-center flex flex-col items-center"> 
                  <img src={images.gspPowerTraining} className="w-44 object-cover rounded-lg"/>
                  <span className="font-semibold text-[#1D1D1D] text-lg">Ração Golden Power Training - Frango e Arroz</span>
                  <span className="text-[#0326a6] text-lg">175,00</span>
                </a>
              </div>
              <div>
              <a href="#" className="border border-solid border-gray-300 w-72 rounded-lg p-1 text-center flex flex-col items-center">
                  <img src={images.gspFrangoCarne} className="w-44 object-cover rounded-lg"/>
                  <span className="font-semibold text-[#1D1D1D] text-lg">Ração Origens Class - Carne e Frango</span>
                  <span className="text-[#0326a6] text-lg">50,00</span>
                </a>
              </div>
              <div>
                <a href="#" className="border border-solid border-gray-300 w-72 rounded-lg p-1 text-center flex flex-col items-center">
                  <img src={images.gspFrangoCarne} className="w-44 object-cover rounded-lg"/>
                  <span className="font-semibold text-[#1D1D1D] text-lg">Ração Golden Special - Frango e Carne</span>
                  <span className="text-[#0326a6] text-lg">R$50,00</span>
                </a>
            </div>
         </div>

          <div className="flex flex-col gap-10">
              <div>
                <a href="#" className="border border-solid border-gray-300 w-72 rounded-lg p-1 text-center flex flex-col items-center">
                  <img src={images.gseFrangoArroz} className="w-44 object-cover rounded-lg"/>
                  <span className="font-semibold text-[#1D1D1D] text-lg">Ração Golden Cães Senior - Frango e Arroz</span>
                  <span className="text-[#0326a6] text-lg">180,00</span>
                </a>
                </div>
                <div>
                <a href="#" className="border border-solid border-gray-300 w-72 rounded-lg p-1 text-center flex flex-col items-center">
                  <img src={images.gspFrangoCarne} className="w-44 object-cover rounded-lg"/>
                  <span className="font-semibold text-[#1D1D1D] text-lg">Ração Origens Class - Carne e Frango</span>
                  <span className="text-[#0326a6] text-lg">50,00</span>
                </a>
                </div>
                <div>
                <a href="#" className="border border-solid border-gray-300 w-72 rounded-lg p-1 text-center flex flex-col items-center">
                  <img src={images.gspFrangoCarne} className="w-44 object-cover rounded-lg"/>
                  <span className="font-semibold text-[#1D1D1D] text-lg">Ração Golden Special - Frango e Carne</span>
                  <span className="text-[#0326a6] text-lg">R$50,00</span>
                </a>
              </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
