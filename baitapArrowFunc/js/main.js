   function changingColor(){
       let color ="";
       color+= `
       <button id="pallet" class="span-color pallet color-button active "></button>
       <button id="viridian" class="span-color viridian color-button"></button>
       <button id="pewter" class="span-color pewter color-button"></button>
       <button id="cerulean" class="span-color cerulean color-button"></button>
       <button id="vermillion" class="span-color vermillion color-button"></button>
       <button id="lavender" class="span-color lavender color-button"></button>
       <button id="celadon" class="span-color celadon color-button"></button>
       <button id="saffron" class="span-color saffron color-button"></button>
       <button id="fuschia" class="span-color fuschia color-button"></button>
       <button id="cinnabar" class="span-color cinnabar color-button"></button>
       `
       document.getElementById("colorContainer").innerHTML = color
   }
   changingColor();
   let result = document.querySelectorAll('.span-color');
   for(let index = 0; index <= result.length; index++){
       result[index].onclick = () => { 
       document.getElementById('house').classList = "house " + (result[index].id);
       document.getElementById((result[index].id)).classList.add("active");
       }
   }


// document.getElementById("btnKhoi1").onclick = () => {
//     let mathMark = document.getElementById("inpToan").value*1;
// let physicsMark = document.getElementById("inpLy").value*1;
// let biologyMark = document.getElementById("inpHoa").value*1;
//   let tinhTong = (mathMark + physicsMark + biologyMark) / 3;
//   document.getElementById("tbKhoi1").innerHTML = tinhTong;
// }

let mathMark = document.getElementById("inpToan").value*1;
 let physicsMark = document.getElementById("inpLy").value*1;
 let biologyMark = document.getElementById("inpHoa").value*1;
let totalMark = "";
document.getElementById("btnKhoi1").onclick = function calcAverage(...mark){
    mark.forEach(function(totalMark){
        totalMark = mathMark + physicsMark + biologyMark;
        document.getElementById("tbKhoi1").innerHTML = totalMark;
    })
}

