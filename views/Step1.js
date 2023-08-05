function zoomIn(event) {
    document.getElementsByClassName("map");
    event.target.style.transform = "scale(1.2)";
    event.target.style.zIndex = 1;
    event.target.style.transition = "all 0.5s";
}
function zoomOut(event) {
    document.getElementsByClassName("map");
    event.target.style.transform = "scale(1)";
    event.target.style.zIndex = 0;
    event.target.style.transition = "all 0.5s";
}

var gugasu=0; // 메모장(선택 구) 개수
const mt1 = document.getElementById("memo-title-1");
const mt2 = document.getElementById("memo-title-2");
const mt3 = document.getElementById("memo-title-3");
const mt4 = document.getElementById("next-button");
const Gangbukgu = document.getElementById("Gangbuk");
const Dobonggu = document.getElementById("Dobong");
const Nowongu = document.getElementById("Nowon");
const Jungranggu = document.getElementById("Jungrang");
const Dongdaemungu = document.getElementById("Dongdaemun");
const Seongbukgu = document.getElementById("Seongbuk");
const Jongrogu = document.getElementById("Jongro");
const Eunpyeonggu = document.getElementById("Eunpyeong");
const Seodaemungu = document.getElementById("Seodaemun");
const Junggu = document.getElementById("Jung");
const Seongdonggu = document.getElementById("Seongdong");
const Mapogu = document.getElementById("Mapo");
const Yongsangu = document.getElementById("Yongsan");
const Gwangjingu = document.getElementById("Gwangjin");
const Gangseogu = document.getElementById("Gangseo");
const Yeongdeungpogu = document.getElementById("Yeongdeungpo");
const Yangcheongu = document.getElementById("Yangcheon");
const Gurogu = document.getElementById("Guro");
const Dongjakgu = document.getElementById("Dongjak");
const Gwanakgu = document.getElementById("Gwanak");
const Geumcheongu = document.getElementById("Geumcheon");
const Seochogu = document.getElementById("Seocho");
const Gangnamgu = document.getElementById("Gangnam");
const Songpagu = document.getElementById("Songpa");
const Gangdonggu = document.getElementById("Gangdong");

var flagarr = [];
flagarr.length = 26; //구 순서대로 1~25
for(var fi=0; fi<=25; fi++) flagarr[fi]=0;
var locarr = [];
locarr.length = 4;

{
    Gangbukgu.addEventListener("click", (e) => {
        if(flagarr[1]!=0) alert("중복되었습니다!");
        else if(gugasu<3)
        {
            flagarr[1]++;
            gugasu++;
            locarr[gugasu]=1;
            eval("mt"+gugasu).innerHTML = "강북구";
        }
        else alert("지역은 최대 3곳 선택하실 수 있습니다!");
    });
    Dobonggu.addEventListener("click", (e) => {
        if(flagarr[2]!=0) alert("중복되었습니다!");
        else if(gugasu<3)
        {
            flagarr[2]++;
            gugasu++;
            locarr[gugasu]=2;
            eval("mt"+gugasu).innerHTML = "도봉구";
        }
        else alert("지역은 최대 3곳 선택하실 수 있습니다!");
    });
    Nowongu.addEventListener("click", (e) => {
        if(flagarr[3]!=0) alert("중복되었습니다!");
        else if(gugasu<3)
        {
            flagarr[3]++;
            gugasu++;
            locarr[gugasu]=3;
            eval("mt"+gugasu).innerHTML = "노원구";
        }
        else alert("지역은 최대 3곳 선택하실 수 있습니다!");
    });
    Jungranggu.addEventListener("click", (e) => {
        if(flagarr[4]!=0) alert("중복되었습니다!");
        else if(gugasu<3)
        {
            flagarr[4]++;
            gugasu++;
            locarr[gugasu]=4;
            eval("mt"+gugasu).innerHTML = "중랑구";
        }
        else alert("지역은 최대 3곳 선택하실 수 있습니다!");
    });
    Dongdaemungu.addEventListener("click", (e) => {
        if(flagarr[5]!=0) alert("중복되었습니다!");
        else if(gugasu<3)
        {
            flagarr[5]++;
            gugasu++;
            locarr[gugasu]=5;
            eval("mt"+gugasu).innerHTML = "동대문구";
        }
        else alert("지역은 최대 3곳 선택하실 수 있습니다!");
    });
    Seongbukgu.addEventListener("click", (e) => {
        if(flagarr[6]!=0) alert("중복되었습니다!");
        else if(gugasu<3)
        {
            flagarr[6]++;
            gugasu++;
            locarr[gugasu]=6;
            eval("mt"+gugasu).innerHTML = "성북구";
        }
        else alert("지역은 최대 3곳 선택하실 수 있습니다!");
    });
    Jongrogu.addEventListener("click", (e) => {
        if(flagarr[7]!=0) alert("중복되었습니다!");
        else if(gugasu<3)
        {
            flagarr[7]++;
            gugasu++;
            locarr[gugasu]=7;
            eval("mt"+gugasu).innerHTML = "종로구";
        }
        else alert("지역은 최대 3곳 선택하실 수 있습니다!");
    });
    Eunpyeonggu.addEventListener("click", (e) => {
        if(flagarr[8]!=0) alert("중복되었습니다!");
        else if(gugasu<3)
        {
            flagarr[8]++;
            gugasu++;
            locarr[gugasu]=8;
            eval("mt"+gugasu).innerHTML = "은평구";
        }
        else alert("지역은 최대 3곳 선택하실 수 있습니다!");
    });
    Seodaemungu.addEventListener("click", (e) => {
        if(flagarr[9]!=0) alert("중복되었습니다!");
        else if(gugasu<3)
        {
            flagarr[9]++;
            gugasu++;
            locarr[gugasu]=9;
            eval("mt"+gugasu).innerHTML = "서대문구";
        }
        else alert("지역은 최대 3곳 선택하실 수 있습니다!");
    });
    Junggu.addEventListener("click", (e) => {
        if(flagarr[10]!=0) alert("중복되었습니다!");
        else if(gugasu<3)
        {
            flagarr[10]++;
            gugasu++;
            locarr[gugasu]=10;
            eval("mt"+gugasu).innerHTML = "중구";
        }
        else alert("지역은 최대 3곳 선택하실 수 있습니다!");
    });
    Seongdonggu.addEventListener("click", (e) => {
        if(flagarr[11]!=0) alert("중복되었습니다!");
        else if(gugasu<3)
        {
            flagarr[11]++;
            gugasu++;
            locarr[gugasu]=11;
            eval("mt"+gugasu).innerHTML = "성동구";
        }
        else alert("지역은 최대 3곳 선택하실 수 있습니다!");
    });
    Mapogu.addEventListener("click", (e) => {
        if(flagarr[12]!=0) alert("중복되었습니다!");
        else if(gugasu<3)
        {
            flagarr[12]++;
            gugasu++;
            locarr[gugasu]=12;
            eval("mt"+gugasu).innerHTML = "마포구";
        }
        else alert("지역은 최대 3곳 선택하실 수 있습니다!");
    });
    Yongsangu.addEventListener("click", (e) => {
        if(flagarr[13]!=0) alert("중복되었습니다!");
        else if(gugasu<3)
        {
            flagarr[13]++;
            gugasu++;
            locarr[gugasu]=13;
            eval("mt"+gugasu).innerHTML = "용산구";
        }
        else alert("지역은 최대 3곳 선택하실 수 있습니다!");
    });
    Gwangjingu.addEventListener("click", (e) => {
        if(flagarr[14]!=0) alert("중복되었습니다!");
        else if(gugasu<3)
        {
            flagarr[14]++;
            gugasu++;
            locarr[gugasu]=14;
            eval("mt"+gugasu).innerHTML = "광진구";
        }
        else alert("지역은 최대 3곳 선택하실 수 있습니다!");
    });
    Gangseogu.addEventListener("click", (e) => {
        if(flagarr[15]!=0) alert("중복되었습니다!");
        else if(gugasu<3)
        {
            flagarr[15]++;
            gugasu++;
            locarr[gugasu]=15;
            eval("mt"+gugasu).innerHTML = "강서구";
        }
        else alert("지역은 최대 3곳 선택하실 수 있습니다!");
    });
    Yeongdeungpogu.addEventListener("click", (e) => {
        if(flagarr[16]!=0) alert("중복되었습니다!");
        else if(gugasu<3)
        {
            flagarr[16]++;
            gugasu++;
            locarr[gugasu]=16;
            eval("mt"+gugasu).innerHTML = "영등포구";
        }
        else alert("지역은 최대 3곳 선택하실 수 있습니다!");
    });
    Yangcheongu.addEventListener("click", (e) => {
        if(flagarr[17]!=0) alert("중복되었습니다!");
        else if(gugasu<3)
        {
            flagarr[17]++;
            gugasu++;
            locarr[gugasu]=17;
            eval("mt"+gugasu).innerHTML = "양천구";
        }
        else alert("지역은 최대 3곳 선택하실 수 있습니다!");
    });
    Gurogu.addEventListener("click", (e) => {
        if(flagarr[18]!=0) alert("중복되었습니다!");
        else if(gugasu<3)
        {
            flagarr[18]++;
            gugasu++;
            locarr[gugasu]=18;
            eval("mt"+gugasu).innerHTML = "구로구";
        }
        else alert("지역은 최대 3곳 선택하실 수 있습니다!");
    });
    Dongjakgu.addEventListener("click", (e) => {
        if(flagarr[19]!=0) alert("중복되었습니다!");
        else if(gugasu<3)
        {
            flagarr[19]++;
            gugasu++;
            locarr[gugasu]=19;
            eval("mt"+gugasu).innerHTML = "동작구";
        }
        else alert("지역은 최대 3곳 선택하실 수 있습니다!");
    });
    Gwanakgu.addEventListener("click", (e) => {
        if(flagarr[20]!=0) alert("중복되었습니다!");
        else if(gugasu<3)
        {
            flagarr[20]++;
            gugasu++;
            locarr[gugasu]=20;
            eval("mt"+gugasu).innerHTML = "관악구";
        }
        else alert("지역은 최대 3곳 선택하실 수 있습니다!");
    });
    Geumcheongu.addEventListener("click", (e) => {
        if(flagarr[21]!=0) alert("중복되었습니다!");
        else if(gugasu<3)
        {
            flagarr[21]++;
            gugasu++;
            locarr[gugasu]=21;
            eval("mt"+gugasu).innerHTML = "금천구";
        }
        else alert("지역은 최대 3곳 선택하실 수 있습니다!");
    });
    Seochogu.addEventListener("click", (e) => {
        if(flagarr[22]!=0) alert("중복되었습니다!");
        else if(gugasu<3)
        {
            flagarr[22]++;
            gugasu++;
            locarr[gugasu]=22;
            eval("mt"+gugasu).innerHTML = "서초구";
        }
        else alert("지역은 최대 3곳 선택하실 수 있습니다!");
    });
    Gangnamgu.addEventListener("click", (e) => {
        if(flagarr[23]!=0) alert("중복되었습니다!");
        else if(gugasu<3)
        {
            flagarr[23]++;
            gugasu++;
            locarr[gugasu]=23;
            eval("mt"+gugasu).innerHTML = "강남구";
        }
        else alert("지역은 최대 3곳 선택하실 수 있습니다!");
    });
    Songpagu.addEventListener("click", (e) => {
        if(flagarr[24]!=0) alert("중복되었습니다!");
        else if(gugasu<3)
        {
            flagarr[24]++;
            gugasu++;
            locarr[gugasu]=24;
            eval("mt"+gugasu).innerHTML = "송파구";
        }
        else alert("지역은 최대 3곳 선택하실 수 있습니다!");
    });
    Gangdonggu.addEventListener("click", (e) => {
        if(flagarr[25]!=0) alert("중복되었습니다!");
        else if(gugasu<3)
        {
            flagarr[25]++;
            gugasu++;
            locarr[gugasu]=25;
            eval("mt"+gugasu).innerHTML = "강동구";
        }
        else alert("지역은 최대 3곳 선택하실 수 있습니다!");
    });
}


mt1.addEventListener("click", (e) => {
    if(gugasu>=1)
    {
        flagarr[locarr[1]]=0;
        for(var i=1; i<gugasu; i++)
        {
            eval("mt"+i).innerHTML = eval("mt"+eval("i+1")).innerHTML;
            locarr[i]=locarr[i+1];
        }
        eval("mt"+gugasu).innerHTML = "";
        //locarr[gugasu]=null;
        gugasu--;
    }
});
mt2.addEventListener("click", (e) => {
    if(gugasu>=2)
    {
        flagarr[locarr[2]]=0;
        for(var i=2; i<gugasu; i++)
        {
            eval("mt"+i).innerHTML = eval("mt"+eval("i+1")).innerHTML;
            locarr[i]=locarr[i+1];
        }
        eval("mt"+gugasu).innerHTML = "";
        //locarr[gugasu]=null;
        gugasu--;
    }
});
mt3.addEventListener("click", (e) => {
    if(gugasu>=3)
    {
        flagarr[locarr[3]]=0;
        for(var i=3; i<gugasu; i++)
        {
            eval("mt"+i).innerHTML = eval("mt"+eval("i+1")).innerHTML;
            locarr[i]=locarr[i+1];
        }
        eval("mt"+gugasu).innerHTML = "";
        //locarr[gugasu]=null;
        gugasu--;
    }
});


mt4.addEventListener("click", (e) => {
    if(gugasu>=1)
    {
        localStorage.setItem('memo-title-1', mt1.innerHTML);
        localStorage.setItem('memo-title-2', mt2.innerHTML);
        localStorage.setItem('memo-title-3', mt3.innerHTML);
        localStorage.setItem('gu-gasu', gugasu);
        window.location.href = 'http://localhost:3000/Step2';
    }
    else alert("원하시는 지역을 최소 한 곳 이상 선택해 주세요!");
})