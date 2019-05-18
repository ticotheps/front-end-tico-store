// no need to have the "import React from 'react';" import statement
// because Next.js takes care of this for us

import Link from "next/link";

const Home = props => (
  <div>
    <h1>Hello! Welcome to Tico's Store!</h1>
    <Link href="/sell">Sell</Link>
  </div>
);

export default Home;
