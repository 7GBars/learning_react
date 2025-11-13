import React, {useEffect, useRef} from 'react';

type TSimpleUseRefProps = {};

const objectLiteralOutComponent = {name: 'ge'};

export const SimpleUseRef: React.FC<TSimpleUseRefProps> = ({}) => {
    const [count, setCount] = React.useState(0);

    const objectLiteralInComponent = {name: 'ge'};

    const simpleRef = useRef(0);
    const objectRef = useRef(objectLiteralInComponent);
    const objectRef2 = useRef(objectLiteralOutComponent);
    const domRef = useRef(null);


    useEffect(() => {
        console.log('simpleRef', simpleRef);
        console.log('objectRef', objectRef.current === objectLiteralInComponent);
        console.log('objectRef2', objectRef2.current === objectLiteralOutComponent);
        console.log('domRef', domRef);
    }, [count]);
    return (
        <>
            <br/>
            <input type={'number'} onChange={(e) => setCount(+e.target.value)} value={count}/>
           <div ref={domRef}>test</div>
    </>
);
}
