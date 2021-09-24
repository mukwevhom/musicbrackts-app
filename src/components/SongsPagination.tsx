import React, {useEffect, useState} from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';
import { actionCreators } from '../state';
import { State } from '../state';
import styled from 'styled-components'
import { ChevronsLeft, ChevronsRight, MoreHorizontal } from 'react-feather';

export interface Props {
    onPageChange: (pageNum: number) => void
}

const PaginationWrapper = styled.div`
    margin-top: 1.5rem;
`

const PaginationList = styled.ul`
    display: flex;
    justify-content: center;
    column-gap: 5px;
    flex-wrap: wrap;
`

const PaginationItem = styled.li<{isCurrentPage ?: boolean, isDotsPage ?: boolean}>`
    border: ${props => props.isDotsPage ? 'none' : '1px solid rgb(30,30,28)'};
    border-radius: 3px;
    background-color: ${props => props.isCurrentPage ? 'rgb(30,30,28)' : 'white'};
    color: ${props => props.isCurrentPage ? 'white' : 'rgb(30,30,28)'};
    min-width: 30px;
    display: block;
    height: 30px;
    text-align: center;
    padding: .25rem;
    line-height: 1;
    cursor: ${props => (props.isCurrentPage || props.isDotsPage) ? 'default' : 'pointer'};
`

const SongsPagination:React.FC<Props> = ({onPageChange}) => {
    const dispatch = useDispatch()
    const { changeSongsPage } = bindActionCreators(actionCreators, dispatch)
    const [songsCount, setSongsCount] = useState(0 as number);
    const [pagesCount, setPagesCount] = useState(0 as number);
    const state = useSelector((state: State) => state.songsPagination)

    useEffect(() => {
        getSongsCount().then((res) => {
            setSongsCount(Number(res))
        });
        
        setPagesCount(Math.floor(songsCount / state.songsPerPage))
    }, [songsCount, state.songsPerPage]);

    const getSongsCount = async () => {
        try {
            let response = await fetch(`${process.env.REACT_APP_API_URL}/songs-count`)
            if(!response.ok)
                return []

            let results = await response.json()

            return results.count
        } catch (e) {
            return 0
        }
    }

    const changePage = (e: React.MouseEvent<HTMLLIElement>) => {
        let pageNum = e.currentTarget.dataset.page
        changeSongsPage(Number(pageNum))
        onPageChange(Number(pageNum))
    }

    const range = (start: number, end: number) => {
        let length = end - start + 1;
        
        return Array.from({ length }, (_, idx) => idx + start);
    };

    const createPaginationList = () => {
        const DOTS = '...'
        const siblingCount: number = 2
        const leftSiblingIndex: number = Math.max(state.currentPage - siblingCount, 1);
        const rightSiblingIndex: number = Math.min( state.currentPage + siblingCount, pagesCount);

        const shouldShowLeftDots: boolean = leftSiblingIndex > 2;
        const shouldShowRightDots: boolean = rightSiblingIndex < pagesCount - 2

        const firstPageIndex: number = 1;
        const lastPageIndex: number = pagesCount;

        let itemsToRender = [] as any

        if (!shouldShowLeftDots && shouldShowRightDots) {
            let leftItemCount = 3 + 2 * siblingCount;
            let leftRange = range(1, leftItemCount);
      
            itemsToRender = [...leftRange, DOTS, pagesCount];
        }

        if (shouldShowLeftDots && !shouldShowRightDots) {
      
            let rightItemCount = 3 + 2 * siblingCount;
            let rightRange = range(
                pagesCount - rightItemCount + 1,
                pagesCount
            );
            itemsToRender = [firstPageIndex, DOTS, ...rightRange];
        }

        if (shouldShowLeftDots && shouldShowRightDots) {
            let middleRange = range(leftSiblingIndex, rightSiblingIndex);
            itemsToRender = [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
        }

        return itemsToRender.map((pageNumber: any, i: number) => {
            if (pageNumber === DOTS) {
                return <PaginationItem isDotsPage={pageNumber === DOTS} key={`pagination-${i}`}><MoreHorizontal width="1.1rem" height="1.1rem" /></PaginationItem>;
            }

            return <PaginationItem isCurrentPage={pageNumber === state.currentPage} key={`pagination-${i}`} data-page={pageNumber} onClick={changePage}>{pageNumber}</PaginationItem>
        })
    }

    return (
        <PaginationWrapper>
            <PaginationList>
                <PaginationItem data-page={1} onClick={changePage}><ChevronsLeft width="1.1rem" height="1.1rem" /></PaginationItem>
                {pagesCount >= 0 && (
                    createPaginationList()
                )}
                <PaginationItem data-page={pagesCount} onClick={changePage}><ChevronsRight width="1.1rem" height="1.1rem" /></PaginationItem>
            </PaginationList>
        </PaginationWrapper>
    )
}

export default SongsPagination;

