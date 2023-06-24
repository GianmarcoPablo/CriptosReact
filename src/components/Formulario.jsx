import { useEffect, useState } from "react"
import styled from "@emotion/styled"
import useSelectModenas from "../hooks/useSelectModenas"
import {modenas} from "../data/monedas"
import Error from "./Error"

const InputSubmit = styled.input`
    background-color: #9497FF;
    border: none;   
    width: 100%;
    padding: 10px;
    color: #fff;
    font-weight: bold;
    text-transform: uppercase;
    font-size: 20px;
    border-radius: 5px;
    transition: background-color .3s ease;
    &:hover{
        background-color: #7a7dfe;
        cursor: pointer;
    }
`


const Formulario = ({setMonedas}) => {

  const [critpos, setCriptos ] = useState([])
  const [error, setError ] = useState(false)

  const [moneda, SelectMonedas ] = useSelectModenas("Elige tu moneda",modenas)
  const [criptoMoneda, SelectCriptomoenda ] = useSelectModenas("Elige tu Criptomoneda",critpos)

  useEffect(() => {
    const consultarApi = async () => {
      const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD`
      const respuesta = await fetch(url)
      const resultado = await respuesta.json()
      const arrayCriptos = resultado.Data.map(cripto => {
        const objeto = {
          id: cripto.CoinInfo.Name,
          nombre: cripto.CoinInfo.FullName
        }
        return objeto
      })
      setCriptos(arrayCriptos)
  }
  consultarApi()
 }, [])

 const handleSubmit = e => {
  e.preventDefault()
  if([moneda,criptoMoneda].includes("")){
    setError(true)
    return
  }
  setError(false)
  setMonedas({moneda,criptoMoneda})
 }
 
  return (
    <>
      {error && <Error>todos los campos son obligatorios</Error>}
      <form
        onSubmit={handleSubmit}
      >
          <SelectMonedas/>
          <SelectCriptomoenda/>
          <InputSubmit type="submit" value="cotizar"/>
      </form>
    </>
  )
}

export default Formulario