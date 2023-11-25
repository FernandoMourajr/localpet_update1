import { Link } from "react-router-dom"
import { images } from "../../assets/images"
export default function login (){
    return (
        <main className="min-h-screen bg-[#FBF9F7] ">
            <header className="flex h-[6rem] bg-[#FFF7E0] shadow-md z-10 top-0 left-0 w-full">
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
        <section className="flex justify-center items-center h-[60vh] mt-16">
        <div className="flex flex-col items-center bg-[#FFFFFF] rounded-[13px] w-[400px] h-[390px] p-[20px]">
            <form method="post" className="flex w-80 flex-col m-1 space-y-2">
                <div>
                    <label for="email" className="text-[18px]  mb-[10px]">Email</label> 
                </div>
                <div className="border-none rounded-[8px] shadow-sm shadow-[#0000008e] px-4">
                    <input className="mt-[1px] h-[60px] w-[300px]   placeholder:text-[18px] focus:outline-none" type="text" name="email" id="email" placeholder="Digite seu email"/>
                </div>
                    
                <div>
                    <label for="senha" className="text-[18px] mb-[10px]">Senha</label> 
                </div>
                <div className=" border-none rounded-[8px] shadow-sm shadow-[#0000008e] px-4">
                    <input className="mt-[1px] h-[60px] w-[300px] placeholder:text-[18px] focus:outline-none" type="password" name="senha" id="senha" placeholder="senha"/>
                </div>
                   
                    <input className="block bg-[#25b456] text-[20px] uppercase font-bold cursor-pointer rounded-[8px] h-12" type="submit" value="entrar"/>
            </form>
            <p className="text-[18px]">Crie uma conta
            <Link to="/register">
            <a className="text-[#25b456] no-underline ml-[5px]">Criar conta</a>
            </Link>
            </p>
        </div>
    </section>
    </main>
        
)
}
