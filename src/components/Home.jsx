import React, { useEffect, useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import CountUp from 'react-countup'
import FadeIn from 'react-fade-in'
import './custom-calendar.css'


export default function Home() {

    const [value, onChange] = useState(new Date())
    const [dias, setDias] = useState(0)
    const [meses, setMeses] = useState(0)
    const [anos, setAnos] = useState(0)
    const [segundos, setSegundos] = useState(0)
    const [minutos, setMinutos] = useState(0)
    const [horas, setHoras] = useState(0)
    const [flag, setFlag] = useState(false)

    useEffect(()=>{
        setDias(calculaDias(value))
        setMeses(calculaMeses(value))
        setAnos(calculaAnos(value))
        setSegundos(calculaSegundos(value))
        setMinutos(calculaMinutos(value))
        setHoras(calculaHoras(value))
    }, [value])

    const calculaSegundos = (nascimento) => {
        let datanasc = nascimento.getTime()
        let data = new Date().getTime()
        let segundo = 1000;
        return Math.floor((data - datanasc) / segundo)
    }
    const calculaMinutos = (nascimento) => {
        let datanasc = nascimento.getTime()
        let data = new Date().getTime()
        let minuto = 1000 * 60;
        return Math.floor((data - datanasc) / minuto)
    }
    const calculaHoras = (nascimento) => {
        let datanasc = nascimento.getTime()
        let data = new Date().getTime()
        let hora = 1000 * 60 * 60;
        return Math.floor((data - datanasc) / hora)
    }
    const calculaDias = (nascimento) => {
        let datanasc = nascimento.getTime()
        let data = new Date().getTime()
        let dia = 1000 * 60 * 60 * 24;
        return Math.floor((data - datanasc) / dia)
    }
    const calculaMeses = (nascimento) => {
        let datanasc = nascimento.getTime()
        let data = new Date().getTime()
        let mes = 1000 * 60 * 60 * 24 * 30;
        return Math.floor((data - datanasc) / mes)
    }
    const calculaAnos = (nascimento) => {
        let datanasc = nascimento.getTime()
        let data = new Date().getTime()
        let ano = 1000 * 60 * 60 * 24 * 30 * 12;
        return Math.floor((data - datanasc) / ano)
    }

    return (
        <div className='container'>
            <br /> <br />
            <div className="row">
                <div className="col-12" align='center'>
                    <br />
                    <h1> À quanto tempo você existe? </h1>
                    <br />
                    <Calendar 
                        onChange={onChange}
                        value={value}
                        locale={navigator.language} 
                    />
                    <br />
                    {dias <= 0 && (
                        <>
                            <h1>Sinto muito, você ainda não existe...</h1>
                            <hr />
                        </>
                    )}
                    {dias > 0 && (
                        <>
                            <h1>Você existe há</h1>
                            <hr />
                                <h4> <CountUp duration={20} end={segundos} useEasing={true} separator="." onEnd={() => setFlag(true)}/> Segundo{segundos > 1 ? 's' : ''}</h4>
                            <hr />
                                <h4> <CountUp duration={20} end={minutos} useEasing={true} separator="." /> Minuto{minutos > 1 ? 's' : ''}</h4>
                            <hr />
                                <h4> <CountUp duration={20} end={horas} useEasing={true} separator="." /> Hora{horas > 1 ? 's' : ''}</h4>
                            <hr />
                                <h4> <CountUp duration={20} end={dias} useEasing={true} separator="." /> Dia{dias > 1 ? 's' : ''}</h4>
                            <hr />
                                {meses > 0 && (
                                    <>
                                        <h4> <CountUp duration={20} end={meses} useEasing={true} separator="." /> M{meses > 1 ? 'e' : 'ê'}s{meses > 1 ? 'es' : ''}</h4>
                                        <hr />
                                    </>
                                )}
                                {anos > 0 && (
                                    <>
                                        <h4> <CountUp duration={20} end={anos} useEasing={true} separator="." /> Ano{anos > 1 ? 's' : ''}</h4>
                                        <hr />
                                    </>
                                )}
                        </>
                    )}
                    <br />
                    {dias > 0 && flag && (
                        <>
                            <FadeIn
                                transitionDuration={5000}
                            >
                                <h1> Como o tempo voa né? </h1>
                            </FadeIn>
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}
