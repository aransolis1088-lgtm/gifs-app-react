import axios from "axios";
import type { GiphyResponse } from "../interfaces/giphy.response";
import type { Gif } from "../interfaces/gif.interface";


export const getGifsByQuery = async (query: string): Promise<Gif[]> => {

    const response = await axios.get<GiphyResponse>(`https://api.giphy.com/v1/gifs/search`, {
        params: {
            api_key: 'vN6ZJ30cBQvb4kPYeiNsh3IvvYbkzrqF',
            q: query,
            limit: 25,
            lang: 'es'
        }
    });

    return response.data.data.map(giphyGif => ({
        id: giphyGif.id,
        title: giphyGif.title,
        url: giphyGif.images.original.url,
        width: parseInt(giphyGif.images.original.width),
        height: parseInt(giphyGif.images.original.height),
    }));
}