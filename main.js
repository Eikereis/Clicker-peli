let clicks = 0
let clickpower = 1
let clickpowercost = 500
let clickpoweramount = 1
let Lols = 300000
/*Cps*/
let cps = 0
let toolp = 0
let toolc = 25
let farmp = 0
let farmc = 125
let workerp = 0
let workerc = 750
let machinep = 0
let machinec = 5000
let sciencep = 0
let sciencec = 50000
let evilp = 0
let evilc = 16777215





/*code*/
console.log(Lols)
setInterval(randomEvent, Lols);

function buttonclick() {
    clickpower = Math.round(clickpoweramount * 2 - 1)
    clicks = clickpower + clicks;
    document
        .getElementById("clicks")
        .innerText = clicks;
}

/*1 = tool, 2 = farm, 3 = worker, 4 = machine, 5 = science, 6 = evil, 7 = clickpower*/
function purchase(x) {
    if (x === 1) {
        if (clicks >= toolc) {
            toolp = 1
            clicks = clicks - toolc;
            toolc = Math.round(25 + toolc * 1.005 ** Math.log(toolc * 1.1))
            setInterval(tooluse, 1000);
            document
            .getElementById("toolcost")
            .innerHTML = `Cost: ${toolc}`;
        }
    }
    if (x === 2) {
        if (clicks >= farmc) {
            clicks = clicks - farmc;
            farmp = 5
            farmc = Math.round(125 + farmc * 1.005 ** Math.log(farmc * 1.01))
            setInterval(farmuse, 1000);
            document
            .getElementById("farmcost")
            .innerHTML = `Cost: ${farmc}`;
        }
    }
    if (x === 3) {
        if (clicks >= workerc) {
            clicks = clicks - workerc;
            workerp = 25
            workerc = Math.round(250 + workerc * 1.005 ** Math.log(workerc * 1.1))
            setInterval(workeruse, 1000);
            document
            .getElementById("workercost")
            .innerHTML = `Cost: ${workerc}`;
        }
    }
    if (x === 4) {
        if (clicks >= machinec) {
            clicks = clicks - machinec;
            machinep = 100
            machinec = Math.round(5000 + machinec * 1.005 ** Math.log(machinec * 1.1))
            setInterval(machineuse, 1000);
            document
            .getElementById("machinecost")
            .innerHTML = `Cost: ${machinec}`;
        }
    }
    if (x === 5) {
        if (clicks >= sciencec) {
            clicks = clicks - sciencec;
            sciencep = 250;
            sciencec = Math.round(50000 + sciencec * 1.005 ** Math.log(sciencec * 1.1))
            setInterval(scienceuse, 1000);
            document
            .getElementById("sciencecost")
            .innerHTML = `Cost: ${sciencec}`;
        }
    }
    if (x === 6) {
        if (clicks >= evilc) {
            clicks = clicks - evilc;
            evilp = 10000;
            evilc = Math.round(50000 + evilc * 1.005 ** Math.log(evilc * 1.1))
            setInterval(eviluse, 1000);
            document
            .getElementById("evilcost")
            .innerHTML = `Cost: ${evilc}`;
        }
    }
    if (x === 7) {
        if (clicks >= clickpowercost) {
            clicks = clicks - clickpowercost;
            clickpoweramount++
            clickpowercost = Math.round(40 * (1 + 0.2 * clickpoweramount) * (1.7 ** clickpoweramount) * (2 ** Math.max(0, clickpoweramount - 5)) + 500)
            document
                .getElementById("upgradeclickcost")
                .innerHTML = `Cost: ${clickpowercost}`;
        }
    }
}

function randomEvent() {
    let rng = Math.round(Math.random() * 12);
    console.log(rng)
    if (rng === 1) {
        clicks = clicks * 6
        document
            .getElementById("randomnotification")
            .innerHTML = "Random Event! <br> Clicks have been multiplied"
    }
    if (rng === 2) {
        clickpower = clickpower * 2
        document
            .getElementById("randomnotification")
            .innerHTML = "Clickpower multiplied by 2"
    }
    if (rng === 3) {
        clicks = (15 + (clicks * 3) * (clickpower / 25))
        document
            .getElementById("randomnotification")
            .innerHTML = "clicks have been added"
    }
    if (rng === 4) {
        clickpower = Math.round(clickpower / 2);
        document
            .getElementById("randomnotification")
            .innerHTML = "clickpower has been halved"
    }
    if (rng === 6) {
        clicks = clicks + 100
        document
            .getElementById("randomnotification")
            .innerHTML = "100 clicks";
    }
}



function tooluse() {
    clicks = clicks + toolp;
    document
    .getElementById("clicks")
    .innerText = clicks;
}

function farmuse() {
    clicks = clicks + farmp;
    document
    .getElementById("clicks")
    .innerText = clicks;
    
}

function workeruse() {
    clicks = clicks + workerp;
    document
    .getElementById("clicks")
    .innerText = clicks;
}

function machineuse() {
    clicks = clicks + machinep;
    document
    .getElementById("clicks")
    .innerText = clicks;
}

function scienceuse() {
    clicks = clicks + sciencep;
    document
    .getElementById("clicks")
    .innerText = clicks;
}

function eviluse() {
    clicks = clicks + evilp;
    document
    .getElementById("clicks")
    .innerText = clicks;
}

setInterval(universalclick, 100)

function universalclick() {
    clicks = Math.round(clicks)
    document
    .getElementById("clicks")
    .innerText = clicks;
    
}


setInterval(function() {console.log(clicks, toolc, toolp, clickpower, clickpoweramount, farmc, farmp, workerc,workerp, machinep,machinec, sciencec,sciencep, evilc,evilp)}, 100000)
/* To Do:
upgrades
CSS Visuals
Animations
balancing
rebirth system 
*/

