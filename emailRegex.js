const emailRegex = /^abc([._+-]xyz)?@bridgelabz\.co(\.[a-z]{2})?$/;

// Test cases
const emails = [
    "abc@bridgelabz.co",          // Valid (no country code)
    "abc.xyz@bridgelabz.co",      // Valid (xyz with .)
    "abc-xyz@bridgelabz.co.in",   // Valid (xyz with - and .in)
    "abc+xyz@bridgelabz.co.us",   // Valid (xyz with + and .us)
    "abc@bridgelabz.co.in",       // Valid (.in as country code)
    "abc@bridgelabz.co.au",       // Valid (.au as country code)
    "abc@bridgelabz.co.abc",      // Invalid (TLD must be 2 characters)
];

emails.forEach(email => {
    console.log(`${email} -> ${emailRegex.test(email) ? "Valid" : "Invalid"}`);
});
