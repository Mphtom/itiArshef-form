import { submitFormData } from './formFunctions'; 
import StepPersonalInfo from '../MultiStepFormSteps/StepPersonalInfo';
import StepEducationDetails from '../MultiStepFormSteps/StepEducationDetails';
import StepTeachingPreferences from '../MultiStepFormSteps/StepTeachingPreferences';
import StepWorkExperience from '../MultiStepFormSteps/StepWorkExperience';

export const handleNext = (setCurrentStep,steps) => {
    setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
  };

  export const handlePrevious = (setCurrentStep) => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  export const handleSubmit = (currentStep,steps,formData) => {
    if (currentStep === steps.length - 1) {
      submitFormData(formData);
    }
  };
 export const renderStep = (currentStep,formData,setFormData) => {
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
