import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Services from './pages/Services.jsx';
import Blog from './pages/Blog.jsx';
import Pricing from './pages/Pricing.jsx';
import Contact from './pages/Contact.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path:"/about",
        element: <About />
      },
      {
        path: "/services",
        element: <Services />
      },
      {
        path: "/blog",
        element: <Blog />
      },
      {
        path: "/pricing",
        element: <Pricing />
      },
      {
        path: "/contact",
        element: <Contact />
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
