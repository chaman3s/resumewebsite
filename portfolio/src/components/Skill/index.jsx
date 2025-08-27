import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChalkboardTeacher } from "@fortawesome/free-solid-svg-icons";

export default function Skill({data}) {
  return (
    <section id="skills">
      <h1 className="section-heading mb75px">
        <span>
          <FontAwesomeIcon icon={faChalkboardTeacher} />
        </span>
        <span> SKILLS </span>
      </h1>

      <div className="skills-display">
        {data.map(
          (skill, index) => (
            <div className="skill-bar" key={index}>
              <div className="skill-progress">
                <div className="skill-name">
                  <span>{skill}</span>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
}
