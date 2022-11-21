
import Header from '../../components/Header'
import Coberturas from '../../components/Coberturas'

import image1 from "../../assets/images/image-1.png"
import image2 from "../../assets/images/image-2.png"
import Accordion from '../../components/Accordion'

export default function Home(){
    return (
        <>
            <Header />
            <main>
                <div className='main-banner'>
                    <div className='container'>
                        <h1>Tranquilidade para viver mais</h1>
                        <p>Viva mais e melhor com os benefícios que um serguro de vida te oferece</p>
                        <a href="#" className='btn btn-primary'>Faça a sua cotação</a>
                    </div>
                    <div className='black-shadow'></div>
                    <div className='white-shadow'></div>
                </div>

                <div className='block block-1'>
                    <div className='container'>
                        <div className='box-flex'>
                            <div>
                                <figure>
                                    <img src={image1} alt="Seguros Promo Site" title="Seguros Promo Site" />
                                </figure>
                                <div className='btn-container mobile-view'>
                                    <a href="#" className='btn btn-primary'>Faça sua cotação</a>
                                </div>
                            </div>
                            <div>
                                <h2>Planos personalizados e sem burocracia</h2>
                                <ol>
                                    <li>Informe seus dados</li>
                                    <li>Descubra o plano ideal para o seu perfil</li>
                                    <li>Escolha sua forma de pagamento e contrate 100% online</li>
                                </ol>
                                <div className='text-featured'>
                                    <p>Pronto! Agora você e sua família têm todos os benefícios de viver com segurança total</p>
                                </div>
                                <div className='btn-container desktop-view'>
                                    <a href="#" className='btn btn-primary'>Faça sua cotação</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='block block-2'>
                    <div className='container'>
                        <h2>Coberturas</h2>
                        <h3>Veja mais detalhes de cada proteção!</h3>
                        <Coberturas />
                        <div className='btn-container'>
                            <a href="#" className='btn btn-primary'>Faça sua cotação</a>
                        </div>
                    </div>
                </div>

                <div className='block block-3'>
                    <div className='container'>
                        <h2 className='desktop-view'>Mas por que ter um seguro de vida?</h2>
                        <div className='box-flex'>
                            <div>
                                <Accordion />
                            </div>

                            <div>
                                <figure>
                                    <img src={image2} alt="Seguro de Vida" title="Seguro de Vida" />
                                </figure>
                                <h2 className='mobile-view'>Mas por que ter um seguro de vida?</h2>
                            </div>
                        </div>
                        <div className='btn-container'>
                            <a href="#" className='btn btn-primary'>Faça sua cotação</a>
                        </div>
                    </div>
                </div>

                <div className='block block-4'>
                    <div className='container'>
                        <div className='box-flex'>
                            <div>
                                <h2>Ainda não sabe qual seguro contratar?</h2>
                            </div>
                            <div>
                                <h3>Ligue para a gente e receba uma consultoria personalizada gratuitamente!</h3>
                                <div className='text-featured'>
                                    <span className='phone'>(99) 99999.9999</span>
                                </div>
                                <div className='btn-container'>
                                    <a href="#" className='btn btn-primary'>Se preferir, entre em contato pelo Whatsapp</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </main>
        </>
    )
}