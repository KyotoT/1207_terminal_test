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
