// no need to have the "import React from 'react';" import statement
// because Next.js takes care of this for us

import Link from "next/link";

const Sell = props => (
  <div>
    <h1>Sell something!</h1>
    <Link href="/">
      <a>Home</a>
    </Link>
  </div>
);

export default Sell;
