import { FC, useEffect, useState } from 'react';

interface CountLabelProps {
  count: number;
}

export const RenderPhaseUpdates: FC<CountLabelProps> = ({ count }) => {
  const [prevCount, setPrevCount] = useState<number>(count);
  const [trend, setTrend] = useState<'increasing' | 'decreasing' | null>(null);


  console.log('🔄 Начало рендера');

  if (prevCount !== count) {
    console.log('⚡ Обнаружено изменение пропса');
    setPrevCount(count);
    setTrend(count > prevCount ? 'increasing' : 'decreasing');
    console.log('⚡ Происходит сброс rerender из-за пропса и заного запускается уже с новым стейтом');
  }

  // useEffect(() => {
  //   setPrevCount(count);
  //   setTrend(count > prevCount ? 'increasing' : 'decreasing');
  // }, [count]);


  return (
    <>
      <h1>{count}</h1>
      <RenderLogger trend={trend}/>
    </>
  );
}

interface RenderLoggerProps {
  trend: string | null;
}

export const RenderLogger: FC<RenderLoggerProps> = ({ trend }) => {
debugger
  return <>
    {trend && <p>The count is {trend}</p>}
  </>
};

