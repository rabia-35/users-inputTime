/** kitap ikonu svg */
var book =`
    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-book-half" viewBox="0 0 16 16">
<path d="M8.5 2.687c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"/>
</svg>`



/** prompt bilgisini kullanma ve sonucu göre alert verme */
var manga=document.querySelector("#manga")

var isim=prompt("lütfen kullanıcı adınızı giriniz");

(isim.length>0) ? manga.innerHTML=`${isim} ${manga.innerHTML} ${book}` : alert("kullanıcı adı girilmedi");

/** zaman bilgisi  */
function baslangıc(){
    const bugun=new Date();
    let s=bugun.getHours();
    let dk=bugun.getMinutes();
    let sn=bugun.getSeconds();
    let day=bugun.getDay();
 

if(day==1){day="PAZARTESİ"}
else if (day==2){ day="SALI"}
else if (day==3){day="ÇARŞAMBA"}
else if (day==4){day="PERŞEMBE"}
else if (day==5){day="CUMA"}
else if (day==6){day="CUMARTESİ"}
else if (day==7){day="PAZAR"}

    document.querySelector("#zaman").innerHTML=s + ":" + dk + ":" +sn + "  " + day ;
    setTimeout(baslangıc, 1000);
}
baslangıc();