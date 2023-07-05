document.getElementById("pdfFile").addEventListener("change", function(event) {
    var file = event.target.files[0];
    var fileName = file.name;
    var fileSize = file.size;
  
    // Validate the file type and size
    if (!isPDF(file)) {
      alert("Please select a PDF file.");
      return;
    }
  
    if (fileSize > 5242880) { // 5MB in bytes
      alert("File size exceeds the maximum limit of 5MB.");
      return;
    }
  
    // Display the file details to the user
    var fileInfo = document.getElementById("fileInfo");
    fileInfo.innerHTML = "Selected file: " + fileName + " (" + formatFileSize(fileSize) + ")";
  });
  
  function isPDF(file) {
    var fileType = file.type;
    return fileType === "application/pdf";
  }
  
  function formatFileSize(bytes) {
    var sizes = ["Bytes", "KB", "MB", "GB", "TB"];
    if (bytes === 0) return "0 Bytes";
    var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
    return Math.round(bytes / Math.pow(1024, i), 2) + " " + sizes[i];
  }
  