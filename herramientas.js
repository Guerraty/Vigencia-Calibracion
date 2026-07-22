// Base de datos inicial.
// Para agregar otra herramienta, copie un bloque completo y cambie sus datos.
// El campo "id" será el valor usado en el enlace y en el código QR.

const HERRAMIENTAS = [
  {
    id: "C-PU-001",
    nombre: "Llave de Torque",
    asset: "557195933GSE",
    pn: "TEC175FU",
    sn: "5933",
    nsn: "5120-01-134-4362",
    ppm: "C-PU-001",
    intervalo: "180 días",
    ultimaCalibracion: "2026-05-24",
    proximaCalibracion: "2026-11-20"
  }

  // Ejemplo para la próxima herramienta:
  // ,{
  //   id: "C-PU-002",
  //   nombre: "Nombre de la herramienta",
  //   asset: "ASSET",
  //   pn: "P/N",
  //   sn: "S/N",
  //   nsn: "NSN",
  //   ppm: "C-PU-002",
  //   intervalo: "180 días",
  //   ultimaCalibracion: "2026-06-01",
  //   proximaCalibracion: "2026-11-28"
  // }
];
