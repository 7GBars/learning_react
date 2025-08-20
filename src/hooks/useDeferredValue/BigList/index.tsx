import React, { useState } from 'react';
import { List } from "@/hooks/useDeferredValue/BigList/List";

type TBigListProps = {};

export const DeferredValueBigList: React.FC<TBigListProps> = ({}) => {
  const [text, setText] = useState('');
  const [items, setItems] = useState<any>([]);

  const onChangeHandler = (e: any) => {
    setText(e.target.value);
    setItems(
      Array(ARR_SIZE).fill(1).map(i => e.target.value)
    )

  };


  return (
    <>
      <input value={text} onChange={onChangeHandler}/>
      <List entities={items} />
    </>
  );
}

const ARR_SIZE = 15000;