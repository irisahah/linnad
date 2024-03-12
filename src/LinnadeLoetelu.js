function LinnadeLoetelu({linnad, setAktiivneLinn}) {
    const valiLinn = (linnaIndex) => {
        console.log('linn' + linnaIndex)
        setAktiivneLinn(linnaIndex)
    }

    const linnaNimed = linnad.map((linn, index) => {
        return (
            <li key={index} onClick={()=>valiLinn(index)}>{linn.nimi} - {linn.kylastusi}</li>
    )
})

    return (
        <div>
            <p>Linnade loetelu</p>
            <ul>{linnaNimed}</ul>        
        </div>
    )
}

export default LinnadeLoetelu;