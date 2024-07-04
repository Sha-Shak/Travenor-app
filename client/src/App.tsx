import Bottombar from './components/Bottombar/Bottombar';
import Signin from './pages/Signin';

function App() {
  return (
    <>
      <div className="bg-white-600 h-90vh p-4">
        {/* <h1 className="text-red-500">Welcome!</h1>
        <CustomInput
          inputType="text"
          placeholder="Email here..."
          onChangeAction={handleChange}
          className="border-b hover:border-dotted"
        /> */}
        <Signin />
      </div>
      <Bottombar />
    </>
  );
}

export default App;
