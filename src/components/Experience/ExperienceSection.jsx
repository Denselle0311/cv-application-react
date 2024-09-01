import { useState } from "react";
import FormLists from "../FormLists";
import ExperienceForm from "./ExperienceForm";

export default function ExperienceSection() {
  const [experience, setExperience] = useState([]);
  const [form, setForm] = useState({
    title: "",
    company: "",
    start: "",
    end: "",
    responsibilities: [],
  });

  const [responsibility, setResponsibility] = useState("");

  const [selectedId, setSelectedId] = useState(null);
  const isEditing = selectedId != null;

  return (
    <div className="flex flex-col items-center gap-4">
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
