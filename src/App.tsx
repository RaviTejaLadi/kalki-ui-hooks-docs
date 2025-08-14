import React, { Suspense } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary";
import Loading from "./components/Loading";
import NotFound from "./components/NotFound";
import Navbar from "./components/Layout/NavBar";
import Footer from "./components/Layout/Footer";

// Lazy load components for better performance
const LazyHome = React.lazy(() => import("./components/Home"));
const LazyHooksLayout = React.lazy(
  () => import("./components/Layout/HooksLayout/HooksLayout")
);
const LazyHooksIndex = React.lazy(
  () => import("./components/hooks/HooksIndex")
);
const LazyUseLocalStorage = React.lazy(
  () => import("./components/hooks/UseLocalStorage")
);
const LazyUseDebounce = React.lazy(
  () => import("./components/hooks/UseDebounce")
);

// Root layout component
const RootLayout: React.FC = () => {
  return (
    <ErrorBoundary>
      <Suspense fallback={<Loading />}>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1">
            <Outlet />
          </main>
          <Footer />
        </div>
      </Suspense>
    </ErrorBoundary>
  );
};

// Router configuration
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <LazyHome />,
      },
      {
        path: "hooks",
        element: <LazyHooksLayout />,
        children: [
          {
            index: true,
            element: <LazyHooksIndex />,
          },
          {
            path: "use-local-storage",
            element: <LazyUseLocalStorage />,
          },
          {
            path: "use-debounce",
            element: <LazyUseDebounce />,
          },
          // Add more hook routes here as needed
          {
            path: "*",
            element: <NotFound />,
          },
        ],
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
