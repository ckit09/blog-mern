import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const DataLoader = ({ resourceUrl, resourceName, children }) => {
  const [resource, setResource] = useState(null);

  useEffect(() => {
    (async () => {
      const response = axios.get(resourceUrl);
      setResource(response.data);
    })();
  }, [resourceUrl]);
  console.log(resource)

  return (
    <>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { resourceName: resource });
        }
        return child;
      })}
    </>
  );
};

export default DataLoader;
