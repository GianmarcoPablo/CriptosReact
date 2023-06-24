import styled from "@emotion/styled"

const MensajeError = styled.div`
    background-color: #b7322c;
    color: #fff;
    padding: 15px;
    font-size: 22px;
    text-transform: uppercase;
    font-family: "lato", sans-serif;
    font-weight: bold;
    text-align: center;
`

const Error = ({children}) => {
  return (
    <MensajeError>
        {children}
    </MensajeError>
  )
}

export default Error