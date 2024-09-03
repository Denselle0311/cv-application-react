/* eslint-disable react/prop-types */

export default function Header({ form }) {
  return (
    <header className="max-w-[33.5rem] break-words">
      <div className="flex flex-col gap-2 bg-slate-700 p-4 text-white">
        <h1 className="text-[2.2em]">{form.fullName}</h1>
        <div className="flex gap-3 justify-center flex-wrap font-semibold">
          <span>{form.email}</span>
          <span>{form.phoneNumber}</span>
          <span>{form.location}</span>
        </div>
      </div>
      <div className="flex flex-col gap-2 p-4 text-left">
        <div>
          <h2 className="text-[1.5em] font-bold">Professional Title</h2>
          <span>{form.professional}</span>
        </div>
        <div>
          <h2 className="text-[1.5em] font-bold">Objective</h2>
          <span>{form.objective}</span>
        </div>
      </div>
    </header>
  );
}
