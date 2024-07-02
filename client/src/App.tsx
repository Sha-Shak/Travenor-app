import Bottombar from './components/Bottombar';
import CustomInput from './components/Input/Index';

function App() {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // setInputValue(e.target.value);
    console.log(e.target.value);
  };
  return (
    <>
      <div className="bg-pink-600 h-[93vh] p-4">
        <h1 className="text-red-500">Welcome!</h1>
        <CustomInput
          inputType="text"
          placeholder="Email here..."
          onChangeAction={handleChange}
          className="border-b hover:border-dotted"
        />
      </div>
      <Bottombar />
    </>
  );
}

export default App;
