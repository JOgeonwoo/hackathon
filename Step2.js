const container1 = document.querySelector(".memo-article-1");
const container2 = document.querySelector(".memo-article-2");
const container3 = document.querySelector(".memo-article-3");
container1.addEventListener("dragover", (e) => { //메모장(숨겨진버튼들)에 dragover 허용
    e.preventDefault();
});
container2.addEventListener("dragover", (e) => {
    e.preventDefault();
});
container3.addEventListener("dragover", (e) => {
    e.preventDefault();
});
//var loc_now=1; // 현재 어느 지역(메모장)에 content 추가할지 (1, 2, 3)
var but_now; // 현재 drag 중인 버튼(content button) 번호(N)
var connum1=0; // 현재 1번메모장 content 개수
var connum2=0;
var connum3=0;

// 중복방지 check 배열들...
var checkarr1=[];
var checkarr2=[];
var checkarr3=[];
checkarr1.length = 20;
checkarr2.length = 20;
checkarr3.length = 20;
for(var arri=0; arri<=19; arri++)
{
    checkarr1[arri]=0;
    checkarr2[arri]=0;
    checkarr3[arri]=0;
}
var conarr1=[];
var conarr2=[];
var conarr3=[];
conarr1.length = 4;
conarr2.length = 4;
conarr3.length = 4;

//사용자입력 check배열
var userw1=[];
var userw2=[];
var userw3=[];
var userwnum1=0;
var userwnum2=0;
var userwnum3=0;




const loc1=document.getElementById("memo-title-1");
const loc2=document.getElementById("memo-title-2");
const loc3=document.getElementById("memo-title-3");

loc1.innerHTML = localStorage.getItem('memo-title-1');
loc2.innerHTML = localStorage.getItem('memo-title-2');
loc3.innerHTML = localStorage.getItem('memo-title-3');
const locnum = localStorage.getItem('gu-gasu');

const dropon1=document.getElementById("memo-article-1");
const dropon2=document.getElementById("memo-article-2");
const dropon3=document.getElementById("memo-article-3");

const kan1=document.getElementById("selected-content-1-1");
const kan2=document.getElementById("selected-content-1-2");
const kan3=document.getElementById("selected-content-1-3");
const kan4=document.getElementById("selected-content-2-1");
const kan5=document.getElementById("selected-content-2-2");
const kan6=document.getElementById("selected-content-2-3");
const kan7=document.getElementById("selected-content-3-1");
const kan8=document.getElementById("selected-content-3-2");
const kan9=document.getElementById("selected-content-3-3");

const but1=document.getElementById("한식");
const but2=document.getElementById("양식");
const but3=document.getElementById("중식");
const but4=document.getElementById("일식");
const but5=document.getElementById("카페");
const but6=document.getElementById("패스트푸드");
const but7=document.getElementById("주류");
const but8=document.getElementById("숙박");
const but9=document.getElementById("체험");
const but10=document.getElementById("관람");
const but11=document.getElementById("액티비티");
const but12=document.getElementById("피씨방");
const but13=document.getElementById("노래방");
const but14=document.getElementById("동남아시아");
const but15=document.getElementById("분식");
const but16=document.getElementById("디저트");
const but17=document.getElementById("사진");
const but18=document.getElementById("방탈출");
const but19=document.getElementById("보드게임");

// loc1.addEventListener("click", (e) => {
//     loc_now=1;
// });
// loc2.addEventListener("click", (e) => {
//     loc_now=2;
// });
// loc3.addEventListener("click", (e) => {
//     loc_now=3;
// });

{
    but1.addEventListener("dragstart", (e) => {
        but_now=1;
    });
    but2.addEventListener("dragstart", (e) => {
        but_now=2;
    });
    but3.addEventListener("dragstart", (e) => {
        but_now=3;
    });
    but4.addEventListener("dragstart", (e) => {
        but_now=4;
    });
    but5.addEventListener("dragstart", (e) => {
        but_now=5;
    });
    but6.addEventListener("dragstart", (e) => {
        but_now=6;
    });
    but7.addEventListener("dragstart", (e) => {
        but_now=7;
    });
    but8.addEventListener("dragstart", (e) => {
        but_now=8;
    });
    but9.addEventListener("dragstart", (e) => {
        but_now=9;
    });
    but10.addEventListener("dragstart", (e) => {
        but_now=10;
    });
    but11.addEventListener("dragstart", (e) => {
        but_now=11;
    });
    but12.addEventListener("dragstart", (e) => {
        but_now=12;
    });
    but13.addEventListener("dragstart", (e) => {
        but_now=13;
    });
    but14.addEventListener("dragstart", (e) => {
        but_now=14;
    });
    but15.addEventListener("dragstart", (e) => {
        but_now=15;
    });
    but16.addEventListener("dragstart", (e) => {
        but_now=16;
    });
    but17.addEventListener("dragstart", (e) => {
        but_now=17;
    });
    but18.addEventListener("dragstart", (e) => {
        but_now=18;
    });
    but19.addEventListener("dragstart", (e) => {
        but_now=19;
    });
}
{
    dropon1.addEventListener("drop", (e) => {
        e.preventDefault();
        if(checkarr1[but_now]!=0) alert("중복되었습니다!");
        else if(connum1<3)
        {
            checkarr1[but_now]++;
            connum1++;
            conarr1[connum1]=but_now;
            var temp; //몇번째줄에 content 추가할지
            if(connum1==1) {temp = kan1;}
            else if(connum1==2) {temp = kan2;}
            else {temp = kan3;}
            temp.innerHTML = eval("but"+but_now).id;
        }
        else alert("content는 최대 3곳까지 설정하실 수 있습니다!");
    });
    if(locnum>=2)
    {
        dropon2.addEventListener("drop", (e) => {
            e.preventDefault();
            if(checkarr2[but_now]!=0) alert("중복되었습니다!");
            else if(connum2<3)
            {
                checkarr2[but_now]++;
                connum2++;
                conarr2[connum2]=but_now;
                var temp; //몇번째줄에 content 추가할지
                if(connum2==1) {temp = kan4;}
                else if(connum2==2) {temp = kan5;}
                else {temp = kan6;}
                temp.innerHTML = eval("but"+but_now).id;
            }
            else alert("content는 최대 3곳까지 설정하실 수 있습니다!");
        });
    }
    if(locnum==3)
    {
        dropon3.addEventListener("drop", (e) => {
            e.preventDefault();
            if(checkarr3[but_now]!=0) alert("중복되었습니다!");
            else if(connum3<3)
            {
                checkarr3[but_now]++;
                connum3++;
                conarr3[connum3]=but_now;
                var temp; //몇번째줄에 content 추가할지
                if(connum3==1) {temp = kan7;}
                else if(connum3==2) {temp = kan8;}
                else {temp = kan9;}
                temp.innerHTML = eval("but"+but_now).id;
            }
            else alert("content는 최대 3곳까지 설정하실 수 있습니다!");
        });
    }
}
{
    kan1.addEventListener("click", (e) => {
        // e.preventDefault();
        if(connum1>=1)
        {
            if(conarr1[1]>100)
            {
                var userwtemp=conarr1[1]-100;

            }
            else checkarr1[conarr1[1]]=0;

            for(var i=1; i<connum1; i++)
            {
                eval("kan"+i).innerHTML = eval("kan"+eval("i+1")).innerHTML;
                conarr1[i]=conarr1[i+1];
            }
            eval("kan"+connum1).innerHTML = "";
            //conarr1[connum1]=NULL;
            connum1--;
        }
    });
    kan2.addEventListener("click", (e) => {
        // e.preventDefault();
        if(connum1>=2)
        {
            checkarr1[conarr1[2]]=0;
            for(var i=2; i<connum1; i++)
            {
                eval("kan"+i).innerHTML = eval("kan"+eval("i+1")).innerHTML;
                conarr1[i]=conarr1[i+1];
            }
            eval("kan"+connum1).innerHTML = "";
            //conarr1[connum1]=NULL;
            connum1--;
        }
    });
    kan3.addEventListener("click", (e) => {
        // e.preventDefault();
        if(connum1>=3)
        {
            checkarr1[conarr1[3]]=0;
            for(var i=3; i<connum1; i++)
            {
                eval("kan"+i).innerHTML = eval("kan"+eval("i+1")).innerHTML;
                conarr1[i]=conarr1[i+1];
            }
            eval("kan"+connum1).innerHTML = "";
            //conarr1[connum1]=NULL;
            connum1--;
        }
    });
    kan4.addEventListener("click", (e) => {
        // e.preventDefault();
        if(connum2>=1)
        {
            checkarr2[conarr2[1]]=0;
            for(var i=1; i<connum2; i++)
            {
                eval("kan"+eval("i+3")).innerHTML = eval("kan"+eval("i+4")).innerHTML;
                conarr2[i]=conarr2[i+1];
            }
            eval("kan"+eval("connum2+3")).innerHTML = "";
            //conarr2[connum2]=NULL;
            connum2--;
        }
    });
    kan5.addEventListener("click", (e) => {
        // e.preventDefault();
        if(connum2>=2)
        {
            checkarr2[conarr2[2]]=0;
            for(var i=2; i<connum2; i++)
            {
                eval("kan"+eval("i+3")).innerHTML = eval("kan"+eval("i+4")).innerHTML;
                conarr2[i]=conarr2[i+1];
            }
            eval("kan"+eval("connum2+3")).innerHTML = "";
            //conarr2[connum2]=NULL;
            connum2--;
        }
    });
    kan6.addEventListener("click", (e) => {
        // e.preventDefault();
        if(connum2>=3)
        {
            checkarr2[conarr2[3]]=0;
            for(var i=3; i<connum2; i++)
            {
                eval("kan"+eval("i+3")).innerHTML = eval("kan"+eval("i+4")).innerHTML;
                conarr2[i]=conarr2[i+1];
            }
            eval("kan"+eval("connum2+3")).innerHTML = "";
            //conarr2[connum2]=NULL;
            connum2--;
        }
    });
    kan7.addEventListener("click", (e) => {
        // e.preventDefault();
        if(connum3>=1)
        {
            checkarr3[conarr3[1]]=0;
            for(var i=1; i<connum3; i++)
            {
                eval("kan"+eval("i+6")).innerHTML = eval("kan"+eval("i+7")).innerHTML;
                conarr3[i]=conarr3[i+1];
            }
            eval("kan"+eval("connum3+6")).innerHTML = "";
            //conarr3[connum3]=NULL;
            connum3--;
        }
    });
    kan8.addEventListener("click", (e) => {
        // e.preventDefault();
        if(connum3>=2)
        {
            checkarr3[conarr3[2]]=0;
            for(var i=2; i<connum3; i++)
            {
                eval("kan"+eval("i+6")).innerHTML = eval("kan"+eval("i+7")).innerHTML;
                conarr3[i]=conarr3[i+1];
            }
            eval("kan"+eval("connum3+6")).innerHTML = "";
            //conarr3[connum3]=NULL;
            connum3--;
        }
    });
    kan9.addEventListener("click", (e) => {
        // e.preventDefault();
        if(connum3>=3)
        {
            checkarr3[conarr3[3]]=0;
            for(var i=3; i<connum3; i++)
            {
                eval("kan"+eval("i+6")).innerHTML = eval("kan"+eval("i+7")).innerHTML;
                conarr3[i]=conarr3[i+1];
            }
            eval("kan"+eval("connum3+6")).innerHTML = "";
            //conarr3[connum3]=NULL;
            connum3--;
        }
    });
}



function Searching(){
    localStorage.setItem('search-data', document.getElementById("search").value);

    fetch('https://dapi.kakao.com/v2/local/search/keyword.json?query='+encodeURIComponent(localStorage.getItem('search-data')), {
        method: 'GET',
        headers: {'Authorization' : 'KakaoAK 296efdeedc0315b7f56af9b900565a97'},
    })
    .then((response) => response.json())
    .then((data) => {
        if(data['documents'][0]['address_name'].split(' ')[1] === loc1.innerHTML){
            if(connum1>=3) alert("content는 최대 3곳까지 설정하실 수 있습니다!");
            else
            {
                connum1++;
                eval("kan"+connum1).innerHTML = localStorage.getItem('search-data');
                userwnum1++;
                userw1[userwnum1]=localStorage.getItem('search-data');
                conarr1[connum1]=100+10+userwnum1; // contents_array에 (1)(메모장번호)(해당메모장사용자입력순서)의 세자리수로 저장, 삭제 시 버튼입력 content와 구분할 수 있게. (이 기능은 추가하지 않긴 함 설마 입력을 중복되게 할까)
            }
        } 
        else if(data['documents'][0]['address_name'].split(' ')[1] === loc2.innerHTML){
            if(connum2>=3) alert("content는 최대 3곳까지 설정하실 수 있습니다!");
            else
            {
                connum2++;
                eval("kan"+(connum2+3)).innerHTML = localStorage.getItem('search-data');
                userwnum2++;
                userw2[userwnum2]=localStorage.getItem('search-data');
                conarr2[connum2]=100+20+userwnum2;
            }
        } 
        else if(data['documents'][0]['address_name'].split(' ')[1] === loc3.innerHTML){
            if(connum3>=3) alert("content는 최대 3곳까지 설정하실 수 있습니다!");
            else
            {
                connum3++;
                eval("kan"+(connum3+6)).innerHTML = localStorage.getItem('search-data');
                userwnum3++;
                userw3[userwnum3]=localStorage.getItem('search-data');
                conarr3[connum3]=100+30+userwnum3;
            }
        } 
        else {
            alert('입력하신 지역 정보에 해당 장소가 없습니다!');
        }
    });
}

const mt4 = document.getElementById("next-button");

mt4.addEventListener("click", (e) => {
    localStorage.setItem('selected-content-1-1', kan1.innerHTML);
    localStorage.setItem('selected-content-1-2', kan2.innerHTML);
    localStorage.setItem('selected-content-1-3', kan3.innerHTML);
    localStorage.setItem('selected-content-2-1', kan4.innerHTML);
    localStorage.setItem('selected-content-2-2', kan5.innerHTML);
    localStorage.setItem('selected-content-2-3', kan6.innerHTML);
    localStorage.setItem('selected-content-3-1', kan7.innerHTML);
    localStorage.setItem('selected-content-3-2', kan8.innerHTML);
    localStorage.setItem('selected-content-3-3', kan9.innerHTML);
    localStorage.setItem('con-num1', connum1);
    localStorage.setItem('con-num2', connum2);
    localStorage.setItem('con-num3', connum3);
    location.href = "Step3.html";
});