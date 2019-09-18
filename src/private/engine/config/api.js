import { constants } from './constants';

export const api = {
	getPosts: () => fetch(`${constants.apiUrl}posts`),
	addPost: data => fetch(`${constants.apiUrl}posts`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
	}),
	deletePost: id => fetch(`${constants.apiUrl}posts/${id}`, {method: 'delete'}),
	getPost: id => fetch(`${constants.apiUrl}posts/${id}?_embed=comments`),
  addComment: data => fetch(`${constants.apiUrl}comments`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }),
	updatePost: (id, data) => fetch(`${constants.apiUrl}posts/${id}`, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
	})
};