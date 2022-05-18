import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";
import EducationIcon from "../../assets/Resume/education.svg";
import WorkIcon from "../../assets/Resume/work-history.svg";
import SkillIcon from "../../assets/Resume/programming-skills.svg";
import ProjectsIcon from "../../assets/Resume/projects.svg";
import InterestsIcon from "../../assets/Resume/interests.svg";

export default function Resume(props) {
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffSetStyle, setCarousalOffSetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  const resumeBullets = [
    { label: "Education", logoSrc: EducationIcon },
    { label: "Work History", logoSrc: WorkIcon },
    { label: "Programming Skills", logoSrc: SkillIcon },
    { label: "Projects", logoSrc: ProjectsIcon },
    { label: "Interests", logoSrc: InterestsIcon },
  ];

  const programmingSkillDetails = [
    { skill: "Javascript", ratingPercentage: 50 },
    { skill: "React Js", ratingPercentage: 90 },
    { skill: "Express Js", ratingPercentage: 55 },
    { skill: "Node Js", ratingPercentage: 90 },
    { skill: "Mongo Db", ratingPercentage: 25 },
    { skill: "Bootstrap / Material UI", ratingPercentage: 55 },
    { skill: "HTML", ratingPercentage: 90 },
    { skill: "CSS", ratingPercentage: 90 },
  ];

  const projectDetails = [
    {
      title: "Personal Portfolio Website",
      duration: { fromDate: "2021", toDate: "2022" },
      description:
        "A Personal Portfolio website to showcase all my details and projects at one place.",
      subHeading:
        "Technologies Used: React JS, Bootsrap, RxJs, Node Js, Express Js",
    },
    {
      title: "Js Blog Using React Router",
      duration: { fromDate: "2021", toDate: "2022" },
      description:
        "Implementation of a Js Blog using core concepts from React Js",
      subHeading: "Technologies Used: React JS, React Router, JSX, Json",
    },
    {
      title: "Weather App",
      duration: { fromDate: "2021", toDate: "2022" },
      description: "Pulls live weather data into custom made widgets.",
      subHeading: "Technologies Used: React JS, Bootsrap",
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"Mentorship Program Under Active Industry React Developers"}
        subHeading={
          "React, CSS, HTML, Javascript, Node.Js"
        }
        fromDate={"2021"}
        toDate={"2022"}
      />
      <ResumeHeading
        heading={"University of Texas at Dallas"}
        subHeading={"BACHELOR OF ARTS AND TECHNOLOGY IN ATEC"}
        fromDate={"2013"}
        toDate={"2015"}
      />
      <ResumeHeading
        heading={"Collin College"}
        subHeading={"ASSOCIATE OF SCIENCE IN COMPUTER SCIENCE"}
        fromDate={"2011"}
        toDate={"2013"}
      />
    </div>,
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
      <a classname = "worksite" href="https://www.hikersweather.com">
                        
        <ResumeHeading
          heading={"Hikers Weather Intern"}
          subHeading={
            "React Native Engineer"
          }
          fromDate={"2022"}
          toDate={"Present"}
          description=" Currently working as a frontend React Native engineer."
        />
        </a>
      </div>
    </div>,

    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,
    <div className="resume-screen-container" key="projects">
      {projectDetails.map((projectDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectDetails.title}
          subHeading={projectDetails.subHeading}
          description={projectDetails.description}
          fromDate={projectDetails.duration.fromDate}
          toDate={projectDetails.duration.toDate}
        />
      ))}
    </div>,

    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Hiking"
        description="Apart from being a tech enthusiast and a code writer, I also love to hike with my dogs on mountain trails near Boulder Colorado and Estes Park"
      />
      <ResumeHeading
        heading="Videography"
        description="Capturing the excitement of the day with a short essence video is really fun. Always leads to funny moments of chaos with my girlfriend and our pups"
      />
      <ResumeHeading
        heading="Board Games"
        description="I like to challenge my mind against my peers and have board game nights with friends and co-workers. My girlfriend and I love the atmosphere of adventure"
      />
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;
    let newCarouslOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };
    setCarousalOffSetStyle(newCarouslOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={`${bullet.logoSrc}`}
          alt="b"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreen = () => {
    return (
      <div
        style={carousalOffSetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((resumeDetail) => resumeDetail)}
      </div>
    );
  };
  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);
  return (
    <div className="resume-container screen-container fade-in" id={props.id || ""}>
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My Formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>
          <div className="resume-bullet-details">{getResumeScreen()}</div>
        </div>
      </div>
    </div>
  );
}
