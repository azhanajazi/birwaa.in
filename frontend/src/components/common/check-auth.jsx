import { Navigate, useLocation } from "react-router-dom";

function CheckAuth({ isAuthenticated, user, children }) {
  const location = useLocation();

  console.log(location.pathname, isAuthenticated);

  if (location.pathname === "/") {
    return <Navigate to="/shop/home" />;
  }

  if (!isAuthenticated && location.pathname.startsWith("/admin")) {
    return <Navigate to="/shop/home" replace />;
  }

  if (isAuthenticated && user?.role === "admin" && location.pathname.includes("shop")) {
    return <Navigate to="/admin/dashboard" />;
  }

  if (isAuthenticated && user?.role !== "admin" && location.pathname.includes("admin")) {
    return <Navigate to="/unauth-page" />;
  }


  if (
    isAuthenticated &&
    (location.pathname.includes("/login") || location.pathname.includes("/register"))
  ) {
    const from = location.state?.from || "/shop/home";
    return <Navigate to={from} replace />;
  }

  const publicRoutes = ["/shop/home", "/shop/listing", "/shop/search", "/shop/cart"];
  if (publicRoutes.some(route => location.pathname.startsWith(route))) {
    return <>{children}</>;
  }

  const protectedRoutes = ["/shop/checkout", "/shop/account", "/shop/payment-success"];
  if (!isAuthenticated && protectedRoutes.some(route => location.pathname.startsWith(route))) {
    return <Navigate to="/auth/login" state={{ from: location.pathname }} replace />;
  }

  return <>{children}</>;
}

export default CheckAuth;
