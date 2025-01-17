import { ArtResponse } from "@/interfaces/art-response"
import { api } from "./axios-config"
import { ArtworkMapper } from "@/mappers/artwork.mapper";

const getArtworks = async (page: string,  fields: string[]): Promise<ArtworkData> => {
    try {
        let params = new URLSearchParams({ limit: '12'})
        params.append('page', page.toString());

        if(fields.length) {
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

const getArtworkById = async (id: string): Promise<Artwork> => { //rebuild
    const fields = ['gallery_title','publication_history', 'short_description','category_titles', 'id', 'title', 'image_id', 'artist_title']

    let params = new URLSearchParams()
    params.append('fields', fields.join(','))

    const  { data } = await api.get<any>(`artworks/${id}`, { params })
    return data.data
        
}


export const artworkService = {
    getAll: getArtworks,
    getDetail: getArtworkById
}