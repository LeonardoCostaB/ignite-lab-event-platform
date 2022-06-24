import { PropsWithChildren } from "react";

interface ButtonProps {
  variant: 'green' | 'black';
  link: string;
}

export function Button({ variant, link, children}: PropsWithChildren<ButtonProps>) {
  return (
    <a 
      href={ link }
      className={
        variant == "green" ? 
        "p-4 text-sm bg-green-500 flex items-center justify-center gap-2 rounded font-bold uppercase hover:bg-green-700 transition-colors" : 
        "p-4 text-sm border border-blue-500 text-blue-500 flex items-center justify-center gap-2 rounded font-bold uppercase hover:bg-blue-500 hover:text-gray-900 transition-colors"
      }
    >
      { children }
    </a>
  )
}