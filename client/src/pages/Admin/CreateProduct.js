import React, { useState, useEffect } from "react";
import Layout from "./../../components/Layout/Layout";
import AdminMenu from "./../../components/Layout/AdminMenu";
import toast from "react-hot-toast";
import axios from "axios";
import { Select } from "antd";
import { useNavigate } from "react-router-dom";
import { MdCloudUpload } from "react-icons/md";
import "../../styles/AdminStyles.css";

const { Option } = Select;

const CreateProduct = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState("");
  const [shipping, setShipping] = useState("");
  const [photo, setPhoto] = useState("");

  const getAllCategory = async () => {
    try {
      const { data } = await axios.get("/api/v1/category/get-category");
      if (data?.success) setCategories(data?.category);
    } catch (error) {
      toast.error("Error fetching categories");
    }
  };

  useEffect(() => { getAllCategory(); }, []);

  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      const productData = new FormData();
      productData.append("name", name);
      productData.append("description", description);
      productData.append("price", price);
      productData.append("quantity", quantity);
      productData.append("photo", photo);
      productData.append("category", category);
      const { data } = await axios.post("/api/v1/product/create-product", productData);
      if (data?.success) {
        toast.success("Product Created Successfully");
        navigate("/dashboard/admin/products");
      } else {
        toast.error(data?.message);
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  return (
    <Layout title="Dashboard - Create Product">
      <div className="admin-layout">
        <AdminMenu />
        <div className="admin-content">
          <h2 className="admin-page-title">Create Product</h2>
          <div className="admin-panel-card">
            <div className="admin-product-form">

              <div className="admin-form-group full-width">
                <label>Category</label>
                <Select
                  bordered={false}
                  placeholder="Select a category"
                  size="large"
                  showSearch
                  style={{ width: "100%", border: "1.5px solid #e5e7eb", borderRadius: 8, background: "#fafafa" }}
                  onChange={(value) => setCategory(value)}
                >
                  {categories?.map((c) => (
                    <Option key={c._id} value={c._id}>{c.name}</Option>
                  ))}
                </Select>
              </div>

              <div className="admin-form-group full-width">
                <label>Product Photo</label>
                <label className="admin-upload-btn">
                  <MdCloudUpload size={18} style={{ marginRight: 6 }} />
                  {photo ? photo.name : "Click to upload photo"}
                  <input type="file" name="photo" accept="image/*" onChange={(e) => setPhoto(e.target.files[0])} hidden />
                </label>
                {photo && <img src={URL.createObjectURL(photo)} alt="preview" className="admin-photo-preview" />}
              </div>

              <div className="admin-form-group">
                <label>Product Name</label>
                <input className="admin-input" placeholder="e.g. Classic Wall Clock" value={name} onChange={(e) => setName(e.target.value)} />
              </div>

              <div className="admin-form-group">
                <label>Price ($)</label>
                <input type="number" className="admin-input" placeholder="e.g. 49.99" value={price} onChange={(e) => setPrice(e.target.value)} />
              </div>

              <div className="admin-form-group full-width">
                <label>Description</label>
                <textarea className="admin-input" rows={3} placeholder="Write a product description..." value={description} onChange={(e) => setDescription(e.target.value)} />
              </div>

              <div className="admin-form-group">
                <label>Quantity</label>
                <input type="number" className="admin-input" placeholder="e.g. 10" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
              </div>

              <div className="admin-form-group">
                <label>Shipping</label>
                <Select
                  bordered={false}
                  placeholder="Select shipping"
                  size="large"
                  style={{ width: "100%", border: "1.5px solid #e5e7eb", borderRadius: 8, background: "#fafafa" }}
                  onChange={(value) => setShipping(value)}
                >
                  <Option value="0">No</Option>
                  <Option value="1">Yes</Option>
                </Select>
              </div>

              <div className="admin-form-group full-width">
                <button className="admin-btn admin-btn-primary" style={{ width: "100%", padding: "12px" }} onClick={handleCreate}>
                  Create Product
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CreateProduct;
