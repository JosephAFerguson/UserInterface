//checkboxes
const happycheckbox = document.getElementById("happycheckbox");
const neutralcheckbox = document.getElementById("neutralcheckbox");
const sadcheckbox = document.getElementById("sadcheckbox");
// array object to store entries
let entries = [
    {datetime: "2025-08-31 12:37am", sleepinput: 7, mood:"happy", entry: "Today I felt Amazing..."},
    {datetime: "2025-09-01 12:35am", sleepinput: 5, mood:"neutral", entry: "Today I felt Ok..."},
    {datetime: "2025-09-02 12:39am", sleepinput: 4, mood:"sad", entry: "Today I felt Sad..."}
];
for(i = 0; i < entries.length;i++)
{
    document.getElementById("PastEntries").innerHTML +=
        `<div>Date: ${entries[i].datetime} | Entry: ${entries[i].entry} | Sleep: ${entries[i].sleepinput} | Mood: ${entries[i].mood}</div>`;
}
UpdateStats();
function AddEntry(datetimeInput, sleepinput, moodInput, entryInput){
    entries.push({
        datetime: datetimeInput,
        sleepinput: sleepinput,
        mood: moodInput,
        entry: entryInput
    });

    document.getElementById("PastEntries").innerHTML += 
   `<div>Date: ${datetimeInput} | Entry: ${entryInput} | Sleep: ${sleepinput} | Mood: ${moodInput}</div>`;

}
function UpdateStats(){
    let allSleep = 0;
    let happy = 0;
    let neutral = 0;
    let sad = 0;

    for(i=0;i<entries.length;i++){
        allSleep+=entries[i].sleepinput;
        let mood = entries[i].mood;
        if (mood === "happy") {
            happy++;
        } else if (mood === "neutral") {
            neutral++;
        } else if (mood === "sad") {
            sad++;
        }
    }

    document.getElementById("HoursSlept").innerText = "Average Hours Slept: " + (allSleep / entries.length).toFixed(1);
    document.getElementById("HappyDays").innerText = "Happy Days: " + happy;
    document.getElementById("NeutralDays").innerText = "Neutral Days: " + neutral;
    document.getElementById("SadDays").innerText = "Sad Days: " + sad;

}
// show last mood on load
ShowMood(entries[entries.length - 1].mood);

function GetSubmitValues(){
    let text = document.getElementById("textbox1").value;
    let sleep = Number(document.getElementById("sleepinput").value);

    let cmood = "";
    if(happycheckbox.checked){
        cmood = "happy";
    } else if(neutralcheckbox.checked){
        cmood = "neutral";
    } else if(sadcheckbox.checked){
        cmood = "sad";
    }
    
    AddEntry(new Date().toLocaleString(), sleep, cmood, text);
    ShowMood(cmood);
    UpdateStats();
}

function HappyCheck(){
    if(happycheckbox.checked){
        neutralcheckbox.checked = false;
        sadcheckbox.checked = false;
    }
}
function NeutralCheck(){
    if(neutralcheckbox.checked){
        happycheckbox.checked = false;
        sadcheckbox.checked = false;
    }
}
function SadCheck(){
    if(sadcheckbox.checked){
        happycheckbox.checked = false;
        neutralcheckbox.checked = false;
    }
}
function ShowMood(mood) {
    document.getElementById("happy").style.display = (mood === "happy") ? "block" : "none";
    document.getElementById("neutral").style.display = (mood === "neutral") ? "block" : "none";
    document.getElementById("sad").style.display = (mood === "sad") ? "block" : "none";
}

document.getElementById("submitbtn").addEventListener("click", GetSubmitValues);
document.getElementById("happycheckbox").addEventListener("change", HappyCheck);
document.getElementById("neutralcheckbox").addEventListener("change", NeutralCheck);
document.getElementById("sadcheckbox").addEventListener("change", SadCheck);
