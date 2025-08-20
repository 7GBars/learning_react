import React, {useDeferredValue, useEffect, useMemo} from 'react';

type TBigListProps = { inputValue: string }

export const BigText: React.FC<TBigListProps> = ({inputValue}) => {
  const deferredInputValue = useDeferredValue(inputValue);
  const list = useMemo(() => {
    const LIST_SIZE = Math.floor(Math.random() * 1001) + 20000;
    const l = [];
    for (let i = 0; i < LIST_SIZE; i++ ) {
      l.push(deferredInputValue);
    }
    return <div>{l}</div>;
  }, [deferredInputValue]);

  useEffect(() => {
    console.log('inputValue', inputValue)
    console.log('deferredInputValue', deferredInputValue)
  }, [inputValue, deferredInputValue]);

  return (
    <>{list}</>
  );
}
