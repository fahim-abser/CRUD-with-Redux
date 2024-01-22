import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "../Components/features/books/BooksSlice";

const store = configureStore({
  reducer: {
    booksReducer: booksReducer,
  },
});

export default store;
