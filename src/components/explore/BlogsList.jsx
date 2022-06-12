import { useState } from "react";

import SearchBar from "../design/SearchBar";
import Card_two from "../design/card/Card_two";
import SearchResult from "../design/template/SearchResult";

const BlogsList = ({ data }) => {
  const [filterData, setFilterData] = useState([]);
  const [searchWord, setSearchWord] = useState("");

  const search = (e) => {
    setSearchWord(e.target.value);

    const filteredData = data.filter(
      (q) =>
        q?.country.name.toLowerCase().includes(searchWord.toLowerCase()) ||
        q?.title.toLowerCase().includes(searchWord.toLowerCase()) ||
        q?.keywords.toLowerCase().includes(searchWord.toLowerCase())
    );
    setFilterData(filteredData);
  };

  const close = () => {
    setSearchWord("");
    setFilterData([]);
  };

  return (
    <>
      <div className="blogs">
        <div className="flex heading">
          <h2>Articles</h2>

          {data.length > 6 && (
            <SearchBar
              text="Search by Article or Country"
              search={search}
              value={searchWord}
              detection={searchWord}
              close={close}
            />
          )}
        </div>

        {searchWord.length ? (
          <SearchResult newData={filterData} prefix="/explore" />
        ) : (
          <div className="list">
            {data.map((i) => (
              <Card_two i={i} key={i.id} link={`/explore/${i.slug}`} />
            ))}
          </div>
        )}
      </div>

      <style jsx>{`
        .blogs {
          position: relative;
        }

        .heading {
          /* position: sticky;
          top: 4rem;
          background: white;
          z-index: 5; */
          padding: 1.5rem 0;
        }
        h2 {
          margin: 0;
          padding: 0.3rem 2rem;
          background: #f5f5f5;
          display: inline-block;
        }
        .list {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
        }

        @media (max-width: 867px) {
          .list {
            gap: 1rem;
          }
        }

        @media (max-width: 600px) {
          .heading {
            flex-direction: column;
            gap: 1rem;
          }
        }
      `}</style>
    </>
  );
};

export default BlogsList;
