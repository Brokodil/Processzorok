function menube() {
  document.getElementById("navidiv").style.top = "15%";
  document.getElementById("menugomb").onclick = menuki;
};

function menuki() {
  document.getElementById("navidiv").style.top = "-100%";
  document.getElementById("menugomb").onclick = menube;
};

function ki() {
  Intelki()
  AMDki()
  Appleki()
  Qualcommki()
  Nvidiaki()
  LGAki()
  PGAki()
  menuki()
}

function Intel() {
  menuki()
  AMDki()
  Appleki()
  Qualcommki()
  Nvidiaki()
  LGAki()
  PGAki()
  document.getElementById("Intel").style.top = "14%";
};

function Intelki() {
  document.getElementById("Intel").style.top = "-1000%";
};

function AMD() {
  menuki()
  Intelki()
  Appleki()
  Qualcommki()
  Nvidiaki()
  LGAki()
  PGAki()
  document.getElementById("AMD").style.top = "14%";
};

function AMDki() {
  document.getElementById("AMD").style.top = "-1000%";
};

function Apple() {
  menuki()
  Intelki()
  AMDki()
  Qualcommki()
  Nvidiaki()
  LGAki()
  PGAki()
  document.getElementById("Apple").style.top = "14%";
};

function Appleki() {
  document.getElementById("Apple").style.top = "-1000%";
};

function Qualcomm() {
  menuki()
  Intelki()
  AMDki()
  Appleki()
  Nvidiaki()
  LGAki()
  PGAki()
  document.getElementById("Qualcomm").style.top = "14%";
};

function Qualcommki() {
  document.getElementById("Qualcomm").style.top = "-1000%";
};

function Nvidia() {
  menuki()
  Intelki()
  AMDki()
  Appleki()
  Qualcommki()
  LGAki()
  PGAki()
  document.getElementById("Nvidia").style.top = "14%";
};

function Nvidiaki() {
  document.getElementById("Nvidia").style.top = "-1000%";
};

function LGA() {
  menuki()
  Intelki()
  AMDki()
  Appleki()
  Qualcommki()
  Nvidiaki()
  PGAki()
  document.getElementById("LGA").style.top = "14%";
};

function LGAki() {
  document.getElementById("LGA").style.top = "-1000%";
};

function PGA() {
  menuki()
  Intelki()
  AMDki()
  Appleki()
  Qualcommki()
  Nvidiaki()
  LGAki()
  document.getElementById("PGA").style.top = "14%";
};

function PGAki() {
  document.getElementById("PGA").style.top = "-1000%";
};