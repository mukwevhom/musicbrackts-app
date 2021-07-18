import React, { useEffect, useState } from 'react';
import {Helmet} from "react-helmet";
import CustomSection from '../components/CustomSection';
import MainLayout from '../layouts/MainLayout';
import styled from 'styled-components';
import FileDropzone from '../components/FileDropzone';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { State, actionCreators } from '../state';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';
import { Loader } from 'react-feather';
import UploadCompleteModal from '../components/UploadCompleteModal';
import { FormGroup, FormGroupHeader, FormGroupContent, FormInput, FormAction } from '../components/FormStyledComponents'

const UploadSongButton = styled.button`
    display: block;
    margin: 1.5rem auto 1.25rem;
    font-size: 1.125rem;
    line-height: 2rem;
    background-color: rgb(30, 30, 28);
    color: rgb(255, 255, 255);
    padding: 0.75rem 2rem;
    font-weight: 500;
    border-radius: 0.25rem;
    transition: all 0.2s ease 0s;
    outline: none !important;
    &:hover {
        background-color: #f7f8fa;
        color: rgb(30, 30, 28);
    }
    &.uploading {
        background-color: #f7f8fa !important;
        color: rgb(30, 30, 28) !important;
        svg {
            display: inline-block;
            vertical-align: bottom;
            animation-name: spin;
            animation-duration: 5000ms;
            animation-iteration-count: infinite;
            animation-timing-function: linear; 
        }
    }
`

export interface SongInfo {
    'song-name' : string;
    'artist-name' : string;
    'featured-artist' ?: string;
}

const UploadSongs = () => {
    const dispatch = useDispatch()
    const { removeSongFile, removeArtworkFile, setIsUploading } = bindActionCreators(actionCreators, dispatch)
    const state = useSelector((state: State) => state.files)
    const [uploadComplete, setUploadComplete] = useState(false as boolean);
    const [songId, setSongId] = useState("" as string);

    let songInfo: SongInfo = {
        'song-name': '',
        'artist-name': '',
    }

    useEffect(() => {
        if(uploadComplete) {
            document.querySelector('body')?.classList.add('upload-complete')
        } else {
            document.querySelector('body')?.classList.remove('upload-complete')
        }
    }, [uploadComplete])

    const uploadSong = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setSongId('123456')
        setUploadComplete(true)
        if(state.isUploading || !validateFields())
            return
            
        let formData = new FormData()

        formData.append('songName', songInfo['song-name'])
        formData.append('artist', songInfo['artist-name'])
        formData.append('songFile', state.songFile[0], state.songFile[0].name)
        formData.append('artworkFile', state.artworkFile[0], state.songFile[0].name)

        if(songInfo['featured-artist']) {
            formData.append('featuredArtist', songInfo['featured-artist'])
        }

        setIsUploading()

        fetch('http://localhost:5000/upload_song', {
                method:'POST',
                body:formData
            }).then(res => res.json())
            .then(res => {
                // if(!res.ok)
                //     console.log(res.statusText)
                setSongId(res.id)
                setUploadComplete(true)
                setIsUploading()
                removeArtworkFile()
                removeSongFile()
            }).catch(e => {
                console.log(e)
            })
    }

    const validateFields = () => {
        let hasInvalidField: boolean = false
        if(state.songFile.length === 0 || state.artworkFile.length === 0)
            hasInvalidField = true

       document.querySelectorAll('input[type=text]')
            .forEach((e: Element) => {
                e.classList.remove("is-invalid")

                if(!(e as HTMLInputElement).checkValidity()) {
                    e.classList.add("is-invalid")
                    hasInvalidField = true
                } else {
                    if((e as HTMLInputElement).value) {
                        songInfo = {
                            ...songInfo,
                            [(e as HTMLInputElement).name]: (e as HTMLInputElement).value
                        }
                    }
                }
            })

        
        return !hasInvalidField
    }

    return (
        <MainLayout>
            <Helmet>
                <title>MusicBrackts | Upload Music</title>
            </Helmet>
            <CustomSection headerText="Submit your song" subHeaderText="Complete the fields below" alignHeader="center" >
                <FormGroup align="center">
                    <FormGroupHeader>
                        <h2>Basic Info</h2>
                    </FormGroupHeader>
                    <FormGroupContent>
                        <FormInput>
                            <label>Song Name</label>
                            <input name="song-name" type='text' required/>
                        </FormInput>
                        <FormInput>
                            <label>Artist Name</label>
                            <input name="artist-name" type='text' required/>
                        </FormInput>
                        <FormInput>
                            <label>Featured Artist</label>
                            <input name="featured-artist" type='text' />
                        </FormInput>
                    </FormGroupContent>
                </FormGroup>
                <FormGroup align="center">
                    <FormGroupHeader>
                        <h2>Files</h2>
                    </FormGroupHeader>
                    <FormGroupContent>
                        <FileDropzone type='audio' label='Song File' name='songFile' message='Only audio files are accepted' />
                        <FileDropzone type='image' label='Artwork' name='artworkFile' message='Only images are accepted' />
                    </FormGroupContent>
                </FormGroup>
                <FormAction>
                    <UploadSongButton onClick={uploadSong} className={`${state.isUploading ? 'uploading': ''}`}>
                        { state.isUploading && (
                            <React.Fragment><Loader /> Uploading</React.Fragment>)}
                        { !state.isUploading && (
                            <React.Fragment>Upload Song</React.Fragment>)}
                    </UploadSongButton>
                    <p className='disclaimer'>*By uploading, you confirm that your sounds comply with our <Link to='legal/terms'>Terms of Use</Link> and you don't infringe anyone else's rights.</p>
                </FormAction>
            </CustomSection>
            { uploadComplete &&
                (<UploadCompleteModal songId={songId}/>)
            }
            
        </MainLayout>
    )
}

export default UploadSongs;