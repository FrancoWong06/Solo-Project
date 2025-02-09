const incomesExpensesUrl = "http://localhost:8000/incomesexpenses"

export default async function fetchIncomesExpenses() {
  try {
    const response = await fetch(incomesExpensesUrl, {
      method: "GET",
      credentials: "include",
    });
    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.status} - ${response.statusText}`);
    }
    const user = await response.json();
    console.log(user)
    return {
      incomes: user.user.incomes,
      expenses: user.user.expenses,
      id: user.user._id
    };
  } catch (error) {
    console.error("Error fetching incomes and expenses:", error);
    throw error;
  }
}
