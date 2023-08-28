import { SearchIcon } from "@/components/icon";
import { Container } from "..";

const Header = () => {
  return (
    <header className="py-8 fixed w-full top-0 bg-transparent z-10">
      <Container>
        <div className="flex justify-between items-center gap-2">
          <div className="text-red text-2xl font-bold">Logo</div>
          <nav>
            <ul className="flex text-white font-medium text-lg space-x-6">
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">Trending</a>
              </li>
              <li>
                <a href="">Explore</a>
              </li>
              <li>
                <a href="">Adventure</a>
              </li>
              <li>
                <a href="">Drama</a>
              </li>
              <li>
                <a href="">Romance</a>
              </li>
              <li>
                <a href="">Family</a>
              </li>
            </ul>
          </nav>
          <div className="items-center rounded-full bg-grey px-2 py-2 flex md:px-4 md:py-3">
            <input
              type="search"
              className="bg-transparent px-2 outline-none md:px-3 w-full text-black font-semibold"
              placeholder="search..."
            />
            <SearchIcon />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
