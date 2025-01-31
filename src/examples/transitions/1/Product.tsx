import React from 'react';

type TProductProps = {
  onUpdateQuantity: (quantity: number) => Promise<void>;
}

export const Product: React.FC<TProductProps> = ({onUpdateQuantity}) => {
  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    await onUpdateQuantity(parseInt(e.target.value, 10));
  }
  return (
    <div className="item">
      <span>Eras Tour Tickets</span>
      <label htmlFor="name">Quantity: </label>
      <input
        type="number"
        onChange={handleChange}
        defaultValue={1}
        min={1}
      />
    </div>
  );
}

