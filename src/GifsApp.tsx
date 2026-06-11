import GifList from "./gifs/components/GifList";
import PreviousSearches from "./gifs/components/PreviousSearches";
import CustomHeader from "./shared/components/CustomHeader";
import SearchBar from "./shared/components/SearchBar";
import { useState } from "react";
import { getGifsByQuery } from "./gifs/actions/get-gifs-by-query.actions";
import type { Gif } from "./gifs/interfaces/gif.interface";

export const GifsApp = () => {

    const [gifs, setGifs] = useState<Gif[]>([]);
    const [previousSearches, setPreviousSearches] = useState<string[]>([]);

    const handleTermClicked = (term: string) => {
        setPreviousSearches(prev => [term, ...prev,]);
    }

    const handleSearch = async (term: string = '') => {
        term = term.trim().toLocaleLowerCase();
        if (term.length === 0) return

        if (!previousSearches.includes(term)) {
            const currentTerms = previousSearches.slice(0, 7)
            setPreviousSearches([term, ...currentTerms]);

            const gifs = await getGifsByQuery(term);
            setGifs(gifs);
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
            <GifList gifs={gifs} />
        </>
    )
}

