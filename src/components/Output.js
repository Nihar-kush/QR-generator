import { QRCodeCanvas } from "qrcode.react";
import React from "react";

export default function Output({ loading, url, size, scrollToRef }) {
  const downloadQR = () => {
    const canvas = document.getElementById("qr");
    const pngUrl = canvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    let downloadLink = document.createElement("a");
    downloadLink.href = pngUrl;
    downloadLink.download = `EasyQR.png`;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };
  return (
    <div
      className="bg-[#ECEDEF] flex flex-col items-center justify-center gap-10 m-auto md:max-w-5xl p-10"
      ref={scrollToRef}
    >
      {loading ? (
        <div className="flex flex-col items-center gap-2 p-2">
          <p>Generating QR</p>
          <img src="qr2.gif" />
        </div>
      ) : (
        <div className="flex flex-col items-center gap-2 p-2">
          <QRCodeCanvas
            id="qr"
            value={url}
            size={size}
            bgColor={"#ffffff"}
            fgColor={"#000000"}
          />
          <p
            className="cursor-pointer bg-white ring-1 p-2 hover:bg-[#036AE3] hover:text-white"
            onClick={downloadQR}
          >
            Download QR
          </p>
        </div>
      )}
    </div>
  );
}
