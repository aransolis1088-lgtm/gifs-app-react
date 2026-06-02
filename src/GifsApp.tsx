import { mockGifs } from "./mock-data/gifs.mock";

export const GifsApp = () => {
    return (
        <>
            {/* Header*/}
            <div className="content-center">
                <h1>Buscador de Gifs</h1>
                <p>Encuentra los mejores gifs de tus personajes favoritos</p>
            </div>

            {/* Search */}
            <div className="search-container">
                <input type="text" placeholder="Buscar gifs..." />
                <button>Buscar</button>
            </div>

            {/* Busquedas Previas */}
            <div className="previous-searches">
                <h2>Búsquedas Previas</h2>
                <ul className="previous-searches-list">
                    <li>Dragon Ball</li>
                    <li>Naruto</li>
                    <li>One Piece</li>
                    <li>Mario Bros</li>

                </ul>
            </div>

            {/* Resultados */}
            <div className="gifs-container">
                {
                    mockGifs.map(gif => (
                        <div key={gif.id} className="gif-card">
                            <img src={gif.url} alt={gif.title} />
                            <h3>{gif.title}</h3>
                            <p>{gif.width} x {gif.height} (1.5MB)</p>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

