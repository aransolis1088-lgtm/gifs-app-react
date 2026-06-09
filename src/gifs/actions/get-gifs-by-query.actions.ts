import axios from "axios";
import type { GiphyResponse } from "../interfaces/giphy.response";
import type { Gif } from "../interfaces/gif.interface";
import { giphyApi } from "../api/giphy.api";


export const getGifsByQuery = async (query: string): Promise<Gif[]> => {

    const response = await giphyApi.get<GiphyResponse>(`search`, {
        params: {
            q: query,
            limit: 25,
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