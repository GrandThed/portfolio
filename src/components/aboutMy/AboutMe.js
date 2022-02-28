import React from "react";
import "./aboutMe.scss";

const AboutMe = () => {
  return (
    <div className="about">
      <h2>About me</h2>

      <div className="about-body">
        <p>
          I'm{" "}
          <span>
            <a
              target={"_blank"}
              rel="noreferrer"
              href="https://www.linkedin.com/in/benjamin-ca%C3%B1as-7b8ab61b8/"
            >
              Benjamin Cañas
            </a>
          </span>
          ,{" "}
          <span>
            <a
              target={"_blank"}
              rel="noreferrer"
              href="https://es.reactjs.org/"
            >
              React developer
            </a>
          </span>{" "}
          with one year of profecional experience and learning some{" "}
          <span>
            <a target={"_blank"} rel="noreferrer" href="https://flutter.dev/">
              Flutter
            </a>
          </span>
          , currently working for{" "}
          <span>
            <a
              target={"_blank"}
              rel="noreferrer"
              href="https://www.linkedin.com/company/bitlogic.io/mycompany/"
            >
              Bitlogic
            </a>
          </span>
          . Living in{" "}
          <span>
            <a
              target={"_blank"}
              rel="noreferrer"
              href="https://www.google.com/maps/place/Argentina/data=!4m2!3m1!1s0x95bccaf5f5fdc667:0x3d2f77992af00fa8?sa=X&ved=2ahUKEwjroJW0oZ_2AhU0qpUCHaE8Ds0Q8gF6BAgiEAE"
            >
              Argentina
            </a>
          </span>
          . I learned{" "}
          <span>
            <a
              target={"_blank"}
              rel="noreferrer"
              href="https://www.freecodecamp.org/granthed"
            >
              frontend by my own
            </a>{" "}
          </span>{" "}
          but i never learned how to redact text as you can tell.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
