import { useState } from "react"

export default function MainMenu(){
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <a href="#" className="main-menu-mobile" onClick={() => setIsOpen(!isOpen)}>Menu</a>
            <nav className={`main-menu ${isOpen ? 'opened': ''}`}>
                <a href="#" className="btn-close mobile-view" onClick={() => setIsOpen(false)}>Fechar</a>
                <a href="#" className="active">Seguro de Vida</a>
                <a href="#">Multi-trip</a>
                <a href="#">Atendimento</a>
                <a href="#">FAQ</a>
                <a href="#">Afiliados</a>
                <a href="#">Blog</a>
                <a href="#" className='customer-area-link'>Área do cliente</a>
            </nav>
        </>
    )
}