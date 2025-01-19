import { ArtsResponse, Data as ArtworkResponseData } from "@/interfaces/artworks-response";

class ArtworkMapper {
    static mapImageToUrl(image_id: string, size: number): string {
        return `https://www.artic.edu/iiif/2/${image_id}/full/${size},/0/default.jpg`
    }
    static mapArtwork(artwork: ArtworkResponseData, size: number): Artwork {
       return {
            title: artwork.title,
            id: artwork.id,
            artist: artwork.artist_title,
            poster: ArtworkMapper.mapImageToUrl(artwork.image_id, size),
            gallery_title: artwork.gallery_title,
            publication_history: artwork.publication_history,
            short_description: artwork.short_description,
            category_titles: artwork.category_titles,
            classification_title: artwork.classification_title
       }
    }
    static mapResponseToArtworkData(response: ArtsResponse<ArtworkResponseData[]>): ArtworkData {
        return {
            artworks: response.data.map((artwork: ArtworkResponseData) => ( ArtworkMapper.mapArtwork(artwork, 200) )),
            nextPage: response.pagination.next_url ? response.pagination.current_page + 1 : null,
        }
    }

    static mapClassifications(response: ArtsResponse<ClassificationName[]>): ClassificationName[] {
        const { data } = response
        const uniqueArray = Array.from(new Set(data.map(o => JSON.stringify(o)))).map(str => JSON.parse(str));
        return uniqueArray
    }
}
export { ArtworkMapper }