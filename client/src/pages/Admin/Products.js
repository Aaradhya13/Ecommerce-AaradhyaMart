import React, { useState, useEffect } from "react";
import AdminMenu from "../../components/Layout/AdminMenu";
import Layout from "./../../components/Layout/Layout";
import axios from "axios";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import "../../styles/AdminStyles.css";

const Products = () => {
  const [products, setProducts] = useState([]);

  const getAllProducts = async () => {
    try {
      const { data } = await axios.get("/api/v1/product/get-product");
      setProducts(data.products);
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  useEffect(() => { getAllProducts(); }, []);

  return (
    <Layout title="Dashboard - Products">
      <div className="admin-layout">
        <AdminMenu />
        <div className="admin-content">
          <h2 className="admin-page-title">All Products</h2>
          <div className="admin-products-grid">
            {products?.map((p) => (
              <Link
                key={p._id}
                to={`/dashboard/admin/product/${p.slug}`}
                className="admin-product-card"
              >
                <img src={`/api/v1/product/product-photo/${p._id}`} alt={p.name} />
                <div className="admin-product-card-body">
                  <h6>{p.name}</h6>
                  <p>{p.description}</p>
                  <span className="admin-edit-badge">Edit →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Products;
