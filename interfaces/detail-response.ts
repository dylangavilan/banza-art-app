export interface DetailResponse {
    config: Config;
    data:   ArtworkDetailData;
    info:   Info;
}

export interface Config {
    iiif_url:    string;
    website_url: string;
}

export interface ArtworkDetailData {
    artist_title:        string;
    category_titles:     string[];
    gallery_title:       string;
    id:                  number;
    image_id:            string;
    publication_history: string;
    short_description:   string;
    title:               string;
}

export interface Info {
    license_links: string[];
    license_text:  string;
    version:       string;
}
