import React from 'react';
import data from './data';
import FileExplorer from './components/TreeView';

function App() {
  return (
    <div>
      <h1>Folder Structure</h1>
      <FileExplorer data={data} />
    </div>
  );
}

export default App;
