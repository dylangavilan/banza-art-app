import { NOT_FOUND_IMAGE } from "@/constants";
import { ArtsResponse, Data as ArtworkResponseData } from "@/interfaces/artworks-response";

class ArtworkMapper {
    static mapImageToUrl(image_id: string | null, width?: string, heigth?: string): string {
        if(!image_id) return NOT_FOUND_IMAGE
        const size = heigth ? `${width},${heigth}` : width
        return `https://www.artic.edu/iiif/2/${image_id}/full/${size}/0/default.jpg`
    }
    static mapArtwork(artwork: ArtworkResponseData, width: string, height?: string): Artwork {
       return {
            title: artwork.title,
            id: artwork.id,
            artist: artwork.artist_title,
            poster: ArtworkMapper.mapImageToUrl(artwork.image_id ?? null, width, height) ,
            gallery_title: artwork.gallery_title,
            publication_history: artwork.publication_history,
            short_description: artwork.short_description,
            category_titles: artwork.category_titles,
            classification_title: artwork.classification_title,
            classification_titles: artwork.classification_titles,
       }
    }
    static mapResponseToArtworkData(response: ArtsResponse<ArtworkResponseData[]>): ArtworkData {
        return {
            artworks: response.data.map((artwork: ArtworkResponseData) => ( ArtworkMapper.mapArtwork(artwork, "170", "200") )), // el size es para que las imagenes no sean tan pesadas y queden bien en la pantalla
            nextPage: response.pagination.next_url ? response.pagination.current_page + 1 : null,
        }
    }

    static mapClassifications(response: ArtsResponse<ClassificationName[]>): ClassificationName[] {
        const { data } = response;
    
        // Filtrar los valores undefined
        const filteredData = data.filter(item => item !== undefined);
        // Crear un conjunto único a partir de los objetos serializados
        const uniqueSerialized = Array.from(new Set(filteredData.map(item => JSON.stringify(item))));
        // Deserializar los objetos únicos
        const uniqueClassifications = uniqueSerialized.map(serialized => JSON.parse(serialized));
    
        return uniqueClassifications;
    }
}
export { ArtworkMapper }