import { ArtsResponse } from "@/interfaces/artworks-response"
import { api } from "./axios-config"
import { ArtworkMapper } from "@/mappers/artwork.mapper";
import { DetailResponse } from "@/interfaces/detail-response";

const getArtworks = async (page: string,  fields: string[]): Promise<ArtworkData> => {
    try {
        let params = new URLSearchParams({ limit: '12'})
        params.append('page', page.toString());
        if(fields.length) {
            params.append('fields', fields.join(','))
        }
        const { data } = await api.get<ArtsResponse>('artworks', { params })
        return ArtworkMapper.mapResponseToArtworkData(data)
    }
    catch(err) {
        console.log('erroor', err)
        throw new Error('Failed to fetch artworks')
    }
}

const getArtworkById = async (id: string, fields: string[]): Promise<Artwork> =>  { //rebuild

    let params = new URLSearchParams()
    if(fields) {
        params.append('fields', fields.join(','))
    }
    
    const  { data } = await api.get<DetailResponse>(`artworks/${id}`, { params })

    return ArtworkMapper.mapArtwork(data.data, 500)
        
}


export const artworkService = {
    getAll: getArtworks,
    getDetail: getArtworkById
}