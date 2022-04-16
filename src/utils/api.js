export default async function apiFetch(url, options = null) {
    try {
        return await fetch(url, options)
    }
    catch (e) {
        console.log(e)
        return {
            ok: false
        }
    }
}