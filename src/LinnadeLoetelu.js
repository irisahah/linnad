function LinnadeLoetelu(props) {
const linnaNimed = props.linnad.map((linn) => {
    return (
        <div>{linn.nimi}</div>
    )

})

    return (
        <div>
            <h>Linnade loetelu</h>
            <ul>{linnaNimed}</ul>        
        </div>
    )
}

export default LinnadeLoetelu;