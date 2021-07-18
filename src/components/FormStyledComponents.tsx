import styled from 'styled-components'

const FormGroup = styled.div<{align ?: string}>`
    box-shadow: rgb(0 0 0 / 10%) 0px 0.0625rem 0.125rem, rgb(0 0 0 / 15%) 0px 0.25rem 1rem -0.125rem;
    transition: box-shadow 0.5s ease-in-out;
    width: 50%;
    padding: .75rem;
    margin: ${props => props.align === 'center' ? '0 auto' : '0'};
    & + div {
        margin-top:24px;
    }
    @media (max-width: 575px) {
        width: 100%;
    }
    @media (max-width: 575px) {
        width: 100%;
    }
`

const FormGroupHeader = styled.div`
    h2 {
        font-size: 1.2rem;
        font-weight: 500;
        margin-bottom: 1.75rem;
    }
`

const FormGroupContent = styled.div`

`

const FormInput = styled.div`
    &:not(:first-child) {
        margin-top: 1.5rem;
    }
    label {
        margin-bottom: .5rem;
        font-size: .75rem;
        line-height: 1.25;
        display: block;
    }
    input {
        display: block;
        border-radius: .25rem;
        box-shadow: 0 0 0 0 transparent;
        border: .0625rem solid rgb(0 0 0 / 10%);
        font-size: .875rem;
        height: 3rem;
        width: 100%;
        padding: 0 1rem;
        &:focus {
            box-shadow: 0 0 0.125rem 0.125rem rgba(23,95,255,0.15);
            border-color: #175fff;
        }
        &.is-invalid {
            border-color: red;
        }
    }
`

const FormAction = styled.div`
    text-align: center;
    .disclaimer {
        font-size: .75rem;
        line-height: 1.25;
        a {
            text-decoration: underline;
            color: #1e1e1c;
            font-size: inherit;
        }
    }
`

export { FormGroup, FormGroupHeader, FormGroupContent, FormInput, FormAction }