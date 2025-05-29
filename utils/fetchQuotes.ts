// utils/fetchQuotes.ts
export default async function fetchQuotes(API_KEY: string) {
    const response = await fetch('https://api.api-ninjas.com/v1/quotes', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'X-Api-Key': API_KEY,
        },
    });

    if (!response.ok) {
        throw new Error("Failed to fetch data");
    }

    return response.json();
}