const emailRegex = /^abc@bridgelabz\.co$/;

// Test cases
const emails = [
    "abc@bridgelabz.co",      // Valid
    "abc.xyz@bridgelabz.co",  // Invalid (extra part not handled yet)
];

emails.forEach(email => {
    console.log(`${email} -> ${emailRegex.test(email) ? "Valid" : "Invalid"}`);
});
