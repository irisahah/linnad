function LinnadeLoetelu({ linnad, setAktiivneLinn }) {
    const valiLinn = (linnaIndex) => {
        console.log('linn' + linnaIndex)
        setAktiivneLinn(linnaIndex)
    }

    const linnaNimed = linnad.map((linn, index) => {
        return (
            <li key={index} onClick={() => valiLinn(index)}>{linn.nimi} - {linn.kylastusi}</li>
        )
    })

    const lisaLinn = () => {
        console.log('linna lisamine')
    }

    return (
        <div>
            <p className='linnade-loetelu-heading'>Linnade loetelu</p>
            <div><ul className='linnade-loetelu'>{linnaNimed}</ul></div>
            <div><button onClick={lisaLinn}>Lisa linn</button></div>
        </div>
    )
}

export default LinnadeLoetelu;