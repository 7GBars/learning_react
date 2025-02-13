import React, {ChangeEvent, FC, useState, useTransition} from 'react';

type TSearchingProps = {}
export const SearchWithTransition: FC<TSearchingProps> = ({}) => {
  const [text, setText] = useState('');
  const [searchResult, setSearchResult] = useState<Array<any>>([]);

  const [isPending, startTransition] = useTransition();

  const makeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setText(value);
    startTransition(() => {
      const searchValue = Array(40000).fill(`text__${value.at(-1)}`)
      setSearchResult(searchValue);
    })
  }

  return (
    <>
      <input type={'text'} onChange={makeSearch} />
      <p>{text}</p> {isPending ? <>Loading...</> : null}
      <ul style={{display: isPending ? 'none' : 'block'}}>
        {searchResult.map(t => <li>{t}</li>)}
      </ul>
    </>
  );
}