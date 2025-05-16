import NavLink from "../components/NavLink";
import CheckScreenWidth from "../components/CheckScreenWidth";
import BrandMarket from "../components/BrandMarket";
import PortfolioList from "./PortfolioList";
import apiService from "../apiServices/apiService";

export default async function Portfolio() {
  //fetch brands data
  const brdata = await apiService.getacfData("acf/v1/leader-brands/");
  const brandData = brdata;
  console.log(brandData.brand_logo_list);
  return (
    <>
      <section className="services-banner inner-page-banner">
        <div className="container-fluid">
          <div className="row">
            <div className="col text-center">
              <div className="banner-content">
                <div className="position-relative title_blk">
                  <h1>
                    Our Latest <span>Work</span>
                  </h1>
                  <p>
                    Our goal is to nurture your vision and provide innovative,
                    custom solutions for all your marketing needs. At GWebPro
                    Marketing Inc, we understand the value of your brand. We
                    provide a range of customized services including branding,
                    website design & development, marketing consultation, SEO,
                    and more.
                  </p>
                </div>
                <CheckScreenWidth setWidth={991}>
                  <div className="video-container">
                    <video
                      src="images/services-banner.mp4"
                      autoPlay
                      muted
                      loop
                    ></video>
                  </div>
                </CheckScreenWidth>
                <div className="scroll"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="breadcrumb">
        <NavLink href="/">Home</NavLink>/
        <NavLink href="/portfolio">Portfolio</NavLink>
      </div>
      <PortfolioList />
      <BrandMarket
        title="The Leader In Digital Marketing"
        description="The top-rated software and digital marketing firm in the Canada, with more than 200 five-star reviews from past clients"
        brandLogo={brandData.brand_logo_list}
      />
    </>
  );
}
