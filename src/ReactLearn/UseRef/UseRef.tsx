import React, { useEffect, useRef } from 'react';

const UseRef = () => {
  const [input, setInput] = React.useState('');
  const inputRef = useRef<any>();

  const display = () => {
    console.log(inputRef.current);
  };
  const displayRefValue = () => {
    console.log(inputRef.current.value);
  };
  console.log(input);

  useEffect(() => {
    inputRef.current = input;
  }, [input]);

  return (
    <div>
      <input
        className='bg-gray-300 text-white'
        type='text'
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <input className='bg-gray-300 text-white' type='text' ref={inputRef} />
      <h1>My without ref name is{input}</h1>
      <h1>My with ref name is{inputRef.current}</h1>
      <h1>My with refffff name is{inputRef.current?.value}</h1>
      <button onClick={display}>Display</button>
      <button onClick={displayRefValue}>Display Ref Value</button>
    </div>
  );
};

export default UseRef;
