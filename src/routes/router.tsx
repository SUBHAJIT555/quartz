import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../layouts/MainLayout";

import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";

import FinancialEducation from "../pages/FinancialEducation";
import Services from "../pages/Services";
import Remittance from "../pages/Remittance";
import Insights from "../pages/Insights";
import Planning from "../pages/Planning";

import TermsAndConditions from "../pages/TermsAndCondition";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import CookiePolicy from "../pages/CookiePolicy";
import ContactUs from "../pages/ContactUs";

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
        path: "services",
        element: <Services />,
      },
      {
        path: "financial-education",
        element: <FinancialEducation />,
      },
      {
        path: "remittance",
        element: <Remittance />,
      },
      {
        path: "planning",
        element: <Planning />,
      },
      {
        path: "insights",
        element: <Insights />,
      },

      {
        path: "contact-us",
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
        element: <CookiePolicy />,
      },
      {
        path: "*",
        element: <Home />,
      },
    ],
  },
]);
