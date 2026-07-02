const note = document.getElementById("note");
const clearBtn = document.getElementById("clearBtn");
const saveBtn = document.getElementById("saveBtn");
const downloadBtn = document.getElementById("downloadBtn");
const wordCount = document.getElementById("wordCount");
const charCount = document.getElementById("charCount");
note.value = localStorage.getItem("devlogipad-note") || "";

updateStats();

note.addEventListener("input", () => {
    localStorage.setItem("devlogipad-note", note.value);
    updateStats();
});

clearBtn.addEventListener("click", () => {
    if(confirm("Delete all notes?")){
        note.value="";
        localStorage.removeItem("devlogipad-note");
        updateStats();
    }
});

saveBtn.addEventListener("click",()=>{
    localStorage.setItem("devlogipad-note",note.value);
    alert("Saved!");
});

downloadBtn.addEventListener("click",()=>{
    const blob=new Blob([note.value],{type:"text/plain"});
    const link=document.createElement("a");
    link.href=URL.createObjectURL(blob);
    link.download="notes.txt";
    link.click();
});

function updateStats(){
    charCount.textContent="Characters: "+note.value.length;
    const words=note.value.trim()===""
        ?0
        :note.value.trim().split(/\s+/).length;
    wordCount.textContent="Words: "+words;
}