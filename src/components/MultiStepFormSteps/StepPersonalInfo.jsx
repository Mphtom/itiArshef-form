/* eslint-disable react/prop-types */
import Input from "../Ui/Input";
import {
  handleInputChange,
  handleFileChange,
} from "../submitFormData/formFunctions";

const StepPersonalInfo = ({ formData, setFormData }) => {
  return (
    <div className="space-y-10 ">
      <h1 className="font-bold text-2xl text-center w-full text-main">Personal Information</h1>
      <div>
        <Input
          label="enter full name"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={(e) => handleInputChange(e, setFormData)}
          required
        />
      </div>
      <div>
        <Input
          label="person image"
          id="photo"
          name="photo"
          type="file"
          accept="image/*"
          onChange={(e) => handleFileChange(e, setFormData)}
          required
        />
      </div>
      <div>
        <Input
          label="person image"
          id="mobile"
          name="mobile"
          value={formData.mobile}
          onChange={(e) => handleInputChange(e, setFormData)}
          required
        />
      </div>
      <div>
        <Input
          label="email"
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={(e) => handleInputChange(e, setFormData)}
          required
        />
      </div>
      <div>
        <Input
                  label="city Of Birth"

          id="cityOfBirth"
          name="cityOfBirth"
          value={formData.cityOfBirth}
          onChange={(e) => handleInputChange(e, setFormData)}
          required
        />
      </div>
    </div>
  );
};

export default StepPersonalInfo;
