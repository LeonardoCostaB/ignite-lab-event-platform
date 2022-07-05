import { useEffect, useState } from "react";

import { Logo } from "./Logo";

import menuHamburguerImgUrl from '../assets/hamburguer.svg';
import closeImgUrl from '../assets/close.svg';
import { SideBar } from "./Sidebar";

export function Header() {
  const [ isOpenMenu, setIsOpenMenu ] = useState<boolean>(false);

  useEffect(() => {
    if(isOpenMenu) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
  }, [isOpenMenu])

  return (
    <header className="w-full py-5 flex items-center justify-center bg-gray-700 border-b border-gray-600 sm:justify-between sm:px-4">
      <Logo />

      <div className="hidden items-center gap-2 sm:flex">
        <span className="text-gray-100 text-sm">
          Aulas
        </span>

        <button
          type="button"
          className="border-0"
          onClick={() => setIsOpenMenu(!isOpenMenu)}
        >
          <img
            src={
              !isOpenMenu ? menuHamburguerImgUrl : closeImgUrl
            }
            alt={
              !isOpenMenu ? "clique aqui para abrir o menu" : "clique aqui para fechar o menu"
            }
            title={
              !isOpenMenu ? "abrir menu" : "fechar menu"
            }
          />
        </button>
      </div>

      { isOpenMenu && (
        <SideBar 
          propsClassElement="w-[348px] p-6 bg-gray-700 border-1 border-gray-600 sm:fixed sm:top-[11.9%] sm:left-0 sm:w-full sm:h-full sm:z-10"
        />
      )}
    </header>
  )
}