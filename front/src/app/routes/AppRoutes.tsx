import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/login";
import Tasks from "../pages/task";
import { PrivateRoute } from "./PrivateRoute";
import Register from "../pages/register";
import { AppLayout } from "../layouts/AppLayout";

export function AppRoutes() {
  const isAuthenticated = !!localStorage.getItem("token");

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            isAuthenticated ? (
              <Navigate to="/tasks" />
            ) : (
              <Navigate to="/login" />
            )
          }
        />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/tasks"
          element={
            <PrivateRoute>
              <AppLayout>
                <Tasks />
              </AppLayout>
            </PrivateRoute>
          }
        />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}
