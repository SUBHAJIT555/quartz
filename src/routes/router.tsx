import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../layouts/MainLayout";

import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";
import FinancialEducation from "../pages/FinancialEducation";
import Services from "../pages/Services";
import Remittance from "../pages/Remittance";
import Insights from "../pages/Insights";
import Planning from "../pages/Planning";

import TermsAndConditions from "../pages/TermsAndCondition";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import CookiePolicy from "../pages/CookiePolicy";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "", element: <Home /> },
      {
        path: "about-us",
        element: <AboutUs />,
      },
      {
        path: "Services",
        element: <Services />,
      },
      {
        path: "FinancialEducation",
        element: <FinancialEducation />,
      },
      {
        path: "Remittance",
        element: <Remittance />,
      },
      {
        path: "Planning",
        element: <Planning />,
      },
      {
        path: "Insights",
        element: <Insights />,
      },

      {
        path: "ContactUs",
        element: <ContactUs />,
      },
      {
        path: "TermsAndConditions",
        element: <TermsAndConditions />,
      },
      {
        path: "PrivacyPolicy",
        element: <PrivacyPolicy />,
      },
      {
        path: "CookiePolicy",
        element: <CookiePolicy />
      },
      {
        path: "*",
        element: <Home />,
      },
    ],
  },
]);
