import { useState } from "react";

import HrTag from "../design/HrTag";
import Card_two from "../design/card/Card_two";
import SearchBar from "../design/SearchBar";
import SearchResult from "../design/template/SearchResult";

const PhotoBlog = ({ data }) => {
  const [filterData, setFilterData] = useState([]);
  const [searchWord, setSearchWord] = useState("");

  const search = (e) => {
    setSearchWord(e.target.value);

    const filteredData = data.filter(
      (q) =>
        q.title.toLowerCase().includes(searchWord.toLowerCase()) ||
        q.keywords.toLowerCase().includes(searchWord.toLowerCase())
    );
    setFilterData(filteredData);
  };

  const close = () => {
    setSearchWord("");
    setFilterData([]);
  };

  return (
    <>
      <div className="section" id="albums">
        <div className="container">
          <div className="flex heading">
            <h2>Albums</h2>

            {data.length > 6 && (
              <SearchBar
                text="Search by Name"
                search={search}
                value={searchWord}
                detection={searchWord}
                close={close}
              />
            )}
          </div>

          {searchWord.length ? (
            <SearchResult newData={filterData} prefix="/photography" />
          ) : (
            <div className="list">
              {data.map((d) => (
                <Card_two key={d.id} i={d} link={`/photography/${d.slug}`} />
              ))}
            </div>
          )}
        </div>

        <HrTag background="#ffdba6" bottom="-2rem" top="auto" />
      </div>

      <style jsx>{`
        .section {
          padding-top: 6rem;
          padding-bottom: 4rem;
        }

        h2 {
          padding: 0.3rem 2rem;
          margin: 0;
          background: #ffdba65e;
          display: inline-block;
        }

        .list {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          margin-top: 2rem;
        }

        .search {
          border: 2px solid #d5d5d5;
          border-radius: 20px;
          overflow: hidden;
          gap: 0.5rem;
        }
        input {
          max-width: 350px;
          outline: none;
          border: none;
          /* background: #d7d7d7; */
          padding: 0.6rem 1rem;
        }

        .icon {
          font-size: 1.5rem;
          padding: 0.5rem 1rem;
          color: #afafaf;
        }

        @media (max-width: 867px) {
          .list {
            gap: 1rem;
          }
        }

        @media (max-width: 780px) {
          .container {
            padding: 0;
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

export default PhotoBlog;
