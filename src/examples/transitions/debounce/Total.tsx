import React from 'react';

type TTotalProps = {
  cost: number;
  isPending: boolean;
}

export const Total: React.FC<TTotalProps> = ({cost, isPending}) => {
  return (
    <>
      <div className="total">
        <span>Total:</span>
        <span>
        {isPending ? "🌀 Updating..." : `${intl.format(cost * 99)}`}
      </span>
      </div>
    </>
  );
}

const intl = new Intl.NumberFormat("ru-Ru", {
  style: "currency",
  currency: "RUB"
});