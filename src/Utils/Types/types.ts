export interface Photo {
    id: string;
    author: string;
    height: number;
    width: number;
    download_url: string;
    url: string;
}

export const base_photo: Photo = {
    id: '',
    author: '',
    height: 0,
    width: 0,
    download_url: '',
    url: ''
}