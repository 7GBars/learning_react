import React from 'react';

type TCommentsProps = {
  entities: Array<TComment> | undefined;
}

export const Comments: React.FC<TCommentsProps> = ({entities = []}) => {
  return (
    <ul>
      {
        entities.map(comment => {
          return <li key={comment.id}>
            <h3>{comment.name}</h3>
            <p>{comment.body}</p>
          </li>
        })
      }
    </ul>
  );
}

export type TComment = { id: number; name: string; body: string };