import { IoIosArrowDown } from "react-icons/io";

export default function HrTag({ background, top, bottom }) {
  return (
    <>
      <div className="icon disabled">
        <IoIosArrowDown />
      </div>

      <style jsx>{`
        .icon {
          position: absolute;
          width: 40px;
          height: 40px;
          font-size: 1.4rem;
          background: ${background};
          color: white;
          border-radius: 100%;
          bottom: ${bottom};
          top: ${top};
          left: 50%;
          transform: translateX(-50%);
        }
      `}</style>
    </>
  );
}
