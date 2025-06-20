import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import ErrorPage from './components/ErrorPage.tsx'
import CreditListing from './components/CreditListing.tsx'
import SingleCreditView from './components/SingleCreditView.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <CreditListing />
      },
      {
        path: "details/:id",
        element: <SingleCreditView />
      }
    ],
  },
  {
    path: "*",
    element: <ErrorPage />
  }

]);
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
