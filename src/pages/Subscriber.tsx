import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom"
;
import { Footer } from "../components/Footer";
import { Logo } from "../components/Logo";
import { useCreateSubscriberMutation } from "../graphql/generated";

import codeMockupImgUrl from '../assets/code-mockup.png';

export function Subscribe() {
  const navigation = useNavigate()

  const [ name, setName ] = useState('');
  const [ email, setEmail ] = useState('');

  const [ createSubscriber, { loading } ] = useCreateSubscriberMutation()

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()

    await createSubscriber({
      variables: {
        name,
        email
      } 
    })

    navigation('/event')
  }

  return (
    <>
      <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
        <div className="w-full max-w-[1100px] flex items-center justify-between mt-20 mx-auto sm:flex-col sm:gap-6">
          <div className="max-w-[640px] sm:flex sm:flex-col sm:items-center sm:px-4">
            <Logo />

            <h1 className="mt-8 text-[2.5rem] leading-tight sm:text-center sm:text-[1.5rem]">
              Construa uma <strong className="text-blue-500">aplicação completa</strong>, do zero, com <strong className="text-blue-500">React</strong>
            </h1>

            <p className="mt-4 text-gray-200 leading-relaxed sm:text-center sm:text-sm">
              Em apenas uma semana você vai dominar na prática uma das tecnologias mais utilizadas e com alta demanda para acessar as melhores oportunidades do mercado.
            </p>
          </div>

          <div className="p-8 bg-gray-700 border border-gray-500 rounded sm:w-full xs:py-8 xs:px-4">
            <strong className="text-2xl mb-6 block sm:text-lg">
              Inscreva-se gratuitamente
            </strong>

            <form 
              onSubmit={handleSubmit}
              className="flex flex-col gap-2 w-full"
            >
              <input
                className="bg-gray-900 rounded px-5 h-14"
                type="text"
                placeholder="Seu nome completo"
                onChange={event => setName(event.target.value)}
              />
              
              <input
                className="bg-gray-900 rounded px-5 h-14"
                type="email"
                placeholder="Digite seu email"
                onChange={event => setEmail(event.target.value)}
              />

              <button
                type="submit"
                disabled={loading}
                className="mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors disabled:opacity-50"
              >
                garantir minha vaga
              </button>
            </form>
          </div>
        </div>

        <img
          className="mt-10 sm:mt-0"
          src={codeMockupImgUrl} 
          alt="foto de um computador aberto mostrando um código em react" 
        />
      </div>

      <Footer border={false} />
    </>
  )
}