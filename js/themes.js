
function theme1() {
    document.getElementById("container").style.background = 'linear-gradient(#485563, #29323c)';
    localStorage.bgcolor = 'linear-gradient(#485563, #29323c)';
    localStorage.theme = 'theme1'

}
function theme2() {
    document.getElementById("container").style.background = 'linear-gradient(#265348, #193831)';
    localStorage.bgcolor = 'linear-gradient(#265348, #193831)';
    localStorage.theme = 'theme2'

}
function theme3() {
    document.getElementById("container").style.background = 'linear-gradient(#780206, #061161)';
    localStorage.bgcolor = 'linear-gradient(#780206, #061161)';
    localStorage.theme = 'theme3'

}

function theme4() {
    document.getElementById("container").style.background = 'linear-gradient(#3f4c6b,#606c88)';
    localStorage.bgcolor = 'linear-gradient(#3f4c6b,#606c88)';
    localStorage.theme = 'theme4'
}

function theme5() {
    document.getElementById("container").style.background = 'linear-gradient(#274046,#E6DADA )';
    localStorage.bgcolor = 'linear-gradient(#274046,#E6DADA )';
    localStorage.theme = 'theme5'

}
function theme6() {
    document.getElementById("container").style.background = 'linear-gradient(#666600, #999966)';
    localStorage.bgcolor = 'linear-gradient(#666600, #999966)';
    localStorage.theme = 'theme6'

}

function changetheme(){
    if (localStorage.theme == 'theme1') {
        document.getElementById("container").style.background = 'linear-gradient(#485563, #29323c)';
    }

    if (localStorage.theme == 'theme2') {
        document.getElementById("container").style.background = 'linear-gradient(#265348, #193831)';
    }

    if (localStorage.theme == 'theme3') {
        document.getElementById("container").style.background = 'linear-gradient(#780206, #061161)';
    }

    if (localStorage.theme == 'theme4') {
        document.getElementById("container").style.background = 'linear-gradient(#3f4c6b,#606c88)';
    }

    if (localStorage.theme == 'theme5') {
        document.getElementById("container").style.background = 'linear-gradient(#274046,#E6DADA )';
    }

    if (localStorage.theme == 'theme6') {
        document.getElementById("container").style.background = 'linear-gradient(#666600, #999966)';
    }

}





