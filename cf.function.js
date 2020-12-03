// Assuming you have a KV under the name "SHORT_ID":

addEventListener('fetch', (event) => {
	event.respondWith(redirect(event.request));
});

const redirect = async (request) => {
	const url = new URL(request.url);

	if (request.method === 'GET') {
		const id = url.pathname.substr(1).match('^[a-zA-Z0-9_-]+$');
		if (!id) return fetch(request);

		const terminus = await SHORT_ID.get(id);
		if (!terminus) return new Response(`Terminus with ID of [${id}] not found.`, { status: 404 });

		return Response.redirect(terminus, 301);
	}
};
