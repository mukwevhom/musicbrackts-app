import styled from 'styled-components'

const ListGrid = styled.div`
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: none;
    grid-auto-columns: calc((100% - 4rem) / 5);
    gap: 1rem;
    justify-content: left;
    @media (max-width: 576px) {
        grid-auto-flow: row;
        grid-template-columns: 1fr;
    }
`

export default ListGrid;