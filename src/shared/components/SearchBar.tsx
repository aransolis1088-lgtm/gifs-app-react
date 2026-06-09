import { useEffect, useState } from "react";

interface SearchBarProps {
    placeholder?: string;
    onSearch: (term: string) => void;
}

export default function SearchBar({ placeholder = 'Buscar', onSearch }: SearchBarProps) {
    const [term, setTerm] = useState('');

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            onSearch(term);
        }, 800);

        return () => {
            clearTimeout(timeoutId);
        }
    }, [term, setTerm])

    const handleSearch = () => {
        onSearch(term);
        //setTerm('');
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    }

    return (
        <div className="search-container">
            <input
                type="text"
                placeholder={placeholder}
                value={term}
                onChange={(e) => setTerm(e.target.value)}
                onKeyDown={handleKeyDown}
            />
            <button onClick={handleSearch}>Buscar</button>
        </div>
    )
}
