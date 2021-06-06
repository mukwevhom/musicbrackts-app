import React from 'react';

export interface Props {
    hit?: any;
    components?: any
}

const SearchSongItem: React.FC<Props> = ({hit, components}) => {
    return (
        <li className='search-song-wrapper'>
            <a href={hit.song_link} className="search-song">
                <div className='search-song-album-art'>
                    <figure>
                        <img src={hit.aa_link} alt={`${hit.artist_name} - ${hit.song_name}`} />
                    </figure>
                </div>
                <div className='search-song-info'>
                    <h4 className='search-song-name'>{hit.song_name}</h4>
                    <h4 className='search-song-artist-name'>{hit.artist_name}</h4>
                </div>
            </a>
        </li>
    )
}

export default SearchSongItem;