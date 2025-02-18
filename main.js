let clicks = 0;
let clickpower = 1;
let clickpowercost = 500;
let clickpoweramount = 1;
let universalmultiplier = 1;
let rebirthCost = 1000000000;
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
console.log(Lols); 
setInterval(randomEvent, Lols);


// Display the number of clicks
function buttonclick() {
    clickpower = Math.round(clickpoweramount * 2 - 1 + (universalmultiplier * 0.2));
    clicks = clickpower + clicks;
    document.getElementById("clicks").innerText = clicks;
}

// Upgrade System
function upgrade(x) {
    if (x === 1 && clicks >= toolUpgradeCost) {
        toolp += 2;
        clicks -= toolUpgradeCost;
        toolUpgradeCost = Math.round(toolUpgradeCost * (1.5 / universalmultiplier));
        document.getElementById("toolUpgradeCost").innerText = toolUpgradeCost;
    }
    if (x === 2 && clicks >= farmUpgradeCost) {
        farmp += 5;
        clicks -= farmUpgradeCost;
        farmUpgradeCost = Math.round(farmUpgradeCost * (1.5 / universalmultiplier));
        document.getElementById("farmUpgradeCost").innerText = farmUpgradeCost;
    }
    if (x === 3 && clicks >= workerUpgradeCost) {
        workerp += 25;
        clicks -= workerUpgradeCost;
        workerUpgradeCost = Math.round(workerUpgradeCost * (1.5 / universalmultiplier));
        document.getElementById("workerUpgradeCost").innerText = workerUpgradeCost;
    }
    if (x === 4 && clicks >= machineUpgradeCost) {
        machinep += 100;
        clicks -= machineUpgradeCost;
        machineUpgradeCost = Math.round(machineUpgradeCost * (1.5 / universalmultiplier));
        document.getElementById("machineUpgradeCost").innerText = machineUpgradeCost;
    }
    if (x === 5 && clicks >= scienceUpgradeCost) {
        sciencep += 250;
        clicks -= scienceUpgradeCost;
        scienceUpgradeCost = Math.round(scienceUpgradeCost * (1.5 / universalmultiplier));
        document.getElementById("scienceUpgradeCost").innerText = scienceUpgradeCost;
    }
    if (x === 6 && clicks >= evilUpgradeCost) {
        evilp += 10000;
        clicks -= evilUpgradeCost;
        evilUpgradeCost = Math.round(evilUpgradeCost * (1.5 / universalmultiplier));
        document.getElementById("evilUpgradeCost").innerText = evilUpgradeCost;
    }
}

// Purchase  System
function purchase(x) {
    if (x === 1) {
        if (clicks >= toolc) {
            clicks = clicks - toolc;
            toolc = Math.round(25 + toolc * 1.001 ** Math.log(toolc * 1.1 / universalmultiplier));
            setInterval(tooluse, 1000);
            document.getElementById("toolcost").innerHTML = `Cost:${toolc}`;
        }
    }
    if (x === 2) {
        if (clicks >= farmc) {
            clicks = clicks - farmc;
            farmc = Math.round(125 + farmc * 1.003 ** Math.log(farmc * 1.01 / universalmultiplier));
            setInterval(farmuse, 1000);
            document.getElementById("farmcost").innerHTML = `Cost:${farmc}`;
        }
    }
    if (x === 3) {
        if (clicks >= workerc) {
            clicks = clicks - workerc;
            workerc = Math.round(250 + workerc * 1.004 ** Math.log(workerc * 1.1 / universalmultiplier));
            setInterval(workeruse, 1000);
            document.getElementById("workercost").innerHTML = `Cost:${workerc}`;
        }
    }
    if (x === 4) {
        if (clicks >= machinec) {
            clicks = clicks - machinec;
            machinec = Math.round(5000 + machinec * 1.003 ** Math.log(machinec * 1.1 / universalmultiplier));
            setInterval(machineuse, 1000);
            document.getElementById("machinecost").innerHTML = `Cost:${machinec}`;
        }
    }
    if (x === 5) {
        if (clicks >= sciencec) {
            clicks = clicks - sciencec;
            sciencec = Math.round(50000 + sciencec * 1.002 ** Math.log(sciencec * 1.1 / universalmultiplier));
            setInterval(scienceuse, 1000);
            document.getElementById("sciencecost").innerHTML = `Cost:${sciencec}`;
        }
    }
    if (x === 6) {
        if (clicks >= evilc) {
            clicks = clicks - evilc;
            evilc = Math.round(50000 + evilc * 1.001 ** Math.log(evilc * 1.1 / universalmultiplier));
            setInterval(eviluse, 1000);
            document.getElementById("evilcost").innerHTML = `Cost:${evilc}`;
        }
    }
    if (x === 7) {
        if (clicks >= clickpowercost) {
            clicks = clicks - clickpowercost;
            clickpoweramount++;
            clickpowercost = Math.round(40 * (1 + 0.2 * clickpoweramount) * (1.3 ** clickpoweramount) * (2 ** Math.max(0, clickpoweramount - 3) / universalmultiplier ) + 500);
            document.getElementById("upgradeclickcost").innerHTML = `Cost: ${clickpowercost}`;
        }
    }
}



//Fun Events
function randomEvent() {
    let rng = Math.round(Math.random() * 12);
    console.log(rng);
    if (rng === 1) {
        clicks = clicks / 2;
        document.getElementById("randomnotification").innerHTML = "Random Event! <br> Cookies have been halved!";
    }
    if (rng === 2) {
        clickpower = clickpower * 1.5;
        document.getElementById("randomnotification").innerHTML = "Random Event! <br> Clickpower has been increased!";
    }
    if (rng === 3) {
        clicks = 15 + (clicks * 3) * (clickpower / 25 + 0.1);
        document.getElementById("randomnotification").innerHTML = "Random Event! <br> A random amount of Cookies based on clickpower have been added!";
    }

    if (rng === 6) {
        clicks = clicks + 100;
        document.getElementById("randomnotification").innerHTML = "Random Event! <br> 100 Cookies added!";
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



//Rebirth System
function rebirth() {
    if (clicks >= 1000000000) {

        clicks = 0;
        clickpower = 1;
        clickpoweramount = 1;
        cps = 0;
        toolp = 1;
        toolc = 25;
        toolUpgradeCost = 1000;
        farmp = 5;
        farmc = 125;
        farmUpgradeCost = 2500;
        workerp = 25;
        workerc = 750;
        workerUpgradeCost = 5000;
        machinep = 100;
        machinec = 5000;
        machineUpgradeCost = 10000;
        sciencep = 250;
        sciencec = 50000;
        scienceUpgradeCost = 80000;
        evilp = 10000;
        evilc = 1677215;
        evilUpgradeCost = 10000000;
        document.getElementById("clicks").innerText = clicks;
        document.getElementById("toolcost").innerHTML = `Cost:${toolc}`;
        document.getElementById("farmcost").innerHTML = `Cost:${farmc}`;
        document.getElementById("workercost").innerHTML = `Cost:${workerc}`;
        document.getElementById("machinecost").innerHTML = `Cost:${machinec}`;
        document.getElementById("sciencecost").innerHTML = `Cost:${sciencec}`;
        document.getElementById("evilcost").innerHTML = `Cost:${evilc}`;
        document.getElementById("toolUpgradeCost").innerText = toolUpgradeCost;
        document.getElementById("farmUpgradeCost").innerText = farmUpgradeCost;
        document.getElementById("workerUpgradeCost").innerText = workerUpgradeCost;
        document.getElementById("machineUpgradeCost").innerText = machineUpgradeCost;
        document.getElementById("scienceUpgradeCost").innerText = scienceUpgradeCost;
        document.getElementById("evilUpgradeCost").innerText = evilUpgradeCost;
        
        universalmultiplier++;

        rebirthCost = Math.round(rebirthCost * (universalmultiplier*1.5));
    }
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
    if (clicks >= 1000000000) {
        document.getElementById("rebirthcheck").innerText = "Do a Rebirth?";
    }
}

setInterval(function() {
    console.log(clicks, toolc, toolp, clickpower, clickpoweramount, farmc, farmp, workerc, workerp, machinep, machinec, sciencec, sciencep, evilc, evilp);
}, 100000);