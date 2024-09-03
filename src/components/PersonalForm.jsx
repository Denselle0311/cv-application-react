/* eslint-disable react/prop-types */
import InputGroup from "./InputGroup";

export default function PersonalForm({ form }) {
  const { personalForm, setPersonalForm } = form;
  return (
    <div>
      <h2 className="font-bold text-[1.5em]">Personal Details</h2>
      <form className="flex flex-col border p-6 gap-2">
        <InputGroup
          label="Full Name"
          type="text"
          placeholder="First Name and Last Name"
          value={personalForm.fullName}
          onChange={(e) =>
            setPersonalForm((prev) => ({
              ...prev,
              fullName: e.target.value,
            }))
          }
        />
        <InputGroup
          label="Email"
          type="email"
          placeholder="Enter valid Email"
          value={personalForm.email}
          onChange={(e) =>
            setPersonalForm((prev) => ({
              ...prev,
              email: e.target.value,
            }))
          }
        />
        <InputGroup
          label="Phone Number"
          type="tel"
          placeholder="Enter valid Phone Number"
          value={personalForm.phoneNumber}
          onChange={(e) =>
            setPersonalForm((prev) => ({
              ...prev,
              phoneNumber: e.target.value,
            }))
          }
        />
        <InputGroup
          label="Location"
          type="text"
          placeholder="Street, City, Coutry"
          value={personalForm.location}
          onChange={(e) =>
            setPersonalForm((prev) => ({
              ...prev,
              location: e.target.value,
            }))
          }
        />
        <InputGroup
          label="Professional Title"
          type="text"
          placeholder="Software Engineer"
          value={personalForm.professional}
          onChange={(e) =>
            setPersonalForm((prev) => ({
              ...prev,
              professional: e.target.value,
            }))
          }
        />
        <InputGroup
          label="Objective"
          type="textarea"
          placeholder="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim iure voluptatum sequi dolores molestiae optio perferendis magnam! Ipsum ali"
          value={personalForm.objective}
          onChange={(e) =>
            setPersonalForm((prev) => ({
              ...prev,
              objective: e.target.value,
            }))
          }
        />
      </form>
    </div>
  );
}
