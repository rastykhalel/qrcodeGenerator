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

  document.getElementById("qrcode").innerHTML = "";
  qrCode = new QRCodeStyling(options);
  qrCode.append(document.getElementById("qrcode"));
}
