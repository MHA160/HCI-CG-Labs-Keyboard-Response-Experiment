let startTimestamp;
let accumulatedTime = 0;
let trialCount = 0;
let expectedType = "";

function generateStimulus(){

    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const digits = "0123456789";

    if(Math.random() < 0.5){

        expectedType = "letter";
        return alphabet[Math.floor(Math.random()*alphabet.length)];

    }else{

        expectedType = "number";
        return digits[Math.floor(Math.random()*digits.length)];

    }
}

function startTest(){

    const stim = generateStimulus();
    document.getElementById("stimulus").innerText = stim;

    startTimestamp = Date.now();
}

document.addEventListener("keydown",function(e){

    if(e.key === "a" || e.key === "A"){

        if(expectedType === "letter"){
            recordTime();
        }

    }

    if(e.key === "l" || e.key === "L"){

        if(expectedType === "number"){
            recordTime();
        }

    }

    if(e.code === "Space"){
        resetTest();
    }

});

function recordTime(){

    let endTimestamp = Date.now();
    let reactionMs = endTimestamp - startTimestamp;

    accumulatedTime += reactionMs;
    trialCount++;

    document.getElementById("trial").innerText = trialCount;

    let average = accumulatedTime / trialCount;
    document.getElementById("avg").innerText = average.toFixed(2);

    startTest();
}

function resetTest(){

    trialCount = 0;
    accumulatedTime = 0;

    document.getElementById("trial").innerText = 0;
    document.getElementById("avg").innerText = 0;
    document.getElementById("stimulus").innerText = "?";
}