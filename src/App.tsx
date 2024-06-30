import React from 'react';
import UseMemo from './ReactLearn/UseMemo/UseMemo';
import UseRef from './ReactLearn/UseRef/UseRef';

function App() {
  return (
    <div className='App'>
      <div className='flex flex-col gap-y-[30px]'>
        <UseMemo />
        <UseRef />
      </div>
    </div>
  );
}

export default App;
