import { IoIosArrowBack } from 'react-icons/io';
import Button from '../components/Button/Button';
import CustomInput from '../components/CustomInput/CustomInput';
import Header from '../components/Header/Header';
import { useState } from 'react';

const Signin = () => {
  const [isDisabled, setIsDisabled] = useState<boolean>(true);
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // setInputValue(e.target.value);
    console.log(e.target.value);
    setIsDisabled(false);
  };
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  return (
    <div className="text-center">
      <Header
        leadingText="Sign in now"
        subText="Please fill the details and create account"
        leftButton={
          <IoIosArrowBack style={{ color: 'black', fontSize: '2rem' }} />
        }
        // rightButton={
        //   <IoIosArrowBack style={{ color: 'black', fontSize: '2rem' }} />
        // }
        header="Login"
      />

      <CustomInput
        type="email"
        className="border border-spacing-2 w-full"
        placeholder="Type your email here.."
        onChangeAction={handleEmailChange}
      />
      <CustomInput
        type="password"
        className="border border-spacing-2 w-full"
        placeholder="Type your password here..."
        onChangeAction={handlePasswordChange}
      />
      <Button
        type="submit"
        className="bg-blue-300 primary-button"
        category="primary"
        disabled={isDisabled}
      >
        Sign in
      </Button>
    </div>
  );
};

export default Signin;
