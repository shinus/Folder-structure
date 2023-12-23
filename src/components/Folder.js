import React, { useState } from 'react';

const Folder = ({ name, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div onClick={handleToggle}>{isOpen ? '📂 ' : '📁 '}{name}</div>
      {isOpen && <div style={{ marginLeft: '20px' }}>{children}</div>}
    </div>
  );
};

export default Folder;
