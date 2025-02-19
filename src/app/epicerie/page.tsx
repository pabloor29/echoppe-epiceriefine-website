"use client";

import React, { useState } from 'react';
import Navbar from '../../../components/Navbar'
import SideNavbarArticle from '../../../components/SideNavbarArticle'
import { Article } from '../../../components/Article';

function Epicerie() {
  const [selectedCategory, setSelectedCategory] = useState("Les vins");

  // Liste des articles avec leur catégorie
 const articles = [
    { id: 1, name: "Château Margaux", category: "Les vins", price: "120€", src: ""},
    { id: 2, name: "Boeuf Bourguignon", category: "Plats cuisinés", price: "15€", src: ""},
    { id: 3, name: "Comté affiné 24 mois", category: "Fromages", price: "8€", src: ""},
    { id: 4, name: "Saucisson sec", category: "Charcuterie", price: "5€" },
    { id: 5, name: "Saint-Émilion Grand Cru", category: "Les vins", price: "45€", src: ""},
    { id: 6, name: "Raclette fumée", category: "Fromages", price: "12€", src: ""}
  ];

  // Filtrer les articles en fonction de la catégorie sélectionnée
  const filteredArticles = articles.filter(article => article.category === selectedCategory);

  return (
    <>
      <Navbar />
      <SideNavbarArticle onCategorySelect={setSelectedCategory} selectedCategory={selectedCategory} />
      <div className="ml-64 p-4 w-full pt-20">
        <h2 className="text-3xl font-bold mb-4">{selectedCategory}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredArticles.map(article => (
            <Article key={article.id} category={article.category} image={article.src} title={article.name} price={article.price} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Epicerie