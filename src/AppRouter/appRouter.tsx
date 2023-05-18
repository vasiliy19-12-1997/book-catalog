import { FC, useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { publicRoutes } from "./router";

const AppRouter: FC = () => {
  return (
    <Routes>
      {publicRoutes.map((route) => (
        <Route element={<route.element />} path={route.path} key={route.path} />
      ))}
      <Route path="/*" element={<Navigate to="/main" replace />} />
    </Routes>
  );
};

export default AppRouter;
