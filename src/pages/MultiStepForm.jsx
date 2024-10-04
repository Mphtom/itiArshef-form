import { useState } from 'react';
import StepIndicator from '../components/Ui/StepIndicator';
import StepPersonalInfo from '../components/MultiStepFormSteps/StepPersonalInfo';
import StepEducationDetails from '../components/MultiStepFormSteps/StepEducationDetails';
import StepTeachingPreferences from '../components/MultiStepFormSteps/StepTeachingPreferences';
import StepWorkExperience from '../components/MultiStepFormSteps/StepWorkExperience';
import { submitFormData } from '../components/submitFormData/formFunctions'; 
import Button  from '../components/Ui/Button';

const steps = [
  "Personal Information",
  "Education Details",
  "Teaching Preferences",
  "Work Experience"
];

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    fullName: '',
    photo: null,
    mobile: '',
    email: '',
    cityOfBirth: '',
    faculty: '',
    university: '',
    trackName: '',
    branch: '',
    program: '',
    graduationYear: '',
    itiIntake: '',
    teachingBranches: '',
    preferredCourses: '',
    jobTitle: '',
    companyName: '',
    yearsOfExperience: '',
    isFreelancer: ''
  });

  const handleNext = () => {
    setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
  };

  const handlePrevious = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  const handleSubmit = () => {
    if (currentStep === steps.length - 1) {
      submitFormData(formData);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return <StepPersonalInfo formData={formData} setFormData={setFormData} />;
      case 1:
        return <StepEducationDetails formData={formData} setFormData={setFormData} />;
      case 2:
        return <StepTeachingPreferences formData={formData} setFormData={setFormData} />;
      case 3:
        return <StepWorkExperience formData={formData} setFormData={setFormData} />;
      default:
        return null;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100 ">
      <aside className="w-80 mr-6 space-y-12 bg-main-light px-2">
        <StepIndicator currentStep={currentStep} steps={steps} />
        <img src="Pink and Black Modern Initials Logo Design.png" alt="" />
      </aside>
      <div className="flex-1 px-6 py-10 space-y-4">
        <div className='min-h-px max-h-400px'>
                  {renderStep()}

        </div>
        <div className="flex justify-between">
          {currentStep > 0 && <Button onClick={handlePrevious} text={"previous"} variant={"outline"} />}
          {currentStep < steps.length - 1 ? (
            <Button onClick={handleNext} text={"NEXT"} className='place-self-end'/>
          ) : (
            <Button onClick={handleSubmit} text={"Submit"}/>
          )}
        </div>
      </div>

    </div>
  );
};

export default MultiStepForm;
