import React from "react";
import MiniBanner from "./MiniBanner/MiniBanner";
import RenderListNews from "./RenderListNews/RenderListNews";

export default function ListNews() {
  return (
    <section className="listNews bg-[#DCDCDC] py-8 md:py-12">
      <div className="l-container">
        <h1 className="text-center mb-5 text-[#1458A5]">Tin khuyến mãi</h1>
        <div className="flex">
          {/* Mini Banner */}
          <MiniBanner />
          {/* Render List News */}
          <RenderListNews />
          {/* Mini Banner */}
          <div className="hidden md:flex">
            <MiniBanner />
          </div>
        </div>
      </div>
    </section>
  );
}
