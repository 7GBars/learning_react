import React, {useTransition, type ChangeEvent, useEffect} from 'react';

type TTransitionWebDevSimplifiedProps = {}

export const TransitionWebDevSimplified: React.FC<TTransitionWebDevSimplifiedProps> = ({}) => {
  const [inputValue, setInputValue] = React.useState('');
  const [list, setList] = React.useState<string[]>([]);

  const [isPending, startTransition] = useTransition();



  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    startTransition(() => {
      const LIST_SIZE = Math.floor(Math.random() * 1001) + 20000;
      const list = [];
      for (let i = 0; i < LIST_SIZE; i++ ) {
        list.push(inputValue);
      }
      setList(list);
    })
  };



  return (
    <>
      <input typeof={'text'} value={inputValue} onChange={onChangeHandler}/>
      {
        isPending
          ? <span className="loading">Loading...</span>
          : list.map((item, i) => (
          <div key={i}>{item}</div>
        ))
      }
    </>
  );
}
