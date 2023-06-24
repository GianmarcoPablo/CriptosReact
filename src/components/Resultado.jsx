import styled from "@emotion/styled"

const ResultadoDiv = styled.div`
    color: #fff;
    font-family: 'Lato', sans-serif;
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 30px;
`
const ResultadoInfo = styled.p`
    font-size: 18px;
    span{
        font-weight: bold;
    }
`

const ResultadoPrecio = styled.p`
    font-size: 26px;
    span{
        font-weight: bold;
    }
`

const Imagen = styled.img`
    display: block;
    width: 120px;
`


const Resultado = ({resultado}) => {
    const {PRICE,HIGHDAY,LOWDAY,CHANGEPCT24HOUR,LASTUPDATE,IMAGEURL} = resultado
  return (
    <ResultadoDiv>
        <Imagen src={`https://cryptocompare.com/${IMAGEURL}`} alt="Imagen Cripto" />
       <div>
            <ResultadoPrecio>El precio es de: <span>{PRICE}</span></ResultadoPrecio>
            <ResultadoInfo>Precio mas alto del dia: <span>{HIGHDAY}</span></ResultadoInfo>
            <ResultadoInfo>Precio mas bajo del dia: <span>{LOWDAY}</span></ResultadoInfo>
            <ResultadoInfo>Variacion ultimas 24 horas: <span>{CHANGEPCT24HOUR}</span></ResultadoInfo>
            <ResultadoInfo>Ultima actualizacion: <span>{LASTUPDATE}</span></ResultadoInfo>
       </div>
    </ResultadoDiv>
  )
}

export default Resultado