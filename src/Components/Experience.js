import React from "react";

const ExperienceItem = ({
  company,
  date,
  location,
  role,
  skills,
  responsibilities,
}) => {
  return (
    <div className="experience-item">
      <div className="company-date">
        <div className="company">{company}</div>
        <div className="date">{date}</div>
        <div className="location">{location}</div>
      </div>
      <div className="role">
        <h3>{role}</h3>
        <div className="skill-flex">
          <h5>Skills:</h5>
          <p>{skills.join(" | ")}</p>
        </div>
      </div>
      <div className="job-roles">
        <h3>Roles and Responsibilities</h3>
        <ul>
          {responsibilities.map((responsibility, index) => (
            <li key={index}>{responsibility}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Experience = () => {
  const experiences = [
    {
      company: "Ivory Solutions",
      date: "Feb 2024 - Present",
      location: "Islamabad, Pakistan",
      role: "Front-end Developer",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Tailwind CSS",
        "Firebase",
      ],
      responsibilities: [
        "My first Role",
        "Second role",
        "Third role",
        "Fourth role",
      ],
    },
    {
      company: "Center for Advanced Research in Engineering (CARE)",
      date: "Jul 2023 - Sep 2023",
      location: "Islamabad, Pakistan",
      role: "Front-end Developer",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Tailwind CSS",
        "Firebase",
      ],
      responsibilities: [
        "My first Role",
        "Second role",
        "Third role",
        "Fourth role",
      ],
    },
    {
      company: "WORK",
      date: "Nov 2020 - March 2021",
      location: "Islamabad, Pakistan",
      role: "Client Service Representative",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Tailwind CSS",
        "Firebase",
      ],
      responsibilities: [
        "Specialized in a Home Insurance campaign...",
        "Developed strong communication skills...",
        "Achieved fluency in English...",
        
      ],
    },
    {
      company: "Shark Technologies",
      date: "Dec 2018 - Jun 2019",
      location: "Islamabad, Pakistan",
      role: "Client Service Representative",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Tailwind CSS",
        "Firebase",
      ],
      responsibilities: [
        "Conducted outbound calls to potential customers...",
        "Engaged with customers professionally...",
        "Adapted quickly to changing scripts and strategies...",
      ],
    },
  ];

  return (
    <div>
      <h1 className="experience-head">Experience</h1>
      <div className="main-experience">
        {experiences.map((experience, index) => (
           
          <ExperienceItem
        
            key={index}
            company={experience.company}
            date={experience.date}
            location={experience.location}
            role={experience.role}
            skills={experience.skills}
            responsibilities={experience.responsibilities}
          />
        ))}
      </div>
    </div>
  );
};

export default Experience;
