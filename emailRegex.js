const emailRegex = /^abc@bridgelabz$/;

// Test cases
const emails = [
    "abc@bridgelabz",      // Valid
    "abc@xyz",              // Invalid (must be @bridgelabz)
    "abc.xyz@bridgelabz",   // Invalid
];

emails.forEach(email => {
    console.log(`${email} -> ${emailRegex.test(email) ? "Valid" : "Invalid"}`);
});
