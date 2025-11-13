import React, { useRef } from 'react';

type TSimpleUseRefProps = {};

export const SimpleUseRef: React.FC<TSimpleUseRefProps> = ({}) => {
    const simpleRef = useRef(0);
    const objectRef = useRef({name: 'ge'});
    const domRef = useRef(null);
    return (
        <>
           <div ref={domRef}>test</div>
    </>
);
}
