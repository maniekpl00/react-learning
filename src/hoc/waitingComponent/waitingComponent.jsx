import React, { Suspense } from 'react';

const waitingComponent = WrappedComponent => {
  return props => {
    return (
      <Suspense fallback={null}>
        <WrappedComponent {...props} />
      </Suspense>
    );
  };
};

export default waitingComponent;
