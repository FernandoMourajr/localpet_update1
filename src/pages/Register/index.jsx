import { Link } from "react-router-dom";
import { images } from "../../assets/images";
import { useState } from "react";
import axios from 'axios';

export default function Register() 
{

    //declarr uma nova variável dados com state e atribuir o objeto    
    const [data, setData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        number: '',
        password: '',
        confirmpassword: ''
    });
    
    //Declarar a variavel para receber a mensagem
    const [message, setMessage] = useState("");   

    //Receber os dados dos campos do fomrmulário
    const valorInput = e => setData({...data, [e.target.name]: e.target.value });
    
    //Executar a função quando o usuário clicar no botão do formulário
    const sendMsg = async (e) => {
        e.preventDefault();
        console.log(`Nome: ${data.firstname}`);
        console.log(`Sobrenome: ${data.lastname}`);
        console.log(`E-mail: ${data.email}`);
        console.log(`Telefone: ${data.number}`);
        console.log(`Senha: ${data.password}`);
        console.log(`Confirmar senha: ${data.confirmpassword}`);


//Criar a constante com os dados do cabeçalho
        const headers = {
            'headers': {
            //Indicar que será enviado os dados em formato de objeto    
             'Content-Type' : 'application/json'   
            }
        }

        //Fazer a requizição para o servidor utilizando axios, indicando o método da requisição, o endereço, enviar os dados do formulário e o cabeçalho
        await axios.post('http://localhost:8080/message', data, headers)
        .then((response) => {//acessa o then quando a API retornar o status 200
            setMessage(response.data.message);

            //Limpar os dados do state e os dados dos campos do formulário
            setData({
                firstname: '',
                lastname: '',
                email: '',
                number: '',
                password: '',
                confirmpassword: ''
            });

        }).catch((err) => {//acessa o catch quando a API retornar um erro
            setMessage(err.response.data.message);
        });
    }
    

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

    <div className="flex justify-center items-center mt-36 mb-14">
        {/*Início do formulário, executar o onSubmit quando usuário clicar no botão submit e chamar a funçã o sendMsg */}    
        <form onSubmit={sendMsg} action="#" className="flex flex-col items-center bg-[#FFFFFF] rounded-[13px] w-100 p-4">
        {/*Imprimir mensagem retornada da API*/}  
        {message ? <p>{message}</p> : ""}; 
            <div className="flex mb-12 mt-2 justify-between">

                <div className="mr-24">
                    <h1 className="text-[2rem] font-bold ">Cadastre-se</h1>
                    <div className="w-20 h-[0.3rem] bg-[#25b456] mx-auto absolute rounded-[10px]"></div>
                </div>

                <div className="flex items-center"> 
                    <button className="border-none bg-[#25b456] py-[0.4rem] px-4 rounded-[5px] cursor-pointer hover:bg-[#A5DFB9]">
                    <a href="#" className="no-underline font-medium text-[#fff]">Entrar</a></button>
                </div>
                
            </div>

            <div className="w-[23rem]">
                <div className="flex flex-col mb-[1.1rem]">

                    <label className="ml-3" htmlFor="firstname">Nome</label>
                    {/*Criar o campo, quando o usuário digitar valor no campo, chamar com onChange a função valorInput */}
                    <input className="m-[0.6rem] py-[0.8rem] px-[1.2rem] border-none rounded-[10px] shadow-md shadow-[#0000001c]" 
                    id="firstname" type="text" name="firstname" placeholder="Digite seu nome" onChange={valorInput} value={data.firstname} autoComplete="on" required/>

                </div>

                <div className="flex flex-col mb-[1.1rem]">

                    <label className="ml-3" htmlFor="lastname">Sobrenome</label>
                     {/*Criar o campo, quando o usuário digitar valor no campo, chamar com onChange a função valorInput */}
                    <input className="m-[0.6rem] py-[0.8rem] px-[1.2rem] border-none rounded-[10px] shadow-md shadow-[#0000001c]" 
                    id="lastname" type="text" name="lastname" placeholder="Sobrenome" onChange={valorInput} value={data.lastname} autoComplete="on" required/>

                </div>

                <div className="flex flex-col mb-[1.1rem]">

                    <label className="ml-3" htmlFor="email">Email</label>
                     {/*Criar o campo, quando o usuário digitar valor no campo, chamar com onChange a função valorInput */}
                    <input className="m-[0.6rem] py-[0.8rem] px-[1.2rem] border-none rounded-[10px] shadow-md shadow-[#0000001c]" 
                    id="email" type="email" name="email" placeholder="Digite seu melhor email" onChange={valorInput} value={data.email} autoComplete="on" required/>

                </div>

                <div className="flex flex-col mb-[1.1rem]">

                    <label className="ml-3" htmlFor="number">Celular</label>
                     {/*Criar o campo, quando o usuário digitar valor no campo, chamar com onChange a função valorInput */}
                    <input className="m-[0.6rem] py-[0.8rem] px-[1.2rem] border-none rounded-[10px] shadow-md shadow-[#0000001c]"
                    id="number" type="tel" name="number" placeholder="(xx) xxxx-xxxx" onChange={valorInput} value={data.number} autoComplete="on" required/>

                </div>

                <div className="flex flex-col mb-[1.1rem]">

                    <label className="ml-3" htmlFor="password">Senha</label>
                     {/*Criar o campo, quando o usuário digitar valor no campo, chamar com onChange a função valorInput */}
                    <input className="m-[0.6rem] py-[0.8rem] px-[1.2rem] border-none rounded-[10px] shadow-md shadow-[#0000001c]" 
                    id="password" type="password" name="password" placeholder="Crie uma senha" onChange={valorInput} value={data.password} autoComplete="on" required/>

                </div>

                <div className="flex flex-col mb-[1.1rem]">

                    <label className="ml-3" htmlFor="confirmpassword">Confirme sua senha</label>
                     {/*Criar o campo, quando o usuário digitar valor no campo, chamar com onChange a função valorInput */}
                    <input className="m-[0.6rem] py-[0.8rem] px-[1.2rem] border-none rounded-[10px] shadow-md shadow-[#0000001c]" 
                    id="confirmpassword" type="password" name="confirmpassword" placeholder="Confirme a senha" onChange={valorInput} value={data.confirmpassword} autoComplete="on" required/>

                </div>
            </div>

            <div>
                <button type="submit" className="w-[22rem] mt-[2.5rem] border-none bg-[#25b456] p-[0.62rem] rounded-[5px] cursor-pointer hover:bg-[#A5DFB9]"> 
                    <a className="no-underline text-[0.93rem] font-bold text-[#fff]" href="">Cadastrar</a>
                </button>
            </div>
        </form>
    </div>
    </main>
  );
}


