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

var but_now; // 현재 drag 중인 버튼(content button) 번호(N)

// 중복방지 check 배열들...
var checkarr1=[];
var checkarr2=[];
var checkarr3=[];
var checkarr4=[];
var checkarr5=[];
var checkarr6=[];
var checkarr7=[];
var checkarr8=[];
var checkarr9=[];
checkarr1.length = 30;
checkarr2.length = 30;
checkarr3.length = 30;
for(var arri=0; arri<=29; arri++)
{
    checkarr1[arri]=0;
    checkarr2[arri]=0;
    checkarr3[arri]=0;
    checkarr4[arri]=0;
    checkarr5[arri]=0;
    checkarr6[arri]=0;
    checkarr7[arri]=0;
    checkarr8[arri]=0;
    checkarr9[arri]=0;
}


var feelnum1=0; // 현재 1번칸 feeling? 개수
var feelnum2=0;
var feelnum3=0;
var feelnum4=0;
var feelnum5=0;
var feelnum6=0;
var feelnum7=0;
var feelnum8=0;
var feelnum9=0;
var feelarr1=[];
var feelarr2=[];
var feelarr3=[];
var feelarr4=[];
var feelarr5=[];
var feelarr6=[];
var feelarr7=[];
var feelarr8=[];
var feelarr9=[];

feelarr1.length = 4;
feelarr2.length = 4;
feelarr3.length = 4;
feelarr4.length = 4;
feelarr5.length = 4;
feelarr6.length = 4;
feelarr7.length = 4;
feelarr8.length = 4;
feelarr9.length = 4;


const loc1=document.getElementById("memo-title-1");
const loc2=document.getElementById("memo-title-2");
const loc3=document.getElementById("memo-title-3");

loc1.innerHTML = localStorage.getItem('memo-title-1');
loc2.innerHTML = localStorage.getItem('memo-title-2');
loc3.innerHTML = localStorage.getItem('memo-title-3');
const connum1 = localStorage.getItem('con-num1');
const connum2 = localStorage.getItem('con-num2');
const connum3 = localStorage.getItem('con-num3');

const kan1=document.getElementById("selected-content-1-1");
const kan2=document.getElementById("selected-content-1-2");
const kan3=document.getElementById("selected-content-1-3");
const kan4=document.getElementById("selected-content-2-1");
const kan5=document.getElementById("selected-content-2-2");
const kan6=document.getElementById("selected-content-2-3");
const kan7=document.getElementById("selected-content-3-1");
const kan8=document.getElementById("selected-content-3-2");
const kan9=document.getElementById("selected-content-3-3");
const backspace1=document.getElementById("selected-feeling-backspace-1-1");
const backspace2=document.getElementById("selected-feeling-backspace-1-2");
const backspace3=document.getElementById("selected-feeling-backspace-1-3");
const backspace4=document.getElementById("selected-feeling-backspace-2-1");
const backspace5=document.getElementById("selected-feeling-backspace-2-2");
const backspace6=document.getElementById("selected-feeling-backspace-2-3");
const backspace7=document.getElementById("selected-feeling-backspace-3-1");
const backspace8=document.getElementById("selected-feeling-backspace-3-2");
const backspace9=document.getElementById("selected-feeling-backspace-3-3");

backspace1.innerHTML='back\nspace';
backspace2.innerHTML='back\nspace';
backspace3.innerHTML='back\nspace';
backspace4.innerHTML='back\nspace';
backspace5.innerHTML='back\nspace';
backspace6.innerHTML='back\nspace';
backspace7.innerHTML='back\nspace';
backspace8.innerHTML='back\nspace';
backspace9.innerHTML='back\nspace';

if(connum1<1) {kan1.style.opacity = "0"; backspace1.style.opacity = "0";}
if(connum1<2) {kan2.style.opacity = "0"; backspace2.style.opacity = "0";}
if(connum1<3) {kan3.style.opacity = "0"; backspace3.style.opacity = "0";}
if(connum2<1) {kan4.style.opacity = "0"; backspace4.style.opacity = "0";}
if(connum2<2) {kan5.style.opacity = "0"; backspace5.style.opacity = "0";}
if(connum2<3) {kan6.style.opacity = "0"; backspace6.style.opacity = "0";}
if(connum3<1) {kan7.style.opacity = "0"; backspace7.style.opacity = "0";}
if(connum3<2) {kan8.style.opacity = "0"; backspace8.style.opacity = "0";}
if(connum3<3) {kan9.style.opacity = "0"; backspace9.style.opacity = "0";}


kan1.addEventListener("dragover", (e) => { //메모장(숨겨진버튼들)에 dragover 허용
    e.preventDefault();
});
kan2.addEventListener("dragover", (e) => { //메모장(숨겨진버튼들)에 dragover 허용
    e.preventDefault();
});
kan3.addEventListener("dragover", (e) => { //메모장(숨겨진버튼들)에 dragover 허용
    e.preventDefault();
});
kan4.addEventListener("dragover", (e) => { //메모장(숨겨진버튼들)에 dragover 허용
    e.preventDefault();
});
kan5.addEventListener("dragover", (e) => { //메모장(숨겨진버튼들)에 dragover 허용
    e.preventDefault();
});
kan6.addEventListener("dragover", (e) => { //메모장(숨겨진버튼들)에 dragover 허용
    e.preventDefault();
});
kan7.addEventListener("dragover", (e) => { //메모장(숨겨진버튼들)에 dragover 허용
    e.preventDefault();
});
kan8.addEventListener("dragover", (e) => { //메모장(숨겨진버튼들)에 dragover 허용
    e.preventDefault();
});
kan9.addEventListener("dragover", (e) => { //메모장(숨겨진버튼들)에 dragover 허용
    e.preventDefault();
});



kan1.innerHTML = localStorage.getItem('selected-content-1-1');
kan2.innerHTML = localStorage.getItem('selected-content-1-2');
kan3.innerHTML = localStorage.getItem('selected-content-1-3');
kan4.innerHTML = localStorage.getItem('selected-content-2-1');
kan5.innerHTML = localStorage.getItem('selected-content-2-2');
kan6.innerHTML = localStorage.getItem('selected-content-2-3');
kan7.innerHTML = localStorage.getItem('selected-content-3-1');
kan8.innerHTML = localStorage.getItem('selected-content-3-2');
kan9.innerHTML = localStorage.getItem('selected-content-3-3');

if(kan1.innerHTML !== ""){kan1.innerHTML += ' | ';}
if(kan2.innerHTML !== ""){kan2.innerHTML += ' | ';}
if(kan3.innerHTML !== ""){kan3.innerHTML += ' | ';}
if(kan4.innerHTML !== ""){kan4.innerHTML += ' | ';}
if(kan5.innerHTML !== ""){kan5.innerHTML += ' | ';}
if(kan6.innerHTML !== ""){kan6.innerHTML += ' | ';}
if(kan7.innerHTML !== ""){kan7.innerHTML += ' | ';}
if(kan8.innerHTML !== ""){kan8.innerHTML += ' | ';}
if(kan9.innerHTML !== ""){kan9.innerHTML += ' | ';}

const but1=document.getElementById("맛집");
const but2=document.getElementById("뷰맛집");
const but3=document.getElementById("핫플");
const but4=document.getElementById("따뜻한");
const but5=document.getElementById("깔끔한");
const but6=document.getElementById("넓은");
const but7=document.getElementById("사진맛집");
const but8=document.getElementById("단체모임");
const but9=document.getElementById("혼밥");
const but10=document.getElementById("친절한");
const but11=document.getElementById("인스타감성");
const but12=document.getElementById("기념일");
const but13=document.getElementById("가성비좋은");
const but14=document.getElementById("아늑한");
const but15=document.getElementById("푸짐한");
const but16=document.getElementById("차분한");
const but17=document.getElementById("힙한");
const but18=document.getElementById("추억");
const but19=document.getElementById("재밌는");
const but20=document.getElementById("교통이좋은");
const but21=document.getElementById("분위기좋은");
const but22=document.getElementById("짜릿한");
const but23=document.getElementById("시설이좋은");
const but24=document.getElementById("활동적인");
const but25=document.getElementById("실내의");
const but26=document.getElementById("야외의");
const but27=document.getElementById("다양한");
const but28=document.getElementById("전통적인");



{// dragstart 시 but_now에 저장
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
    but20.addEventListener("dragstart", (e) => {
        but_now=20;
    });
    but21.addEventListener("dragstart", (e) => {
        but_now=21;
    });
    but22.addEventListener("dragstart", (e) => {
        but_now=22;
    });
    but23.addEventListener("dragstart", (e) => {
        but_now=23;
    });
    but24.addEventListener("dragstart", (e) => {
        but_now=24;
    });
    but25.addEventListener("dragstart", (e) => {
        but_now=25;
    });
    but26.addEventListener("dragstart", (e) => {
        but_now=26;
    });
    but27.addEventListener("dragstart", (e) => {
        but_now=27;
    });
    but28.addEventListener("dragstart", (e) => {
        but_now=28;
    });
}
{
    kan1.addEventListener("drop", (e) => {
        e.preventDefault();
        if(checkarr1[but_now]!=0) alert("중복되었습니다!");
        else if(feelnum1<3)
        {
            checkarr1[but_now]++;
            feelnum1++;
            feelarr1[feelnum1]=but_now;
            if(feelnum1==1)kan1.innerHTML+=("  "+(eval("but"+but_now).id));
            else kan1.innerHTML+=(",  "+(eval("but"+but_now).id));
        }
        else alert("느낌은 최대 3개까지 설정하실 수 있습니다!");
    });
    kan2.addEventListener("drop", (e) => {
        e.preventDefault();
        if(checkarr2[but_now]!=0) alert("중복되었습니다!");
        else if(feelnum2<3)
        {
            checkarr2[but_now]++;
            feelnum2++;
            feelarr2[feelnum2]=but_now;
            if(feelnum2==1)kan2.innerHTML+=("  "+(eval("but"+but_now).id));
            else kan2.innerHTML+=(",  "+(eval("but"+but_now).id));
        }
        else alert("느낌은 최대 3개까지 설정하실 수 있습니다!");
    });
    kan3.addEventListener("drop", (e) => {
        e.preventDefault();
        if(checkarr3[but_now]!=0) alert("중복되었습니다!");
        else if(feelnum3<3)
        {
            checkarr3[but_now]++;
            feelnum3++;
            feelarr3[feelnum3]=but_now;
            if(feelnum3==1)kan3.innerHTML+=("  "+(eval("but"+but_now).id));
            else kan3.innerHTML+=(",  "+(eval("but"+but_now).id));
        }
        else alert("느낌은 최대 3개까지 설정하실 수 있습니다!");
    });
    kan4.addEventListener("drop", (e) => {
        e.preventDefault();
        if(checkarr4[but_now]!=0) alert("중복되었습니다!");
        else if(feelnum4<3)
        {
            checkarr4[but_now]++;
            feelnum4++;
            feelarr4[feelnum4]=but_now;
            if(feelnum4==1)kan4.innerHTML+=("  "+(eval("but"+but_now).id));
            else kan4.innerHTML+=(",  "+(eval("but"+but_now).id));
        }
        else alert("느낌은 최대 3개까지 설정하실 수 있습니다!");
    });
    kan5.addEventListener("drop", (e) => {
        e.preventDefault();
        if(checkarr5[but_now]!=0) alert("중복되었습니다!");
        else if(feelnum5<3)
        {
            checkarr5[but_now]++;
            feelnum5++;
            feelarr5[feelnum5]=but_now;
            if(feelnum5==1)kan5.innerHTML+=("  "+(eval("but"+but_now).id));
            else kan5.innerHTML+=(",  "+(eval("but"+but_now).id));
        }
        else alert("느낌은 최대 3개까지 설정하실 수 있습니다!");
    });
    kan6.addEventListener("drop", (e) => {
        e.preventDefault();
        if(checkarr6[but_now]!=0) alert("중복되었습니다!");
        else if(feelnum6<3)
        {
            checkarr6[but_now]++;
            feelnum6++;
            if(feelnum6==1)kan6.innerHTML+=("  "+(eval("but"+but_now).id));
            else kan6.innerHTML+=(",  "+(eval("but"+but_now).id));
        }
        else alert("느낌은 최대 3개까지 설정하실 수 있습니다!");
    });
    kan7.addEventListener("drop", (e) => {
        e.preventDefault();
        if(checkarr7[but_now]!=0) alert("중복되었습니다!");
        else if(feelnum7<3)
        {
            checkarr7[but_now]++;
            feelnum7++;
            feelarr7[feelnum7]=but_now;
            if(feelnum7==1)kan7.innerHTML+=("  "+(eval("but"+but_now).id));
            else kan7.innerHTML+=(",  "+(eval("but"+but_now).id));
        }
        else alert("느낌은 최대 3개까지 설정하실 수 있습니다!");
    });
    kan8.addEventListener("drop", (e) => {
        e.preventDefault();
        if(checkarr8[but_now]!=0) alert("중복되었습니다!");
        else if(feelnum8<3)
        {
            checkarr8[but_now]++;
            feelnum8++;
            feelarr8[feelnum8]=but_now;
            if(feelnum8==1)kan8.innerHTML+=("  "+(eval("but"+but_now).id));
            else kan8.innerHTML+=(",  "+(eval("but"+but_now).id));
        }
        else alert("느낌은 최대 3개까지 설정하실 수 있습니다!");
    });
    kan9.addEventListener("drop", (e) => {
        e.preventDefault();
        if(checkarr9[but_now]!=0) alert("중복되었습니다!");
        else if(feelnum9<3)
        {
            checkarr9[but_now]++;
            feelnum9++;
            feelarr9[feelnum9]=but_now;
            if(feelnum9==1)kan9.innerHTML+=("  "+(eval("but"+but_now).id));
            else kan9.innerHTML+=(",  "+(eval("but"+but_now).id));
        }
        else alert("느낌은 최대 3개까지 설정하실 수 있습니다!");
    });
}
{
    kan9.addEventListener("drop", (e) => {
        e.preventDefault();
        if(checkarr9[but_now]!=0) alert("중복되었습니다!");
        else if(feelnum9<3)
        {
            checkarr9[but_now]++;
            feelnum9++;
            feelarr9[feelnum9]=but_now;
            if(feelnum9==1)kan9.innerHTML+=("  "+(eval("but"+but_now).id));
            else kan9.innerHTML+=(",  "+(eval("but"+but_now).id));
        }
        else alert("느낌은 최대 3개까지 설정하실 수 있습니다!");
    });
}

{
    backspace1.addEventListener("click", (e) => {
        if(feelnum1>1)
        {
            checkarr1[feelarr1[feelnum1]]=0;
            feelarr1[feelnum1]=0;
            feelnum1--;
            var temparr = kan1.innerHTML.split(',');
            kan1.innerHTML=temparr[0];
            for(var i=1; i<feelnum1; i++) kan1.innerHTML+=(", "+temparr[i]);
        }
        else if(feelnum1==1)
        {
            checkarr1[feelarr1[feelnum1]]=0;
            feelarr1[feelnum1]=0;
            feelnum1--;
            var temparr = kan1.innerHTML.split('|');
            kan1.innerHTML=(temparr[0]+"| ");
        }
    });
    backspace2.addEventListener("click", (e) => {
        if(feelnum2>1)
        {
            checkarr2[feelarr2[feelnum2]]=0;
            feelarr2[feelnum2]=0;
            feelnum2--;
            var temparr = kan2.innerHTML.split(',');
            kan2.innerHTML=temparr[0];
            for(var i=1; i<feelnum2; i++) kan2.innerHTML+=(", "+temparr[i]);
        }
        else if(feelnum2==1)
        {
            checkarr2[feelarr2[feelnum2]]=0;
            feelarr2[feelnum2]=0;
            feelnum2--;
            var temparr = kan2.innerHTML.split('|');
            kan2.innerHTML=(temparr[0]+"| ");
        }
    });
    backspace3.addEventListener("click", (e) => {
        if(feelnum3>1)
        {
            checkarr3[feelarr3[feelnum3]]=0;
            feelarr3[feelnum3]=0;
            feelnum3--;
            var temparr = kan3.innerHTML.split(',');
            kan3.innerHTML=temparr[0];
            for(var i=1; i<feelnum3; i++) kan3.innerHTML+=(", "+temparr[i]);
        }
        else if(feelnum3==1)
        {
            checkarr3[feelarr3[feelnum3]]=0;
            feelarr3[feelnum3]=0;
            feelnum3--;
            var temparr = kan3.innerHTML.split('|');
            kan3.innerHTML=(temparr[0]+"| ");
        }
    });
    backspace4.addEventListener("click", (e) => {
        if(feelnum4>1)
        {
            checkarr4[feelarr4[feelnum4]]=0;
            feelarr4[feelnum4]=0;
            feelnum4--;
            var temparr = kan4.innerHTML.split(',');
            kan4.innerHTML=temparr[0];
            for(var i=1; i<feelnum4; i++) kan4.innerHTML+=(", "+temparr[i]);
        }
        else if(feelnum4==1)
        {
            checkarr4[feelarr4[feelnum4]]=0;
            feelarr4[feelnum4]=0;
            feelnum4--;
            var temparr = kan4.innerHTML.split('|');
            kan4.innerHTML=(temparr[0]+"| ");
        }
    });
    backspace5.addEventListener("click", (e) => {
        if(feelnum5>1)
        {
            checkarr5[feelarr5[feelnum5]]=0;
            feelarr5[feelnum5]=0;
            feelnum5--;
            var temparr = kan5.innerHTML.split(',');
            kan5.innerHTML=temparr[0];
            for(var i=1; i<feelnum5; i++) kan5.innerHTML+=(", "+temparr[i]);
        }
        else if(feelnum5==1)
        {
            checkarr5[feelarr5[feelnum5]]=0;
            feelarr5[feelnum5]=0;
            feelnum5--;
            var temparr = kan5.innerHTML.split('|');
            kan5.innerHTML=(temparr[0]+"| ");
        }
    });
    backspace6.addEventListener("click", (e) => {
        if(feelnum6>1)
        {
            checkarr6[feelarr6[feelnum6]]=0;
            feelarr6[feelnum6]=0;
            feelnum6--;
            var temparr = kan6.innerHTML.split(',');
            kan6.innerHTML=temparr[0];
            for(var i=1; i<feelnum6; i++) kan6.innerHTML+=(", "+temparr[i]);
        }
        else if(feelnum6==1)
        {
            checkarr6[feelarr6[feelnum6]]=0;
            feelarr6[feelnum6]=0;
            feelnum6--;
            var temparr = kan6.innerHTML.split('|');
            kan6.innerHTML=(temparr[0]+"| ");
        }
    });
    backspace7.addEventListener("click", (e) => {
        if(feelnum7>1)
        {
            checkarr7[feelarr7[feelnum7]]=0;
            feelarr7[feelnum7]=0;
            feelnum7--;
            var temparr = kan7.innerHTML.split(',');
            kan7.innerHTML=temparr[0];
            for(var i=1; i<feelnum7; i++) kan7.innerHTML+=(", "+temparr[i]);
        }
        else if(feelnum7==1)
        {
            checkarr7[feelarr7[feelnum7]]=0;
            feelarr7[feelnum7]=0;
            feelnum7--;
            var temparr = kan7.innerHTML.split('|');
            kan7.innerHTML=(temparr[0]+"| ");
        }
    });
    backspace8.addEventListener("click", (e) => {
        if(feelnum8>1)
        {
            checkarr8[feelarr8[feelnum8]]=0;
            feelarr8[feelnum8]=0;
            feelnum8--;
            var temparr = kan8.innerHTML.split(',');
            kan8.innerHTML=temparr[0];
            for(var i=1; i<feelnum8; i++) kan8.innerHTML+=(", "+temparr[i]);
        }
        else if(feelnum8==1)
        {
            checkarr8[feelarr8[feelnum8]]=0;
            feelarr8[feelnum8]=0;
            feelnum8--;
            var temparr = kan8.innerHTML.split('|');
            kan8.innerHTML=(temparr[0]+"| ");
        }
    });
    backspace9.addEventListener("click", (e) => {
        if(feelnum9>1)
        {
            checkarr9[feelarr9[feelnum9]]=0;
            feelarr9[feelnum9]=0;
            feelnum1--;
            var temparr = kan9.innerHTML.split(',');
            kan9.innerHTML=temparr[0];
            for(var i=1; i<feelnum9; i++) kan9.innerHTML+=(", "+temparr[i]);
        }
        else if(feelnum9==1)
        {
            checkarr9[feelarr9[feelnum9]]=0;
            feelarr9[feelnum9]=0;
            feelnum9--;
            var temparr = kan9.innerHTML.split('|');
            kan9.innerHTML=(temparr[0]+"| ");
        }
    });
}

const mt4 = document.getElementById("next-button");

mt4.addEventListener("click", (e) => {
    localStorage.setItem('memo-title-1', mt1.innerHTML);
    localStorage.setItem('memo-title-2', mt2.innerHTML);
    localStorage.setItem('memo-title-3', mt3.innerHTML);
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
    location.href = "http://localhost:3000/Step4";
});