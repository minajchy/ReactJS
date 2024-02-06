import "./App.css";
import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 30.12,
      date: new Date(2020, 7, 14),
      locationOfExpenditure: "Algapur",
    },
    {
      id: "e2",
      title: "New TV",
      amount: 18799.49,
      date: new Date(2021, 2, 12),
      locationOfExpenditure: "Hailakandi",
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 2294.67,
      date: new Date(2021, 2, 28),
      locationOfExpenditure: "Silchar",
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 15450,
      date: new Date(2021, 5, 12),
      locationOfExpenditure: "Algapur",
    },
    {
      id: "e5",
      title: "Mobile",
      amount: 25599,
      date: new Date(2021, 10, 18),
      locationOfExpenditure: "Hailakandi",
    },
  ];
  return (
    <div>
      <div><h2>Expense Item!</h2></div>
      {expenses.map((expence) => (
        <ExpenseItem
          key={expence.id}
          title={expence.title}
          date={expence.date}
          amount={expence.amount}
          locationOfExpenditure={expence.locationOfExpenditure}
        ></ExpenseItem>
      ))}
    </div>
  );
}

export default App;
