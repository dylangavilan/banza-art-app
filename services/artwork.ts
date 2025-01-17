import { ArtResponse } from "@/interfaces/art-response"
import { api } from "./axios-config"
import { ArtworkMapper } from "@/mappers/artwork.mapper";

const getArtworks = async (page: string, fields: string[] ): Promise<ArtworkData> => {
    try {
        const params = new URLSearchParams()
        params.append('page', page.toString());
        params.append('limit', '15');

        if(fields) {
            params.append('fields', fields.join(','))
        }
        
        const { data } = await api.get<ArtResponse>('artworks', { params })

        return ArtworkMapper.mapResponseToArtworkData(data)
    }
    catch(err) {
        console.log('erroor', err)
        throw new Error('Failed to fetch artworks')
    }
}

export const artworkService = {
    get: getArtworks
}