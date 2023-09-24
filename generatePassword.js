function generateRandomPassword(
  length,
  useUppercase,
  useLowercase,
  useNumbers,
  useSpecialChars
) {
  // Define character sets based on user preferences
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const numberChars = "0123456789";
  const specialChars = "!@#$%^&*()_+-=[]{}|;:,.<>?";

  // Create a character set based on user preferences
  let chars = "";
  if (useUppercase) chars += uppercaseChars;
  if (useLowercase) chars += lowercaseChars;
  if (useNumbers) chars += numberChars;
  if (useSpecialChars) chars += specialChars;

  if (chars === "") {
    alert("Please select at least one character type.");
    return "";
  }

  let password = "";
  if (useUppercase)
    password += uppercaseChars.charAt(
      Math.floor(Math.random() * uppercaseChars.length)
    );
  if (useLowercase)
    password += lowercaseChars.charAt(
      Math.floor(Math.random() * lowercaseChars.length)
    );
  if (useNumbers)
    password += numberChars.charAt(
      Math.floor(Math.random() * numberChars.length)
    );
  if (useSpecialChars)
    password += specialChars.charAt(
      Math.floor(Math.random() * specialChars.length)
    );

  // Generate the remaining characters
  for (let i = password.length; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    password += chars.charAt(randomIndex);
  }

  // Shuffle the password to randomize the positions of the required characters
  password = shuffleString(password);

  return password;
}

function shuffleString(str) {
  const array = str.split("");
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array.join("");
}

function getPasswordOptions() {
  const length = parseInt(prompt("Please specify the length of the password:"));
  const useUppercase = prompt("Include uppercase letters (A-Z)? (yes/no):");
  const useLowercase = prompt("Include lowercase letters (a-z)? (yes/no):");
  const useNumbers = prompt("Include numbers (0-9)? (yes/no):");
  const useSpecialChars = prompt(
    "Include special characters (!@#$%^&*()_+-=[]{}|;:,.<>?)? (yes/no):"
  );

  if (length <= 0 || length < 4 || isNaN(length)) {
    alert(
      "Password length must be a positive number and length should be greater than 4."
    );
    return null;
  }

  return {
    length: length,
    useUppercase: useUppercase.toLowerCase() === "yes",
    useLowercase: useLowercase.toLowerCase() === "yes",
    useNumbers: useNumbers.toLowerCase() === "yes",
    useSpecialChars: useSpecialChars.toLowerCase() === "yes",
  };
}

function main() {
  alert("Welcome to the Random Password Generator!");
  const options = getPasswordOptions();

  if (options) {
    const generatedPassword = generateRandomPassword(
      options.length,
      options.useUppercase,
      options.useLowercase,
      options.useNumbers,
      options.useSpecialChars
    );

    if (generatedPassword) {
      alert(`Your randomly generated password is: ${generatedPassword}`);
    } else {
      alert("Password generation failed.");
    }
  }
}

main();
