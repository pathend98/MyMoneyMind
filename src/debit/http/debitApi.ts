export const getDebits = async () => {
  const query = {
    startDate: "2024-01-05",
    endDate: "2024-01-15",
  };

  const response = await fetch(
    "http://localhost:8080/money-service/debit/query",
    {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(query),
    },
  );

  console.log(response.json());
};
