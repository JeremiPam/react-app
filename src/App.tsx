import "bootstrap/dist/css/bootstrap.css";
import ListGroup from "./components/ListGroup";

function App() {
  let cities = ["test", "test", "test"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <h1>
      <ListGroup
        items={cities}
        header="header"
        onSelectItem={handleSelectItem}
      />
    </h1>
  );
}

export default App;
