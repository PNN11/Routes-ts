import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import PostsPage from "../pages/PostsPage";
import TodosPage from "../pages/TodosPage";
import UsersPage from "../pages/UsersPage";
import PostDetailPage from "../pages/PostDetail";
import TodoDetailPage from "../pages/TodoDetail";
import UserDetailPage from "../pages/UserDetail";
import ProductsPage from "pages/ProductsPage";

const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="posts">
        <Route index element={<PostsPage />} />
        <Route path=":id" element={<PostDetailPage />} />
      </Route>
      <Route path="todos">
        <Route index element={<TodosPage />} />
        <Route path=":id" element={<TodoDetailPage />} />
      </Route>
      <Route path="users">
        <Route index element={<UsersPage />} />
        <Route path=":id" element={<UserDetailPage />} />
      </Route>
      <Route path="products" element={<ProductsPage />} />
      <Route path="*" element={<Navigate to="posts" />} />
    </Routes>
  );
};

export default AppRouter;
