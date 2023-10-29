// Template String Replace
// For example:
// const string = “Numentica is a company focused on delivering high quality code. It is located in #[location] #[state] #[phone]“;
// replaceTemplateString(string, [[“location”, “Chennai”], [“state”, “Tamil Nadu”], [“phone”, “9840164723"]])
// Output: Numentica is a company focused on delivering high quality code. It is located in Chennai Tamil Nadu 9840164723
function replaceTemplateString(originalString, replacementArray) {
    for (const [key, value] of replacementArray) {
      originalString = originalString.replace(new RegExp(`#\\[${key}]`, 'g'), value);
    }
    return originalString;
  }
  
  const string = "Numentica is a company focused on delivering high quality code. It is located in #[location] #[state] #[phone]";
  
  const replacements = [
    ["location", "Chennai"],
    ["state", "Tamil Nadu"],
    ["phone", "9840164723"]
  ];
  
  const result = replaceTemplateString(string, replacements);
  console.log(result);