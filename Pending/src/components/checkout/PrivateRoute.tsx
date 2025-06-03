import { Navigate } from "react-router-dom";

interface Props {
  children: React.ReactNode;
}

export const PrivateRoute = ({ children }: Props) => {
  const fileName = localStorage.getItem("fileName");
  const pageCount = localStorage.getItem("pageCount");

  // You can adjust this condition as needed
  if (!fileName || !pageCount) {
    return <Navigate to="/Info-Page" replace />;
  }

  return <>{children}</>;
};
