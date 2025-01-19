interface Artwork {
    title: string,
    id: number,
    poster: string,
    artist: string,
    gallery_title?: string,
    publication_history?: string,
    short_description?: string,
    category_titles?: string[],
    classification_title: string,
}

interface ArtworkData {
    artworks: Artwork[],
    nextPage: number | null
}

type ClassificationName = Pick<Artwork, 'classification_title'>
