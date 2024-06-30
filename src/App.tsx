import React from 'react';
import UseCallback from './ReactLearn/UseCallback/UseCallback';
import UseMemo from './ReactLearn/UseMemo/UseMemo';
import UseRef from './ReactLearn/UseRef/UseRef';

function App() {
  return (
    <div className='App'>
      <div className='flex flex-col gap-y-[30px]'>
        <UseRef />
        <UseMemo />
        <UseCallback />
      </div>
    </div>
  );
}

export default App;
