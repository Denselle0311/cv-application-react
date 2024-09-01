import InputGroup from "./InputGroup";

export default function PersonalForm() {
  return (
    <>
      <h2>Personal Details</h2>
      <form className="border">
        <InputGroup
          label="Full Name"
          type="text"
          placeholder="First Name and Last Name"
          //value={}
          //onChange={}
        />
        <InputGroup
          label="Email"
          type="email"
          placeholder="Enter valid Email"
          //value={}
          //onChange={}
        />
        <InputGroup
          label="Phone Number"
          type="tel"
          placeholder="Enter valid Phone Number"
          //value={}
          //onChange={}
        />
        <InputGroup
          label="Location"
          type="text"
          placeholder="Street, City, Coutry"
          //value={}
          //onChange={}
        />
        <InputGroup
          label="Professional Title"
          type="text"
          placeholder="Software Engineer"
          //value={}
          //onChange={}
        />
        <InputGroup
          label="Objective"
          type="textarea"
          placeholder="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim iure voluptatum sequi dolores molestiae optio perferendis magnam! Ipsum ali"
          //value={}
          //onChange={}
        />
      </form>
    </>
  );
}
