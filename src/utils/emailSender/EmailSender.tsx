const EmailSender = {
    send: (data: {
      SecureToken: string;
      To: string;
      From: string;
      Subject: string;
      Body: string;
    }) => {
      return new Promise<string>((resolve, reject) => {
        // You can use a CDN to load the email sending library
        // For this example, we'll use the EmailJS library
        // Replace 'user_id' with your actual EmailJS user ID
        const emailjs = require("emailjs-com");
        emailjs.init("user_id");
  
        // Send the email
        emailjs
          .send("smtp_server", "template_id", data)
          .then((_response: any) => {
            resolve("Email sent successfully!");
          })
          .catch((_error: any) => {
            reject("Failed to send email.");
          });
      });
    },
  };
  
  export default EmailSender;