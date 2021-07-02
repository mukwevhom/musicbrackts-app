import React from 'react';
import {Helmet} from "react-helmet";
import CustomSection from '../components/CustomSection';
import MainLayout from '../layouts/MainLayout';
import styled from 'styled-components';

const FormGroup = styled.div`
    box-shadow: rgb(0 0 0 / 10%) 0px 0.0625rem 0.125rem, rgb(0 0 0 / 15%) 0px 0.25rem 1rem -0.125rem;
    transition: box-shadow 0.5s ease-in-out;
    width: 50%;
    padding: .75rem;
    & + div {
        margin-top:24px;
    }
`

const FormGroupHeader = styled.div`
    h2 {
        font-size: 1.2rem;
        font-weight: 500;
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
    }
`

const UploadMusic = () => {
    return (
        <MainLayout>
            <Helmet>
                <title>MusicBrackts | Upload Music</title>
            </Helmet>
            <CustomSection headerText="Submit your music" subHeaderText="Complete the fields below" >
                <FormGroup>
                    <FormGroupHeader>
                        <h2>Basic Info</h2>
                    </FormGroupHeader>
                    <FormGroupContent>
                        <FormInput>
                            <label>Input Field</label>
                            <input type='Test' />
                        </FormInput>
                        <FormInput>
                            <label>Input Field</label>
                            <input type='Test' />
                        </FormInput>
                    </FormGroupContent>
                </FormGroup>
                <FormGroup>
                    <FormGroupHeader>
                        <h2>Basic</h2>
                    </FormGroupHeader>
                    <FormGroupContent>
                        test
                    </FormGroupContent>
                </FormGroup>
            </CustomSection>
        </MainLayout>
    )
}

export default UploadMusic;