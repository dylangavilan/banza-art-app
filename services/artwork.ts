import { ArtsResponse, Data } from "@/interfaces/artworks-response"
import { api } from "./axios-config"
import { ArtworkMapper } from "@/mappers/artwork.mapper";

const getArtworks = async (page: string,  fields: string[]): Promise<ArtworkData> => {
    try {
        let params = new URLSearchParams({ limit: '12'})
        params.append('page', page.toString());
        if(fields.length) {
            params.append('fields', fields.join(','))
        }
        const { data } = await api.get<ArtsResponse<Data[]>>('artworks', { params })
        return ArtworkMapper.mapResponseToArtworkData(data)
    }
    catch(err) {
        console.log('erroor', err)
        throw new Error('Failed to fetch artworks')
    }
}

const getArtworkById = async (id: string, fields: string[]): Promise<Artwork> =>  {

    let params = new URLSearchParams()
    if(fields) {
        params.append('fields', fields.join(','))
    }
    
    const  { data } = await api.get<ArtsResponse<Data>>(`artworks/${id}`, { params })

    return ArtworkMapper.mapArtwork(data.data, 500)        
}

const getClassifications = async (): Promise<ClassificationName[]> => {
    try {
        const params = new URLSearchParams({ fields: 'classification_title', limit: '10' })
        const { data } = await api.get<ArtsResponse<ClassificationName[]>>('artworks',{ params })
        return ArtworkMapper.mapClassifications(data)
    }
    catch(err) {
        console.log('erroor', err)
        throw new Error('Failed to fetch classifications')
    }
}




export const artworkService = {
    getAll: getArtworks,
    getDetail: getArtworkById,
    getClassifications
}