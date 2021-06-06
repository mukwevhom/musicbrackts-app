import React, { useEffect, useRef, useMemo } from 'react';
import algoliasearch from 'algoliasearch';
import { createAutocomplete, AutocompleteOptions, AutocompleteState } from '@algolia/autocomplete-core';
import { getAlgoliaResults } from '@algolia/autocomplete-preset-algolia';
import { Hit } from '@algolia/client-search';
import SearchSongItem from './SearchSongItem';
import { Search, X } from 'react-feather';

const appId = 'J8IO1T0ZQE';
const apiKey = '3d0ae58561bbdc5111784bd77f8bf2d6';
const searchClient = algoliasearch(appId, apiKey);

type AutocompleteItem = Hit<{
    song_link: string;
    aa_link: string;
    song_name: string;
    artist_name: string;
}>;

const AlgoliaAutoComplete = (props: Partial<AutocompleteOptions<AutocompleteItem>>) => {
    const [autocompleteState, setAutocompleteState] = React.useState<AutocompleteState<AutocompleteItem>>({
        collections: [],
        completion: null,
        context: {},
        isOpen: false,
        query: '',
        activeItemId: null,
        status: 'idle',
    });

    const autocomplete = React.useMemo(
        () => createAutocomplete<AutocompleteItem, React.BaseSyntheticEvent, React.MouseEvent, React.KeyboardEvent>({
            onStateChange({ state }) {
                setAutocompleteState(state);
            },
            getSources () {
                return [
                    {
                        sourceId: 'songs',
                        getItems({ query }) {
                            return getAlgoliaResults({
                                searchClient,
                                queries: [
                                    {
                                        indexName: 'dev_MUSIC',
                                        query,
                                    },
                                ],
                            });
                        }
                    }
                ]
            },
            ...props,
        }),
        [props]
    )

    const inputRef = React.useRef<HTMLInputElement>(null);
    const formRef = React.useRef<HTMLFormElement>(null);
    const panelRef = React.useRef<HTMLDivElement>(null);
    const { getEnvironmentProps } = autocomplete;

    React.useEffect(() => {
        if (!formRef.current || !panelRef.current || !inputRef.current) {
            return undefined;
        }

        const { onTouchStart, onTouchMove } = getEnvironmentProps({
            formElement: formRef.current,
            inputElement: inputRef?.current,
            panelElement: panelRef?.current,
        });

        window.addEventListener('touchstart', onTouchStart);
        window.addEventListener('touchmove', onTouchMove);

        return () => {
            window.removeEventListener('touchstart', onTouchStart);
            window.removeEventListener('touchmove', onTouchMove);
        };

    }, [getEnvironmentProps, formRef, inputRef, panelRef])

    return (
        <div className="search-wrapper" {...autocomplete.getRootProps({})}>
            <form ref={formRef} className="search-form" {...autocomplete.getFormProps({ inputElement: inputRef.current })} >
            <input
                className="search-input"
                ref={inputRef}
                {...autocomplete.getInputProps({ inputElement: inputRef.current })} />
            <button className="search-clear" title="Clear" type="reset">
                <X size={18}/>
            </button>
            <button className="search-submit" type="submit" title="Submit">
                <Search size={21} stroke-width="3.25" />
            </button>
            </form>
            {autocompleteState.isOpen && (
                <div
                    ref={panelRef}
                    className={[
                        'search-results-wrapper',
                        autocompleteState.status === 'stalled' && 'aa-Panel--stalled',
                    ]
                        .filter(Boolean)
                        .join(' ')}
                    {...autocomplete.getPanelProps({})}
                >
                    <div className="search-results">
                        {autocompleteState.collections.map((collection, index) => {
                        const { source, items } = collection;

                        return (
                            <section key={`source-${index}`} className="search-source">
                            {items.length > 0 && (
                                <ul className="search-results-list" {...autocomplete.getListProps()}>
                                {items.map((item) => {
                                    return <SearchSongItem hit={item} />;
                                })}
                                </ul>
                            )}
                            </section>
                        );
                        })}
                    </div>
                </div>
            )}
        </div>
    );
}

export default AlgoliaAutoComplete;