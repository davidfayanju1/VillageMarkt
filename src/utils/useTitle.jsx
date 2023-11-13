import React, { useEffect, useState } from "react";

const useTitle = (title) => {
  const [name, setName] = useState(title);

  useEffect(() => {
    document.title = name;
  }, [name]);
};

export default useTitle;
