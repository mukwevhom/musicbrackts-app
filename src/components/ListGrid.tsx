import styled from 'styled-components'

const ListGrid = styled.div`
    display: grid;
    /* grid-auto-flow: column; */
    grid-template-columns: repeat(auto-fill, minmax(calc((100% - 4rem) / 5), 1fr));;
    /* grid-auto-columns: calc((100% - 4rem) / 5); */
    gap: 1rem;
    justify-content: left;
    @media (max-width: 576px) {
        grid-auto-flow: row;
        grid-template-columns: repeat(auto-fill,minmax(calc((100% - 1rem) / 2),1fr));
    }
`

export default ListGrid;