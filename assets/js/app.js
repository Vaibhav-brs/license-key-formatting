function formatLicenseKey() {
    const licenseKey = document.getElementById("licenseKey").value.trim().toUpperCase();
    const groupSize = document.getElementById("groupSize").valueAsNumber;
    const separator = document.getElementById("separator").value;
  
    const formattedKey = formatKey(licenseKey, groupSize, separator);
  
    const outputDiv = document.getElementById("output");
    outputDiv.innerHTML = "<strong>Formatted License Key:</strong> " + formattedKey;
  }
  
  function formatKey(key, groupSize, separator) {
    let formattedKey = "";
    let counter = 0;
  
    for (let i = key.length - 1; i >= 0; i--) {
      if (key[i] !== "-") {
        if (counter === groupSize) {
          formattedKey = separator + formattedKey;
          counter = 0;
        }
        formattedKey = key[i] + formattedKey;
        counter++;
      }
    }
  
    return formattedKey;
  }
  