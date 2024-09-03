/* eslint-disable react/prop-types */
import ExtraInfo from "../ExtraInfo";
import InputGroup from "../InputGroup";

export default function ExperienceForm({
  formObj,
  isEditing,
  selectedIdObj,
  setExperience,
  responsibilityObj,
}) {
  const { form, setForm } = formObj;
  const { selectedId, setSelectedId } = selectedIdObj || {};
  const { responsibility, setResponsibility } = responsibilityObj;

  return (
    <>
      <h2 className="font-bold text-[1.5em]">Professional Experience</h2>
      <form className="flex flex-col border p-6 gap-2">
        <InputGroup
          label="Title/Position"
          type="text"
          placeholder="Software Engineer"
          value={form.title}
          onChange={(e) =>
            setForm((prev) => ({
              ...prev,
              title: e.target.value,
            }))
          }
        />
        <InputGroup
          label="Company"
          type="text"
          placeholder="The Odin Project"
          value={form.company}
          onChange={(e) =>
            setForm((prev) => ({
              ...prev,
              company: e.target.value,
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
          itemArray="responsibilities"
          itemName="responsibility"
          item={responsibility}
          setItem={setResponsibility}
          label="Key Responsibilities"
          placeholder="Enter a responsibility & press '+' button to add"
        />
      </form>
      {isEditing ? (
        <span className="flex gap-5 text-white justify-center">
          <button
            onClick={() => {
              setForm({
                title: "",
                company: "",
                start: "",
                end: "",
                responsibilities: [],
              });
              setSelectedId(null);
            }}
          >
            Cancel
          </button>
          <button
            onClick={() => {
              setExperience((prev) =>
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

              setForm({
                title: "",
                company: "",
                start: "",
                end: "",
                responsibilities: [],
              });

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
            setExperience((prev) => [
              ...prev,
              {
                id: generateId(prev.length),
                form,
              },
            ]);
            setForm({
              title: "",
              company: "",
              start: "",
              end: "",
              responsibilities: [],
            });
            console.log(form);
            setResponsibility("");
          }}
        >
          Add Experience
        </button>
      )}
    </>
  );
}

function generateId(len) {
  return crypto.randomUUID() + len;
}
