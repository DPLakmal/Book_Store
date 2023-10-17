import mongoose from "mongoose";

const bookSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    publishYear: {
      type: Number,
      required: true,
    },
    imgUrl: {
      type: String,
      default:
        "https://cdn.kobo.com/book-images/8f5dd9b8-a063-435e-97b3-2e26e9257174/353/569/90/False/clean-architecture.jpg",
    },
  },
  {
    timestamps: true,
  }
);

export const Book = mongoose.model("Book", bookSchema);
