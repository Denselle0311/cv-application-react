/* eslint-disable react/prop-types */

export default function EducationCV({ form }) {
  const now = new Date().getFullYear();
  const present = form.end?.split("/").at(-1);
  return (
    <div className=" flex gap-4 ">
      <span className="basis-4/12">{`${form.start} - ${
        present == (present?.length > 2 ? now : now.toString().slice(2))
          ? "present"
          : form.end
      }`}</span>
      <div className="basis-8/12">
        <h3 className="text-[1.2em] leading-none font-bold">{form.school}</h3>
        <h4 className="font-semibold text-slate-700">{form.degree}</h4>
        <span>
          {form.additionalInfos.map((e) => (
            <p className="break-words max-w-80" key={e.additionalInfo}>
              - {e.additionalInfo}
            </p>
          ))}
        </span>
      </div>
    </div>
  );
}
