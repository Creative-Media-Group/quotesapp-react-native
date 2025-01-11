// fetchQuotes.js

export const fetchQuotes = async (apiKey) => {
    try {
        const response = await fetch(`https://api.api-ninjas.com/v1/quotes`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'X-Api-Key': apiKey,
            },
        });

        if (!response.ok) {
            throw new Error("Failed to fetch data");
        }

        const json = await response.json(); // Die API-Antwort wird geparsed
        return json; // Rückgabe der JSON-Daten
    } catch (error) {
        console.error("Error fetching data:", error.message);
        throw error; // Fehler weitergeben, um sie in der aufrufenden Funktion zu behandeln
    }
};
