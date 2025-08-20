import React, { useEffect, useState, useTransition, type ChangeEvent } from 'react';
import { Comments, TComment } from "./Comments";

type TCommentsBlockProps = {}

export const CommentsBlock: React.FC<TCommentsBlockProps> = ({}) => {
  const [isPending, startTransition] = useTransition()
  const [comments, setComments] = useState<TComment[] | undefined>(undefined);
  const [search, setSearch] = useState('');

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    startTransition(() => {
      setSearch(e.target.value); //todo - тут должно быть filterBySearch
    })
  }

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments').then(res => res.json())
      .then(comments => {
        setComments(comments);
      })
      .catch()
      .finally()
  }, [])
  return (
    <>
      <div>
        <input onChange={handleSearch}/>
        {isPending && <h1> Rendering... </h1>}
        <Comments entities={filterBySearch({ entities: comments, search })}/>
      </div>
    </>
  );
}

const filterBySearch = ({search, entities}: {entities?: Array<TComment>, search: string}) => {
  return entities?.filter(e => e.body.concat(e.name).includes(search));
}