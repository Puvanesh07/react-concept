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

  const doubleNumber = useMemo(() => slowFunction(number), [number]);

  return (
    <div className='flex flex-col gap-4 p-4'>
      <input
        className='bg-gray-300 text-white p-2 rounded'
        type='number'
        value={number}
        onChange={(e) => setNumber(Number(e.target.value))}
      />
      <button
        className='bg-gray-300 text-white p-2 rounded'
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
