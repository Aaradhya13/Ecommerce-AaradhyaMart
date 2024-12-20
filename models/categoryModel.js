import mongoose from "mongoose";
import slugify from "slugify";  // You can use this library to generate slugs

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    slug: {
      type: String,
      lowercase: true,
      unique: true, // Ensure the slug is unique
    },
  },
  { timestamps: true } // Optionally, add timestamps (createdAt, updatedAt)
);

// Pre-save hook to automatically generate slug from category name
categorySchema.pre("save", function (next) {
  if (this.isModified("name") || this.isNew) {
    this.slug = slugify(this.name, { lower: true, replacement: "-" }); // Slugify the name
  }
  next();
});

export default mongoose.model("Category", categorySchema);
