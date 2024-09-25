import { useState } from 'react';

function FileTreeNode({ node, ksyIndex }) {
  const [toggle, setToggle] = useState(false);

  function handleToggle() {
    setToggle(!toggle);
  }

  return (
    <div style={{ marginLeft: '20px' }}>
      <span onClick={handleToggle}>
        {node.isFolder ? '📁' : '📄'} {node.name} {ksyIndex}
      </span>
      {toggle && node.isFolder && node.children && (
        <div>
          {node.children.map((child, index) => (
            <FileTreeNode key={index} node={child} ksyIndex={index} />
          ))}
        </div>
      )}
    </div>
  );
}
export default FileTreeNode;
