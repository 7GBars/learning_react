import React, {forwardRef, useEffect, useId, useImperativeHandle, useRef} from 'react';

type TUseImperativeHandleProps = {ref: any};

interface ComponentHandle {
    focus: () => void;
    scrollIntoView: () => void;
}

export const UseImperativeHandle: React.FC<TUseImperativeHandleProps> = ({ ref }) => {
    const [count, setCount] = React.useState(0);

    useImperativeHandle(ref, () => ({
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
})
