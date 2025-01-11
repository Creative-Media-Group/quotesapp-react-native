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
        throw new Error("Network response was not ok");
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching data:", error.message);
      throw error;
    }
  };
  