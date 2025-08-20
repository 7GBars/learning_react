import React, { useDeferredValue } from 'react';

type TListProps = {entities: string[]}

export const List: React.FC<TListProps> = ({entities}) => {
  const deferredItems = useDeferredValue(entities);
  const customIsPending = entities !== deferredItems;
  return (
    <>
      {
        customIsPending
          ? <p>Loadnig..</p>
          : <ul>
            {deferredItems.map(i => {
              return <li>{i}</li>
            })}
          </ul>
      }

    </>
  );
}

