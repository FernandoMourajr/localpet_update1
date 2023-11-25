import { Link } from "react-router-dom";
import { images } from "../../assets/images";
export default function register() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#FBF9F7]">
      <header className="flex h-[6rem] bg-[#FFF7E0] shadow-md z-10 top-0 left-0 w-full fixed">
        <div className="flex flex-1 px-[3.3rem] py-4 items-center justify-between">
          <div className="flex space-x-2 items-center">
            <Link to="/">
              <img src={images.logo} />
            </Link>
            <Link to="/">
              <h1 className="font-bold text-lg">LocalPet</h1>
            </Link>
          </div>
        </div>
      </header>
        <div class="form" className="flex justify-center items-center mt-36 mb-14">
        <form action="#" className="flex flex-col items-center bg-[#FFFFFF] rounded-[13px] w-100 p-4">

            <div class="form-header" className="flex mb-12 mt-2 justify-between">
                <div class="title" className="mr-24">
                    <h1 className="text-[2rem] font-bold ">Cadastre-se</h1>
                    <div class="linha verde" className="w-20 h-[0.3rem] bg-[#25b456] mx-auto absolute rounded-[10px]">
                    </div>
                </div>
                <div class="login-button" className="flex items-center"> 
                    <button className="border-none bg-[#25b456] py-[0.4rem] px-4 rounded-[5px] cursor-pointer hover:bg-[#A5DFB9]">
                    <a href="login.html" className="no-underline font-medium text-[#fff]">Entrar</a></button>
                </div>
            </div>

            <div class="input-group" className="w-[23rem]">
                <div class="input-box" className="flex flex-col mb-[1.1rem]">
                    <label className="ml-3" for="firstname">Nome</label>
                    <input className="m-[0.6rem] py-[0.8rem] px-[1.2rem] border-none rounded-[10px] shadow-md shadow-[#0000001c]" 
                    id="firstname" type="text" name="firstname" placeholder="Digite seu nome" required/>
                </div>

                <div class="input-box" className="flex flex-col mb-[1.1rem]">
                    <label className="ml-3" for="lastname">Sobrenome</label>
                    <input className="m-[0.6rem] py-[0.8rem] px-[1.2rem] border-none rounded-[10px] shadow-md shadow-[#0000001c]" 
                    id="lastname" type="text" name="lastname" placeholder="Sobrenome" required/>
                </div>

                <div class="input-box" className="flex flex-col mb-[1.1rem]">
                    <label className="ml-3" for="email">Email</label>
                    <input className="m-[0.6rem] py-[0.8rem] px-[1.2rem] border-none rounded-[10px] shadow-md shadow-[#0000001c]" 
                    id="email" type="email" name="email" placeholder="Digite seu melhor email" required/>
                </div>

                <div class="input-box" className="flex flex-col mb-[1.1rem]">
                    <label className="ml-3" for="number">Celular</label>
                    <input className="m-[0.6rem] py-[0.8rem] px-[1.2rem] border-none rounded-[10px] shadow-md shadow-[#0000001c]"
                    id="number" type="tel" name="number" placeholder="(xx) xxxx-xxxx" required/>
                </div>

                <div class="input-box" className="flex flex-col mb-[1.1rem]">
                    <label className="ml-3" for="password">Senha</label>
                    <input className="m-[0.6rem] py-[0.8rem] px-[1.2rem] border-none rounded-[10px] shadow-md shadow-[#0000001c]" 
                    id="password" type="password" name="password" placeholder="Crie uma senha" required/>
                </div>

                <div class="input-box" className="flex flex-col mb-[1.1rem]">
                    <label className="ml-3" for="confirmpassword">Confirme sua senha</label>
                    <input className="m-[0.6rem] py-[0.8rem] px-[1.2rem] border-none rounded-[10px] shadow-md shadow-[#0000001c]" 
                    id="confirmpassword" type="password" name="confirmpassword" placeholder="Confirme a senha"required/>
                </div>
            </div>

            <div class="gender inputs">
                <div class="gender-title">
                    <h6 className="text-[1rem] font-bold text-[#000000c0] ml-5">Genero</h6>
                </div>

                <div class="gender-group" className="flex justify-between mt-[0.62rem] pl-5">
                    <div class="gender-input" className="flex items-center">
                        <input className="mr-[0.35rem]" type="radio" id="male" name="gender"/>
                        <label for="male">Masculino</label>
                    </div>

                    <div class="gender-input" className="flex items-center">
                        <input className="mr-[0.35rem]" type="radio" id="female" name="gender"/>
                        <label for="female">Feminino</label>
                    </div>

                    <div class="gender-input" className="flex items-center">
                        <input className="mr-[0.35rem]" type="radio" id="others" name="gender"/>
                        <label for="others">Outros</label>
                    </div>

                    <div class="gender-input" className="flex items-center">
                        <input className="mr-[0.35rem]" type="radio" id="none" name="gender"/>
                        <label for="none">Prefiro não dizer</label>
                    </div>
                </div>
            </div>

            <div class="continue-button">
                <button className="w-[22rem] mt-[2.5rem] border-none bg-[#25b456] p-[0.62rem] rounded-[5px] cursor-pointer hover:bg-[#A5DFB9]"> 
                    <a className="no-underline text-[0.93rem] font-bold text-[#fff]" href="">Cadastrar</a>
                </button>
            </div>
        </form>
    </div>
    </main>
  );
}


