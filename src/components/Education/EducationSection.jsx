import { useState } from "react";
import FormLists from "../FormLists";
import EducationForm from "./EducationForm";

export default function ExperienceSection() {
  const [education, setEducation] = useState([]);
  const [form, setForm] = useState({
    school: "",
    degree: "",
    start: "",
    end: "",
    additionalInfos: [],
  });

  const [additionalInfo, setAdditionalInfo] = useState("");

  const [selectedId, setSelectedId] = useState(null);
  const isEditing = selectedId != null;

  return (
    <div className="flex flex-col items-center gap-4">
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
