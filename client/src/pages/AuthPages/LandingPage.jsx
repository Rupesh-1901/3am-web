/* eslint-disable no-unused-vars */
// src/pages/AuthPages/LandingPage.jsx

import { useEffect, useState } from "react";
import "./LandingPage.css";
import announcementLanding from "../../assets/announcementLanding.png";
import liveJob from "../../assets/liveJob.svg";
import landingBullets from "../../assets/landingBullets.svg";
import companiesIcon from "../../assets/companiesIcon.svg";
import candidatesIcon from "../../assets/candidatesIcon.svg";
import landingBulletsWhite from "../../assets/landingBulletsWhite.svg";
import companyLogo from "../../assets/companyLogo.svg";
import SimpleSlider from "../../components/ui/SimpleSlider";
import Navbar from "../../components/ui/Navbar";
import NavigationFooter from "../../components/ui/NavigationFooter";
import { useNavigate } from "react-router-dom";
import ReactPlayer from "react-player";

const LandingPage = () => {
  useEffect(() => {
    document.title = `JobSeeker - Landing`;
    return () => {
      document.title = "JobSeeker";
    };
  }, []);

  const navigate = useNavigate();
  const [countrySelected, setCountrySelected] = useState("India");
  const [openSearchDropdown, setOpenSearchDropdown] = useState(false);

  // **1. Language State Management**
  const [language, setLanguage] = useState("English"); // Default language is English

  // **2. Translations Object**
  const translations = {
    English: {
      connectingProviders: "Connecting Providers with Seekers",
      findThePerfectJob: "Find the Perfect Job that Matches Your Interests & Skills.",
      loremIpsum:
        "Aliquam vitae turpis in diam convallis finibus in at risus. Nullam in scelerisque leo, eget sollicitudin velit vestibulum.",
      whatDoWeDo: "What do we do?",
      whyUs: "Why us?",
      clientsTestimonial: "Clients Testimonial",
      findAJob: "Find A Job",
      postAJob: "Post A Job",
      signUp: "Sign Up",
      language: "Language",
      liveJob: "Live Job",
      companies: "Companies",
      candidates: "Candidates",
      newJobs: "New Jobs",
      jobTitlePlaceholder: "Job title, keyword, company",
    },
    Arabic: {
      connectingProviders: "ربط المزودين بالباحثين",
      findThePerfectJob: "ابحث عن الوظيفة المثالية التي تتناسب مع اهتماماتك ومهاراتك.",
      loremIpsum:
        "أليكوام فيتاي توربيس إن ديام كونفاليس فينيبوس إن أت ريسوس. نولام إن سكيليريسك لي، إيجيت سولليسيتودين فيليت vestibulum.",
      whatDoWeDo: "ماذا نفعل؟",
      whyUs: "لماذا نحن؟",
      clientsTestimonial: "آراء العملاء",
      findAJob: "ابحث عن وظيفة",
      postAJob: "نشر وظيفة",
      signUp: "سجل",
      language: "اللغة",
      liveJob: "وظائف حية",
      companies: "شركات",
      candidates: "مرشحون",
      newJobs: "وظائف جديدة",
      jobTitlePlaceholder: "عنوان الوظيفة، كلمة مفتاحية، شركة",
    },
  };

  // Safely access the current translations
  const currentTranslations = translations[language] || translations["English"];

  return (
    <div>
      {/* **3. Passing language and setLanguage as props to Navbar** */}
      <Navbar language={language} setLanguage={setLanguage} />
      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "100%",
              boxShadow: "0px -1.08px 0px 0px #E4E5E8 inset",
              padding: "10px 0px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <section
              className="homeSectionWidth searchSection"
              style={{ padding: "0px" }}
            >
              <div
                style={{ display: "flex", gap: "50px", alignItems: "center" }}
              >
                <div>
                  <img src={companyLogo} alt="Company Logo" />
                </div>

                <div className="searchInput">
                  <div className="search-bar-container">
                    {/* Search Icon */}
                    <span className="search-icon">
                      <svg
                        width="27"
                        height="27"
                        viewBox="0 0 27 27"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.7359 21.3732C9.96323 21.3732 6.09423 17.5042 6.09423 12.7315C6.09423 7.95885 9.96323 4.08984 14.7359 4.08984C19.5086 4.08984 23.3776 7.95885 23.3776 12.7315C23.3776 17.5042 19.5086 21.3732 14.7359 21.3732Z"
                          stroke="#0066FF"
                          strokeWidth="1.62031"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M3.93378 23.5334L8.63269 18.8345"
                          stroke="#0066FF"
                          strokeWidth="1.62031"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    {/* Input Field */}
                    <input
                      type="text"
                      className="search-input"
                      placeholder={currentTranslations.jobTitlePlaceholder}
                    />
                    {/* Country Selector */}
                    <div
                      className="country-selector"
                      onClick={() => setOpenSearchDropdown((prev) => !prev)}
                    >
                      <svg
                        width="13"
                        height="8"
                        viewBox="0 0 13 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.02955 1.68896L6.43059 7.09001L11.8316 1.68896"
                          stroke="#9199A3"
                          strokeWidth="1.62031"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "2px",
                          padding: "10px",
                        }}
                      >
                        <img
                          src="https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg"
                          alt="India Flag"
                          className="country-flag"
                        />
                        {countrySelected}
                      </div>
                      {openSearchDropdown && (
                        <div className="country-dropdown">
                          <div onClick={() => setCountrySelected("India")}>
                            <img
                              src="https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg"
                              alt="India Flag"
                              className="country-flag"
                            />
                            India
                          </div>
                          {/* Add more countries here if needed */}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div
                style={{ display: "flex", gap: "20px", alignItems: "center" }}
              >
                <div>
                  <div
                    className="featuredJobButton cursor"
                    style={{
                      border: "1.08px solid #CCCCCC",
                      borderRadius: "10px",
                      fontSize: "16px",
                    }}
                    onClick={() => {
                      navigate("/auth/login", {
                        state: { logInUser: "employee" },
                      });
                    }}
                  >
                    {currentTranslations.findAJob}
                  </div>
                </div>
                <div>
                  <div
                    className="featuredJobButton cursor"
                    style={{
                      backgroundColor: "#0A65CC",
                      color: "white",
                      borderRadius: "10px",
                      fontSize: "16px",
                    }}
                    onClick={() => {
                      navigate("/auth/login", {
                        state: { logInUser: "candidate" },
                      });
                    }}
                  >
                    {currentTranslations.postAJob}
                  </div>
                </div>
                <div>
                  <div
                    className="featuredJobButton cursor"
                    style={{
                      border: "1.08px solid #CCCCCC",
                      borderRadius: "10px",
                      fontSize: "16px",
                    }}
                    onClick={() => {
                      navigate("/auth/register");
                    }}
                  >
                    {currentTranslations.signUp}
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Main Content Sections */}
          <section
            className="homeSectionWidth"
            style={{ padding: "174px 20px" }}
          >
            <div>
              <div>
                <div
                  className="headingTopography"
                  style={{
                    fontSize: "106px",
                    lineHeight: "113px",
                    textAlign: "center",
                    fontWeight: 800,
                  }}
                >
                  {/* **4. Dynamic Translated Text** */}
                  {currentTranslations.connectingProviders}
                </div>
                <div
                  className="headingTopography2"
                  style={{
                    fontSize: "36px",
                    lineHeight: "64px",
                    textAlign: "center",
                  }}
                >
                  {currentTranslations.findThePerfectJob}
                </div>
                <div
                  className="headingTopography3"
                  style={{
                    fontSize: "18px",
                    lineHeight: "28px",
                    textAlign: "center",
                  }}
                >
                  {currentTranslations.loremIpsum}
                </div>
                {/* <img style={{ margin: "0px -25px" }} src={homePageHeroSearch} alt="" /> */}
              </div>
            </div>
          </section>
          <section
            className="homeSectionWidth"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "450px",
            }}
          >
            <div className="section2">
              <div>
                <img className="section2Img" src={liveJob} alt="Live Job" />
                <div className="section2NumberFont">1,75,324</div>
                <div className="section2Font">
                  {currentTranslations.liveJob}
                </div>
              </div>
              <div>
                <img
                  className="section2Img"
                  src={companiesIcon}
                  alt="Companies"
                />
                <div className="section2NumberFont">1,75,324</div>
                <div className="section2Font">
                  {currentTranslations.companies}
                </div>
              </div>
              <div>
                <img
                  className="section2Img"
                  src={candidatesIcon}
                  alt="Candidates"
                />
                <div className="section2NumberFont">1,75,324</div>
                <div className="section2Font">
                  {currentTranslations.candidates}
                </div>
              </div>
              <div>
                <img className="section2Img" src={liveJob} alt="New Jobs" />
                <div className="section2NumberFont">1,75,324</div>
                <div className="section2Font">
                  {currentTranslations.newJobs}
                </div>
              </div>
            </div>
          </section>
          <section
            className="heroSection"
            style={{ marginBottom: "110px", justifyContent: "flex-start" }}
          >
            <img
              style={{
                height: "1151px",
                width: "auto",
                //  marginTop: "-151px"
              }}
              src={announcementLanding}
              alt="Announcement Landing"
              loading="lazy"
            />
            <div
              style={{ display: "flex", flexDirection: "column", width: "40%" }}
            >
              <div>
                <div
                  className="headingTopography"
                  style={{
                    fontSize: "106px",
                    lineHeight: "113px",
                    textAlign: "left",
                    fontWeight: 800,
                  }}
                >
                  {currentTranslations.whatDoWeDo}
                </div>
                <div className="headingTopography2">
                  {language === "Arabic"
                    ? currentTranslations.findThePerfectJob
                    : currentTranslations.findThePerfectJob}
                </div>
                <div className="headingTopography3">
                  {language === "Arabic"
                    ? currentTranslations.loremIpsum
                    : currentTranslations.loremIpsum}
                </div>
                <div
                  className="whatWedoBox"
                  style={{
                    width: "563px",
                    backgroundColor: "#D9D9D9",
                    borderRadius: "30px",
                    padding: "73px 49px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    marginTop: "50px",
                  }}
                >
                  <img
                    className="whatWedoBoxBullets"
                    style={{ flexShrink: "0", width: "100px", height: "101px" }}
                    src={landingBullets}
                    alt="Bullets"
                  />
                  <img
                    className="whatWedoBoxBulletsWhite"
                    style={{ flexShrink: "0", width: "100px", height: "101px" }}
                    src={landingBulletsWhite}
                    alt="Bullets White"
                  />

                  <div
                    style={{ paddingLeft: "13px" }}
                    className="whatWedoBoxContent"
                  >
                    {language === "Arabic"
                      ? "لوريم إيبسوم دولار سيت أميت، كونسكتتور أديبيسيسكينج إليت. أنيمي أليكيود سونت مايوريس أت نيهيل كوو، ديكتا فيليت بيرفيرينديس تيمبورينس نيمو؟"
                      : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi aliquid sunt maiores at nihil quo, dicta velit perferendis temporibus nemo?"}
                  </div>
                </div>
                {/* Repeat the 'whatWedoBox' div as needed, with translated content */}
                <div
                  className="whatWedoBox"
                  style={{
                    width: "563px",
                    backgroundColor: "#D9D9D9",
                    borderRadius: "30px",
                    padding: "73px 49px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    marginTop: "50px",
                  }}
                >
                  <img
                    className="whatWedoBoxBullets"
                    style={{ flexShrink: "0", width: "100px", height: "101px" }}
                    src={landingBullets}
                    alt="Bullets"
                  />
                  <img
                    className="whatWedoBoxBulletsWhite"
                    style={{ flexShrink: "0", width: "100px", height: "101px" }}
                    src={landingBulletsWhite}
                    alt="Bullets White"
                  />

                  <div
                    style={{ paddingLeft: "13px" }}
                    className="whatWedoBoxContent"
                  >
                    {language === "Arabic"
                      ? "لوريم إيبسوم دولار سيت أميت، كونسكتتور أديبيسيسكينج إليت. أنيمي أليكيود سونت مايوريس أت نيهيل كوو، ديكتا فيليت بيرفيرينديس تيمبورينس نيمو؟"
                      : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi aliquid sunt maiores at nihil quo, dicta velit perferendis temporibus nemo?"}
                  </div>
                </div>
                {/* Additional whatWedoBox divs with translations */}
                <div
                  className="whatWedoBox"
                  style={{
                    width: "563px",
                    backgroundColor: "#D9D9D9",
                    borderRadius: "30px",
                    padding: "73px 49px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    marginTop: "50px",
                  }}
                >
                  <img
                    className="whatWedoBoxBullets"
                    style={{ flexShrink: "0", width: "100px", height: "101px" }}
                    src={landingBullets}
                    alt="Bullets"
                  />
                  <img
                    className="whatWedoBoxBulletsWhite"
                    style={{ flexShrink: "0", width: "100px", height: "101px" }}
                    src={landingBulletsWhite}
                    alt="Bullets White"
                  />

                  <div
                    style={{ paddingLeft: "13px" }}
                    className="whatWedoBoxContent"
                  >
                    {language === "Arabic"
                      ? "لوريم إيبسوم دولار سيت أميت، كونسكتتور أديبيسيسكينج إليت. أنيمي أليكيود سونت مايوريس أت نيهيل كوو، ديكتا فيليت بيرفيرينديس تيمبورينس نيمو؟"
                      : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi aliquid sunt maiores at nihil quo, dicta velit perferendis temporibus nemo?"}
                  </div>
                </div>
                <div
                  className="whatWedoBox"
                  style={{
                    width: "563px",
                    backgroundColor: "#D9D9D9",
                    borderRadius: "30px",
                    padding: "73px 49px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    marginTop: "50px",
                  }}
                >
                  <img
                    className="whatWedoBoxBullets"
                    style={{ flexShrink: "0", width: "100px", height: "101px" }}
                    src={landingBullets}
                    alt="Bullets"
                  />
                  <img
                    className="whatWedoBoxBulletsWhite"
                    style={{ flexShrink: "0", width: "100px", height: "101px" }}
                    src={landingBulletsWhite}
                    alt="Bullets White"
                  />

                  <div
                    style={{ paddingLeft: "13px" }}
                    className="whatWedoBoxContent"
                  >
                    {language === "Arabic"
                      ? "لوريم إيبسوم دولار سيت أميت، كونسكتتور أديبيسيسكينج إليت. أنيمي أليكيود سونت مايوريس أت نيهيل كوو، ديكتا فيليت بيرفيرينديس تيمبورينس نيمو؟"
                      : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi aliquid sunt maiores at nihil quo, dicta velit perferendis temporibus nemo?"}
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section
            style={{
              backgroundColor: "#0A65CC",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              minHeight: "750px",
            }}
          >
            <section
              className="homeSectionWidth"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div style={{ width: "45%" }}>
                <div
                  className="headingTopography"
                  style={{
                    fontSize: "106px",
                    lineHeight: "113px",
                    textAlign: "left",
                    fontWeight: 800,
                    color: "#FEFEFE",
                  }}
                >
                  {currentTranslations.whyUs}
                </div>
                <div
                  className="headingTopography2"
                  style={{
                    color: "#FEFEFE",
                    fontSize: "36px",
                    lineHeight: "64px",
                  }}
                >
                  {currentTranslations.findThePerfectJob}
                </div>
                <div
                  className="headingTopography3"
                  style={{
                    color: "#FEFEFE",
                    fontSize: "18px",
                    lineHeight: "28px",
                  }}
                >
                  {currentTranslations.loremIpsum}
                </div>
              </div>
              <div style={{ width: "50%" }}>
                <div
                  style={{
                    height: "400px",
                    borderRadius: "32px",
                    maxWidth: "793px",
                    border: "8px solid #292D32",
                    padding: "6px",
                    backgroundColor: "black",
                  }}
                >
                  <ReactPlayer
                    url="https://www.youtube.com/shorts/QkIJfqQWWCk"
                    playing={true} // Autoplay video
                    loop={true} // Loop video
                    muted={true} // Mute video
                    controls={false} // Hide controls
                    width="100%"
                    height="100%"
                  />
                </div>
              </div>
            </section>
          </section>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#f1f2f4",
            }}
          >
            <section
              className="homeSectionWidth"
              style={{ marginBottom: "100px" }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <div
                  className="section3Heading"
                  style={{ marginBottom: "30px" }}
                >
                  {currentTranslations.clientsTestimonial}
                </div>
                <SimpleSlider />
              </div>
            </section>
          </div>
        </div>
        <NavigationFooter />
      </div>
    </div>
  );
};

export default LandingPage;

















