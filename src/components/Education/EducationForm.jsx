/* eslint-disable react/prop-types */
import ExtraInfo from "../ExtraInfo";
import InputGroup from "../InputGroup";

export default function EducationForm({
  formObj,
  isEditing,
  setEducation,
  selectedIdObj,
  AdditionalInfoObj,
}) {
  const { form, setForm } = formObj;
  const { additionalInfo, setAdditionalInfo } = AdditionalInfoObj;
  const { selectedId, setSelectedId } = selectedIdObj || {};

  function clearInputs() {
    setForm({
      school: "",
      degree: "",
      start: "",
      end: "",
      additionalInfos: [],
    });
  }

  return (
    <>
      <h2 className="font-bold">Education</h2>
      <form className="flex flex-col border p-6 gap-2">
        <InputGroup
          label="University/School"
          type="text"
          placeholder="University Of Odin"
          value={form.school}
          onChange={(e) =>
            setForm((prev) => ({
              ...prev,
              school: e.target.value,
            }))
          }
        />
        <InputGroup
          label="Degree"
          type="text"
          placeholder="Bachelor of Computer science"
          value={form.degree}
          onChange={(e) =>
            setForm((prev) => ({
              ...prev,
              degree: e.target.value,
            }))
          }
        />
        <InputGroup
          label="Start Date"
          type="text"
          placeholder="DD/MM/YYYY"
          value={form.start}
          onChange={(e) =>
            setForm((prev) => ({
              ...prev,
              start: e.target.value,
            }))
          }
        />
        <InputGroup
          label="End Date"
          type="text"
          placeholder="DD/MM/YYYY"
          value={form.end}
          onChange={(e) =>
            setForm((prev) => ({
              ...prev,
              end: e.target.value,
            }))
          }
        />
        <ExtraInfo
          formObj={{ form, setForm }}
          itemArray="additionalInfos"
          itemName="additionalInfo"
          item={additionalInfo}
          setItem={setAdditionalInfo}
          label="Additional Information"
          placeholder="Enter additional information here"
        />
      </form>
      {isEditing ? (
        <span className="flex gap-5 text-white justify-center">
          <button
            onClick={() => {
              clearInputs();
              setSelectedId(null);
            }}
          >
            Cancel
          </button>
          <button
            onClick={() => {
              setEducation((prev) =>
                prev.map((e) => {
                  if (e.id == selectedId) {
                    return {
                      id: selectedId,
                      form,
                    };
                  }
                  return e;
                })
              );

              clearInputs();

              setSelectedId(null);
            }}
          >
            Save
          </button>
        </span>
      ) : (
        <button
          className="text-white"
          onClick={() => {
            setEducation((prev) => [
              ...prev,
              {
                id: generateId(prev.length),
                form,
              },
            ]);
            clearInputs();
            console.log(form);
            setAdditionalInfo("");
          }}
        >
          Add Education
        </button>
      )}
    </>
  );
}

function generateId(len) {
  return crypto.randomUUID() + len;
}
