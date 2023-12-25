import React from "react";

export default function Slider({ info, title, image }) {
  return (
    <section className="p-10">
      {info ? (
        <div>
          <div>
            <div>
              <h1>{info.title}</h1>
              <p>{info.information}</p>
              <a href={info.link}>{info.button}</a>
            </div>
            <div>{info.image}</div>
          </div>
        </div>
      ) : (
        false
      )}
      {title ? <div className="flex w-full justify-center items-center h-80" >{title}</div> : false}
    </section>
  );
}
