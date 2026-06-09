import GifList from "./gifs/components/GifList";
import PreviousSearches from "./gifs/components/PreviousSearches";
import CustomHeader from "./shared/components/CustomHeader";
import SearchBar from "./shared/components/SearchBar";
import { mockGifs } from "./mock-data/gifs.mock";
import { useState } from "react";
import { getGifsByQuery } from "./gifs/actions/get-gifs-by-query.actions";

export const GifsApp = () => {

    const [previousSearches, setPreviousSearches] = useState(['Mario Bros']);

    const handleTermClicked = (term: string) => {
        setPreviousSearches(prev => [...prev, term]);
    }

    const handleSearch = async (term: string = '') => {
        term = term.trim().toLocaleLowerCase();
        if (term.length === 0) return

        if (!previousSearches.includes(term)) {
            const currentTerms = previousSearches.slice(0, 6)
            setPreviousSearches([term, ...currentTerms]);

            const gifs = await getGifsByQuery(term);
            console.log(gifs);
        }

    }

    return (
        <>
            {/* Header */}
            <CustomHeader title="Buscador de Gifs" description="Encuentra los mejores gifs de tus personajes favoritos" />

            {/* Search */}
            <SearchBar onSearch={handleSearch} placeholder="Buscar gifs..." />

            {/* Busquedas Previas */}
            <PreviousSearches searches={previousSearches} onLabelClicked={handleTermClicked} />

            {/* Resultados */}
            <GifList gifs={mockGifs} />
        </>
    )
}

