import React, { useEffect, ComponentType } from 'react';


const withLogger = <P extends object>(
  WrappedComponent: ComponentType<P>
): ComponentType<P> => {

  const ComponentWithLogger: React.FC<P> = (props) => {
    useEffect(() => {
      console.log('Component mounted');
      return () => {
        console.log('Component will unmount');
      };
    }, []);

    return <WrappedComponent {...props} />;
  };

  return ComponentWithLogger;
};

export default withLogger;
