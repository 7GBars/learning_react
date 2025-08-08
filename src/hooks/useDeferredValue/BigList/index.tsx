import React, {useTransition, type ChangeEvent, useEffect} from 'react';
import {BigList} from "@/hooks/useDeferredValue/BigList/List";

type TDeferredValueBigListProps = {}

export const DeferredValueBigList: React.FC<TDeferredValueBigListProps> = ({}) => {
  const [inputValue, setInputValue] = React.useState('');

  return (
    <>
      <input typeof={'text'} value={inputValue} onChange={e => setInputValue(e.target.value)}/>
      <BigList inputValue={inputValue} />
    </>
  );
}
