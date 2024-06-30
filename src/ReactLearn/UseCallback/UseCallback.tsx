import React, { useCallback, useMemo } from 'react';

import List from './List';

const UseCallback = () => {
  const [number, setNumber] = React.useState<any>(0);
  const [theme, setTheme] = React.useState('light');
  const themeStyle = {
    backgroundColor: theme === 'light' ? 'white' : 'black',
    color: theme === 'light' ? 'black' : 'white',
  };
  const getItems = useCallback(() => {
    return [number + 1, number + 2, number + 3];
  }, [number]);

  return (
    <div style={themeStyle}>
      <input
        className='bg-gray-300 text-black p-2 rounded w-full max-w-md mb-4'
        type='number'
        value={number}
        onChange={(e) => setNumber(Number(e.target.value))}
        placeholder='Enter a number'
      />
      <button
        className='bg-blue-500 text-white p-2 rounded hover:bg-blue-700 transition mb-4'
        onClick={() =>
          setTheme((current) => (current === 'light' ? 'dark' : 'light'))
        }
      >
        Change Theme
      </button>
      <List getItems={getItems} />
    </div>
  );
};

export default UseCallback;
