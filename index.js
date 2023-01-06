window.onload = function windowload(event) {
    abs = Boolean(Math.round(Math.random()))
    abs ? setAbs() : setBW();
}

const table = document.getElementById("wktab");
function setAbs() {
    let workouts = [
        ["plank circuit", "30sec each"],
        ["shoulder tap pushups", "3x10"],
        ["regular plank", "5m"],
        ["pallof press", "2x12"],
        ["pushup 1-arm reach", "3x10"],
        ["crunches", "100"],
        ["bike crunches", "100"],
        ["v sits", "3x7"],
        ["leg hover", "60sec"]
    ].sort(() => 0.5 - Math.random())
    let selected = workouts.slice(0, 5)

    table.className = "abtab";
    table.innerHTML = `
        <tr>
            <th>Workout</th>
            <th>Reps</th>
        </tr>
        <tr>
            <td>${selected[0][0]}</td>
            <td>${selected[0][1]}</td>
        </tr>
        <tr>
            <td>${selected[1][0]}</td>
            <td>${selected[1][1]}</td>
        </tr>
        <tr>
            <td>${selected[2][0]}</td>
            <td>${selected[2][1]}</td>
        </tr>
        <tr>
            <td>${selected[3][0]}</td>
            <td>${selected[3][1]}</td>
        </tr>
        <tr>
            <td>${selected[4][0]}</td>
            <td>${selected[4][1]}</td>
        </tr>
    `;
}
function setBW() {
    const pu_exercises = [
        ["reg. pushups", "75"],
        ["diamond pushups", "3x8"],
        ["clapups", "3x5"]
    ].sort(() => 0.5 - Math.random())
    const ab = [
        ["reg. plank", "5m"],
        ["plank circuit", "30sec each"],
        ["crunches", "100"],
        ["v-sits", "3x8"],
        ["hold v-sit", "3x15sec"],
        ["rocker", "30"]
    ].sort(() => 0.5 - Math.random())
    const pull = [
        ["pull-ups", "3x5"],
        ["chin-ups", "3x5"]
    ].sort(() => 0.5 - Math.random())
    const legs = [
        ["bw squats", "3x20"],
        ["calf raises", "10 each step"],
        ["split squats", "3x15"],
        ["one leg squat", "3x10"]
    ].sort(() => 0.5 - Math.random())
    const tricep = [
        ["dips", "3x10"],
        ["bench dips", "3x10"]
    ].sort(() => 0.5 - Math.random())

    table.className = "bwtable";
    table.innerHTML = `
        <tr>
            <th>Exercise Type</th>
            <th>Workout</th>
            <th>Reps</th>
        </tr>
        <tr>
            <td>pushup</td>
            <td>${pu_exercises[0][0]}</td>
            <td>${pu_exercises[0][1]}</td>
        </tr>
        <tr>
            <td>abs</td>
            <td>${ab[0][0]}</td>
            <td>${ab[0][1]}</td>
        </tr>
        <tr>
            <td>pulls</td>
            <td>${pull[0][0]}</td>
            <td>${pull[0][1]}</td>
        </tr>
        <tr>
            <td>abs</td>
            <td>${ab[1][0]}</td>
            <td>${ab[1][1]}</td>
        </tr>
        <tr>
            <td>legs</td>
            <td>${legs[0][0]}</td>
            <td>${legs[0][1]}</td>
        </tr>
        <tr>
            <td>abs</td>
            <td>${ab[2][0]}</td>
            <td>${ab[2][1]}</td>
        </tr>
        <tr>
            <td>tricep</td>
            <td>${tricep[0][0]}</td>
            <td>${tricep[0][1]}</td>
        </tr>
    `;
}
