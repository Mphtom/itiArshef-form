/* eslint-disable react/prop-types */
import Input from "../Ui/Input";
import { handleInputChange } from "../submitFormData/formFunctions";

const StepEducationDetails = ({ formData, setFormData }) => {
  return (
    <div className="space-y-10">
      <h1 className="font-bold text-2xl text-center w-full text-main">
        Education Details
      </h1>
      <div>
        <Input
          label=" enter faculty"
          id="faculty"
          name="faculty"
          value={formData.faculty}
          onChange={(e) => handleInputChange(e, setFormData)}
          required
        />
      </div>
      <div>
        <Input
          label=" enter your university"
          id="university"
          name="university"
          value={formData.university}
          onChange={(e) => handleInputChange(e, setFormData)}
          required
        />
      </div>
      <div>
        <Input
                  label=" enter track Name"

          id="trackName"
          name="trackName"
          value={formData.trackName}
          onChange={(e) => handleInputChange(e, setFormData)}
          required
        />
      </div>
      <div>
        <Input
                          label=" enter branch"

          id="branch"
          name="branch"
          value={formData.branch}
          onChange={(e) => handleInputChange(e, setFormData)}
          required
        />
      </div>
    </div>
  );
};

export default StepEducationDetails;
