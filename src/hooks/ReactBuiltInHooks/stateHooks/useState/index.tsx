import React, { useState } from 'react';

type TUseStateSimpleProps = {}

export const UseStateSimple: React.FC<TUseStateSimpleProps> = ({}) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);


  return (
    <>
      <label htmlFor={'input_name'}>введите имя</label>
      <input id={'input_name'} type={'text'} onChange={(e) => {
        setName(e.target.value);
      }}/>

      <label htmlFor={'input_age'}>введите возраст</label>
      <input

        id={'input_age'}
        type={'number'}
        value={age}
        onChange={(e) => {
        setAge(p => {
          const numberedValue = +e.target.value;
          const newValue = numberedValue > 0 ? numberedValue : p;
          return  newValue;
        });

      }}/>
    </>
  );
}


export * from './AvoidingRecreatingInitialState'
