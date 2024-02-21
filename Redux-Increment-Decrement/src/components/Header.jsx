import React from "react";
import { useSelector } from 'react-redux';

const Header = () => {

  const count = useSelector((state) => state);

  return (

    <>
      <div className="number">{count}</div>
    </>

  );
};

export default Header;