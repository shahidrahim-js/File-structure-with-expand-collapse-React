import { useState } from 'react';
import FileTreeNode from './FileTreeNode.jsx';
import { data } from './data.js';
import './App.css';

function App() {
  return (
    <>
      <div>
        <FileTreeNode node={data} />
      </div>
    </>
  );
}

export default App;
