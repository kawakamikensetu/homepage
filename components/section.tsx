import { SquareCheckBig } from "lucide-react";
import Image from "next/image";
import React from "react";

interface SectionProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  subDescriptions?: string[];
  imageOnLeft?: boolean;
}

export default function Section({
  title,
  description,
  subDescriptions,
  imageSrc,
  imageAlt,
  imageOnLeft = false,
}: SectionProps) {
  return (
    <div
      className={`flex flex-col ${
        imageOnLeft ? "md:flex-row" : "md:flex-row-reverse"
      } items-center justify-between mb-20`}
    >
      <div className="md:w-1/2 w-full mb-6 md:mb-0">
        <div className="relative w-full h-60 md:h-72">
          <Image
            src={imageSrc}
            alt={imageAlt}
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
      <div className="md:w-1/2 w-full md:px-6">
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <p className="text-xl font-bold text-gray-600 mb-4">{description}</p>
        {subDescriptions &&
          subDescriptions.map((subDescription, index) => (
            <div key={index} className="flex items-center mb-2">
              <SquareCheckBig className="mr-2 flex-shrink-0" />
              <p className="text-xl text-gray-600">{subDescription}</p>
            </div>
          ))}
      </div>
    </div>
  );
}
