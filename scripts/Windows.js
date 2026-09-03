function dragger(dragElement, handleElement) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    handleElement.onmousedown = dragMouseDown;

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = stopper;
        document.onmousemove = elementDrag;
    } 

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        dragElement.style.top = (dragElement.offsetTop - pos2) + "px";
        dragElement.style.left = (dragElement.offsetLeft - pos1) + "px";
    }
    function stopper() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

function resizer(resizeElement, handleElement) {
    var startX = 0, startY = 0, startWidth = 0, startHeight = 0, startTop = 0, startLeft = 0;

    var growsLeft = handleElement.id.includes("Left");
    var growsUp = handleElement.id.includes("Top");

    handleElement.onmousedown = resizeMouseDown;

    function resizeMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        e.stopPropagation();
        startX = e.clientX;
        startY = e.clientY;
        startWidth = resizeElement.offsetWidth;
        startHeight = resizeElement.offsetHeight;
        startTop = resizeElement.offsetTop;
        startLeft = resizeElement.offsetLeft;
        document.onmouseup = stopper;
        document.onmousemove = resizing;
    }

    function resizing(e) {
        e = e || window.event;
        e.preventDefault();
        if (growsLeft) {
            resizeElement.style.width = (startWidth - (e.clientX - startX)) + "px";
            resizeElement.style.left = (startLeft + (e.clientX - startX)) + "px";
        } else {
            resizeElement.style.width = (startWidth + (e.clientX - startX)) + "px";
        }

        if (growsUp) {
            resizeElement.style.height = (startHeight - (e.clientY - startY)) + "px";
            resizeElement.style.top = (startTop + (e.clientY - startY)) + "px";
        } else {
            resizeElement.style.height = (startHeight + (e.clientY - startY)) + "px";
        }
    }

    function stopper() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

dragger(document.getElementById("scheduleInputDiv"), document.getElementById("scheduleInputHeader"));
resizer(document.getElementById("scheduleInputDiv"), document.getElementById("scheduleInputResizerTopRight"));
resizer(document.getElementById("scheduleInputDiv"), document.getElementById("scheduleInputResizerBottomRight"));
resizer(document.getElementById("scheduleInputDiv"), document.getElementById("scheduleInputResizerBottomLeft"));
resizer(document.getElementById("scheduleInputDiv"), document.getElementById("scheduleInputResizerTopLeft"));

dragger(document.getElementById("tzInputDiv"), document.getElementById("tzInputHeader"));
resizer(document.getElementById("tzInputDiv"), document.getElementById("tzInputResizerTopRight"));
resizer(document.getElementById("tzInputDiv"), document.getElementById("tzInputResizerBottomRight"));
resizer(document.getElementById("tzInputDiv"), document.getElementById("tzInputResizerBottomLeft"));
resizer(document.getElementById("tzInputDiv"), document.getElementById("tzInputResizerTopLeft"));

dragger(document.getElementById("reminderInputDiv"), document.getElementById("reminderInputHeader"));
resizer(document.getElementById("reminderInputDiv"), document.getElementById("reminderInputResizerTopRight"));
resizer(document.getElementById("reminderInputDiv"), document.getElementById("reminderInputResizerBottomRight"));
resizer(document.getElementById("reminderInputDiv"), document.getElementById("reminderInputResizerBottomLeft"));
resizer(document.getElementById("reminderInputDiv"), document.getElementById("reminderInputResizerTopLeft"));

dragger(document.getElementById("generateInputDiv"), document.getElementById("generateInputHeader"));
resizer(document.getElementById("generateInputDiv"), document.getElementById("generateInputResizerTopRight"));
resizer(document.getElementById("generateInputDiv"), document.getElementById("generateInputResizerBottomRight"));
resizer(document.getElementById("generateInputDiv"), document.getElementById("generateInputResizerBottomLeft"));
resizer(document.getElementById("generateInputDiv"), document.getElementById("generateInputResizerTopLeft"));

dragger(document.getElementById("downloadInputDiv"), document.getElementById("downloadInputHeader"));
resizer(document.getElementById("downloadInputDiv"), document.getElementById("downloadInputResizerTopRight"));
resizer(document.getElementById("downloadInputDiv"), document.getElementById("downloadInputResizerBottomRight"));
resizer(document.getElementById("downloadInputDiv"), document.getElementById("downloadInputResizerBottomLeft"));
resizer(document.getElementById("downloadInputDiv"), document.getElementById("downloadInputResizerTopLeft"));

dragger(document.getElementById("resultsInputDiv"), document.getElementById("resultsInputHeader"));
resizer(document.getElementById("resultsInputDiv"), document.getElementById("resultsInputResizerTopRight"));
resizer(document.getElementById("resultsInputDiv"), document.getElementById("resultsInputResizerBottomRight"));
resizer(document.getElementById("resultsInputDiv"), document.getElementById("resultsInputResizerBottomLeft"));
resizer(document.getElementById("resultsInputDiv"), document.getElementById("resultsInputResizerTopLeft"));


function presser(triggerElement, targetElements) {
    if (!triggerElement) return;
    const targets = Array.isArray(targetElements) ? targetElements : [targetElements];

    triggerElement.addEventListener('mousedown', () => {
        targets.forEach(el => el && el.classList.add('pressed'));
    });

    document.addEventListener('mouseup', () => {
        targets.forEach(el => el && el.classList.remove('pressed'));
    });
}

function collapser(triggerElement, targetElements) {
    if (!triggerElement) return;
    const targets = Array.isArray(targetElements) ? targetElements : [targetElements];

    triggerElement.addEventListener('click', () => {
        targets.forEach(el => el && el.classList.toggle(`${el.id}Collapsed`));
    });
}

presser(
    document.getElementById("scheduleInputHeaderDash"),
    [
        document.getElementById("scheduleInputHeaderDash"),
        document.getElementById("scheduleInputHeaderDashText")
    ],
    
);

collapser(
    document.getElementById("scheduleInputHeaderDash"),
    document.getElementById("scheduleTextBoxDiv")
);
collapser(
    document.getElementById("scheduleInputHeaderDash"),
    document.getElementById("scheduleInputDiv")
);

// Timezone

presser(
    document.getElementById("tzInputHeaderDash"),
    [
        document.getElementById("tzInputHeaderDash"),
        document.getElementById("tzInputHeaderDashText")
    ],
    
);

collapser(
    document.getElementById("tzInputHeaderDash"),
    document.getElementById("tzTextBoxDiv")
);
collapser(
    document.getElementById("tzInputHeaderDash"),
    document.getElementById("tzInputDiv")
);

// Reminder

presser(
    document.getElementById("reminderInputHeaderDash"),
    [
        document.getElementById("reminderInputHeaderDash"),
        document.getElementById("reminderInputHeaderDashText")
    ],
    
);

collapser(
    document.getElementById("reminderInputHeaderDash"),
    document.getElementById("reminderTextBoxDiv")
);
collapser(
    document.getElementById("reminderInputHeaderDash"),
    document.getElementById("reminderInputDiv")
);

//Generate 

presser(
    document.getElementById("generateInputHeaderDash"),
    [
        document.getElementById("generateInputHeaderDash"),
        document.getElementById("generateInputHeaderDashText")
    ],
    
);

collapser(
    document.getElementById("generateInputHeaderDash"),
    document.getElementById("generateButtonDiv")
);
collapser(
    document.getElementById("generateInputHeaderDash"),
    document.getElementById("generateInputDiv")
);

//Download


presser(
    document.getElementById("downloadInputHeaderDash"),
    [
        document.getElementById("downloadInputHeaderDash"),
        document.getElementById("downloadInputHeaderDashText")
    ],
    
);

collapser(
    document.getElementById("downloadInputHeaderDash"),
    document.getElementById("downloadButtonDiv")
);
collapser(
    document.getElementById("downloadInputHeaderDash"),
    document.getElementById("downloadInputDiv")
);

presser(
    document.getElementById("resultsInputHeaderDash"),
    [
        document.getElementById("resultsInputHeaderDash"),
        document.getElementById("resultsInputHeaderDashText")
    ],
    
);

collapser(
    document.getElementById("resultsInputHeaderDash"),
    document.getElementById("resultsButtonDiv")
);
collapser(
    document.getElementById("resultsInputHeaderDash"),
    document.getElementById("resultsInputDiv")
);



function downloadFile(filename, text) {
    const blob = new Blob([text], { type: "text/calendar;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}
