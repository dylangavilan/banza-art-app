interface Artwork {
    title: string,
    id: number,
    poster: string,
    artist: string
}

interface ArtworkData {
    artworks: Artwork[],
    nextPage: number | null
}