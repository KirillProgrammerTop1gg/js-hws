import axios from 'axios';

export const getImgs = async (query, page) => {
    try {
        const response = await axios.get(`https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${query}&page=${page}&per_page=12&key=44851747-335961d91f154475be80ef32b`);
        return response;
    }
    catch (error) {
        throw new Error(`Error get imgs ${error}`);
    }
}