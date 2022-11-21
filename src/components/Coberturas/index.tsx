

import iconAngel from "../../assets/images/icon-angel.svg"
import iconWheelchair from "../../assets/images/icon-wheelchair.svg"
import iconCandles from "../../assets/images/icon-candles.svg"

type CoberturasProps = {
    item: CoberturasItemProps
}

type CoberturasItemProps = {
    icon: string,
    title: string,
    text: string,
    link: string
}

const coberturas = [
    {
        icon: iconAngel,
        title: "Morte",
        text: "Caso a pessoa segurada venha a falecer, seja por causas naturais ou acidentais, a pessoa escolhida como beneficiária recebe uma indenização no valor contratado.",
        link: "#",
    },
    {
        icon: iconWheelchair,
        title: "Invalidez por acidente",
        text: "Caso a pessoa segurada sofra um acidente que a torne permanentemente inválida, seja total ou parcialmente, essa pessoa recebe uma uma indenização no valor contratado.",
        link: "#",
    },
    {
        icon: iconCandles,
        title: "Assistência Funeral",
        text: "No caso do falecimento da pessoa segurada, a pessoa beneficiária recebe assistência para a realização do funeral ou cremação.",
        link: "#",
    }
]

const CoberturaBoxItem = ({item}: CoberturasProps) => {
    return(
            <div className='coberturas__box'>
                <figure>
                    <img src={item.icon} alt="Morte" />
                </figure>
                <h4>{item.title}</h4>
                <p>{item.text}</p>
                <a href={item.link} className='btn btn-secondary'>Saiba mais</a>
            </div>
    )
}

export default function Coberturas(){
    return(
        <div className='coberturas'>
            {coberturas.map((item) => {
                return(
                    <CoberturaBoxItem key={item.title} item={item} />
                )
            })}
        </div>
    )
}