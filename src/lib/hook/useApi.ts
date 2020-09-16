import React from 'react';

interface Ibody {
  [key: string]: string;
}

export const useApi = (request: any) => {
  const [data, setData] = React.useState();

  const callback = async (body: Ibody) => {
    const result = request(body);
    setData(result);
  };

  return data;
};
