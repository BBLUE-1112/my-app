import Image from "next/image";
import Link from "next/link";

// "use client";
// import { useRef, useState } from "react";

import CheckMobile from "../components/CheckMobile";
import CheckScreenWidth from "../components/CheckScreenWidth";
import BrandMarket from "../components/BrandMarket";
import { LogoGwebproLetterG } from "../components/SVG";
import SectionPromiseSlider from "./SectionPromiseSlider";
import AboutPageVideoPlayer from "./VideoPlayer";

export default function About() {
  // const [isPlaying, setIsPlaying] = useState(false);
  // const videoRef = useRef(null); // Reference to the video element
  // function handlePlay(e) {
  //   // console.log(e);
  //   // videoRef.current.play();
  //   // setIsPlaying(true);
  //   e.preventDefault();
  //   if (videoRef.current) {
  //     // Check if videoRef.current exists
  //     videoRef.current.play();
  //     setIsPlaying(true);
  //   } else {
  //     console.error("Video element not found.");
  //   }
  // }

  return (
    <>
      <section className="services-banner inner-page-banner">
        <div className="container-fluid">
          <div className="row">
            <div className="col text-center">
              <div className="banner-content">
                <div className="position-relative title_blk">
                  <h1>
                    <span>About </span>
                    <br /> GWebPro Marketing Inc.
                  </h1>
                </div>
                <CheckScreenWidth setWidth={991}>
                  <div className="video-container">
                    <video
                      src="/images/services-banner.mp4"
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
      <section className="home_abt about_page pad_cmn_blk">
        <div className="container">
          <div className="row gy-4">
            {/* <CheckScreenWidth setWidth={991}> */}
            <div className="col-lg-5">
              <div className="gwebpro-logo">
                <video
                  src="/images/logo-bg-compressed.mp4"
                  autoPlay
                  muted
                  loop
                ></video>
                <LogoGwebproLetterG />
              </div>
            </div>
            {/* </CheckScreenWidth> */}
            <div className="col-lg-6 offset-xl-1">
              <div className="title_blk">
                <h2>
                  We’re a leader in tech-enabled digital marketing solutions
                </h2>
              </div>
              <div className="title_blk">
                <p>
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 BC, making it over 2000 years old. Richard McClintock,
                  a Latin professor at Hampden-Sydney College in Virginia,
                  looked up one of the more obscure Latin words, consectetur,
                  from a Lorem Ipsum passage, and going through the cites of the
                  word in classical literature, discovered the undoubtable
                  source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of
                  &quot;de Finibus Bonorum et Malorum&quot; (The Extremes of
                  Good and Evil) by Cicero, written in 45 BC. This book is a
                  treatise on the theory of ethics, very popular during the
                  Renaissance. The first line of Lorem Ipsum, &quot;Lorem ipsum
                  dolor sit amet..&quot;, comes from a line in section 1.10.32.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="google-ranking pad_cmn_blk">
        <div className="container">
          <div className="row gy-3">
            <div className="col-md-6">
              <div className="title_blk">
                <div className="img">
                  <Image
                    src="/images/google-ranking.png"
                    alt=""
                    width={241}
                    height={105}
                  />
                </div>
                <h2>
                  We’ve Driven Over
                  <br />
                  1,312,500
                </h2>
                <p>
                  Page <span>1 Rankings on Google</span> for our clients
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <Image
                src="/images/google-ranking-left.png"
                alt=""
                width={793}
                height={411}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="about_director pad_cmn_blk">
        <div className="container">
          <div className="row align-items-center gx-md-3 gx-lg-4 gx-xl-5 gy-4">
            <div className="col-lg-5">
              <div className="video-container">
                {/* onClick={handlePlay} */}
                {/* {!isPlaying && (
                  <Image
                    src="/images/video_play_btn_blue.svg"
                    alt=""
                    width={85}
                    height={85}
                  />
                )} */}
                {/* <video
                  src="/images/sample-video.mp4"
                  poster="/images/video_poster.png"
                  preload="none"
                  // controls={isPlaying}
                  // ref={videoRef}
                ></video> */}
                <AboutPageVideoPlayer />
              </div>
            </div>
            <div className="col-lg-7">
              <div className="title_blk">
                <h2>The Goal Of</h2>
                <Image
                  src="/images/gwebpro_logo.png"
                  alt=""
                  width={345}
                  height={97}
                />
                <h2>From The Mouth Of Our Director</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pad_cmn_blk cta_dark">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="title_blk has-btn-grp has-dark-bg">
                <h2>We keep the focus on driving results.</h2>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don&apos;t
                  look even slightly believable.
                </p>
                <Link href="/">Portfolio</Link>
                <Link href="/">Get In Touch</Link>
              </div>
              {/* <div className="btn-group"></div> */}
            </div>
          </div>
        </div>
      </section>
      <section className="pad_cmn_blk section-accomplishment">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="title_blk">
                <h2>
                  How Did <br />
                  Ignite Visibility Start?
                </h2>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don&apos;t
                  look even slightly believable.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="title_blk">
                <h2>
                  Over The Years <br />
                  We Have Acomplished
                </h2>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don&apos;t
                  look even slightly believable.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="accomplishments">
                <div className="img">
                  <Image
                    src="/images/google-partners.png"
                    alt=""
                    width={167}
                    height={134}
                  />
                </div>
                <div className="img">
                  <Image
                    src="/images/google-streetview.png"
                    alt=""
                    width={327}
                    height={135}
                  />
                </div>
                <div className="img">
                  <Image
                    src="/images/gwebpro-semrush.png"
                    alt=""
                    width={129}
                    height={131}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-industry-leadership pad_cmn_blk">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div className="floating-img">
                <Image
                  src="/images/jas-saran-industry-leadership.png"
                  alt=""
                  width={622}
                  height={696}
                />
              </div>
            </div>
            <div className="col-md-7">
              <div className="title_blk">
                <h2>
                  Industry <br />
                  Expert Leadership
                </h2>
              </div>
              <div className="title_blk">
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don&apos;t
                  look even slightly believable. If you are going to use a
                  passage of Lorem Ipsum, you need to be sure there isn&apos;t
                  anything embarrassing hidden in the middle of text.
                </p>
                <p>
                  All the Lorem Ipsum generators on the Internet tend to repeat
                  predefined chunks as necessary, making this the first true
                  generator on the Internet. It uses a dictionary of over 200
                  Latin words, combined with a handful of model sentence
                  structures, to generate Lorem Ipsum which looks reasonable.
                  The generated Lorem Ipsum is therefore always free from
                  repetition, injected humour, or non-characteristic words etc.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pad_cmn_blk section-promise">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="title_blk center text-center">
                <h2>Our Promise</h2>
              </div>
            </div>
          </div>
          <CheckScreenWidth setWidth={991}>
            <div className="row gy-4">
              <div className="col-md-6 col-lg-4">
                <div className="card-you_get">
                  <div className="icon">
                    <Image
                      src="/images/workstation_yellow.png"
                      width={84}
                      height={84}
                      alt=""
                    />
                  </div>
                  <p className="title">Results</p>
                  <p className="text">
                    Lorem Ipsum has been the industry&apos;s standard dummy text
                    ever since the 1500s, when an unknown printer took a galley
                    of type and scrambled it to make a type specimen book.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="card-you_get">
                  <div className="icon">
                    <Image
                      src="/images/workstation_green.png"
                      width={84}
                      height={84}
                      alt=""
                    />
                  </div>
                  <p className="title">Results</p>
                  <p className="text">
                    Lorem Ipsum has been the industry&apos;s standard dummy text
                    ever since the 1500s, when an unknown printer took a galley
                    of type and scrambled it to make a type specimen book.{" "}
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="card-you_get">
                  <div className="icon">
                    <Image
                      src="/images/workstation_purple.png"
                      width={84}
                      height={84}
                      alt=""
                    />
                  </div>
                  <p className="title">Results</p>
                  <p className="text">
                    Lorem Ipsum has been the industry&apos;s standard dummy text
                    ever since the 1500s, when an unknown printer took a galley
                    of type and scrambled it to make a type specimen book.
                  </p>
                </div>
              </div>
            </div>
          </CheckScreenWidth>
          <CheckMobile setWidth={992}>
            {/* <div className="row">
              <div className="col swiper-slider-promise">
                <Swiper slidesPerView={"auto"}>
                  <SwiperSlide>
                    <div className="card-you_get">
                      <div className="icon">
                        <Image
                          src="/images/workstation_yellow.png"
                          alt=""
                          width={84}
                          height={84}
                        />
                      </div>
                      <p className="title">Results</p>
                      <p className="text">
                        Lorem Ipsum has been the industry&apos;s standard dummy
                        text ever since the 1500s, when an unknown printer took
                        a galley of type and scrambled it to make a type
                        specimen book.
                      </p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="card-you_get">
                      <div className="icon">
                        <Image
                          src="/images/workstation_green.png"
                          alt=""
                          width={84}
                          height={84}
                        />
                      </div>
                      <p className="title">Results</p>
                      <p className="text">
                        Lorem Ipsum has been the industry&apos;s standard dummy
                        text ever since the 1500s, when an unknown printer took
                        a galley of type and scrambled it to make a type
                        specimen book.{" "}
                      </p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="card-you_get">
                      <div className="icon">
                        <Image
                          src="/images/workstation_purple.png"
                          alt=""
                          width={84}
                          height={84}
                        />
                      </div>
                      <p className="title">Results</p>
                      <p className="text">
                        Lorem Ipsum has been the industry&apos;s standard dummy
                        text ever since the 1500s, when an unknown printer took
                        a galley of type and scrambled it to make a type
                        specimen book.
                      </p>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div> */}
            <SectionPromiseSlider />
          </CheckMobile>
        </div>
      </section>
      <div className="about-partners">
        <BrandMarket
          title="The Leader In Digital Marketing"
          description="The top-rated software and digital marketing firm in the Canada, with more than 200 five-star reviews from past clients"
        />
      </div>
      <section className="featured-in pad_cmn_blk">
        <div className="container-fluid">
          <div className="row">
            <div className="col featured-in-col">
              <div className="title_blk text-center">
                <h2>We’ve Been Featured In</h2>
              </div>
              <div className="featured-in-brands">
                <div className="brand-logo">
                  <Image src="/images/inc.png" alt="" width={96} height={35} />
                </div>
                <div className="brand-logo">
                  <Image
                    src="/images/huffington-post.png"
                    alt=""
                    width={152}
                    height={45}
                  />
                </div>
                <div className="brand-logo">
                  <Image
                    src="/images/engadget.png"
                    alt=""
                    width={117}
                    height={49}
                  />
                </div>
                <div className="brand-logo">
                  <Image
                    src="/images/entrepreneur.png"
                    alt=""
                    width={148}
                    height={56}
                  />
                </div>
                <div className="brand-logo">
                  <Image
                    src="/images/forbes.png"
                    alt=""
                    width={118}
                    height={31}
                  />
                </div>
                <div className="brand-logo">
                  <Image
                    src="/images/blogto.png"
                    alt=""
                    width={111}
                    height={33}
                  />
                </div>
                <div className="brand-logo">
                  <Image
                    src="/images/thestar.png"
                    alt=""
                    width={182}
                    height={28}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="services-cta pad_cmn_blk">
        <div className="container">
          <div className="row">
            <div className="col has-btn-grp has-btn-single">
              <p>Service With US</p>
              <h2>Enhance Your Business With Our Services</h2>
              <Link href="/">Consult With Our Experts</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
