import { useEffect, useState } from "react"

type AccordionItemProps = {
    title: string
    text: string
    opened: boolean
}

const AccordionItem = (data: AccordionItemProps) => {
    const [opened, setOpened] = useState(data.opened)

    return (
        <div className={`accordion__item ${opened === true ? 'opened' : ''}`} onClick={()=>setOpened(!opened)}>
            <div className='accordion__item--title'>
                {data.title}
            </div>
            <div className='accordion__item--content'>
                <p>{data.text}</p>
            </div>
        </div>
    )
}

export default function Accordion(){

    const [accordionData, setAccordionData] = useState<Array<AccordionItemProps>>([])

    useEffect(()=>{
        fetch("https://stark-cove-48986.herokuapp.com/seguros/motivos", {
            method: "GET",
        })
        .then(res => res.json())
        .then(res => {
            setAccordionData(res)
        })
    }, [])

    return(
        <div className='accordion'>
            {accordionData &&
                accordionData.map((item) => {
                    return (
                        <AccordionItem key={item.title} title={item.title} text={item.text} opened={false} />
                    )
                })
            }
            
        </div>
    )
}