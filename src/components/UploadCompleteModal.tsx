import React from 'react';
import styled from 'styled-components';
import { FormInput } from '../components/FormStyledComponents';
import { StyledLinkAsButtom } from './CustomLink';

const Modal = styled.div`
    position: fixed;
    z-index: 20;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    border-radius: .25rem;
    box-shadow: rgba(44, 50, 66, 0.08) 0px 1px 2px 0px;
    border: .0625rem solid rgb(0 0 0 / 10%);
    padding: 1rem;
    color: rgb(44, 50, 66);
    width: 45%;
    @media (max-width: 575px) {
        width: calc(90% - 30px);
    }
`

const ModalHeader = styled.div`
    text-align: center;
    margin-bottom: 24px;
    h2 {
        font-size: 1.2rem;
        line-height: 1.2;
    }
    span {
        font-size: 1rem;
    }
`

const ModalContent = styled.div`
    input {
        text-align: center;
    }
`

const ModalFooter = styled.div`
    margin-top: 24px;
`

export interface Props {
    songId: string;
}

const UploadCompleteModal: React.FC<Props> = ({songId}) => {
    let songUrl = `${process.env.REACT_APP_DOMAIN}/song/${songId}`
    return (
        <Modal>
            <ModalHeader>
                <h2>Song Successfully Uploaded</h2>
                <span>Copy or visit the url below</span>
            </ModalHeader>
            <ModalContent>
                <FormInput>
                    <input name="song-name" type='text' value={songUrl} readOnly />
                </FormInput>
            </ModalContent>
            <ModalFooter>
                <StyledLinkAsButtom to={`/song/${songId}`} >Go to Song</StyledLinkAsButtom>
            </ModalFooter>
        </Modal>
    )
}

export default UploadCompleteModal