/* eslint-disable react/prop-types */
import { useState } from "react";
import InputGroup from "./InputGroup";

export default function ExtraInfo({
  label,
  placeholder,
  item,
  setItem,
  itemName,
  formObj,
  itemArray,
}) {
  const { form, setForm } = formObj;
  const [isEditing, setIsEditing] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  return (
    <>
      <span className="flex items-end">
        <InputGroup
          maxSize={`${isEditing ? "max-w-72" : ""}`}
          minSize={`${isEditing ? "min-w-72" : ""}`}
          label={label}
          type="text"
          placeholder={placeholder}
          value={item}
          onChange={(e) => setItem(e.target.value)}
        />
        {isEditing ? (
          <span className="flex max-w gap-2">
            <button
              onClick={(e) => {
                e.preventDefault();
                setIsEditing((prev) => !prev);
                setForm((prev) => ({
                  ...prev,
                  [itemArray]: [
                    ...prev[itemArray],
                    {
                      id: selectedId,
                      [itemName]: item,
                    },
                  ],
                }));
                setSelectedId(null);
                setItem("");
              }}
              className="text-white bg-gray-500 p-1"
            >
              save
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                setIsEditing((prev) => !prev);
                setItem("");
                setForm((prev) => ({
                  ...prev,
                  [itemArray]: [
                    ...prev[itemArray].filter((r) => r.id != selectedId),
                  ],
                }));
                setSelectedId(null);
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
              setForm((prev) => ({
                ...prev,
                [itemArray]: [
                  ...prev[itemArray],
                  {
                    id: generateId(prev[itemArray].length),
                    [itemName]: item,
                  },
                ],
              }));
              setItem("");
            }}
          >
            +
          </button>
        )}
      </span>
      <ul className="flex gap-2 flex-wrap max-w-sm p-2">
        {form[itemArray].map((e) => (
          <li
            onClick={() => {
              setItem(e[itemName]);
              setIsEditing((prev) => !prev);
              setSelectedId(e.id);
              setForm((prev) => ({
                ...prev,
                [itemArray]: [...prev[itemArray].filter((r) => r.id != e.id)],
              }));
            }}
            className="border max-w-sm break-words text-left border-black p-1 rounded-md cursor-pointer hover:bg-black hover:text-white"
            key={e.id}
          >
            {e[itemName]}
          </li>
        ))}
      </ul>
    </>
  );
}

function generateId(len) {
  return crypto.randomUUID() + len;
}
