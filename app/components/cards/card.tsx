import React from "react";
interface CardInfo {
    cardName:string; 
    description:string;
    tags: string[];
    icon:any;
    iconColor?: string;
    key:number;
}
const Card = ({cardName, description,tags, icon,iconColor, key }: CardInfo) => {
  return (
    <div key={key} className="max-w-sm rounded overflow-hidden shadow-lg bg-white mt-8">
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2  flex items-center justify-center">       
      {cardName} <span className="ml-2 " style={{ color: iconColor }}>{icon}</span>
      </div>
      <p className="text-gray-700 text-sm">
       {description}
      </p>
    </div>
    <div className="px-6 pt-4 pb-2">

    {tags.map((tag: string, index:number) => (
         <span  key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs italic text-gray-700 mr-2 mb-2">
         {tag}
       </span>
      ))} 
    </div>
  </div>
  );
};

export default Card;