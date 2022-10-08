import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";


import { Header } from "../components/Header";
import { SideBar } from "../components/Sidebar";
import { Video } from "../components/Video";
import { RootStore } from "../store";

export function Event() {
  const { slug } = useParams<{ slug: string; }>()
  const userInformation = useSelector((store: RootStore) => store.userReduce)

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex flex-1">
        { slug ? 
          <Video 
            lessionSlug={slug}
          /> : 
          <div className="flex-1 flex flex-col justify-center items-center sm:justify-start sm:py-10 sm:px-4">
            <div className="h-3/6 w-3/6 flex flex-col justify-center items-center gap-2 sm:w-full">
              <h4 className="text-2xl sm:text-xl xs:text-sm">
                Olá <span className="text-green-500">{userInformation.name}</span> bem vindo(a) a nossa plataforma.
              </h4>
              
              <p className="text-center sm:text-sm">
                Nosso intuito é fornecer conteúdo totalmente grátis para quem não tem condições financeiras para ingressar na área. Junte a nós e espalhe esse conteúdo para os seus conhecidos. <br /> <span className="sm:hidden">Basta escolher uma aula na barra ao lado e começar a dar seus próprios passos.</span> <span className="hidden sm:inline-block">Basta clicar no menu e escolher sua aula,</span> Bora codar?
              </p>
            </div>
          </div>
        }
          
        <SideBar 
          propsClassElement="w-[348px] p-6 bg-gray-700 border-1 border-gray-600 sm:hidden"
        />
      </main>
    </div>
  )
}