import React, { useEffect, useState } from 'react';

export const MultipleReturnBasics = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      // donefetchingData
      setIsLoading(false);
    }, 3000);
  }, []);
  if (isLoading) {
    return <h2>로딩 중 입니다...</h2>;
    setIsLoading(!isLoading);
  }
  return <div>multipleReturn</div>;
};
