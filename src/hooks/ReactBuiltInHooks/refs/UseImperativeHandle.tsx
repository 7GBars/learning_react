import React, {forwardRef, useEffect, useId, useImperativeHandle, useRef} from 'react';

type TUseImperativeHandleProps = {refAsProps: any};

interface ComponentHandle {
    focus: () => void;
    scrollIntoView: () => void;
}

export const UseImperativeHandle: React.FC<TUseImperativeHandleProps> = ({ refAsProps }) => {
    const [count, setCount] = React.useState(0);

    useImperativeHandle(refAsProps, () => ({
        focus: () => {
            console.log('focus called');
        },
        scrollIntoView: () => {
            console.log('scrollIntoView called');
        },
    } satisfies ComponentHandle), []);

    return (
        <>
            <br/>
            <p>UseImperativeHandle expample compoents</p>
        </>
    );
};


type TProps = { name: string};
type TRef = { componentID: string};

export const ForwardRefWrapped = forwardRef<TRef,TProps>((props, ref) => {
    const id = useId();

    useImperativeHandle(ref, () => {
        return {componentID: id}
    }, [id]);

    return <>ForwardRefExample</>
});


export const UseImperativeHandleWithDeps = forwardRef<{count: number},TProps>((props, ref) => {
    const [count, setCount] = React.useState(0);

    useImperativeHandle(ref, () => {
        return {count}
    }, [count])

    return <><input type={'number'} onChange={(e) => setCount(+e.target.value)} /> </>
})
