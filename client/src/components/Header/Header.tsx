import Button from '../Button/Button';

type HeaderType = {
  leftButton?: React.ReactNode;
  rightButton?: React.ReactNode;
  leadingText?: string;
  subText?: string;
  header?: string;
};

const Header = ({
  leadingText,
  subText,
  header,
  leftButton,
  rightButton,
}: HeaderType) => {
  return (
    <>
      <div className="flex items-center justify-between">
        {leftButton && (
          <Button
            type="button"
            category="gray"
            className="border border-spacing-2 rounded-full w-[4.2rem] h-[4.2rem]"
          >
            {leftButton}
          </Button>
        )}
        {header && (
          <p className="text-[22px] flex-grow text-textColor"> {header}</p>
        )}
        {rightButton && (
          <Button
            type="button"
            category="gray"
            className=" border border-spacing-2 rounded-full w-[4.2rem] h-[4.2rem]"
          >
            {rightButton}
          </Button>
        )}
      </div>
      <>
        <h1 className="text-textColor text-[34px]">{leadingText}</h1>{' '}
        <h3 className="text-subTextColor text-[20px]">{subText} </h3>
      </>
    </>
  );
};
export default Header;
