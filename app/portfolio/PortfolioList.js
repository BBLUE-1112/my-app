"use client";
import Image from "next/image";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

export default function PortfolioList() {
  return (
    <section className="section-portfolio-list">
      <div className="container">
        <div className="row">
          <div className="col">
            <Tabs defaultActiveKey={0} className="mb-3">
              <Tab eventKey={0} title="Web Development">
                <div className="row">
                  <div className="col-12">
                    <div className="title_blk text-center">
                      <h2>Featured Case Study</h2>
                    </div>
                  </div>
                </div>
                <div className="portfolio-rows">
                  <div className="row portfolio-row">
                    <div className="col-md-6 has-btn-grp">
                      <h3>GTA EV Chargers</h3>
                      <h4>
                        Web Design and Development for a Professional Business
                      </h4>
                      <p>
                        Lorem Ipsum has been the industry&apos;s standard dummy
                        text ever since the 1500s, when an unknown printer took
                        a galley of type and scrambled it to make a type
                        specimen book.
                      </p>
                      <ul>
                        <li>Web Development</li>
                        <li>SEO</li>
                        <li>Pay Per Click</li>
                      </ul>
                      <a href="#">View Case Study</a>
                      <a href="#">View Live Site</a>
                    </div>
                    <div className="col-md-6">
                      <Image
                        src="/images/portfolio-gta-ev.webp"
                        alt=""
                        width={739}
                        height={477}
                      />
                    </div>
                  </div>
                  <div className="row portfolio-row">
                    <div className="col-md-6 has-btn-grp">
                      <h3>Trust Mortgages</h3>
                      <h4>
                        Web Design and Development for a Professional Business
                      </h4>
                      <p>
                        Lorem Ipsum has been the industry&apos;s standard dummy
                        text ever since the 1500s, when an unknown printer took
                        a galley of type and scrambled it to make a type
                        specimen book.
                      </p>
                      <ul>
                        <li>Web Development</li>
                        <li>SEO</li>
                        <li>Pay Per Click</li>
                      </ul>
                      <a href="">View Case Study</a>
                      <a href="">View Live Site</a>
                    </div>
                    <div className="col-md-6">
                      <Image
                        src="/images/portfolio-trust-mortgages.webp"
                        alt=""
                        width={739}
                        height={477}
                      />
                    </div>
                  </div>
                  <div className="row portfolio-row">
                    <div className="col-md-6 has-btn-grp">
                      <h3>Woodbine Banquest Hall</h3>
                      <h4>
                        Web Design and Development for a Professional Business
                      </h4>
                      <p>
                        Lorem Ipsum has been the industry&apos;s standard dummy
                        text ever since the 1500s, when an unknown printer took
                        a galley of type and scrambled it to make a type
                        specimen book.
                      </p>
                      <ul>
                        <li>Web Development</li>
                        <li>SEO</li>
                        <li>Pay Per Click</li>
                      </ul>
                      <a href="">View Case Study</a>
                      <a href="">View Live Site</a>
                    </div>
                    <div className="col-md-6">
                      <Image
                        src="/images/portfolio-woodbine.webp"
                        alt=""
                        width={739}
                        height={477}
                      />
                    </div>
                  </div>
                </div>
                <div className="row view-more">
                  <div className="col-12">
                    <button>
                      View more{" "}
                      <Image
                        src="/images/rounded-rarr.svg"
                        alt=""
                        width={56}
                        height={17}
                      />
                    </button>
                  </div>
                </div>
              </Tab>
              <Tab eventKey={1} title="SEO">
                SEO
              </Tab>
              <Tab eventKey={2} title="Pay Per Click">
                Pay Per Click
              </Tab>
              <Tab eventKey={3} title="Social Media Management">
                Social Media Management
              </Tab>
              <Tab eventKey={4} title="UX/UI">
                UX/UI
              </Tab>
              <Tab eventKey={5} title="Consultation And Audit">
                Consultation And Audit
              </Tab>
              <Tab
                as={"button"}
                title={
                  <Image
                    src="/images/search-icon.svg"
                    width={26}
                    height={26}
                    alt=""
                  />
                }
              ></Tab>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
}
