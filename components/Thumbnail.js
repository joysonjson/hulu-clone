import React from "react";
import Image from "next/image";
import { ThumbUpIcon } from "@heroicons/react/outline";
const BASE_URL = "https://image.tmdb.org/t/p/original";

const Thumbnail = ({ video }) => {
  return (
    <div className="p-2 group cursor-pointer transition-all duration-200 ease-in transform sm:hover:scale-105 hover:z-50">
      <Image
        layout="responsive"
        height={1080}
        width={1920}
        src={`${BASE_URL}${video.backdrop_path || video.poster_ppath}`}
      />
      <div className="p-2">
        <p
          style={{ textOverflow: "ellipsis", overflow: "hidden" }}
          className="truncate whitespace-nowrap overflow-hidden"
        >
          {video.overview}
        </p>
        <h2 className="mt-1 text-2xl font-medium text-white  transition-all duration-100 ease-in-out group-hover:font-bold ">
          {video.title || video.original_name}
        </h2>
        <p className="flex items-center opacity-0 group-hover:opacity-100">
          {video.media_type && `${video.media_type} .`}{" "}
          {video.release_date || video.first_air_date} .{" "}
          <ThumbUpIcon className="h-8 mb-1 mx-2" /> {video.vote_count}
        </p>
      </div>
    </div>
  );
};

export default Thumbnail;
