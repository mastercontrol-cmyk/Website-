import { createBrowserRouter } from "react-router";
import { Layout } from "./layout/Layout";
import { Home } from "./pages/Home";
import { Features } from "./pages/Features";
import { Hardware } from "./pages/Hardware";
import { AppPage } from "./pages/AppPage";
import { Pricing } from "./pages/Pricing";
import { About } from "./pages/About";
import { Careers } from "./pages/Careers";
import { Blog } from "./pages/Blog";
import { BlogPost } from "./pages/BlogPost";
import { Contact } from "./pages/Contact";
import { Privacy } from "./pages/Privacy";
import { Terms } from "./pages/Terms";
import { Cookies } from "./pages/Cookies";
import {
  WaitlistConfirmation,
  ShopRegistration,
  ShopThankYou,
  BecomeAHelper,
  HelperThankYou,
  Download,
  NotFound,
} from "./pages/ActionPages";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "features", Component: Features },
      { path: "hardware", Component: Hardware },
      { path: "app", Component: AppPage },
      { path: "pricing", Component: Pricing },
      { path: "about", Component: About },
      { path: "careers", Component: Careers },
      { path: "blog", Component: Blog },
      { path: "blog/:slug", Component: BlogPost },
      { path: "contact", Component: Contact },
      { path: "privacy", Component: Privacy },
      { path: "terms", Component: Terms },
      { path: "cookies", Component: Cookies },
      { path: "waitlist-confirmation", Component: WaitlistConfirmation },
      { path: "shop-registration", Component: ShopRegistration },
      { path: "shop-thank-you", Component: ShopThankYou },
      { path: "become-a-helper", Component: BecomeAHelper },
      { path: "helper-thank-you", Component: HelperThankYou },
      { path: "download", Component: Download },
      { path: "*", Component: NotFound },
    ],
  },
]);
