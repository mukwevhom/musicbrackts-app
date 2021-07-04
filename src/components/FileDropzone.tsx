import React from 'react';
import {useDropzone, FileWithPath} from 'react-dropzone';
import styled from 'styled-components';
import { Music } from 'react-feather';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';
import { actionCreators } from '../state';

export interface Props {
    label ?: string;
    name : string,
    message ?: string,
    type : string
}

const Dropzone = styled.div`
    &:not(:first-child) {
        margin-top: 1.5rem;
    }
`

const Label = styled.label`
    margin-bottom: .5rem;
    font-size: .75rem;
    line-height: 1.25;
    display: block;
`

const DropzoneContainer = styled.div`
    box-shadow: 0 0 0 0 transparent;
    border: .0625rem solid rgb(0 0 0 / 10%);
    border-radius: .25rem;
    padding: 1rem;
    text-align: center;
    cursor: pointer;
    em {
        font-size: .85rem;
    }
`

const FilePreview = styled.div`
    display: flex;
    border-radius: .25rem;
    background-color: #f7f8fa;
    padding: .5rem;
    margin-top: .5rem;
    gap: .4rem;
    align-items: center;
`

const FileIcon = styled.div`
    border-radius: .25rem;
    background-color: #fff;
    width: 3rem;
    aspect-ratio: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    .image {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

const FileInfo = styled.div`
    font-size: .85rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .file-name {
        font-weight: 400;
    }
    .file-size {
        color: #9CA3AF;
    }
`

const FileDropzone: React.FC<Props> = ({label, name, message, type}) => {
    const dispatch = useDispatch()
    const { addSongFile, addArtworkFile, setIsUploading } = bindActionCreators(actionCreators, dispatch)

    const onDropAccepted = (files:Array<File>) => {
        if (type === 'audio')
            addSongFile(files[0])

        if (type === 'image')
            addArtworkFile(files[0])

        setIsUploading()
    }

    const {
            acceptedFiles,
            getRootProps,
            getInputProps
        } = useDropzone({
            accept: type === 'audio' ? 'audio/*' : 'image/*',
            maxFiles:1,
            multiple: false,
            onDropAccepted: onDropAccepted
        });

    

    const acceptedFileItems = acceptedFiles.map((file: FileWithPath, index: number) => (
        <FilePreview key={`${type}-${index}`}>
            <FileIcon>
                {type=== 'audio' && (<Music width="2rem" height="2rem" />)}
                {type=== 'image' &&
                    (<img src={URL.createObjectURL(file)} alt='test'/>)}
            </FileIcon>
            <FileInfo>
                <h5 className='file-name'>{file.path}</h5>
                <h5 className='file-size'>{file.size} bytes</h5>
            </FileInfo>
        </FilePreview>
    ));

    return (
        <Dropzone>
            {label &&
                (<Label>{label}</Label>)}
            <DropzoneContainer {...getRootProps({ className: 'dropzone' })}>
                <input {...getInputProps({name})} />
                <p>Drag & drop some files here, or click to select files</p>
                {message &&
                    (<em>*{message}</em>)}
            </DropzoneContainer>
            
            {acceptedFileItems}
        </Dropzone>
    )
}

export default FileDropzone;