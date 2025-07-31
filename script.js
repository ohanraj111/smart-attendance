
emailjs.init("mohan5307060"); 

document.getElementById("todayDate").textContent =
  "Date: " + new Date().toLocaleDateString();

function sendEmails() {
  const table = document.getElementById("attendanceTable");
  const rows = table.rows;

  for (let i = 0; i < rows.length; i++) {
    const name = rows[i].cells[0].textContent;
    const email = rows[i].cells[1].textContent;
    const radios = rows[i].querySelectorAll("input[type=radio]");
    let status = "Present";

    radios.forEach(radio => {
      if (radio.checked) status = radio.value;
    });

    const templateParams = {
      to_name: name,
      to_email: email,
      status: status,
      date: new Date().toLocaleDateString()
    };

    emailjs.send("mohan5307060@gmail.com", "YOUR_TEMPLATE_ID", templateParams)
      .then(() => {
        console.log("Email sent to", name);
      })
      .catch((error) => {
        console.error("Failed to send email to", name, error);
      });
  }

  alert("Attendance emails sent successfully.");
}
