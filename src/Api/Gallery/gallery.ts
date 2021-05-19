import { request } from 'Api/axios';

import { Photo } from 'Utils/Types/types';

const Gallery = {
    getGallery: () => request.get<Photo[]>('v2/list?limit=10')
}

export default Gallery;