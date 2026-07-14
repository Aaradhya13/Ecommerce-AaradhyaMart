import React, { useEffect, useState } from "react";
import Layout from "./../../components/Layout/Layout";
import AdminMenu from "./../../components/Layout/AdminMenu";
import toast from "react-hot-toast";
import axios from "axios";
import { Modal } from "antd";
import CategoryForm from "../../components/Form/CategoryForm";
import "../../styles/AdminStyles.css";

const CreateCategory = () => {
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState(null);
  const [updatedName, setUpdatedName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/api/v1/category/create-category", { name });
      if (data?.success) {
        toast.success(`${name} created`);
        setName("");
        getAllCategory();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

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
      const { data } = await axios.put(
        `/api/v1/category/update-category/${selected._id}`,
        { name: updatedName }
      );
      if (data.success) {
        toast.success(`${updatedName} updated`);
        setVisible(false);
        setSelected(null);
        setUpdatedName("");
        getAllCategory();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  const handleDelete = async (pId) => {
    try {
      const { data } = await axios.delete(`/api/v1/category/delete-category/${pId}`);
      if (data.success) {
        toast.success("Category deleted");
        getAllCategory();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  return (
    <Layout title="Dashboard - Create Category">
      <div className="admin-layout">
        <AdminMenu />
        <div className="admin-content">
          <h2 className="admin-page-title">Manage Categories</h2>
          <div className="admin-panel-card">
            <div className="admin-form-row">
              <input
                className="admin-input"
                placeholder="Enter new category name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <button className="admin-btn admin-btn-primary" onClick={handleSubmit}>
                Add Category
              </button>
            </div>

            <table className="admin-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {categories?.map((c) => (
                  <tr key={c._id}>
                    <td>{c.name}</td>
                    <td>
                      <div className="actions-cell">
                        <button
                          className="admin-btn admin-btn-outline"
                          onClick={() => { setVisible(true); setUpdatedName(c.name); setSelected(c); }}
                        >
                          Edit
                        </button>
                        <button
                          className="admin-btn admin-btn-danger"
                          onClick={() => handleDelete(c._id)}
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <Modal onCancel={() => setVisible(false)} footer={null} open={visible}>
            <CategoryForm
              value={updatedName}
              setValue={setUpdatedName}
              handleSubmit={handleUpdate}
            />
          </Modal>
        </div>
      </div>
    </Layout>
  );
};

export default CreateCategory;
