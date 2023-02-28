import React, { useRef, useState } from "react";
import Output from "./Output";

export default function Main({ setLoading, loading }) {
  const [size, setSize] = useState();
  const [url, setUrl] = useState("");
  const scrollToRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    scrollToRef.current.scrollIntoView();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };

  return (
    <>
      <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-10 m-auto md:max-w-5xl p-10">
        <div className="w-full md:w-2/3">
          <h1 className="text-3xl md:text-4xl font-bold mb-5">
            QR Code Generator
          </h1>
          <p className="mb-5">
            QR Codes allow smartphone users to access your website simply and
            quickly.
          </p>
          <p className="mb-2">
            Enter your URL below to generate a QR code and download the image.
          </p>
          <form onSubmit={submitHandler}>
            <input
              required
              type="url"
              placeholder="Enter a URL"
              className="w-full mb-5 rounded text-[#2e2e2e] focus:outline-none border border-[#171C1C] p-3"
              onChange={(e) => setUrl(e.target.value)}
            />
            <select
              defaultValue={300}
              className="w-full mb-5 rounded text-[#2e2e2e] focus:outline-none border border-[#171C1C] p-3"
              onChange={(e) => setSize(e.target.value)}
            >
              <option value="100">100x100</option>
              <option value="200">200x200</option>
              <option value="300">300x300</option>
              <option value="400">400x400</option>
              <option value="500">500x500</option>
              <option value="600">600x600</option>
              <option value="700">700x700</option>
            </select>
            <button
              className="bg-[#2A2A2A] hover:bg-[#171C1C] px-4 py-3 w-full rounded text-white"
              type="submit"
            >
              Generate QR code
            </button>
          </form>
        </div>
        <div className="w-full md:w-1/3">
          <img src="qr.jpg" alt="QR" className="w-[65%] md:w-full m-auto" />
        </div>
      </div>
      <Output
        scrollToRef={scrollToRef}
        loading={loading}
        size={size}
        url={url}
      />
    </>
  );
}
