import React, { useState, useTransition } from 'react';
import { Product } from "./Product";
import { getProductCots } from "./api";
import { Total } from "./Total";


type TTransitionsProps = {}

export const Transitions: React.FC<TTransitionsProps> = ({}) => {
  const [isPending, setIsPending] = useState(false);

  const [quantity, setQuantity] = useState(1);
  const [cost, setCost] = useState(quantity * 4);

  const onUpdateQuantity = async (newQuantity: number) => {
    setIsPending(true);
    const newCost = await getProductCots(newQuantity);
    setIsPending(false);
    setCost(newCost);
    setQuantity(newQuantity);
  };

  return (
    <div>
      <h1>Checkout</h1>
      <Product onUpdateQuantity={onUpdateQuantity}/>
      <hr/>
      <Total cost={cost} isPending={isPending}/>
    </div>
  );
}

