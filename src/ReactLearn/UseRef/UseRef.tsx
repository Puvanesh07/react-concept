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
    <div className='flex flex-col items-center p-4 gap-4 bg-gray-100'>
      <input
        className='bg-gray-300 text-black p-2 rounded w-full max-w-md'
        type='text'
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder='Enter text without ref'
      />
      <input
        className='bg-gray-300 text-black p-2 rounded w-full max-w-md'
        type='text'
        ref={inputRef}
        placeholder='Enter text with ref'
      />
      <h1 className='text-xl font-semibold'>My without ref name is {input}</h1>
      <h1 className='text-xl font-semibold'>
        My with ref name is {inputRef.current}
      </h1>
      <h1 className='text-xl font-semibold'>
        My with refffff name is {inputRef.current?.value}
      </h1>
      <div className='flex gap-4'>
        <button
          className='bg-blue-500 text-white p-2 rounded hover:bg-blue-700 transition'
          onClick={display}
        >
          Display
        </button>
        <button
          className='bg-blue-500 text-white p-2 rounded hover:bg-blue-700 transition'
          onClick={displayRefValue}
        >
          Display Ref Value
        </button>
      </div>
    </div>
  );
};

export default UseRef;
