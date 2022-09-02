function getEle(id){
    return document.getElementById(id);
}
getEle();

getEle("btnKhoi1").addEventListener("click", () =>{
    let diemToan = getEle("inpToan").value*1;
    let diemLy = getEle("inpLy").value*1;
    let diemHoa = getEle("inpHoa").value;
    let tinhDTBK1 = tinhDTB(diemToan, diemLy, diemHoa);
    getEle("tbKhoi1").innerHTML `Diem trung binh cua khoi 1 la : ${tinhDTBK1}`
})
getEle("btnKhoi2").addEventListener("click",() =>{
    let diemVan = getEle("inpVan").value*1;
    let diemSu = getEle("inpSu").value*1;
    let diemDia = getEle("inpDia").value*1;
    let englishMark = getEle("inpEnglish").value*1;
    let tinhDTBK2 = tinhDTB(diemVan,diemSu,diemDia,englishMark);
    getEle("tbKhoi2").innerHTML = `Diem trung binh cua khoi 2 la : ${tinhDTBK2}`
})
tinhDTB = (...diemTB) =>{
    let tongDiem = 0;
    diemTB.forEach(function (diem){
        return tongDiem += diem;
    })
    return tongDiem/ diemTB.length
}

























