import { Suspense, lazy, useState } from "react";
import { Route, Routes } from "react-router-dom";

const Router = () => {
  const [isLoading, setIsLoading] = useState();

  const Home = lazy(() => import("../modules/baselayout/BaseLayout"));
  const Contact = lazy(() => import("../modules/contact/Contact"));
  const AboutUs = lazy(() => import("../modules/aboutus/AboutUs"));
  const Services = lazy(() => import("../modules/services/Services"));
  const ErrorPage = lazy(() => import("../modules/404/ErrorPage"));
  const ServiceDetail = lazy(() =>
    import("../modules/servicedetail/ServiceDetail")
  );
  const Portfolio = lazy(() => import("../modules/portfolio/Portfolio"));
  const PortfolioDetail = lazy(() =>
    import("../modules/portfoliodetail/PortfolioDetail")
  );
  const Blog = lazy(() => import("../modules/blog/Blog"));
  const BlogDetail = lazy(() => import("../modules/blogdetail/BlogDetail"));
  const UnderConstruction = lazy(() =>
    import("../modules/underconstruction/UnderConstruction")
  );

  return (
    <Suspense
      fallback={
        isLoading && (
          <div
            style={{
              height: "100vh",
              width: "100%",
              backgroundColor: "white",
            }}
          ></div>
        )
      }
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/service-detail" element={<ServiceDetail />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio-detail" element={<PortfolioDetail />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog-detail" element={<BlogDetail />} />
        <Route path="/underconstruction" element={<UnderConstruction />} />

        {/* Error page  */}

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Suspense>
  );
};
export default Router;
