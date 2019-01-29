"use strict"

ipcRenderer.on('open:allMissions', (event, filename)=>{
    fetch(`../views/${filename}.html`)
    .then(res=>res.text())
    .then(res=>{
        results.innerHTML = res;

    const docfrag = document.createDocumentFragment();
    for (let i = 0; i < 40; i++){
        const mission_container = document.createElement('mission-container');
        mission_container.className = "mission-container";

        const img = document.createElement('img');
        img.className = "mission-image";
        img.src = "../public/images/report.jpg";

        const p = document.createElement('p');
        p.className = "mission-name";
        p.innerHTML = "missionName"

        mission_container.appendChild(img);
        mission_container.appendChild(p);
        docfrag.appendChild(mission_container);

        mission_container.addEventListener('click', function(e){
            (function(e){
                openMissionData();
            }(e));
        });
    }

        const all_missions_wrapper = document.getElementById('all-missions-wrapper');
        all_missions_wrapper.appendChild(docfrag);
    });
});


function openMissionData(){
    fetch(`../views/mission-data.html`)
    .then(res=>res.text())
    .then(res=>{
        results.innerHTML = res;
    });
}