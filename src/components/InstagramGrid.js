"use client";

import InstagramFeed from "./InstagramFeed";

export default function InstagramGrid() {
  const posts = [
    "https://www.instagram.com/p/DUBm1H1iNap/",
    'https://www.instagram.com/reel/DT3TlGpgXX_/',
    'https://www.instagram.com/reel/DThaCaqgfBk/',
    'https://www.instagram.com/p/DT2Ijr7Eu05/'

    
  ];

  return (
        <div className="flex flex-col gap-20 lg:gap-15 max-w-[1440px] mx-auto justify-center items-center">

            <div className="flex flex-col gap-10">
                <h2 className="font-bold text-xl lg:text-2xl text-center uppercase text-[#cfb781]">
                    Catch our latest posts
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
                    {posts.map((url, index) => (
                        <div key={index} className="overflow-hidden rounded-lg bg-black">
                        <InstagramFeed url={url} />
                        </div>
                    ))}
                </div>
            </div>

            
    </div>
  );
}
