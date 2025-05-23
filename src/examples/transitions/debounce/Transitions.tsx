import React, {useEffect, useState, useTransition} from 'react';

import {Product} from "./Product";
import {getProductCots} from "./api";
import {Total} from "./Total";
import {useDebounce} from "../../../hooks";


type TDebounceProps = {}

export const Debounce: React.FC<TDebounceProps> = ({}) => {
  const [isPending, setIsPending] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [cost, setCost] = useState(quantity * 4);
  const debounced = useDebounce(quantity, 500);

  useEffect(() => {

    if (debounced) {
      setIsPending(true);
      getProductCots(debounced)
        .then((newCost) => {
          setCost(newCost);
          setIsPending(false)
        })
    }
  }, [debounced]);

  return (
    <div>
      <h1>Checkout</h1>
      <Product onUpdateQuantity={setQuantity}/>
      <hr/>
      <Total cost={cost} isPending={isPending}/>
    </div>
  );
}

