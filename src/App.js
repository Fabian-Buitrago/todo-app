import { Title } from "./components/Title";

function App() {
  return (
    <div className="bg-gray-900 min-h-screen h-full text-gray-100 flex items-center py-20 px-5">
      <div className="container flex flex-col max-w-xl">
        <Title />
      </div>
    </div>
  );
}

export default App;
