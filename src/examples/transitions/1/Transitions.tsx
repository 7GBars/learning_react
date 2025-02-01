import React, {useEffect, useState, useTransition} from 'react';
import { Product } from "./Product";
import { getProductCots } from "./api";
import { Total } from "./Total";
import {useDebounce} from "../../../hooks";


type TTransitionsProps = {}

export const Transitions: React.FC<TTransitionsProps> = ({}) => {
  const [isPending, setIsPending] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [cost, setCost] = useState(quantity * 4);

  const debouncedSearchTerm = useDebounce(quantity, 500);

  useEffect(() => {
      if (debouncedSearchTerm) {
        setIsPending(true);
        getProductCots(debouncedSearchTerm).then(results => {
          setIsPending(false);
          setCost(results);
        });
      } else {
        setCost(0);
      }
    }, [debouncedSearchTerm]);

  return (
    <div>
      <h1>Checkout</h1>
      <Product onUpdateQuantity={setQuantity} isPending={isPending}/>
      <hr/>
      <Total cost={cost} isPending={isPending}/>
    </div>
  );
}

