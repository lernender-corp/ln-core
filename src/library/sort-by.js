import * as Library from './index';

function ascending(a, b) {
	return a - b;
}

function descending(a, b) {
	return b - a;
}

function nameAscending(a, b) {
	return a.name !== b.name ? a.name < b.name ? -1 : 1 : 0;
}

function nameDescending(a, b) {
	return a.name !== b.name ? a.name < b.name ? 1 : -1 : 0;
}

function idAscending(a, b) {
	return a.id !== b.id ? a.id < b.id ? -1 : 1 : 0;
}

function idDescending(a, b) {
	return a.id !== b.id ? a.id < b.id ? 1 : -1 : 0;
}

function emailAscending(a, b) {
	return a.email !== b.email ? a.email < b.email ? -1 : 1 : 0;
}

function emailDescending(a, b) {
	return a.email !== b.email ? a.email < b.email ? 1 : -1 : 0;
}

export default {
	ascending,
	descending,
  nameAscending,
  nameDescending,
  idAscending,
	idDescending,
	emailAscending,
  emailDescending,
};

