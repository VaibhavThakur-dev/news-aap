// import axios from 'axios'
import React, { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";

function News() {
  let [list, setList] = useState([]);
  let [category, setCategory] = useState("all");
  let [language, setLanguage] = useState("hi");



    useEffect(()=>{
      let getData = async () => {
        let res = await axios.get(
          `https://newsapi.org/v2/everything?q=${category}&language=${language}&apiKey=63e22c008f394270921fab49006be05a`
        );
        setList(res.data.articles);
      };
      getData();
    },[category,language])

  return (
    <>
      <section className="  h-full w-full flex gap-5 flex-col lg:flex-row p-10 flex-wrap justify-center  lg:flex-nowrap  ">
        <div className="  text-xs md:text-lg lg:text-xl text-white lg:w-1/6  lg:flex-col text-center flex-none flex justify-center  bg-zinc-600/25 rounded-lg gap-5  md:p-5 shadow-2xl">
          <div className="flex flex-col md:gap-2 border-white rounded-md border p-2  ">
            <h5 className="bg-zinc-600 p-1 ">LANGUAGE</h5>
            <ul className="text-center flex flex-wrap  justify-center gap-1 md:gap-5">
              <li>
                <button className=" shadow-xl shadow-zinc-700 hover:bg-zinc-800 border-b border-zinc-900 p-2 rounded-md"
                  onClick={() => {
                    setLanguage("en");
                  }}
                >
                  Englesh
                </button>
              </li>
              <li>
                <button className=" shadow-xl shadow-zinc-700 hover:bg-zinc-800 border-b border-zinc-900 p-2 rounded-md"
                  onClick={() => {
                    setLanguage("hi");
                  }}
                >
                  Hindi
                </button>
              </li>
            </ul>
          </div>
         <div className="flex flex-col md:gap-2 border-white rounded-md border p-2 ">
         <h5 className="bg-zinc-600 p-1">CATEGORY</h5>
         <ul className="flex flex-wrap justify-center   gap-1 md:gap-5 ">
            
            <li>
              <button className=" shadow-xl shadow-zinc-700 hover:bg-zinc-800 border-b border-zinc-900 p-2 rounded-md"
                onClick={() => {
                  setCategory("all");
                }}
              >
                All
              </button>
            </li>
            <li>
              <button className=" shadow-xl shadow-zinc-700 hover:bg-zinc-800 border-b border-zinc-900 p-2 rounded-md"
                onClick={() => {
                  setCategory("sports");
                }}
              >
                Sports
              </button>
            </li>
            <li>
              <button className=" shadow-xl shadow-zinc-700 hover:bg-zinc-800 border-b border-zinc-900 p-2 rounded-md"
                onClick={() => {
                  setCategory("bitcoin");
                }}
              >
                Bitcoin
              </button>
            </li>
            <li>
              <button className=" shadow-xl shadow-zinc-700 hover:bg-zinc-800 border-b border-zinc-900 p-2 rounded-md"
                onClick={() => {
                  setCategory("business");
                }}
              >
                Busniess
              </button>
            </li>
            
          </ul>
         </div>
        </div>
        <div className="flex-1 py-5 overflow-x-auto">
          {list ? (
            <div className="flex w-full flex-wrap gap-10 justify-center ">
              {list.map((item) => {
                console.log(item);
                return <Card data={item} />;
              })}
            </div>
          ) : (
            <p>Data not found</p>
          )}
        </div>
      </section>
    </>
  );
}

export default News;
