const dataSet = [
  { id: 1, product: "Towel", quantity: "2" },
  { id: 2, product: "Toothbrush", quantity: "1" },
  { id: 3, product: "Bed-Sheet", quantity: "3" },
];
export default function App() {
  <div>
    <Title />
    <Form />
    <List />
    <Foot />
  </div>;
}

function Title() {
  <h1> Header</h1>;
}

function Form() {
  <h3>Yes you are in</h3>;
}

function List() {
  <div>
    {dataSet.map()} <Item />
  </div>;
}

function Item() {}

function Foot() {
  <footer>Bottom Line</footer>;
}
