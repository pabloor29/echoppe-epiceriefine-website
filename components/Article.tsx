import React from 'react'
import { ShoppingCart } from "lucide-react";
import Image from "next/image";

export function Article({ category, image, title, price }) {
    return (
      <div className="w-64 h-96 bg-white shadow-lg rounded-lg overflow-hidden flex flex-col">
        <div className="h-1/2 w-full relative">
          <Image src={image} alt={title} layout="fill" objectFit="cover" />
        </div>
        <div className="h-1/2 p-4 flex flex-col justify-between">
          <h2 className="text-lg font-bold">{title}</h2>
          <div className="flex justify-between items-center mt-auto">
            <span className="text-xl font-semibold text-gray-700">{price}</span>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-600">
              <ShoppingCart size={18} color='black' /> Ajouter
            </button>
          </div>
        </div>
      </div>
    );
  }