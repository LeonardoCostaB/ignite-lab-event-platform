import { DefaultUi, Player, Youtube } from "@vime/react";
import { CaretRight, DiscordLogo, FileArrowDown, Lightning } from "phosphor-react";

import { Button } from "./Button";
import { Footer } from "./Footer";

import '@vime/core/themes/default.css';
import { useGetLessionBySlugQuery } from "../graphql/generated";

interface VideoProps {
  lessionSlug: string;
}

export function Video({ lessionSlug }: VideoProps) {
  const { data } = useGetLessionBySlugQuery({
    variables: {
      slug: lessionSlug,
    }
  })

  if(!data || !data.lesson) {
    return (
      <div className="flex-1">
        <p>carregando...</p>
      </div>
    )
  }

  return (
    <div className="flex-1">
      <div className="bg-black flex justify-center">
        <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video">
          <Player>
             <Youtube videoId={ data.lesson.videoId } />
            
            <DefaultUi />
          </Player>
        </div>
      </div>

      <div className="p-8 max-w-[1100px] mx-auto sm:px-4">
        <div className="flex items-start gap-16 sm:flex sm:flex-col sm:gap-6">
          <div className="flex-1">
            <h1 className="text-2xl font-bold sm:text-lg">
              { data.lesson.title }
            </h1>

            <p className="mt-4 text-gray-200 leading-relaxed sm:text-sm">
              { data.lesson.description }
            </p>

            { data.lesson.teacher && (
              <div className="flex items-center gap-4 mt-4 sm:mt-6">
                <img 
                  className="h-16 w-16 rounded-full border-2 border-blue-500"
                  src={ data.lesson.teacher.avatarURL }
                  alt="" 
                />

                <div className="leading-relaxed">
                  <strong className="font-bold text-2xl block sm:text-lg">
                    { data.lesson.teacher.name }
                  </strong>

                  <span className="text-gray-200 text-sm block">
                    { data.lesson.teacher.bio }
                  </span>
                </div>
              </div>
            ) }
          </div>
          
          <div className="flex flex-col gap-4 sm:max-w-full sm:w-full">
            <Button 
              variant="green"
              link="#"
            >
              <DiscordLogo size={24} />
              Comunidade do discord
            </Button>

            <Button 
              variant="black"
              link="#"
            >
              <Lightning size={24}/>
              Acesse o desafio
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 mt-20 pb-20 sm:grid-cols-1 pb-16 sm:mt-16">
          <a 
            href="" 
            className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors sm:gap-4 xs:gap-0 xs:flex-col"
          >
            <div className="bg-green-700 h-full p-6 flex items-center xs:justify-center">
              <FileArrowDown size={40} />
            </div>

            <div className="py-6 leading-relaxed xs:text-center xs:px-4">
              <strong className="text-2xl sm:text-lg">Material Complementar</strong>

              <p className="text-sm text-gray-200 mt-2 sm:text-xs">
                Acesse o material complementar para acelerar o seu desenvolvimento
              </p>
            </div>

            <div className="h-full p-6 flex items-center sm:p-4 xs:hidden">
              <CaretRight size={24} />
            </div>
          </a>

          <a 
            href="" 
            className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors sm:gap-4 xs:gap-0 xs:flex-col"
          >
            <div className="bg-green-700 h-full p-6 flex items-center xs:justify-center">
              <FileArrowDown size={40} />
            </div>

            <div className="py-6 leading-relaxed xs:text-center px-4">
              <strong className="text-2xl sm:text-lg">Wallpapers exclusivos</strong>

              <p className="text-sm text-gray-200 mt-2 sm:text-xs">
                Baixe wallpapers exclusivos do Ignite Lab e personalize a sua máquina
              </p>
            </div>

            <div className="h-full p-6 flex items-center sm:p-4 xs:hidden">
              <CaretRight size={24} />
            </div>
          </a>
        </div>
      </div>

      <Footer border={true} />
    </div>
  )
}