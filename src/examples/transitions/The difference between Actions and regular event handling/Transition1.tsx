import React, {FC, useState, useTransition} from 'react';
import {updateQuantity} from "./api";
import Item from "./Item";
import Total from "./Total";

import './index.scss';


type TTransitionEx1Props = {}
export const Transition1: FC<TTransitionEx1Props> = ({}) => {
  const [quantity, setQuantity] = useState(1);
  const [isPending, startTransition] = useTransition();

  const updateQuantityAction = async (newQuantity: number) => {

//@ts-ignore
    startTransition(async () => {
      const savedQuantity = await updateQuantity(newQuantity);
      startTransition(() => {
        setQuantity(savedQuantity);
      });
    });
  };

  return (
    <div>
      <h1>Checkout</h1>
      <Item action={updateQuantityAction}/>
      <hr />
      <Total quantity={quantity} isPending={isPending} />
    </div>
  );
}