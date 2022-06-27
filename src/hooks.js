/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
    //console.log(event.url)
    const response = await resolve(event, {
      ssr: !event.url.pathname.startsWith('/'),
    })
   
    return response;
}