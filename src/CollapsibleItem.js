import React, { useState } from 'react';

const CollapsibleItem = ({ recipe }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <h3 onClick={handleToggle} style={{ cursor: 'pointer' }}>
        {recipe.recipe_name}
      </h3>
      {isOpen && (
        <table>
          <tbody>
            {Object.entries(recipe)
              .filter(([key]) => key !== 'recipe_name')
              .map(([key, value]) => (
                <tr key={key}>
                  <td>{key}</td>
                  <td>{value}</td>
                </tr>
              ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default CollapsibleItem;
