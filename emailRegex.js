const emailRegex = /^abc([._+-]xyz)?@bridgelabz\.co$/;

// Test cases
const emails = [
    "abc@bridgelabz.co",      // Valid
    "abc.xyz@bridgelabz.co",   // valid
    "abc-xyz@bridgelabz.co",      // Valid (xyz with -)
    "abc+xyz@bridgelabz.co",      // Valid (xyz with +)
    "abc_xyz@bridgelabz.co",      // Valid (xyz with _)
    "abc!xyz@bridgelabz.co",      // Invalid (invalid character '!')
];

emails.forEach(email => {
    console.log(`${email} -> ${emailRegex.test(email) ? "Valid" : "Invalid"}`);
});
