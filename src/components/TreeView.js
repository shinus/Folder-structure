import React, { useState } from 'react';

const FileExplorer = ({ data }) => {
  const [expandedFolders, setExpandedFolders] = useState([]);

  const toggleFolder = (path) => {
    if (expandedFolders.includes(path)) {
      setExpandedFolders(expandedFolders.filter((folder) => folder !== path));
    } else {
      setExpandedFolders([...expandedFolders, path]);
    }
  };

  const renderNode = (node, path) => {
    if (typeof node === 'object') {
      return (
        <>
          {Object.keys(node).map((key) => {
            const newPath = `${path}-${key}`;
            const isExpanded = expandedFolders.includes(newPath);

            return (
              <div key={newPath}>
                <div onClick={() => toggleFolder(newPath)} style={{ cursor: 'pointer' }}>
                  {isExpanded ? '📂 ' : '📁 '}
                  {key}
                </div>
                {isExpanded && (
                  <div style={{ marginLeft: '20px' }}>{renderNode(node[key], newPath)}</div>
                )}
              </div>
            );
          })}
        </>
      );
    } else if (Array.isArray(node)) {
      return (
        <ul>
          {node.map((item, index) => (
            <li key={`${path}-${index}`}>{renderNode(item, `${path}-${index}`)}</li>
          ))}
        </ul>
      );
    } else {
      return <div key={`${path}-${node}`}>{'📄 ' + node}</div>;
    }
  };

  return <div>{renderNode({ root: data }, 'root')}</div>;
};

export default FileExplorer;
