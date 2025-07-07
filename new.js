let qrCode;

function generateQR() {
  const qrText = document.getElementById("qrText").value;
  const fgColor = document.getElementById("fgColor").value;
  const bgColor = document.getElementById("bgColor").value;
  const style = document.getElementById("style").value;
  const cornerSquare = document.getElementById("cornerSquare").value;
  const cornerDot = document.getElementById("cornerDot").value;

  const options = {
    width: 250,
    height: 250,
    type: "svg",
    data: qrText,
    dotsOptions: {
      color: fgColor,
      type: style,
    },
    backgroundOptions: {
      color: bgColor,
    },
    cornersSquareOptions: {
      type: cornerSquare,
      color: fgColor,
    },
    cornersDotOptions: {
      type: cornerDot,
      color: fgColor,
    },
  };

  // Clear previous QR
  document.getElementById("qrcode").innerHTML = "";

  // Recreate QRCode instance
  qrCode = new QRCodeStyling(options);
  qrCode.append(document.getElementById("qrcode"));
}

// DOWNLOAD FUNCTION
function downloadQR(type) {
  if (!qrCode) {
    alert("Please generate a QR code first.");
    return;
  }

  const fileName = "rasty-qr-code";

  // Use .download() method of QRCodeStyling
  qrCode.download({
    name: fileName,
    extension: type
  });
}
