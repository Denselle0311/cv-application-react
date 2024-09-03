/* eslint-disable react/prop-types */
import { useState } from "react";
import FormLists from "../FormLists";
import ExperienceForm from "./ExperienceForm";

export default function ExperienceSection({ allExperience }) {
  const { experience, setExperience } = allExperience;

  const [form, setForm] = useState({
    title: "Software Engineer",
    company: "The Odin Project",
    start: "02/22/2022",
    end: "03/22/2024",
    responsibilities: [],
  });

  const [responsibility, setResponsibility] = useState("");

  const [selectedId, setSelectedId] = useState(null);
  const isEditing = selectedId != null;

  return (
    <div className="flex flex-col items-center">
      {isEditing ? (
        <ExperienceForm
          formObj={{ form, setForm }}
          setExperience={setExperience}
          isEditing={isEditing}
          selectedIdObj={{ selectedId, setSelectedId }}
          responsibilityObj={{ responsibility, setResponsibility }}
        />
      ) : (
        <>
          <ExperienceForm
            formObj={{ form, setForm }}
            setExperience={setExperience}
            responsibilityObj={{ responsibility, setResponsibility }}
          />
          <FormLists
            title="title"
            formList={experience}
            setForm={setForm}
            setFormLists={setExperience}
            setSelectedId={setSelectedId}
          />
        </>
      )}
    </div>
  );
}
