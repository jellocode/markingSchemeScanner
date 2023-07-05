//code allows users to upload a PDF file and enter variant and year information. It sends this data to the server for further processing, and when the server responds, it displays the result on the web page.
document.getElementById("uploadForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get form inputs
    var pdfFile = document.getElementById("pdfFile").files[0];
    var variant = document.getElementById("variant").value;
    var year = document.getElementById("year").value;
  
    // Create FormData object to store form data
    var formData = new FormData();
    formData.append("pdfFile", pdfFile);
    formData.append("variant", variant);
    formData.append("year", year);
  
    // Create an XMLHttpRequest object
    var xhr = new XMLHttpRequest();
  
    // Set up AJAX request
    xhr.open("POST", "/process"); // Replace "/process" with the URL server-side processing script
    xhr.onreadystatechange = function() {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          var response = JSON.parse(xhr.responseText);
          // Handle the response here
          displayResult(response);
        } else {
          console.error("Error:", xhr.status);
        }
      }
    };
  
    // Send the AJAX request with the form data
    xhr.send(formData);
  });
  
  function displayResult(response) {
    var resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "Score: " + response.score; // Modify this based on response structure
  }
  