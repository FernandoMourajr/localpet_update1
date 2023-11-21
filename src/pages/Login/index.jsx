import { Link } from "react-router-dom"
import { images } from "../../assets/images"
export default function login (){
    return (
        <><header className="flex h-[6rem] bg-[#FFF7E0] shadow-md z-10 fixed top-0 left-0 w-full">
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
        <section>
        <div>
        <form method="post">
            <label for="email">Email</label>
            <input type="text" name="email" id="email" placeholder="Digite seu email" autofocus></input>
            <label for="senha">Senha</label>
            <input type="password" name="senha" id="senha" placeholder="senha"></input>
            <input type="submit" value="entrar"></input>
            <p>Crie uma conta<a href="cadastro.html">Criar conta</a></p>
        </form>
        </div>
       </section></>



)
}