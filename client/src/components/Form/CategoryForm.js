import React from "react";
import "../../styles/AdminStyles.css";

const CategoryForm = ({ handleSubmit, value, setValue, title = "Edit Category" }) => {
  return (
    <form onSubmit={handleSubmit} style={{ paddingTop: 8 }}>
      <p style={{ fontWeight: 600, fontSize: "1rem", color: "#111827", marginBottom: 14 }}>
        {title}
      </p>
      <div style={{ marginBottom: 14 }}>
        <input
          type="text"
          className="admin-input"
          placeholder="Category name"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
      <button type="submit" className="admin-btn admin-btn-primary" style={{ width: "100%" }}>
        Save Changes
      </button>
    </form>
  );
};

export default CategoryForm;
