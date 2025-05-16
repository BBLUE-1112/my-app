"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
// import { Link, useLocation } from "react-router-dom";
import { Logo, Menu, MenuClose } from "./SVG";

import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";

import useScrollDirection from "../hooks/useScrollDirection";
import useIsScrolled from "../hooks/useIsScrolled";

const Header = () => {
  const [isHoveringSubmenu, setIsHoveringSubmenu] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const scrollDirection = useScrollDirection(100, isHoveringSubmenu);
  const isScrolled = useIsScrolled();
  // const location = useLocation();
  // const scrollDirection = useScrollDirection();
  // const handleMouseEnter = () => {
  //   document.body.classList.add("no-scroll");
  // };

  // const handleMouseLeave = () => {
  //   document.body.classList.remove("no-scroll");
  // };
  const pathname = usePathname(); // Gets current path (e.g., '/dashboard')
  // const searchParams = useSearchParams(); // Gets query params (URLSearchParams object)
  useEffect(
    function () {
      setIsMobileMenuOpen(false);
    },
    [pathname]
  );
  function handleToggle(index) {
    if (activeIndex === index) setActiveIndex(null);
    else {
      setActiveIndex(index);
    }
  }
  return (
    <div
      className={`menu-fixed-wrapper ${
        scrollDirection === "down" ? "hide" : "show"
      } ${isScrolled ? "scrolled" : ""}`}
      onMouseEnter={() => setIsHoveringSubmenu(true)}
      onMouseLeave={() => setIsHoveringSubmenu(isMobileMenuOpen)}
    >
      <div className="d-none d-lg-block">
        <nav>
          <div className="container-fluid header_nav d-flex align-items-center justify-content-between">
            <div className="logo">
              <Link href="/">
                <Logo />
              </Link>
            </div>

            <div className="navmenu_mid">
              <ul>
                <li>
                  <span onClick={(e) => e.preventDefault()}>Services</span>
                  <div
                    // className={`sub-menu ${
                    //   scrollDirection === "down" ? "hide" : "show"
                    // }`}
                    className="sub-menu"
                  >
                    <div className="container-fluid sub-menu-container scrollable-div">
                      <Tab.Container defaultActiveKey={0}>
                        <div className="row">
                          <div className="col-md-4 col-tabs">
                            {/* scrollable-div */}
                            <div className="">
                              <div className="sub-menu-title">
                                <p>Services</p>
                              </div>
                              <Nav variant="pills" className="flex-column">
                                <Nav.Item>
                                  <Nav.Link eventKey={0} as={"button"}>
                                    Digital Marketing Services <span></span>
                                  </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                  <Nav.Link eventKey={1} as={"button"}>
                                    Software Development <span></span>
                                  </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                  <Nav.Link eventKey={2} as={"button"}>
                                    Consulting <span></span>
                                  </Nav.Link>
                                </Nav.Item>
                              </Nav>
                            </div>
                            <div className="reviewed-on">
                              <p>We are Reviewed on</p>
                              <div className="platforms">
                                <a href="">
                                  <img src="images/gwebpro-clutch.png" alt="" />
                                </a>
                                <a href="">
                                  <img
                                    src="images/gwebpro-google-reviews.png"
                                    alt=""
                                  />
                                </a>
                                <a href="">
                                  <img
                                    src="images/gwebpro-glassdoor.png"
                                    alt=""
                                  />
                                </a>
                                <a href="">
                                  <img
                                    src="images/gwebpro-ambitionbox.png"
                                    alt=""
                                  />
                                </a>
                              </div>
                            </div>
                          </div>
                          {/* scrollable-div */}
                          <div className="col-md-8 col-tabs-data">
                            <Tab.Content>
                              <Tab.Pane eventKey={0}>
                                Digital Marketing Services tab data
                              </Tab.Pane>
                              <Tab.Pane eventKey={1}>
                                <div className="row">
                                  <div className="col">
                                    <div className="sub-menu-title">
                                      <p>Software Development</p>
                                      <Link href="/services">
                                        Explore More <span></span>
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                                <div className="row row-cols-2 row-cols-lg-3">
                                  <div className="col">
                                    <div className="title">
                                      <p>
                                        <Link href="/services-level-two">
                                          Development
                                        </Link>
                                      </p>
                                    </div>
                                    <ul className="sub-links">
                                      <li>
                                        <Link href="/services-level-three">
                                          Digital Experience Development
                                        </Link>
                                      </li>
                                      <li>
                                        <Link href="/services-level-three">
                                          Ecommerce Development
                                        </Link>
                                      </li>
                                      <li>
                                        <Link href="/services-level-three">
                                          Website Development
                                        </Link>
                                      </li>
                                      <li>
                                        <Link href="/services-level-three">
                                          Mobile App Development
                                        </Link>
                                      </li>
                                      <li>
                                        <Link href="/services-level-three">
                                          Web Infrastructure & Maintenance
                                        </Link>
                                      </li>
                                      <li>
                                        <Link href="/services-level-three">
                                          Content Management Systems
                                        </Link>
                                      </li>
                                      <li>
                                        <Link href="/services-level-three">
                                          AI & GPT Integration
                                        </Link>
                                      </li>
                                      <li>
                                        <Link href="/services-level-three">
                                          ADA Compliance Services
                                        </Link>
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="col">
                                    <div className="title">
                                      <p>
                                        <Link href="/services-level-two">
                                          Software Solutions
                                        </Link>
                                      </p>
                                    </div>
                                    <ul className="sub-links">
                                      <li>
                                        <Link href="/services-level-three">
                                          Artificial Intelligence
                                        </Link>
                                      </li>
                                      <li>
                                        <Link href="/services-level-three">
                                          AR / VR
                                        </Link>
                                      </li>
                                      <li>
                                        <Link href="/services-level-three">
                                          Autodesk
                                        </Link>
                                      </li>
                                      <li>
                                        <Link href="/services-level-three">
                                          Biometrics
                                        </Link>
                                      </li>
                                      <li>
                                        <Link href="/services-level-three">
                                          Business Intelligence & Analytics
                                        </Link>
                                      </li>
                                      <li>
                                        <Link href="/services-level-three">
                                          Cloud
                                        </Link>
                                      </li>
                                      <li>
                                        <Link href="/services-level-three">
                                          CRM
                                        </Link>
                                      </li>
                                      <li>
                                        <Link href="/services-level-three">
                                          Database
                                        </Link>
                                      </li>
                                      <li>
                                        <Link href="/services-level-three">
                                          Document Management
                                        </Link>
                                      </li>
                                      <li>
                                        <Link href="/services-level-three">
                                          Embedded Software
                                        </Link>
                                      </li>
                                      <li>
                                        <Link href="/services-level-three">
                                          ERP
                                        </Link>
                                      </li>
                                      <li>
                                        <Link href="/services-level-three">
                                          IT Service Management
                                        </Link>
                                      </li>
                                      <li>
                                        <Link href="/services-level-three">
                                          Kiosk
                                        </Link>
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="col">
                                    <div className="title">
                                      <p>
                                        <Link href="/services-level-two">
                                          Design
                                        </Link>
                                      </p>
                                    </div>
                                    <ul className="sub-links">
                                      <li>
                                        <Link href="/services-level-three">
                                          Website Design
                                        </Link>
                                      </li>
                                      <li>
                                        <Link href="/services-level-three">
                                          Social Media Design
                                        </Link>
                                      </li>
                                      <li>
                                        <Link href="/services-level-three">
                                          Ecommerce Website Design
                                        </Link>
                                      </li>
                                      <li>
                                        <Link href="/services-level-three">
                                          Email Marketing Testing & Design
                                        </Link>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </Tab.Pane>
                              <Tab.Pane eventKey={2}>
                                Consulting tab data
                              </Tab.Pane>
                            </Tab.Content>
                          </div>
                        </div>
                      </Tab.Container>
                    </div>
                  </div>
                </li>
                <li>
                  <Link href="/about">About Us</Link>
                  <div
                    // className={`sub-menu ${
                    //   scrollDirection === "down" ? "hide" : "show"
                    // }`}
                    className="sub-menu sm"
                  >
                    {/* <div className="container-fluid sub-menu-container scrollable-div"></div> */}

                    <ul>
                      <li>
                        <Link href="/portfolio">Portfolio</Link>
                      </li>
                      <li>
                        <Link href="/seo-detail">SEO Detail</Link>
                      </li>
                      <li>
                        <Link href="/web-detail">Web Detail</Link>
                      </li>
                      <li>
                        <Link href="/blog">Blog</Link>
                      </li>
                      {/* <li>
                        <Link href="/about">
                          Learn About GWebPro Marketing Inc.
                        </Link>
                      </li> */}
                    </ul>
                  </div>
                </li>
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </div>

            <div className="navmenu_end">
              <ul>
                {/* <li>
                  <Link href="/contact">Get a Quote</Link>
                </li> */}
                <li>
                  <Link href="/contact">Request For Proposal</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <div
        className={`d-block d-lg-none ${isMobileMenuOpen ? "isOpen" : ""} ${
          scrollDirection === "down" ? "hide" : "show"
        } ${isScrolled ? "scrolled" : ""}`}
        onMouseEnter={() => setIsHoveringSubmenu(true)}
        onMouseLeave={() => setIsHoveringSubmenu(isMobileMenuOpen)}
      >
        <nav>
          <div className="container-fluid header_nav d-flex align-items-center justify-content-between">
            <div className="logo">
              <Link href="/">
                <Logo />
              </Link>
            </div>
            <div
              className={`toggle d-lg-none ${isMobileMenuOpen ? "isOpen" : ""}`}
              onClick={() => setIsMobileMenuOpen((is) => !is)}
            >
              <button>{isMobileMenuOpen ? <MenuClose /> : <Menu />}</button>
            </div>
            <div
              className={`mobile-menu  ${
                isMobileMenuOpen ? "d-block" : "d-none"
              }`}
            >
              <div className="mobile-menu-block scrollable-div">
                <div className="accordion accordion_type_header_menu">
                  <div
                    className={`accordion_item ${
                      activeIndex === 0 ? "active" : ""
                    }`}
                  >
                    <div
                      className="accordion_title"
                      onClick={() => handleToggle(0)}
                      style={{ cursor: "pointer" }}
                    >
                      <div>Services</div>
                      <span></span>
                    </div>
                    <div className={`collapsible`}>
                      <div className="hidden">
                        <div className="accordion_content">
                          <div className="accordion">
                            <div className="accordion_item active">
                              <div className="accordion_title">
                                <Link href="/services">
                                  Digital Marketing Services
                                </Link>
                              </div>
                              <div className="collapsible">
                                <div className="hidden">
                                  <div className="accordion_content">
                                    {/* row-cols-md-2 */}
                                    <div className="row  gy-3">
                                      <div className="col"></div>
                                      <div className="col"></div>
                                      <div className="col"></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="accordion_item active">
                              <div className="accordion_title">
                                <Link href="/services">
                                  Software Development
                                </Link>
                              </div>
                              <div className="collapsible">
                                <div className="hidden">
                                  <div className="accordion_content">
                                    {/* row-cols-md-2 */}
                                    <div className="row  gy-3">
                                      <div className="col">
                                        <div className="title">
                                          <p>
                                            <Link href="/services-level-two">
                                              Development
                                            </Link>
                                          </p>
                                        </div>
                                        <ul className="sub-links">
                                          <li>
                                            <Link href="/services-level-three">
                                              Digital Experience Development
                                            </Link>
                                          </li>
                                          <li>
                                            <Link href="/services-level-three">
                                              Ecommerce Development
                                            </Link>
                                          </li>
                                          <li>
                                            <Link href="/services-level-three">
                                              Website Development
                                            </Link>
                                          </li>
                                          <li>
                                            <Link href="/services-level-three">
                                              Mobile App Development
                                            </Link>
                                          </li>
                                          <li>
                                            <Link href="/services-level-three">
                                              Web Infrastructure & Maintenance
                                            </Link>
                                          </li>
                                          <li>
                                            <Link href="/services-level-three">
                                              Content Management Systems
                                            </Link>
                                          </li>
                                          <li>
                                            <Link href="/services-level-three">
                                              AI & GPT Integration
                                            </Link>
                                          </li>
                                          <li>
                                            <Link href="/services-level-three">
                                              ADA Compliance Services
                                            </Link>
                                          </li>
                                        </ul>
                                      </div>
                                      <div className="col">
                                        <div className="title">
                                          <p>
                                            <Link href="/services-level-two">
                                              Software Solutions
                                            </Link>
                                          </p>
                                        </div>
                                        <ul className="sub-links">
                                          <li>
                                            <Link href="/services-level-three">
                                              Artificial Intelligence
                                            </Link>
                                          </li>
                                          <li>
                                            <Link href="/services-level-three">
                                              AR / VR
                                            </Link>
                                          </li>
                                          <li>
                                            <Link href="/services-level-three">
                                              Autodesk
                                            </Link>
                                          </li>
                                          <li>
                                            <Link href="/services-level-three">
                                              Biometrics
                                            </Link>
                                          </li>
                                          <li>
                                            <Link href="/services-level-three">
                                              Business Intelligence & Analytics
                                            </Link>
                                          </li>
                                          <li>
                                            <Link href="/services-level-three">
                                              Cloud
                                            </Link>
                                          </li>
                                          <li>
                                            <Link href="/services-level-three">
                                              CRM
                                            </Link>
                                          </li>
                                          <li>
                                            <Link href="/services-level-three">
                                              Database
                                            </Link>
                                          </li>
                                          <li>
                                            <Link href="/services-level-three">
                                              Document Management
                                            </Link>
                                          </li>
                                          <li>
                                            <Link href="/services-level-three">
                                              Embedded Software
                                            </Link>
                                          </li>
                                          <li>
                                            <Link href="/services-level-three">
                                              ERP
                                            </Link>
                                          </li>
                                          <li>
                                            <Link href="/services-level-three">
                                              IT Service Management
                                            </Link>
                                          </li>
                                          <li>
                                            <Link href="/services-level-three">
                                              Kiosk
                                            </Link>
                                          </li>
                                        </ul>
                                      </div>
                                      <div className="col">
                                        <div className="title">
                                          <p>
                                            <Link href="/services-level-two">
                                              Design
                                            </Link>
                                          </p>
                                        </div>
                                        <ul className="sub-links">
                                          <li>
                                            <Link href="/services-level-three">
                                              Website Design
                                            </Link>
                                          </li>
                                          <li>
                                            <Link href="/services-level-three">
                                              Social Media Design
                                            </Link>
                                          </li>
                                          <li>
                                            <Link href="/services-level-three">
                                              Ecommerce Website Design
                                            </Link>
                                          </li>
                                          <li>
                                            <Link href="/services-level-three">
                                              Email Marketing Testing & Design
                                            </Link>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="accordion_item active">
                              <div className="accordion_title">
                                <Link href="/services">Consulting</Link>
                              </div>
                              <div className="collapsible">
                                <div className="hidden">
                                  <div className="accordion_content">
                                    {/* row-cols-md-2 */}
                                    <div className="row gy-3">
                                      <div className="col"></div>
                                      <div className="col"></div>
                                      <div className="col"></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className={`accordion_item ${
                      activeIndex === 1 ? "active" : ""
                    }`}
                  >
                    <div
                      className="accordion_title"
                      onClick={() => handleToggle(1)}
                      style={{ cursor: "pointer" }}
                    >
                      <div>
                        <Link href="/about">About Us</Link>
                      </div>
                      <span></span>
                    </div>
                    <div className={`collapsible`}>
                      <div className="hidden">
                        <div className="accordion_content">
                          <ul>
                            <li>
                              <Link href="/portfolio">Portfolio</Link>
                            </li>
                            <li>
                              <Link href="/seo-detail">SEO Detail</Link>
                            </li>
                            <li>
                              <Link href="/web-detail">Web Detail</Link>
                            </li>
                            <li>
                              <Link href="/blog">Blog</Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className={`accordion_item ${
                      activeIndex === 2 ? "active" : ""
                    }`}
                  >
                    <div
                      className="accordion_title"
                      onClick={() => handleToggle(2)}
                      style={{ cursor: "pointer" }}
                    >
                      <div>
                        <Link href="/contact">Contact</Link>
                      </div>
                    </div>
                    {/* <div className={`collapsible`}>
                      <div className="hidden">
                        <div className="accordion_content">
                          <div></div>
                        </div>
                      </div>
                    </div> */}
                  </div>
                </div>
                <div className="navmenu_end">
                  <ul>
                    {/* <li>
                      <Link href="/contact">Get a Quote</Link>
                    </li> */}
                    <li>
                      <Link href="/contact">Request For Proposal</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
