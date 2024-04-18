import React from 'react'

const Education = () => {
  return (
    <section id= "education"> 
    <div>
      <h1 className="education-head">Education </h1>
      <div className="education">
        <div className="school">
          <p className="year">2014-2016</p>
          <h3>Matric</h3>
          <h5>Scientific Model School Islamabad,Pakistan</h5>
        </div>
        <div className="college">
          <p className="year">2016-2018</p>
          <h3>Pre-Engineering</h3>
          <h5>Punjab Group of College (Ayub park Campus) Islamabad,Pakistan</h5>
        </div>
        <div className="university">
          <p className="year">2019-2023</p>
          <h3>Bachleors in Computer Science</h3>
          <h5>
            Capital University of Science and Technology(CUST)
            Islamabad,Pakistan
          </h5>
          <p>Relavent Course Work:</p>
          <ul>
            <li>Intrduction To Programming</li>
            <li>Object Oriented Programming</li>
            <li>Data Structure</li>
            <li>Artificial Intelligence</li>
            <li>Data Science</li>
            <li>ADesign And Algorithm</li>
            <li>Web Application</li>
          </ul>
        </div>
      </div>
    </div>
    
</section>
  );
}

export default Education
