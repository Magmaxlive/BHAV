"use client";

import Script from "next/script";
import { useEffect } from "react";


export default function InstagramFeed({ url }) {
  useEffect(() => {
    // Re-process embeds when component mounts
    if (window.instgrm) {
      window.instgrm.Embeds.process();
    }
  }, []);
  return (
    <div className="flex flex-col gap-20 lg:gap-15 max-w-[1440px] mx-auto justify-center items-center">

      {/* <Script src="https://elfsightcdn.com/platform.js"
        strategy="afterInteractive" />

      <div className="elfsight-app-c37ea9c2-b005-406d-be7c-adf6094a9a6f  rounded-xl"
        data-elfsight-app-lazy/> */}


      <blockquote className="instagram-media bg-black w-full"
        data-instgrm-permalink={url}
        data-instgrm-version="14"
        style={{ minWidth: "100%" }}> </blockquote>

      <Script src="https://www.instagram.com/embed.js"
        strategy="afterInteractive"/>


    </div>
  );
}
