/* eslint-disable react/prop-types */
import { useState } from "react";
import FormLists from "../FormLists";
import EducationForm from "./EducationForm";

export default function ExperienceSection({ allEducation }) {
  const { education, setEducation } = allEducation;

  const [form, setForm] = useState({
    school: "Unviersity Of Odin",
    degree: "BS Of Computer Science",
    start: "12/12/2022",
    end: "12/12/2024",
    additionalInfos: [],
  });

  const [additionalInfo, setAdditionalInfo] = useState("");

  const [selectedId, setSelectedId] = useState(null);
  const isEditing = selectedId != null;

  return (
    <div className="flex flex-col items-center">
      {isEditing ? (
        <EducationForm
          formObj={{ form, setForm }}
          setEducation={setEducation}
          isEditing={isEditing}
          selectedIdObj={{ selectedId, setSelectedId }}
          AdditionalInfoObj={{ additionalInfo, setAdditionalInfo }}
        />
      ) : (
        <>
          <EducationForm
            formObj={{ form, setForm }}
            setEducation={setEducation}
            AdditionalInfoObj={{ additionalInfo, setAdditionalInfo }}
          />
          <FormLists
            title="school"
            formList={education}
            setForm={setForm}
            setFormLists={setEducation}
            setSelectedId={setSelectedId}
          />
        </>
      )}
    </div>
  );
}
