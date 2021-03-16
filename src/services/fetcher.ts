export const fetcher = (info, init) => fetch(info, init).then(res => res.json());
