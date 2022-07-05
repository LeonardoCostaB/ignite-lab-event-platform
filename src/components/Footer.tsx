import classNames from 'classnames';
import logoRocketUrlImg from '../assets/logo-rocket.svg';

interface IFooterProps {
  border: boolean
}

export function Footer({ border }: IFooterProps) {
  return (
    <footer className="bg-black px-6">
      <div 
        className={
          classNames("flex items-center justify-between py-6 sm:flex-col gap-6", {
            "border-t border-gray-500": border
          })
        }
      >
        <div className="flex items-center gap-6 sm:flex-col gap-4">
          <a
            href="https://www.rocketseat.com.br"
            target="_blank"
          >
            <img
              src={logoRocketUrlImg}
              alt="clique aqui para acessar a plataforma rocketseat"
              title="logo rocketseat"
            />
          </a>
        
          <span className="text-gray-300 sm:text-sm">
            Rocketseat - Todos os direitos reservados
          </span>
        </div>
        
        <span className="text-gray-300 sm:text-sm">
          Políticas de privacidade
        </span>
      </div>
    </footer>
  )
}