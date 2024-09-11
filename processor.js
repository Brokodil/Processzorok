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
  document.getElementById("cim").innerHTML = "Processzorok"
}

async function Intel() {
  menuki()
  AMDki()
  Appleki()
  Qualcommki()
  Nvidiaki()
  LGAki()
  PGAki()
  document.getElementById("Intel").style.top = "14%";
  await new Promise((r) => setTimeout(r, 850));
  document.getElementById("cim").innerHTML = "Processzorok" + "<br>" + "EXIT";
};

function Intelki() {
  document.getElementById("Intel").style.top = "-1000%";
};

async function AMD() {
  menuki()
  Intelki()
  Appleki()
  Qualcommki()
  Nvidiaki()
  LGAki()
  PGAki()
  document.getElementById("AMD").style.top = "14%";
  await new Promise((r) => setTimeout(r, 850));
  document.getElementById("cim").innerHTML = "Processzorok" + "<br>" + "EXIT";
};

function AMDki() {
  document.getElementById("AMD").style.top = "-1000%";
};

async function Apple() {
  menuki()
  Intelki()
  AMDki()
  Qualcommki()
  Nvidiaki()
  LGAki()
  PGAki()
  document.getElementById("Apple").style.top = "14%";
  await new Promise((r) => setTimeout(r, 850));
  document.getElementById("cim").innerHTML = "Processzorok" + "<br>" + "EXIT";
};

function Appleki() {
  document.getElementById("Apple").style.top = "-1000%";
};

async function Qualcomm() {
  menuki()
  Intelki()
  AMDki()
  Appleki()
  Nvidiaki()
  LGAki()
  PGAki()
  document.getElementById("Qualcomm").style.top = "14%";
  await new Promise((r) => setTimeout(r, 850));
  document.getElementById("cim").innerHTML = "Processzorok" + "<br>" + "EXIT";
};

function Qualcommki() {
  document.getElementById("Qualcomm").style.top = "-1000%";
};

async function Nvidia() {
  menuki()
  Intelki()
  AMDki()
  Appleki()
  Qualcommki()
  LGAki()
  PGAki()
  document.getElementById("Nvidia").style.top = "14%";
  await new Promise((r) => setTimeout(r, 850));
  document.getElementById("cim").innerHTML = "Processzorok" + "<br>" + "EXIT";
};

function Nvidiaki() {
  document.getElementById("Nvidia").style.top = "-1000%";
};

async function LGA() {
  menuki()
  Intelki()
  AMDki()
  Appleki()
  Qualcommki()
  Nvidiaki()
  PGAki()
  document.getElementById("LGA").style.top = "14%";
  await new Promise((r) => setTimeout(r, 850));
  document.getElementById("cim").innerHTML = "Processzorok" + "<br>" + "EXIT";
};

function LGAki() {
  document.getElementById("LGA").style.top = "-1000%";
};

async function PGA() {
  menuki()
  Intelki()
  AMDki()
  Appleki()
  Qualcommki()
  Nvidiaki()
  LGAki()
  document.getElementById("PGA").style.top = "14%";
  await new Promise((r) => setTimeout(r, 850));
  document.getElementById("cim").innerHTML = "Processzorok" + "<br>" + "EXIT";
};

function PGAki() {
  document.getElementById("PGA").style.top = "-1000%";
};
