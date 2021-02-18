import React from 'react'

import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/apton-icons.css";
import "../assets/css/animate.min.css";
import "swiper/swiper-bundle.min.css";
import "../assets/css/fontawesome-all.min.css";
import "../assets/css/style.css";
import "../assets/css/responsive.css";
import "react-modal-video/css/modal-video.min.css";

import Layout from "../components/Layout";
import MobileMenu from "../components/MobileMenu";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
// import BlogHome from "../components/BlogHome";
// import CTAThree from "../components/CTAThree";
import Contact from "../components/Contact";
import Services from "../components/Services";
import CTAOne from "../components/CTAOne";
import FunFact from "../components/FunFact";
import CTATwo from "../components/CTATwo";
import Team from "../components/Team";
import Pricing from "../components/Pricing";
import VideoOne from "../components/VideoOne";
import AppScreen from "../components/AppScreen";
import FAQ from "../components/FAQ";
// import Clients from "../components/Clients";
// import Testimonials from "../components/Testimonials";

const HomePage = ({data}) => (
  <div>

    <Layout pageTitle="volatile commerce | Home Page">
      <Header
        btnClass="main-nav__btn"
        extraClassName="site-header-one__fixed-top"
        logo={data.logo}
      />
      <MobileMenu />
      <Banner  bannerMoc={data.bannerMoc}     bannerShape={data.bannerShape}/>
      <Services />
      <CTAOne bannerMoc2={data.bannerMoc2}/>
      <FunFact />
      <Pricing />
     
      <AppScreen appScreens={data.appScreens} />
      <FAQ />
      <Contact contactImg={data.contactImg}   />
      <Footer  logo={data.logo}/> 
    </Layout>
  </div>
);

export default HomePage;

export const pageQuery = graphql`
query{
  bannerShape:file(relativePath: { eq: "shapes/banner-shape-1-1.png" }) {
    childImageSharp {
      fluid(maxWidth:1008) {
        ...GatsbyImageSharpFluid_withWebp_tracedSVG 
      }
    }
  }
  
  logo:file(relativePath: { eq: "logo.png" }) {
    childImageSharp {
      fluid(maxWidth:129,quality:90) {
        ...GatsbyImageSharpFluid_withWebp_tracedSVG 
      }
    }
  }
  bannerMoc:file(relativePath: { eq: "mockup1.png" }) {
    childImageSharp {
      fluid(maxWidth:443,quality:75) {
        ...GatsbyImageSharpFluid_withWebp_tracedSVG 
      }
    }
  }
  bannerMoc2:file(relativePath: { eq: "mockup2.png" }) {
    childImageSharp {
      fluid(maxWidth:843,quality:75) { 
        ...GatsbyImageSharpFluid_withWebp_tracedSVG 
      }
    }
  }
  contactImg:file(relativePath: { eq: "contact-1-1.jpg" }) {
    childImageSharp {
      fluid(maxWidth:568) { 
        ...GatsbyImageSharpFluid_withWebp_tracedSVG 
      }
    }
  }
  appScreens:  allFile(filter: {relativeDirectory: {eq: "screens"}}) {
    edges {
      node {
        childImageSharp{
						fluid(maxWidth: 289,quality:75){
              ...GatsbyImageSharpFluid_withWebp_tracedSVG 
          }
        }
      }
    }
  }
}
`