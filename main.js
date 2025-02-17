let clicks = 0;
let clickpower = 1;
let clickpowercost = 500;
let clickpoweramount = 1;
let Lols = 300000;

/*Cps*/
let cps = 0;
let toolp = 1;
let toolc = 25;
let toolUpgradeCost = 1000;
let farmp = 5;
let farmc = 125;
let farmUpgradeCost = 2500;
let workerp = 25;
let workerc = 750;
let workerUpgradeCost = 5000;
let machinep = 100;
let machinec = 5000;
let machineUpgradeCost = 10000;
let sciencep = 250;
let sciencec = 50000;
let scienceUpgradeCost = 80000;
let evilp = 10000;
let evilc = 1677215;
let evilUpgradeCost = 10000000;

// Random Events
console.log(Lols); bbvvvvv
setInterval(randomEvent, Lols);


// Display the number of clicks
function buttonclick() {
    clickpower = Math.round(clickpoweramount * 2 - 1);
    clicks = clickpower + clicks;
    document.getElementById("clicks").innerText = clicks;
}

// Upgrade System
function upgrade(x) {
    if (x === 1 && clicks >= toolUpgradeCost) {
        toolp += 2;
        clicks -= toolUpgradeCost;
        toolUpgradeCost = Math.round(toolUpgradeCost * 1.5);
        document.getElementById("toolUpgradeCost").innerText = toolUpgradeCost;
    }
    if (x === 2 && clicks >= farmUpgradeCost) {
        farmp += 5;
        clicks -= farmUpgradeCost;
        farmUpgradeCost = Math.round(farmUpgradeCost * 1.5);
        document.getElementById("farmUpgradeCost").innerText = farmUpgradeCost;
    }
    if (x === 3 && clicks >= workerUpgradeCost) {
        workerp += 25;
        clicks -= workerUpgradeCost;
        workerUpgradeCost = Math.round(workerUpgradeCost * 1.5);
        document.getElementById("workerUpgradeCost").innerText = workerUpgradeCost;
    }
    if (x === 4 && clicks >= machineUpgradeCost) {
        machinep += 100;
        clicks -= machineUpgradeCost;
        machineUpgradeCost = Math.round(machineUpgradeCost * 1.5);
        document.getElementById("machineUpgradeCost").innerText = machineUpgradeCost;
    }
    if (x === 5 && clicks >= scienceUpgradeCost) {
        sciencep += 250;
        clicks -= scienceUpgradeCost;
        scienceUpgradeCost = Math.round(scienceUpgradeCost * 1.5);
        document.getElementById("scienceUpgradeCost").innerText = scienceUpgradeCost;
    }
    if (x === 6 && clicks >= evilUpgradeCost) {
        evilp += 10000;
        clicks -= evilUpgradeCost;
        evilUpgradeCost = Math.round(evilUpgradeCost * 1.5);
        document.getElementById("evilUpgradeCost").innerText = evilUpgradeCost;
    }
}

// Purchase  System
function purchase(x) {
    if (x === 1) {
        if (clicks >= toolc) {
            clicks = clicks - toolc;
            toolc = Math.round(25 + toolc * 1.001 ** Math.log(toolc * 1.1));
            setInterval(tooluse, 1000);
            document.getElementById("toolcost").innerHTML = `Cost:${toolc}`;
        }
    }
    if (x === 2) {
        if (clicks >= farmc) {
            clicks = clicks - farmc;
            farmc = Math.round(125 + farmc * 1.003 ** Math.log(farmc * 1.01));
            setInterval(farmuse, 1000);
            document.getElementById("farmcost").innerHTML = `Cost:${farmc}`;
        }
    }
    if (x === 3) {
        if (clicks >= workerc) {
            clicks = clicks - workerc;
            workerc = Math.round(250 + workerc * 1.004 ** Math.log(workerc * 1.1));
            setInterval(workeruse, 1000);
            document.getElementById("workercost").innerHTML = `Cost:${workerc}`;
        }
    }
    if (x === 4) {
        if (clicks >= machinec) {
            clicks = clicks - machinec;
            machinec = Math.round(5000 + machinec * 1.003 ** Math.log(machinec * 1.1));
            setInterval(machineuse, 1000);
            document.getElementById("machinecost").innerHTML = `Cost:${machinec}`;
        }
    }
    if (x === 5) {
        if (clicks >= sciencec) {
            clicks = clicks - sciencec;
            sciencec = Math.round(50000 + sciencec * 1.002 ** Math.log(sciencec * 1.1));
            setInterval(scienceuse, 1000);
            document.getElementById("sciencecost").innerHTML = `Cost:${sciencec}`;
        }
    }
    if (x === 6) {
        if (clicks >= evilc) {
            clicks = clicks - evilc;
            evilc = Math.round(50000 + evilc * 1.001 ** Math.log(evilc * 1.1));
            setInterval(eviluse, 1000);
            document.getElementById("evilcost").innerHTML = `Cost:${evilc}`;
        }
    }
    if (x === 7) {
        if (clicks >= clickpowercost) {
            clicks = clicks - clickpowercost;
            clickpoweramount++;
            clickpowercost = Math.round(40 * (1 + 0.2 * clickpoweramount) * (1.3 ** clickpoweramount) * (2 ** Math.max(0, clickpoweramount - 5)) + 500);
            document.getElementById("upgradeclickcost").innerHTML = `Cost: ${clickpowercost}`;
        }
    }
}



//Fun Events
function randomEvent() {
    let rng = Math.round(Math.random() * 12);
    console.log(rng);
    if (rng === 1) {
        clicks = clicks * 3;
        document.getElementById("randomnotification").innerHTML = "Random Event! <br> Clicks have been multiplied";
    }
    if (rng === 2) {
        clickpower = clickpower * 1.5;
        document.getElementById("randomnotification").innerHTML = "Clickpower has been increased";
    }
    if (rng === 3) {
        clicks = 15 + (clicks * 3) * (clickpower / 25 + 0.1);
        document.getElementById("randomnotification").innerHTML = "Clicks have been added";
    }

    if (rng === 6) {
        clicks = clicks + 100;
        document.getElementById("randomnotification").innerHTML = "100 clicks";
    }
}



// Cps Functions
function tooluse() {
    clicks = clicks + toolp;
    document.getElementById("clicks").innerText = clicks;
}

function farmuse() {
    clicks = clicks + farmp;
    document.getElementById("clicks").innerText = clicks;
}

function workeruse() {
    clicks = clicks + workerp;
    document.getElementById("clicks").innerText = clicks;
}

function machineuse() {
    clicks = clicks + machinep;
    document.getElementById("clicks").innerText = clicks;
}

function scienceuse() {
    clicks = clicks + sciencep;
    document.getElementById("clicks").innerText = clicks;
}

function eviluse() {
    clicks = clicks + evilp;
    document.getElementById("clicks").innerText = clicks;
}








//  Funky Nubmer updaters
setInterval(universalclick, 100);

function universalclick() {
    clicks = Math.round(clicks);
    document.getElementById("clicks").innerText = clicks;
    document.getElementById("toolcps").innerHTML = `+${toolp} Cps`;
    document.getElementById("farmcps").innerHTML = `+${farmp} Cps`;
    document.getElementById("workercps").innerHTML = `+${workerp} Cps`;
    document.getElementById("machinecps").innerHTML = `+${machinep} Cps`;
    document.getElementById("sciencecps").innerHTML = `+${sciencep} Cps`;
    document.getElementById("evilcps").innerHTML = `+${evilp} Cps`;

}

setInterval(function() {
    console.log(clicks, toolc, toolp, clickpower, clickpoweramount, farmc, farmp, workerc, workerp, machinep, machinec, sciencec, sciencep, evilc, evilp);
}, 100000);