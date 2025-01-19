export interface ArtsResponse {
    config:     Config;
    data:       Data[];
    info:       Info;
    pagination: Pagination;
}
export interface Config {
    iiif_url:    string;
    website_url: string;
}

export interface Data {
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

export interface Pagination {
    current_page: number;
    limit:        number;
    next_url:     string;
    offset:       number;
    total:        number;
    total_pages:  number;
}