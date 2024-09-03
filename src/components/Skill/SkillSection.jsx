/* eslint-disable react/prop-types */
import { useState } from "react";
import InputGroup from "../InputGroup";

export default function SkillSection({ allSKill }) {
  const { allSKills, setAllSkills } = allSKill;
  const [skill, setSkill] = useState("Javascript");
  const [isEditing, setIsEditing] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  function clearInputs() {
    setSelectedId(null);
    setSkill("");
  }

  return (
    <>
      <span className="flex items-end">
        <InputGroup
          //maxSize={`${isEditing ? "max-w-72" : ""}`}
          minSize={`${isEditing ? "min-w-72" : ""}`}
          label="Skill"
          type="text"
          placeholder="Enter a Skill"
          value={skill}
          onChange={(e) => setSkill(e.target.value)}
        />
        {isEditing ? (
          <span className="flex max-w gap-2">
            <button
              onClick={(e) => {
                e.preventDefault();
                setIsEditing((prev) => !prev);
                setAllSkills((prev) => [
                  ...prev,
                  {
                    id: selectedId,
                    skill: skill,
                  },
                ]);
                clearInputs();
              }}
              className="text-white bg-gray-500 p-1"
            >
              save
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                setIsEditing((prev) => !prev);
                setAllSkills((prev) => [
                  ...prev.filter((s) => s.id != selectedId),
                ]);
                clearInputs();
              }}
              className="text-white bg-red-500 p-1"
            >
              del
            </button>
          </span>
        ) : (
          <button
            className="text-white"
            onClick={(e) => {
              e.preventDefault();
              setAllSkills((prev) => [
                ...prev,
                {
                  id: generateId(prev.length),
                  skill: skill,
                },
              ]);
              clearInputs();
            }}
          >
            +
          </button>
        )}
      </span>
      <ul className="flex gap-2 flex-wrap max-w-sm p-2">
        {allSKills.map((e) => (
          <li
            onClick={() => {
              setSkill(e.skill);
              setIsEditing((prev) => !prev);
              setSelectedId(e.id);
              setAllSkills((prev) => [...prev.filter((s) => s.id != e.id)]);
            }}
            className="border border-black p-1 rounded-md cursor-pointer hover:bg-black hover:text-white"
            key={e.id}
          >
            {e.skill}
          </li>
        ))}
      </ul>
    </>
  );
}

function generateId(len) {
  return crypto.randomUUID() + len;
}
