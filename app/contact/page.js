import Link from "next/link";
import Image from "next/image";
import AddressTab from "../components/AddressTab";
import CheckScreenWidth from "../components/CheckScreenWidth";
import NavLink from "../components/NavLink";
import apiService from "../apiServices/apiService"; // Import the service

export default async function Contact() {
  //fetch address data
  const settingsdata = await apiService.getacfData("acf/v1/options/");
  const addrsData = settingsdata.address_list;
  const socialData = settingsdata.social_site_list;

  //fetch page data
  const data = await apiService.getPagedata("wp/v2/pages/8");
  const pageData = data.acf;

  return (
    <>
      <section className="services-banner inner-page-banner">
        <div className="container-fluid">
          <div className="row">
            <div className="col text-center">
              <div className="banner-content">
                <div className="position-relative contact-page-banner">
                  <h1>
                    Contact G Web Pro Marketing Inc. <br />{" "}
                    <span>Let’s start a project together.</span>
                  </h1>
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
        <Link href="/">Home</Link>/<NavLink href="/contact">Contact</NavLink>
      </div>
      <section className="section-contact-form pad_cmn_blk">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="contact-form-title">
                <h2>Meet your dedicated product team</h2>
                <p>
                  Lorem Ipsum has been the industry&apos;s standard dummy text
                  ever since the 1500s.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="contact-form">
                <form>
                  <div className="row">
                    <div className="col-md-6">
                      <input
                        type="text"
                        name=""
                        id=""
                        placeholder="First Name *"
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="text"
                        name=""
                        id=""
                        placeholder="Last Name *"
                      />
                    </div>
                    <div className="col-md-6">
                      <input type="email" name="" id="" placeholder="Email *" />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="tel"
                        name=""
                        id=""
                        placeholder="Phone Number *"
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="text"
                        name=""
                        id=""
                        placeholder="Company Name *"
                      />
                    </div>
                    <div className="col-md-6">
                      <select name="" id="">
                        <option value="" defaultValue>
                          Services
                        </option>
                        <option value="web-development">Web Development</option>
                        <option value="app-development">App Development</option>
                        <option value="ui-ux-design">UI/UX Design</option>
                        <option value="cloud-computing">Cloud Computing</option>
                        <option value="cyber-security">Cyber Security</option>
                        <option value="data-analytics">Data Analytics</option>
                        <option value="it-consulting">IT Consulting</option>
                      </select>
                    </div>
                    <div className="col-md-12">
                      <input
                        type="text"
                        name=""
                        id=""
                        placeholder="Subject *"
                      />
                    </div>
                    <div className="col-md-12">
                      <textarea name="" id="" placeholder="Message"></textarea>
                    </div>
                    <div className="col-md-12">
                      <button>Submit Message</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="address_blk contact-form-page pad_cmn_blk">
        <div className="container">
          <AddressTab addressList={addrsData} />
        </div>
      </section>
      <section className="pad_cmn_blk">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="contact_blk">
                <div>
                  <div className="logo">
                    <Image
                      src="/images/gwebpro_call.png"
                      alt=""
                      width={32}
                      height={32}
                    />
                  </div>
                  <div className="text">
                    <p>Connect With Us On Call</p>
                    <Link href="tel:1-888-445-3334">1-888-445-3334</Link>
                  </div>
                </div>
                <div>
                  <div className="logo">
                    <Image
                      src="/images/gwebpro_email.png"
                      alt=""
                      width={32}
                      height={32}
                    />
                  </div>
                  <div className="text">
                    <p>Connect With Us Via Email</p>
                    <Link href="mailto:info@samplemail.com">
                      info@samplemail.com
                    </Link>
                  </div>
                </div>
              </div>
              <div className="socials_blk">
                <div>
                  <p>Connect On Our Socials</p>
                </div>
                <div>
                  <Link href="/">
                    <i className="fa-brands fa-facebook-f"></i>
                  </Link>

                  <Link href="/">
                    <i className="fa-brands fa-x-twitter"></i>
                  </Link>

                  <Link href="/">
                    <i className="fa-brands fa-linkedin-in"></i>
                  </Link>

                  <Link href="/">
                    <i className="fa-brands fa-pinterest-p"></i>
                  </Link>

                  <Link href="/">
                    <i className="fa-brands fa-youtube"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {pageData.banner_clutch_data ? (
        <section className="pad_cmn_blk contact-page">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="title_blk text-center">
                  <h2>The Leader In Digital Marketing</h2>
                  <p>
                    The top-rated software and digital marketing firm in the
                    Canada, with more than 200 five-star reviews from past
                    clients
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col widgets-col">
                <div className="widgets-container">
                  {pageData.banner_clutch_data.map((item, i) => (
                    <div className="widget" key={i}>
                      <iframe
                        width="100%"
                        height="100%"
                        src={item.clutch_iframe_link}
                        title={item.clutch_iframe_title}
                      ></iframe>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <span></span>
      )}
    </>
  );
}
