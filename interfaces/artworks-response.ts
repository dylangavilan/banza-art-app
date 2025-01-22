export interface ArtsResponse<T>{
    config:     Config;
    data:       T;
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
    image_id?:            string;
    publication_history: string;
    short_description:   string;
    title:               string;
    classification_title: string;
    classification_titles: string[];
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
