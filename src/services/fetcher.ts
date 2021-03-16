const BASE_URL = 'https://web-interview-api-kjlbv8.herokuapp.com/jsonapi/v1/';

export const fetcher = (uri, init) => fetch(`${BASE_URL}${uri}`, init).then(res => {
    try {
        return res.json();
    } catch (e) {
        // Probably delete...
        return '';
    }
});
