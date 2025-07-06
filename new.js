let qrCode;

function generateQR() {
  const qrText = document.getElementById("qrText").value;
  const fgColor = document.getElementById("fgColor").value;
  const bgColor = document.getElementById("bgColor").value;
  const style = document.getElementById("style").value;

  const options = {
    width: 250,
    height: 250,
    type: "svg",
    data: qrText,
    image: "",
    dotsOptions: {
      color: fgColor,
      type: style
    },
    backgroundOptions: {
      color: bgColor,
    }
  };

  // Remove existing QR
  document.getElementById("qrcode").innerHTML = "";

  qrCode = new QRCodeStyling(options);
  qrCode.append(document.getElementById("qrcode"));
}

function downloadQR(type) {
  if (!qrCode) return;
  qrCode.download({ extension: type });
}
