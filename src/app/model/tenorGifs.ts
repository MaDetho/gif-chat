export interface Nanomp4 {
    url: string;
    dims: number[];
    duration: number;
    preview: string;
    size: number;
}

export interface Nanowebm {
    url: string;
    dims: number[];
    preview: string;
    size: number;
}

export interface Tinygif {
    url: string;
    dims: number[];
    preview: string;
    size: number;
}

export interface Tinymp4 {
    url: string;
    dims: number[];
    duration: number;
    preview: string;
    size: number;
}

export interface Tinywebm {
    url: string;
    dims: number[];
    preview: string;
    size: number;
}

export interface Webm {
    url: string;
    dims: number[];
    preview: string;
    size: number;
}

export interface Gif {
    url: string;
    dims: number[];
    preview: string;
    size: number;
}

export interface Mp4 {
    url: string;
    dims: number[];
    duration: number;
    preview: string;
    size: number;
}

export interface Loopedmp4 {
    url: string;
    dims: number[];
    duration: number;
    preview: string;
    size: number;
}

export interface Mediumgif {
    url: string;
    dims: number[];
    preview: string;
    size: number;
}

export interface Nanogif {
    url: string;
    dims: number[];
    preview: string;
    size: number;
}

export interface Medium {
    nanomp4: Nanomp4;
    nanowebm: Nanowebm;
    tinygif: Tinygif;
    tinymp4: Tinymp4;
    tinywebm: Tinywebm;
    webm: Webm;
    gif: Gif;
    mp4: Mp4;
    loopedmp4: Loopedmp4;
    mediumgif: Mediumgif;
    nanogif: Nanogif;
}

export interface Result {
    tags: any[];
    url: string;
    media: Medium[];
    created: number;
    shares: number;
    itemurl: string;
    composite?: any;
    hasaudio: boolean;
    title: string;
    id: string;
    hascaption?: boolean;
}

export interface TenorGifs {
    weburl: string;
    results: Result[];
    next: string;
}
