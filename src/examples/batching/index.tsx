import React, { useEffect, useState } from 'react';

import {flushSync} from 'react-dom'

import { getTodosAsync } from "../../__mocks__/todos";

type TAsyncBatchingTestProps = {}

export const AsyncBatchingTest: React.FC<TAsyncBatchingTestProps> = ({}) => {
  const [texts, setTexts] = useState<string[]>([])
  const [ids, setIds] = useState<number[]>([])

  useEffect(() => {
    getTodosAsync()
      .then(data => {
        setTexts(data.map((d: any) => d.title));
        setIds(data.map((d: any) => d.id));
      })
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setTexts([]);
      setIds([]);
    }, 2000)
  }, []);

  /**
   * Если по какойто причине не нужно обьединять в одно слияние стейта - используй flushSync
   */
  // useEffect(() => {
  //   setTimeout(() => {
  //     flushSync(() => setTexts([]))
  //     flushSync(() => setIds([]))
  //   }, 2000)
  // }, []);

  console.log('render')
  return (
    <>
      <div></div>
    </>
  );
}

