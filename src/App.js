import "./App.css";
import { images } from "./assets/images";
import { slide } from "./assets/slide";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

function App() {
  //const hora = moment().format("HH:mm");
  const data = [
    { id: 1, slide: slide.banner, banner: "banner" },
    { id: 2, slide: slide.banner2, banner: "banner2" },
    { id: 3, slide: slide.banner3, banner: "banner3" },
  ];

  return (
    <main className="min-h-screen flex flex-col">
      <header className="flex h-[6rem] bg-[#FFF7E0] shadow-md z-10 fixed top-0 left-0 w-full">
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
              
              <Link to="/login" className="flex space-x-[0.4] m-3">
                <img src={images.profile} alt="Profile" className="flex mr-2" />
                <span>Entrar</span>
              </Link>
            </button>
            
            <button className="flex w-22 h-[15.3] bg-slate-50 rounded shadow hover:bg-yellow-50 transition">
              <Link to="/register">
                <span className="flex m-4 h-5 items-center">Cadastrar</span>
              </Link>
            </button>

            <a>
              <img src={images.cart} />
            </a>
          </div>
        </div>
      </header>
      <section>

        <Link to="/register">
        <Swiper className="mt-20"
          autoplay={{ delay: 7000 }}
          slidesPerView={1}
          pagination={{ clickable: true }}
          navigation
        >
          {data.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="flex justify-center">
                <img src={item.slide} alt="Slider" className="slide-item flex w-full mt-7" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        </Link>
       

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
                <span className="font-semibold text-[#1D1D1D] text-lg mt-7">Ração Premier - Frango</span>
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
      <footer className="bg-[#FFF7E0] ">
        <div className="flex justify-between border-t-[3px] border-solid border-[#ddd] py-6 px-20">
          <div className="flex flex-col gap-[5px] text-lg font-semibold text-[#161616] ">
            <a href="#">Contato</a>
            <a href="#">Sobre a LocalPet</a>
            <a href="#">Política de Privacidade</a>
          </div>
          <div className="flex flex-col justify-center gap-[10px]">
              <span className="text-[#161616] text-lg font-semibold">Receba as novidades!</span>
            <div className="flex items-center">
              <input className="w-[250px] h-[45px] p-[10px] outline-none border-[1px] border-solid border-[#eee] rounded-[4px]" type="email" placeholder="Digite seu melhor e-mail" />
              <button className="w-[100px] h-[45px] border-[1px] border-solid border-[#eee] bg-[#0069F4] rounded-tr-[4px] rounded-br-[4px]" type="button">
                <span className="text-[#fff] m-[4px]">Inscrever-se</span>
              </button>
            </div>
          </div>
        </div>
        
        <div className="flex justify-between items-center px-20 border-t-[3px] border-solid border-[#ddd]">
            <div className="flex gap-[20px]">
                <a href="#">
                    <img className="footer-img h-[27px]" src={images.igicon} />
                </a>
                <a href="#">
                    <img className="footer-img h-[27px]" src={images.fbicon} />
                </a>
            </div>

            <div className="flex gap-[13px] items-center">
                <img className="h-[40px]" src={images.mastercardlogo} alt="Mastercard" />
                <img className="h-[25px]" src={images.elologo} alt="Elo" />
                <img className="h-[85px]" src={images.visalogo} alt="Visa" />
                <img className="h-[30px]" src={images.pixicon} alt="Pix" />
            </div>
        </div>
      </footer>
    </main>
  );
}

export default App;
