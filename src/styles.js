import styled, { createGlobalStyle } from 'styled-components'

const EstiloGlobal = createGlobalStyle `
    * {
        margin: 0;
        padding: 0;
    }
`

export default EstiloGlobal

export const Container = styled.h1`
    color: red;
    background-color: yellow;
`
export const ContactForm = styled.button`
    color: green;
    background-color: darkkhaki;
`