/* eslint-disable react/prop-types */

export default function FormLists({
  title,
  formList,
  setSelectedId,
  setForm,
  setFormLists,
}) {
  return (
    <ul className="min-w-full flex flex-col gap-2">
      {formList.map((e) => {
        return (
          <li
            className="flex justify-between items-center font-semibold bg-slate-50 rounded-md border-l-2 border-l-slate-600  px-6 py-2 hover:bg-black hover:text-white"
            key={e.id}
          >
            {e.form[title]}
            <span className="flex gap-2 items-center">
              <button
                className="max-h-8 leading-3 hover:bg-black hover:text-white text-black bg-white"
                onClick={() => {
                  setSelectedId(e.id);
                  setForm(formList.find((ex) => ex.id == e.id).form);
                }}
              >
                edit
              </button>
              <button
                className="max-h-8 leading-3 hover:bg-black hover:text-white text-black bg-white"
                onClick={() => {
                  setFormLists((prev) => prev.filter((p) => p.id != e.id));
                }}
              >
                delete
              </button>
            </span>
          </li>
        );
      })}
    </ul>
  );
}
