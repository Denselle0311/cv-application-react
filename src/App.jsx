import { useState } from "react";
import "./App.css";
import Header from "./components/CV/Header";
import EducationCV from "./components/Education/EducationCV";
import EducationSection from "./components/Education/EducationSection";
import ExperienceCV from "./components/Experience/ExperienceCV";
import ExperienceSection from "./components/Experience/ExperienceSection";
import PersonalForm from "./components/PersonalForm";
import SkillCV from "./components/Skill/SkillCv";
import SkillSection from "./components/Skill/SkillSection";

function App() {
  const [personalForm, setPersonalForm] = useState({
    fullName: "Mickey mouse",
    email: "mickeymouse@gmail.com",
    phoneNumber: "1231456789",
    location: "Disney city Club House",
    professional: "Software Engineer",
    objective:
      "I am seeking employment with a company where I can grow professionally and personally.\nI seek challenging opportunities where I can fully use my skills for the success of the organization.\nI want to succeed in a stimulating and challenging environment that will provide me with advancement opportunities.\nI want to excel in this field with hard work, perseverance and dedication.\nI want a highly rewarding career where I can use my skills and knowledge for organizational and personal growth.\nI am seeking a company where I can use my experience and education to help the company meet and surpass its goals.\nI want to succeed in an environment of growth and excellence to meet personal and organizational goals.\nI am seeking a competitive and challenging environment where I can serve your organization and establish a career for myself.",
  });

  const [education, setEducation] = useState([]);
  const [experience, setExperience] = useState([]);
  const [allSKills, setAllSkills] = useState([]);

  return (
    <div className="flex gap-4 max-w-full">
      <div className="flex flex-col gap-3 pt-2">
        <PersonalForm form={{ personalForm, setPersonalForm }} />
        <EducationSection allEducation={{ education, setEducation }} />
        <ExperienceSection allExperience={{ experience, setExperience }} />
        <SkillSection allSKill={{ allSKills, setAllSkills }} />
      </div>
      <div className="flex flex-col border border-slate-500">
        <Header form={personalForm} />
        <div className="px-4 py-2 text-left max-w-xl min-h-28">
          <h2 className="font-bold text-[1.5em] text-left">Education</h2>
          {education.map((e) => (
            <EducationCV key={e.id} form={e.form} />
          ))}
          <hr className="h-[1px] bg-slate-500 mt-3" />
        </div>
        <div className="px-4 py-2 text-left max-w-xl min-h-28">
          <h2 className="font-bold text-[1.5em] text-left">Experience</h2>
          {experience.map((e) => (
            <ExperienceCV key={e.id} form={e.form} />
          ))}
        </div>
        <div className="px-4 py-2 text-left max-w-xl min-h-28">
          <h2 className="font-bold text-[1.5em] text-left">Skills</h2>
          <SkillCV allSKills={allSKills} />
        </div>
      </div>
    </div>
  );
}

export default App;
