import React from 'react';

export interface Props {
    hit?: any;
    components?: any
}

const SearchSongItem: React.FC<Props> = ({hit, components}) => {
    const addDefaultSrc = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
        e.currentTarget.src = '/musicbrackts-logo.png'
    }

    return (
        <li className='search-song-wrapper'>
            <a href={`/song/${hit.objectID}`} className="search-song">
                <div className='search-song-album-art'>
                    <figure>
                        <img src={`${process.env.REACT_APP_API_URL}/file/artwork/${hit.objectID}`} onError={addDefaultSrc} alt={`${hit.artistName} - ${hit.songName}`} />
                    </figure>
                </div>
                <div className='search-song-info'>
                    <h4 className='search-song-name'>{hit.songName}</h4>
                    <h4 className='search-song-artist-name'>{hit.artistName}</h4>
                </div>
            </a>
        </li>
    )
}

export default SearchSongItem;