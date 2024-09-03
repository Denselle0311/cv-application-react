/* eslint-disable react/prop-types */

export default function SkillCV({ allSKills }) {
  return (
    <>
      <span className="flex gap-2 flex-wrap">
        {allSKills.map((e) => (
          <span className="break-words basis-1/3 max-w-80" key={e.id}>
            - {e.skill}
          </span>
        ))}
      </span>
    </>
  );
}
