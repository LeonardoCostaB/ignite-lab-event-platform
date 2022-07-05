import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Header } from "../components/Header";
import { SideBar } from "../components/Sidebar";
import { Video } from "../components/Video";

export function Event() {
  const { slug } = useParams<{ slug: string; }>()

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex flex-1">
        { slug ? 
          <Video 
            lessionSlug={slug}
          /> : 
          <div className="flex-1" /> 
        }
          
        <SideBar 
          propsClassElement="w-[348px] p-6 bg-gray-700 border-1 border-gray-600 sm:hidden"
        />
      </main>
    </div>
  )
}