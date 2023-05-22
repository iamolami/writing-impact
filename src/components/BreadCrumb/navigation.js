import DisplayGraphics from "../../pages/graphics";
import HomePage from "../../pages/home";
import DisplayProducts from "../../pages/products";
import DisplayServices from "../../pages/service";
import DisplayText from "../../pages/text-content";
import DisplayAuth from "../../pages/authentication"
import DisplaySample from "../../pages/samples";

const rootPath = process.env.PUBLIC_URL;

const navigations = [
  {
    Component: HomePage,
    path: "/",
    exact: true,
    breadcrumbName: "Home",
  },
  {
    Component: DisplayProducts,
    path: "/products",
    breadcrumbName: "Products",
  },
  {
    Component: DisplayServices,
    path: "/services",
    breadcrumbName: "Services",
  },
  {
    path: "/services/text-content",
    Component: DisplayText,
    breadcrumbName: "Text Content",
  },
  {
    path: "/services/graphics",
    Component: DisplayGraphics,
    breadcrumbName: "Graphics",
  },
  {
    path: "/auth",
    Component: DisplayAuth,
    breadcrumbName: "Authentication",
  },
  {
    path: "/samples",
    Component: DisplaySample,
    breadcrumbName: "Sample Contents",
  }
];

export default navigations;
export { rootPath };