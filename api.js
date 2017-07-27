// mock api
export const rootUrl = 'http://192.168.21.101:3004';
const FETCH_ALL_BOOK_ENDPOINT = `${rootUrl}/books`;

export const fetchBooks = () => {
	return fetch(
		FETCH_ALL_BOOK_ENDPOINT
	).then((response) => response.json());
};
