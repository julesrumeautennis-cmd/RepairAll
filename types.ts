// Defines the structure for a single step in the repair tutorial.
export interface TutorialStep {
  // The number of the step in the sequence (e.g., 1, 2, 3).
  stepNumber: number;
  // The text instruction for this step.
  description: string;
  // The URL of the image illustrating this step. This will be a Base64 data URL.
  imageUrl: string;
}

// Defines the complete structure for a repair guide.
export interface RepairGuide {
  // A safety warning message, if applicable (e.g., "Unplug the device"). Can be null if no warning is needed.
  safetyWarning: string | null;
  // An array of TutorialStep objects, representing the full guide.
  steps: TutorialStep[];
}

// Defines the structure of the JSON object we expect from the first Gemini API call.
// This is an intermediate type used before the images are generated.
export interface GeminiJsonPlan {
  // The safety warning text.
  safetyWarning: string | null;
  // An array of planned steps.
  steps: {
    // The step number.
    stepNumber: number;
    // The text description for the step.
    description: string;
    // A detailed text prompt that will be sent to the image generation model.
    imagePrompt: string;
  }[];
}
