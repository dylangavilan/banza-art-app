import { ArtResponse, Datum } from "@/interfaces/art-response";

class ArtworkMapper {
    static mapArtwork(artwork: Datum): Artwork {
       return {
        title: artwork.title,
        id: artwork.id,
        artist: artwork.artist_title,
        poster: `https://www.artic.edu/iiif/2/${artwork.image_id}/full/100,/0/default.jpg`

       }
    }
    static mapResponseToArtworkData(response: ArtResponse): ArtworkData {
        return {
            artworks: response.data.map(this.mapArtwork),
            nextPage: response.pagination.next_url ? response.pagination.current_page + 1 : null,
        }
    }
}
export { ArtworkMapper }