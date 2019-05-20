import Nav from "./Nav";
import Link from "next/link";

const Header = () => (
  <div>
    <div className="bar">
      <h1>
        <Link href="/">
          <a>The Tico Store</a>
        </Link>
      </h1>
      <Nav />
    </div>
    <div className="sub-bar">
      <p>Search</p>
    </div>
    <div>Cart</div>
  </div>
);

export default Header;
