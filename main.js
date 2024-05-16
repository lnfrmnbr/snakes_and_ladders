var pers1 = 1;
var pers2 = 1;
ls_zmei1 = [0,0,0];
ls_zmei2 = [0,0,0];
ls_lestn1 = [0,0,0];
ls_lestn2 = [0,0,0];
var priority = 1

function one_move(pers, cube_res, preor){
  if (pers+cube_res >= 100){
    if (preor == 1){
         document.getElementById("i100_1").src = "pers1.png";
         document.getElementById("text").innerHTML = "Победа 1!!";
    }
    else{
        document.getElementById("i100_2").src = "pers2.png";
        document.getElementById("text").innerHTML = "Победа 2!!";
    }
    document.getElementById("cube1_butt").hidden = true;
    document.getElementById("restart_butt").hidden = false;
  }
  else{
    pers += cube_res;
    if (document.getElementById("p"+String(pers)).name == "z1"){
        document.getElementById("i"+String(ls_zmei2[0])+"_"+String(preor)).src = "pers" + String(preor)+".png";
        pers = ls_zmei2[0];
    }
    if (document.getElementById("p"+String(pers)).name == "z2"){
        document.getElementById("i"+String(ls_zmei2[1])+"_"+String(preor)).src = "pers" + String(preor)+".png";
        pers = ls_zmei2[1];
    }
    if (document.getElementById("p"+String(pers)).name == "z3"){
        document.getElementById("i"+String(ls_zmei2[2])).src = "pers" + String(preor)+".png";
        pers = ls_zmei2[2];
    }
    if (document.getElementById("p"+String(pers)).name == "l1"){
        document.getElementById("i"+String(ls_lestn2[0])+"_"+String(preor)).src = "pers" + String(preor)+".png";
        pers = ls_lestn2[0];
    }
    if (document.getElementById("p"+String(pers)).name == "l2"){
        document.getElementById("i"+String(ls_lestn2[1])+"_"+String(preor)).src = "pers" + String(preor)+".png";
        pers = ls_lestn2[1];
    }
    if (document.getElementById("p"+String(pers)).name == "l3"){
        document.getElementById("i"+String(ls_lestn2[2])+"_"+String(preor)).src = "pers" + String(preor)+".png";
        pers = ls_lestn2[2];
    }
    else{
        document.getElementById("i"+String(pers)+"_"+String(preor)).src = "pers" + String(preor) +".png";
    }
  }
  return pers;
}

function cube1() {
  var res = Math.floor(Math.random() * 6) + 1;
  document.getElementById("cube1").src  = "cube" + String(res) + ".png";
  if (priority == 1){
    document.getElementById("i"+String(pers1)+"_1").src = "";
    pers1 = one_move(pers1, res, priority);
    priority = 2;
  }
  else{
    document.getElementById("i"+String(pers2)+"_2").src = "";
    pers2 = one_move(pers2, res, priority);
    priority = 1;
  }

}

function generate() {
        var table = document.getElementById("table");
        var randomIndexes = [];

        // Генерируем 6 случайных индексов для закраски
        while (randomIndexes.length < 12) {
            var randomIndex = Math.floor(Math.random() * 100);
            if (!randomIndexes.includes(randomIndex) && randomIndex!=0) {
                randomIndexes.push(randomIndex);
            }
        }
        //первая лестница
        document.getElementById("p"+String(randomIndexes[0])).style.background = "GreenYellow";
        document.getElementById("p"+String(randomIndexes[1])).style.background = "GreenYellow";
        if (randomIndexes[0]<randomIndexes[1]){
            document.getElementById("p"+String(randomIndexes[0])).name = "l1";
            ls_lestn1[0] = randomIndexes[0];
            ls_lestn2[0] = randomIndexes[1];
        }
        else{
            document.getElementById("p"+String(randomIndexes[1])).name = "l1";
            ls_lestn1[0] = randomIndexes[1];
            ls_lestn2[0] = randomIndexes[0];
        }
        //вторая лестница
        document.getElementById("p"+String(randomIndexes[2])).style.background = "MediumSpringGreen";
        document.getElementById("p"+String(randomIndexes[3])).style.background = "MediumSpringGreen";
        if (randomIndexes[2]<randomIndexes[3]){
            document.getElementById("p"+String(randomIndexes[2])).name = "l2";
            ls_lestn1[1] = randomIndexes[2];
            ls_lestn2[1] = randomIndexes[3];
        }
        else{
            document.getElementById("p"+String(randomIndexes[3])).name = "l2";
            ls_lestn1[1] = randomIndexes[3];
            ls_lestn2[1] = randomIndexes[2];
        }
        //третья лестница
        document.getElementById("p"+String(randomIndexes[4])).style.background = "green";
        document.getElementById("p"+String(randomIndexes[5])).style.background = "green";
        if (randomIndexes[4]<randomIndexes[5]){
            document.getElementById("p"+String(randomIndexes[4])).name = "l3";
            ls_lestn1[2] = randomIndexes[4];
            ls_lestn2[2] = randomIndexes[5];
        }
        else{
            document.getElementById("p"+String(randomIndexes[5])).name = "l3";
            ls_lestn1[2] = randomIndexes[5];
            ls_lestn2[2] = randomIndexes[4];
        }
        //первая змея
        document.getElementById("p"+String(randomIndexes[6])).style.color = "red";
        document.getElementById("p"+String(randomIndexes[7])).style.color = "red";
        if (randomIndexes[6]<randomIndexes[7]){
            document.getElementById("p"+String(randomIndexes[7])).name = "z1";
            ls_zmei1[0] = randomIndexes[7];
            ls_zmei2[0] = randomIndexes[6];
        }
        else{
            document.getElementById("p"+String(randomIndexes[6])).name = "z1";
            ls_zmei1[0] = randomIndexes[6];
            ls_zmei2[0] = randomIndexes[7];
        }
        //вторая змея
        document.getElementById("p"+String(randomIndexes[8])).style.color = "MediumBlue";
        document.getElementById("p"+String(randomIndexes[9])).style.color = "MediumBlue";
        if (randomIndexes[8]<randomIndexes[9]){
            document.getElementById("p"+String(randomIndexes[9])).name = "z2";
            ls_zmei1[1] = randomIndexes[9];
            ls_zmei2[1] = randomIndexes[8];
        }
        else{
            document.getElementById("p"+String(randomIndexes[8])).name = "z2";
            ls_zmei1[1] = randomIndexes[8];
            ls_zmei2[1] = randomIndexes[9];
        }
        //третья змея
        document.getElementById("p"+String(randomIndexes[10])).style.color = "Fuchsia";
        document.getElementById("p"+String(randomIndexes[11])).style.color = "Fuchsia";
        if (randomIndexes[10]<randomIndexes[11]){
            document.getElementById("p"+String(randomIndexes[11])).name = "z3";
            ls_zmei1[2] = randomIndexes[11];
            ls_zmei2[2] = randomIndexes[10];
        }
        else{
            document.getElementById("p"+String(randomIndexes[10])).name = "z3";
            ls_zmei1[2] = randomIndexes[10];
            ls_zmei2[2] = randomIndexes[11];
        }
        document.getElementById("cube1_butt").hidden = false;
        document.getElementById("generate_butt").hidden = true;
}

function restart() {
        document.getElementById("text").innerHTML = "";
        document.getElementById("i"+String(pers1)+"_1").src = "";
        document.getElementById("i"+String(pers2)+"_2").src = "";
        document.getElementById("i100_1").src = "";
        document.getElementById("i100_2").src = "";
        for (var i = 1; i < 100; i++) {
            document.getElementById("p"+String(i)).style.background = "white";
            document.getElementById("p"+String(i)).style.color = "black";
        }
        document.getElementById("i1_1").src = "pers1.png";
        document.getElementById("i1_2").src = "pers2.png";
        pers1 = 1;
        pers2 = 1;
        document.getElementById("cube1").src = "cube.png";
        document.getElementById("cube1_butt").hidden = false;
        document.getElementById("restart_butt").hidden = true;
        generate();
}