console.log('i am there');

const maComing = () => {
    alert('ammu is comming!!')
}

const askPicnic = () => {
    const response = confirm('Are YOU redy to go???')
    console.log(response);
    if (response === true) {
        alert('amake fee ta bkash kor')
    }
    else {
        console.log('DGM!!!')
    }
}
const askName = () => {
    const name = prompt('whaT IS your name')
    if (name) {
        console.log(name)
    }

}