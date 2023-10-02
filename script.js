const scriptURL = 'https://script.google.com/macros/s/AKfycbz-SiBcXfaiv-YHCZn6JSIIN3AT0sPAFaXp9F80G0wmwJFy2-jUSc3TiHMev0SuMlg/exec';

const form = document.forms['registration-form']; // Change the form name to 'registration-form'

form.addEventListener('submit', e => {
  e.preventDefault();
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => response.json()) // Parse the response as JSON
    .then(data => {
      if (data.result === 'success') {
        alert("Thank you! Your form is submitted successfully.");
        window.location.reload();
      } else {
        alert("Error: " + data.error);
      }
    })
    .catch(error => console.error('Error!', error.message));
});

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('registration-form');
  const downloadLink = document.getElementById('download-link');

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const formData = new FormData(form);
    const attendance = formData.get('attendance');

    if (attendance === 'offline') {
      // Replace this with actual server-side PDF generation and URL
      const pdfUrl = 'https://drive.google.com/file/d/12AWHVkNM5eU0OmRTXSliyQs1YTz-zcJR/view?usp=sharing';

      // Create a hidden anchor element to trigger the download
      const downloadAnchor = document.createElement('a');
      downloadAnchor.href = pdfUrl;
      downloadAnchor.download = 'e-pass.pdf';

      // Trigger the download
      downloadAnchor.click();
    } else if (attendance === 'online') {
      // Redirect to Discord server link
      window.location.href = 'https://discord.gg/yAgaRNtWu7';
    }
  });
});
