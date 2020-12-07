window.addEventListener("load", function(event) {
	PR.prettyPrint()
});

// Q1
// ボックスを表示して、タイマーを開始
function showBox() {
  document.getElementById("temporaryBox").style.display = "block"; // ボックスを表示
  timerId = setTimeout( closeBox , 30000 ); // タイマーを開始
  document.getElementById("btnShowBox").disabled = true; // 表示用ボタンを無効化
}
// ボックスを消して、タイマーを終了
function closeBox() {
  document.getElementById("temporaryBox").style.display = "none"; // ボックスを消す
  clearTimeout( timerId ); // タイマーを終了
  document.getElementById("btnShowBox").disabled = false; // 表示用ボタンを有効化
}

$(function(){
  $('#js-target').t({
    speed:5,
    // speed_vary:true,
  });
});


// Q2
// ボックスを表示して、タイマーを開始
function showBox2() {
  document.getElementById("temporaryBox2").style.display = "block"; // ボックスを表示
  timerId2 = setTimeout( closeBox2 , 5000 ); // タイマーを開始
  document.getElementById("btnShowBox2").disabled = true; // 表示用ボタンを無効化
}
// ボックスを消して、タイマーを終了
function closeBox2() {
  document.getElementById("temporaryBox2").style.display = "none"; // ボックスを消す
  clearTimeout( timerId2 ); // タイマーを終了
  document.getElementById("btnShowBox2").disabled = false; // 表示用ボタンを有効化
}

$(function(){
  $('#js-target2').t({
    speed_vary:true,
  });
});


// Q3
// ボックスを表示して、タイマーを開始
function showBox3() {
  document.getElementById("temporaryBox3").style.display = "block"; // ボックスを表示
  timerId3 = setTimeout( closeBox3 , 5000 ); // タイマーを開始
  document.getElementById("btnShowBox3").disabled = true; // 表示用ボタンを無効化
}
// ボックスを消して、タイマーを終了
function closeBox3() {
  document.getElementById("temporaryBox3").style.display = "none"; // ボックスを消す
  clearTimeout( timerId3 ); // タイマーを終了
  document.getElementById("btnShowBox3").disabled = false; // 表示用ボタンを有効化
}

$(function(){
  $('#js-target3').t({
    speed_vary:true,
  });
});

// Q4
// ボックスを表示して、タイマーを開始
function showBox4() {
  document.getElementById("temporaryBox4").style.display = "block"; // ボックスを表示
  timerId4 = setTimeout( closeBox4 , 5000 ); // タイマーを開始
  document.getElementById("btnShowBox4").disabled = true; // 表示用ボタンを無効化
}
// ボックスを消して、タイマーを終了
function closeBox4() {
  document.getElementById("temporaryBox4").style.display = "none"; // ボックスを消す
  clearTimeout( timerId4 ); // タイマーを終了
  document.getElementById("btnShowBox4").disabled = false; // 表示用ボタンを有効化
}

$(function(){
  $('#js-target4').t({
    speed_vary:true,
  });
});

// Q5
// ボックスを表示して、タイマーを開始
function showBox5() {
  document.getElementById("temporaryBox5").style.display = "block"; // ボックスを表示
  timerId5 = setTimeout( closeBox5 , 5000 ); // タイマーを開始
  document.getElementById("btnShowBox5").disabled = true; // 表示用ボタンを無効化
}
// ボックスを消して、タイマーを終了
function closeBox5() {
  document.getElementById("temporaryBox5").style.display = "none"; // ボックスを消す
  clearTimeout(timerId5); // タイマーを終了
  document.getElementById("btnShowBox5").disabled = false; // 表示用ボタンを有効化
}

$(function(){
  $('#js-target5').t({
    speed_vary:true,
  });
});

// Q6
// ボックスを表示して、タイマーを開始
function showBox6() {
  document.getElementById("temporaryBox6").style.display = "block"; // ボックスを表示
  timerId6 = setTimeout(closeBox6, 5000 ); // タイマーを開始
  document.getElementById("btnShowBox6").disabled = true; // 表示用ボタンを無効化
}
// ボックスを消して、タイマーを終了
function closeBox6() {
  document.getElementById("temporaryBox6").style.display = "none"; // ボックスを消す
  clearTimeout(timerId6); // タイマーを終了
  document.getElementById("btnShowBox6").disabled = false; // 表示用ボタンを有効化
}

$(function(){
  $('#js-target6').t({
    speed_vary:true,
  });
});

// Q7
// ボックスを表示して、タイマーを開始
function showBox7() {
  document.getElementById("temporaryBox7").style.display = "block"; // ボックスを表示
  timerId7 = setTimeout(closeBox7, 5000 ); // タイマーを開始
  document.getElementById("btnShowBox7").disabled = true; // 表示用ボタンを無効化
}
// ボックスを消して、タイマーを終了
function closeBox7() {
  document.getElementById("temporaryBox7").style.display = "none"; // ボックスを消す
  clearTimeout(timerId7); // タイマーを終了
  document.getElementById("btnShowBox7").disabled = false; // 表示用ボタンを有効化
}

$(function(){
  $('#js-target7').t({
    speed_vary:true,
  });
});

// Q8
// ボックスを表示して、タイマーを開始
function showBox8() {
  document.getElementById("temporaryBox8").style.display = "block"; // ボックスを表示
  timerId8 = setTimeout(closeBox8, 5000 ); // タイマーを開始
  document.getElementById("btnShowBox8").disabled = true; // 表示用ボタンを無効化
}
// ボックスを消して、タイマーを終了
function closeBox8() {
  document.getElementById("temporaryBox8").style.display = "none"; // ボックスを消す
  clearTimeout(timerId8); // タイマーを終了
  document.getElementById("btnShowBox8").disabled = false; // 表示用ボタンを有効化
}

$(function(){
  $('#js-target8').t({
    speed_vary:true,
  });
});

// Q9
// ボックスを表示して、タイマーを開始
function showBox9() {
  document.getElementById("temporaryBox9").style.display = "block"; // ボックスを表示
  timerId9=setTimeout(closeBox9, 5000 ); // タイマーを開始
  document.getElementById("btnShowBox9").disabled = true; // 表示用ボタンを無効化
}
// ボックスを消して、タイマーを終了
function closeBox9() {
  document.getElementById("temporaryBox9").style.display = "none"; // ボックスを消す
  clearTimeout(timerId9); // タイマーを終了
  document.getElementById("btnShowBox9").disabled = false; // 表示用ボタンを有効化
}

$(function(){
  $('#js-target9').t({
    speed_vary:true,
  });
});

// Q10
// ボックスを表示して、タイマーを開始
function showBox10() {
  document.getElementById("temporaryBox10").style.display = "block"; // ボックスを表示
  timerId10 =setTimeout(closeBox10, 5000 ); // タイマーを開始
  document.getElementById("btnShowBox10").disabled = true; // 表示用ボタンを無効化
}
// ボックスを消して、タイマーを終了
function closeBox10() {
  document.getElementById("temporaryBox10").style.display = "none"; // ボックスを消す
  clearTimeout(timerId10); // タイマーを終了
  document.getElementById("btnShowBox10").disabled = false; // 表示用ボタンを有効化
}

$(function(){
  $('#js-target10').t({
    speed_vary:true,
  });
});

// Q11
// ボックスを表示して、タイマーを開始
function showBox11() {
  document.getElementById("temporaryBox11").style.display = "block"; // ボックスを表示
  timerId11 =setTimeout(closeBox11, 5000 ); // タイマーを開始
  document.getElementById("btnShowBox11").disabled = true; // 表示用ボタンを無効化
}
// ボックスを消して、タイマーを終了
function closeBox11() {
  document.getElementById("temporaryBox11").style.display = "none"; // ボックスを消す
  clearTimeout(timerId11); // タイマーを終了
  document.getElementById("btnShowBox11").disabled = false; // 表示用ボタンを有効化
}

$(function(){
  $('#js-target11').t({
    speed_vary:true,
  });
});

// Q12
function showBox12() {
  document.getElementById("temporaryBox12").style.display = "block";
  timerId12 =setTimeout(closeBox12, 5000 );
  document.getElementById("btnShowBox12").disabled = true;
}
function closeBox12() {
  document.getElementById("temporaryBox12").style.display = "none";
  clearTimeout(timerId12);
  document.getElementById("btnShowBox12").disabled = false;
}

$(function(){
  $('#js-target12').t({
    speed_vary:true,
  });
});

// Q13
function showBox13() {
  document.getElementById("temporaryBox13").style.display = "block";
  timerId13 =setTimeout(closeBox13, 5000 );
  document.getElementById("btnShowBox13").disabled = true;
}
function closeBox13() {
  document.getElementById("temporaryBox13").style.display = "none";
  clearTimeout(timerId13);
  document.getElementById("btnShowBox13").disabled = false;
}

$(function(){
  $('#js-target13').t({
    speed_vary:true,
  });
});

// Q14
function showBox14() {
  document.getElementById("temporaryBox14").style.display = "block";
  timerId14 =setTimeout(closeBox14, 5000 );
  document.getElementById("btnShowBox14").disabled = true;
}
function closeBox14() {
  document.getElementById("temporaryBox14").style.display = "none";
  clearTimeout(timerId14);
  document.getElementById("btnShowBox14").disabled = false;
}

$(function(){
  $('#js-target14').t({
    speed_vary:true,
  });
});

// Q15
function showBox15() {
  document.getElementById("temporaryBox15").style.display = "block";
  timerId15 =setTimeout(closeBox15, 5000 );
  document.getElementById("btnShowBox15").disabled = true;
}
function closeBox15() {
  document.getElementById("temporaryBox15").style.display = "none";
  clearTimeout(timerId15);
  document.getElementById("btnShowBox15").disabled = false;
}

$(function(){
  $('#js-target15').t({
    speed_vary:true,
  });
});

// Q16
function showBox16() {
  document.getElementById("temporaryBox16").style.display = "block";
  timerId16 =setTimeout(closeBox16, 5000 );
  document.getElementById("btnShowBox16").disabled = true;
}
function closeBox16() {
  document.getElementById("temporaryBox16").style.display = "none";
  clearTimeout(timerId16);
  document.getElementById("btnShowBox16").disabled = false;
}

$(function(){
  $('#js-target16').t({
    speed_vary:true,
  });
});

// Q17
function showBox17() {
  document.getElementById("temporaryBox17").style.display = "block";
  timerId17 =setTimeout(closeBox17, 5000 );
  document.getElementById("btnShowBox17").disabled = true;
}
function closeBox17() {
  document.getElementById("temporaryBox17").style.display = "none";
  clearTimeout(timerId17);
  document.getElementById("btnShowBox17").disabled = false;
}

$(function(){
  $('#js-target17').t({
    speed_vary:true,
  });
});

// Q18
function showBox18() {
  document.getElementById("temporaryBox18").style.display = "block";
  timerId18 =setTimeout(closeBox18, 5000 );
  document.getElementById("btnShowBox18").disabled = true;
}
function closeBox18() {
  document.getElementById("temporaryBox18").style.display = "none";
  clearTimeout(timerId18);
  document.getElementById("btnShowBox18").disabled = false;
}

$(function(){
  $('#js-target18').t({
    speed_vary:true,
  });
});

// Q19
function showBox19() {
  document.getElementById("temporaryBox19").style.display = "block";
  timerId19 =setTimeout(closeBox19, 5000 );
  document.getElementById("btnShowBox19").disabled = true;
}
function closeBox19() {
  document.getElementById("temporaryBox19").style.display = "none";
  clearTimeout(timerId19);
  document.getElementById("btnShowBox19").disabled = false;
}

$(function(){
  $('#js-target19').t({
    speed_vary:true,
  });
});

// Q20
function showBox20() {
  document.getElementById("temporaryBox20").style.display = "block";
  timerId20 =setTimeout(closeBox20, 5000 );
  document.getElementById("btnShowBox20").disabled = true;
}
function closeBox20() {
  document.getElementById("temporaryBox20").style.display = "none";
  clearTimeout(timerId20);
  document.getElementById("btnShowBox20").disabled = false;
}

$(function(){
  $('#js-target20').t({
    speed_vary:true,
  });
});

// Q21
function showBox21() {
  document.getElementById("temporaryBox21").style.display = "block";
  timerId21 =setTimeout(closeBox21, 5000 );
  document.getElementById("btnShowBox21").disabled = true;
}
function closeBox21() {
  document.getElementById("temporaryBox21").style.display = "none";
  clearTimeout(timerId21);
  document.getElementById("btnShowBox21").disabled = false;
}

$(function(){
  $('#js-target21').t({
    speed_vary:true,
  });
});
