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

  if (type === "pdf") {
    qrCode.getRawData("png").then(async (blob) => {
      const reader = new FileReader();
      reader.onload = async function () {
        const imageDataUrl = reader.result;

        const { jsPDF } = window.jspdf;
        const pdf = new jsPDF();

        // Adjust image size and position as needed
        const imgProps = pdf.getImageProperties(imageDataUrl);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

        pdf.addImage(imageDataUrl, "PNG", 10, 10, pdfWidth - 20, pdfHeight);
        pdf.save(`${fileName}.pdf`);
      };
      reader.readAsDataURL(blob);
    });
  } else {
    qrCode.download({
      name: fileName,
      extension: type
    });
  }
}

