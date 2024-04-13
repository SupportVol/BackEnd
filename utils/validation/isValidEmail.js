/**
 * Checks if the given email address is valid.
 * @param {string} email - The email address to validate.
 * @returns {boolean} - Returns true if the email is valid, otherwise false.
 */
const isValidEmail = async (email) => {
  try {
    console.log("Validating email:", email);
    const apiUrl = `https://isitarealemail.com/api/email/validate/${email}`;
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(`Email validation failed: ${response.statusText}`);
    }

    const data = await response.json();
    console.log("Response from email validation API:", data);

    return data.status === "valid";
  } catch (error) {
    console.error("Error validating email:", error);
    return false; // Return false if there's an error
  }
};

export default isValidEmail;
