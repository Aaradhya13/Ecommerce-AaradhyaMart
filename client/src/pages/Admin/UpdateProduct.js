import React, { useState, useEffect } from "react";
import Layout from "./../../components/Layout/Layout";
import AdminMenu from "./../../components/Layout/AdminMenu";
import toast from "react-hot-toast";
import axios from "axios";
import { Select } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import { MdCloudUpload } from "react-icons/md";
import "../../styles/AdminStyles.css";

const { Option } = Select;

const UpdateProduct = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState("");
  const [shipping, setShipping] = useState("");
  const [photo, setPhoto] = useState("");
  const [id, setId] = useState("");

  const getSingleProduct = async () => {
    try {
      const { data } = await axios.get(`/api/v1/product/get-product/${params.slug}`);
      setName(data.product.name);
      setId(data.product._id);
      setDescription(data.product.description);
      setPrice(data.product.price);
      setQuantity(data.product.quantity);
      setShipping(data.product.shipping);
      setCategory(data.product.category._id);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => { getSingleProduct(); //eslint-disable-next-line
  }, []);

  const getAllCategory = async () => {
    try {
      const { data } = await axios.get("/api/v1/category/get-category");
      if (data?.success) setCategories(data?.category);
    } catch (error) {
      toast.error("Error fetching categories");
    }
  };

  useEffect(() => { getAllCategory(); }, []);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const productData = new FormData();
      productData.append("name", name);
      productData.append("description", description);
      productData.append("price", price);
      productData.append("quantity", quantity);
      photo && productData.append("photo", photo);
      productData.append("category", category);
      const { data } = await axios.put(`/api/v1/product/update-product/${id}`, productData);
      if (data?.success) {
        toast.success("Product Updated Successfully");
        navigate("/dashboard/admin/products");
      } else {
        toast.error(data?.message);
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  const handleDelete = async () => {
    try {
      let answer = window.confirm("Are you sure you want to delete this product?");
      if (!answer) return;
      await axios.delete(`/api/v1/product/delete-product/${id}`);
      toast.success("Product deleted successfully");
      navigate("/dashboard/admin/products");
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  return (
    <Layout title="Dashboard - Update Product">
      <div className="admin-layout">
        <AdminMenu />
        <div className="admin-content">
          <h2 className="admin-page-title">Update Product</h2>
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
                  value={category}
                >
                  {categories?.map((c) => (
                    <Option key={c._id} value={c._id}>{c.name}</Option>
                  ))}
                </Select>
              </div>

              <div className="admin-form-group full-width">
                <label>Product Photo</label>
                <label className="admin-upload-btn">
                  <MdCloudUpload size={18} />
                  {photo ? photo.name : "Click to change photo"}
                  <input type="file" name="photo" accept="image/*" onChange={(e) => setPhoto(e.target.files[0])} hidden />
                </label>
                <img
                  src={photo ? URL.createObjectURL(photo) : `/api/v1/product/product-photo/${id}`}
                  alt="product"
                  className="admin-photo-preview"
                />
              </div>

              <div className="admin-form-group">
                <label>Product Name</label>
                <input className="admin-input" value={name} placeholder="Product name" onChange={(e) => setName(e.target.value)} />
              </div>

              <div className="admin-form-group">
                <label>Price ($)</label>
                <input type="number" className="admin-input" value={price} placeholder="Price" onChange={(e) => setPrice(e.target.value)} />
              </div>

              <div className="admin-form-group full-width">
                <label>Description</label>
                <textarea className="admin-input" rows={3} value={description} placeholder="Product description" onChange={(e) => setDescription(e.target.value)} />
              </div>

              <div className="admin-form-group">
                <label>Quantity</label>
                <input type="number" className="admin-input" value={quantity} placeholder="Quantity" onChange={(e) => setQuantity(e.target.value)} />
              </div>

              <div className="admin-form-group">
                <label>Shipping</label>
                <Select
                  bordered={false}
                  placeholder="Select shipping"
                  size="large"
                  style={{ width: "100%", border: "1.5px solid #e5e7eb", borderRadius: 8, background: "#fafafa" }}
                  onChange={(value) => setShipping(value)}
                  value={shipping ? "1" : "0"}
                >
                  <Option value="0">No</Option>
                  <Option value="1">Yes</Option>
                </Select>
              </div>

              <div className="admin-form-group full-width" style={{ display: "flex", gap: 12 }}>
                <button className="admin-btn admin-btn-primary" style={{ flex: 1, padding: "12px" }} onClick={handleUpdate}>
                  Update Product
                </button>
                <button className="admin-btn admin-btn-danger" style={{ flex: 1, padding: "12px" }} onClick={handleDelete}>
                  Delete Product
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default UpdateProduct;
