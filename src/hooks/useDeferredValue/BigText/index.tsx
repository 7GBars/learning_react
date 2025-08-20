import React, {useTransition, type ChangeEvent, useEffect} from 'react';
import {BigText} from "@/hooks/useDeferredValue/BigText/Text";

type TDeferredValueBigListProps = {}

export const DeferredValueBigText: React.FC<TDeferredValueBigListProps> = ({}) => {
  const [inputValue, setInputValue] = React.useState('');

  return (
    <>
      <input typeof={'text'} value={inputValue} onChange={e => setInputValue(e.target.value)}/>
      <BigText inputValue={inputValue} />
    </>
  );
}
