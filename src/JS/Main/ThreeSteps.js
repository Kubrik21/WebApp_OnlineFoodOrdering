
import { useState, useEffect } from 'react'


function ThreeSteps() {

    const [step, setStep] = useState({
        number: 0,
        elem: [{url:"/ICON/firstStep.svg",desc:"1. Wybierz restaurację i potrawy"}, {url:"/ICON/seccondStep.svg",desc:"2. Podaj swoją lokalizację"}, {url:"/ICON/thirdStep.svg",desc:"3. Zapłać i ciesz się jedzeniem"}],
    })

    useEffect(() => {
        const interval = setInterval(() => {
            setStep(prev => {
                if (prev.number + 1 < prev.elem.length)
                    return ({ ...prev, number: prev.number + 1 })
                else
                    return ({ ...prev, number: 0 })
            })
            
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <h1>Twoje zamówienie</h1>
            <h2>w trzech krokach!</h2>
            <img src={step.elem[step.number].url} alt="steps2order" ></img>
            <p>{step.elem[step.number].desc}</p>
        </div>
    )
}

export { ThreeSteps }