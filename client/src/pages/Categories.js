import React from "react";
import { Link } from "react-router-dom";
import useCategory from "../hooks/useCategory";
import Layout from "../components/Layout/Layout";

const Categories = () => {
  const categories = useCategory();
  return (
    <Layout title="All Categories">
      <div className="categories-page">
        <h2 className="categories-title">All Categories</h2>
        <div className="categories-grid">
          {categories.map((c) => (
            <Link key={c._id} to={`/category/${c.slug}`} className="category-card">
              <span className="category-card-name">{c.name}</span>
              <span className="category-card-arrow">→</span>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Categories;
