var qa
var ans = []
var json_q
var json_q_c
var count = 0
var name;
var spanans_a = document.createElement("span")
spanans_a.innerText = "#####"
var ans_a = document.createElement("button")
ans_a.classList.add("btn")
ans_a.appendChild(spanans_a)
ans_a.addEventListener("click", function () {
    ans[count] = 0
    ans_a.className = "btn red"
    ans_b.className = "btn"
    ans_c.className = "btn"
    ans_d.className = "btn"
    ans_e.className = "btn"
});
var spanans_b = document.createElement("span")
spanans_b.innerText = "#####"
var ans_b = document.createElement("button")
ans_b.classList.add("btn")
ans_b.appendChild(spanans_b)
ans_b.addEventListener("click", function () {
    ans[count] = 1
    ans_a.className = "btn"
    ans_b.className = "btn red"
    ans_c.className = "btn"
    ans_d.className = "btn"
    ans_e.className = "btn"
});
var spanans_c = document.createElement("span")
spanans_c.innerText = "#####"
var ans_c = document.createElement("button")
ans_c.classList.add("btn")
ans_c.appendChild(spanans_c)
ans_c.addEventListener("click", function () {
    ans[count] = 2
    ans_a.className = "btn"
    ans_b.className = "btn"
    ans_c.className = "btn red"
    ans_d.className = "btn"
    ans_e.className = "btn"
});
var spanans_d = document.createElement("span")
spanans_d.innerText = "#####"
var ans_d = document.createElement("button")
ans_d.classList.add("btn")
ans_d.appendChild(spanans_d)
ans_d.addEventListener("click", function () {
    ans[count] = 3
    ans_a.className = "btn"
    ans_b.className = "btn"
    ans_c.className = "btn"
    ans_d.className = "btn red"
    ans_e.className = "btn"
});
var spanans_e = document.createElement("span")
spanans_e.innerText = "#####"
var ans_e = document.createElement("button")
ans_e.classList.add("btn")
ans_e.appendChild(spanans_e)
ans_e.addEventListener("click", function () {
    ans[count] = 4
    ans_a.className = "btn"
    ans_b.className = "btn"
    ans_c.className = "btn"
    ans_d.className = "btn"
    ans_e.className = "btn red"
});

window.onload = function () {
    qa = $("#question").get(0)
    $("#1").click(function () {
        $("button").remove();
        name="phoitrungthat"
        run(1)
    });
    $("#2").click(function () {
        $("button").remove();
        name="ongben"
        run(2)
    });
}
function run(i) {
    $.getJSON(i + "/qa.json", function (data) {
        json_q = data
        json_q_c = 0
        data.forEach(element => {
            json_q_c++
        })
        display_bt()
    }
    );
}
function display_bt() {
    var span_b = document.createElement("span")
    span_b.innerText = "CÂU TRƯỚC"
    var btn_b = document.createElement("button")
    btn_b.classList.add("btn")
    btn_b.classList.add("orange")
    btn_b.appendChild(span_b)
    btn_b.addEventListener("click", function () {
        count--
        if (count >= 0) {
            display_qa(json_q[count].q, json_q[count].n[0], json_q[count].n[1], json_q[count].n[2], json_q[count].n[3], json_q[count].n[4])
            if (ans[count] == null) {
                ans_a.className = "btn"
                ans_b.className = "btn"
                ans_c.className = "btn"
                ans_d.className = "btn"
                ans_e.className = "btn"
            } else {
                switch (ans[count]) {
                    case 0: {
                        ans_a.className = "btn red"
                        ans_b.className = "btn"
                        ans_c.className = "btn"
                        ans_d.className = "btn"
                        ans_e.className = "btn"
                        break
                    }
                    case 1: {
                        ans_a.className = "btn"
                        ans_b.className = "btn red"
                        ans_c.className = "btn"
                        ans_d.className = "btn"
                        ans_e.className = "btn"
                        break
                    }
                    case 2: {
                        ans_a.className = "btn"
                        ans_b.className = "btn"
                        ans_c.className = "btn red"
                        ans_d.className = "btn"
                        ans_e.className = "btn"
                        break
                    }
                    case 3: {
                        ans_a.className = "btn"
                        ans_b.className = "btn"
                        ans_c.className = "btn"
                        ans_d.className = "btn red"
                        ans_e.className = "btn"
                        break
                    }
                    case 4: {
                        ans_a.className = "btn"
                        ans_b.className = "btn"
                        ans_c.className = "btn"
                        ans_d.className = "btn"
                        ans_e.className = "btn red"
                        break
                    }
                }
            }
        } else {
            count = 0
        }
    });

    var span_f = document.createElement("span")
    span_f.innerText = "XÁC NHẬN VÀ SANG CÂU SAU"
    var btn_f = document.createElement("button")
    btn_f.classList.add("btn")
    btn_f.classList.add("orange")
    btn_f.appendChild(span_f)
    btn_f.addEventListener("click", function () {
        count++
        if (count < json_q_c) {
            display_qa(json_q[count].q, json_q[count].n[0], json_q[count].n[1], json_q[count].n[2], json_q[count].n[3], json_q[count].n[4])
            if (ans[count] == null) {
                ans_a.className = "btn"
                ans_b.className = "btn"
                ans_c.className = "btn"
                ans_d.className = "btn"
                ans_e.className = "btn"
            } else {
                switch (ans[count]) {
                    case 0: {
                        ans_a.className = "btn red"
                        ans_b.className = "btn"
                        ans_c.className = "btn"
                        ans_d.className = "btn"
                        ans_e.className = "btn"
                        break
                    }
                    case 1: {
                        ans_a.className = "btn"
                        ans_b.className = "btn red"
                        ans_c.className = "btn"
                        ans_d.className = "btn"
                        ans_e.className = "btn"
                        break
                    }
                    case 2: {
                        ans_a.className = "btn"
                        ans_b.className = "btn"
                        ans_c.className = "btn red"
                        ans_d.className = "btn"
                        ans_e.className = "btn"
                        break
                    }
                    case 3: {
                        ans_a.className = "btn"
                        ans_b.className = "btn"
                        ans_c.className = "btn"
                        ans_d.className = "btn red"
                        ans_e.className = "btn"
                        break
                    }
                    case 4: {
                        ans_a.className = "btn"
                        ans_b.className = "btn"
                        ans_c.className = "btn"
                        ans_d.className = "btn"
                        ans_e.className = "btn red"
                        break
                    }
                }
            }
        }else{
            download("dapan_"+name+".txt",JSON.stringify(ans))
        }

    });
    document.body.appendChild(btn_b)
    document.body.appendChild(btn_f)
    document.body.appendChild(ans_a)
    document.body.appendChild(ans_b)
    document.body.appendChild(ans_c)
    document.body.appendChild(ans_d)
    document.body.appendChild(ans_e)
    display_qa(json_q[count].q, json_q[count].n[0], json_q[count].n[1], json_q[count].n[2], json_q[count].n[3], json_q[count].n[4])
}
function display_qa(ch, daa, dab, dac, dad, dae) {
    qa.innerText = ch +"   ("+count+"/"+(json_q_c-1)+")"
    spanans_a.innerText = daa
    spanans_b.innerText = dab
    spanans_c.innerText = dac
    spanans_d.innerText = dad
    spanans_e.innerText = dae
}
function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
  
    element.style.display = 'none';
    document.body.appendChild(element);
  
    element.click();
  
    document.body.removeChild(element);
  }

