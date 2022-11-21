import MainMenu from '../MainMenu'
import logo from "../../assets/images/logo-seguros-promo.svg"

export default function Header(){
    return (
        <header className='header'>
            <div className='header__top'>
                <span>Central de Vendas</span>
                <span className='phone'>(31) 4000-1657</span>
                <span className='whatsapp'>(31) 2534-2115</span>
            </div>
            <div className='header__main'>
                <div className='container'>
                    <a href="/" className="logo">
                        <figure>
                            <img src={logo} alt="Seguros Promo" title="Seguros Promo" />
                        </figure>
                    </a>
                    <MainMenu />
                </div>
            </div>
        </header>
    )
}