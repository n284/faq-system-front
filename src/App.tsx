import './App.css';
import { FilterableProcutTable } from './features/components/filterableProductTable/filterableProductTable';

function App() {
  const PRODUCTS = [
    { category: "Fruits", price: "$1", isStocked: true, name: "Apple" },
    { category: "Fruits", price: "$1", isStocked: true, name: "Dragonfruit" },
    { category: "Fruits", price: "$2", isStocked: false, name: "Passionfruit" },
    { category: "Vegetables", price: "$2", isStocked: true, name: "Spinach" },
    { category: "Vegetables", price: "$4", isStocked: false, name: "Pumpkin" },
    { category: "Vegetables", price: "$1", isStocked: true, name: "Peas" }
  ];

  return (
    <FilterableProcutTable products={PRODUCTS} />
  );
}

export default App;
