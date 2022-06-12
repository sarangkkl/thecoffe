import { BiSearch } from "react-icons/bi";
import { IoCloseOutline } from "react-icons/io5";

export default function SearchBar({ text, search, detection, close, value }) {
  return (
    <>
      <div className="flex search">
        <input placeholder={text} type="text" onChange={search} value={value} />

        {detection ? (
          <div className="icon close" onClick={close}>
            <IoCloseOutline />
          </div>
        ) : (
          <div className="icon disabled">
            <BiSearch />
          </div>
        )}
      </div>

      <style jsx>{`
        .search {
          border: 2px solid #d5d5d5;
          border-radius: 20px;
          overflow: hidden;
          flex: 1;
          max-width: 350px;
        }
        input {
          width: 100%;
          outline: none;
          border: none;
          padding: 0.6rem 1rem;
        }

        .icon {
          font-size: 1.5rem;
          padding: 0.5rem 1rem;
          color: #afafaf;
          transition: 0.1s ease;
        }

        .icon:hover {
          background: white;
        }

        .close {
          color: black;
        }

        @media (max-width: 600px) {
          .search {
            width: 100%;
            border-radius: 50px;
          }

          input {
            padding: 1.3rem 2rem;
          }
        }
      `}</style>
    </>
  );
}
