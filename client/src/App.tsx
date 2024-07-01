import CustomInput from './components/Input/Index';

function App() {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // setInputValue(e.target.value);
    console.log(e.target.value);
  };
  return (
    <>
      <h1 className="text-red-500">Welcome!</h1>
      <CustomInput
        inputType="text"
        placeholder="Email here..."
        onChangeAction={handleChange}
      />
    </>
  );
}

export default App;
