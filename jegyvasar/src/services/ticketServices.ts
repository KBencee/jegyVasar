export async function getTickets() {
    const d = new Date()
    try {
        const res = await fetch(`/data.json?t=${d.toISOString()}`)
        if(!res.ok) {
            console.error("hiba a json file beolvasásakor");
            return []
        }
        return await res.json()
    } catch (error) {
        console.error("halozati hiba");
        return []
    }
}