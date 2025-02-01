import React, {Dispatch, SetStateAction} from 'react';

type TProductProps = {
  onUpdateQuantity: Dispatch<SetStateAction<number>>
}

export const Product: React.FC<TProductProps> = ({onUpdateQuantity}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
     onUpdateQuantity(parseInt(e.target.value, 10));
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

