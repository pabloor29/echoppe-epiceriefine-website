"use client";

import React from 'react';
import { Wine, Beef, Soup, Milk } from "lucide-react";

function SideNavbarArticle({ onCategorySelect, selectedCategory }) {
    return (
        <div className="h-screen w-64 bg-gray-900 text-white p-4 fixed left-0 top-0 flex flex-col pt-20">
            <h1 className="text-2xl font-bold mb-6 text-center">BOUTIQUE</h1>
            <nav className="flex flex-col gap-4">
                {[
                    { label: "Les vins", icon: <Wine size={20} /> },
                    { label: "Plats cuisinés", icon: <Soup size={20} /> },
                    { label: "Fromages", icon: <Milk size={20} /> },
                    { label: "Charcuterie", icon: <Beef size={20} /> }
                ].map((item) => (
                    <button
                        key={item.label}
                        onClick={() => onCategorySelect(item.label)}
                        className={`flex items-center gap-3 p-3 rounded-lg hover:bg-gray-700 ${
                            selectedCategory === item.label ? "bg-gray-700" : ""
                        }`}
                    >
                        {item.icon}
                        <span>{item.label}</span>
                    </button>
                ))}
            </nav>
        </div>
    );
}

export default SideNavbarArticle;
