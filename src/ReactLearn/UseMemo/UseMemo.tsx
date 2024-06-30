import React, { useEffect, useMemo, useState } from 'react';

const UseMemo = () => {
  const [theme, setTheme] = useState<string>('light');
  const [number, setNumber] = useState<number>(0);

  const [valueChange, setValueChange] = useState<number>(0);

  const themeStyle = {
    backgroundColor: theme === 'light' ? 'white' : 'black',
    color: theme === 'light' ? 'black' : 'white',
  };

  const slowFunction = (num: number) => {
    for (let i = 0; i < 1000000000; i++) {}
    return num * 2;
  };

  //     useEffect(()=>{
  // setValueChange(slowFunction(number))
  //     },[number])

  const doubleNumber = useMemo(() => slowFunction(number), [number]);

  return (
    <div>
      <input
        className='bg-gray-300 text-white'
        type='number'
        value={number}
        onChange={(e) => setNumber(Number(e.target.value))}
      />
      <button
        className='bg-gray-300 text-white'
        onClick={() =>
          setTheme((curr) => (curr === 'light' ? 'dark' : 'light'))
        }
      >
        Toggle me
      </button>
      <div style={themeStyle}>{doubleNumber}</div>
    </div>
  );
};

export default UseMemo;
