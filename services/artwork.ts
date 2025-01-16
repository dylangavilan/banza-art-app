import { ArtResponse } from "@/interfaces/art-response"
import { api } from "./axios-config"

const getArtworks = async (page: string, fields: string[] ): Promise<ArtResponse> => {
    try {
        const params = new URLSearchParams()
        params.append('page', page.toString());
        params.append('limit', '15');

        if(fields) {
            params.append('fields', fields.join(','))
        }
        const { data } = await api.get('artworks', { params })
        console.log('data' , data)
        return data
    }
    catch(err) {
        console.log('erroor', err)
        throw new Error('Failed to fetch artworks')
    }
}

export const artworkService = {
    get: getArtworks
}