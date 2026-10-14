let ChakeBtn = document.querySelector('.Search-btn')
let ResetBtn = document.querySelector('.Reset-btn')
let UserInput = document.querySelector('.Search-bar')
let PosInfo = document.querySelector('.infoP')
let NegInfo = document.querySelector('.infoN')
let ZeroInfo = document.querySelector('.infoZ')
let EvenInfo = document.querySelector('.infoE')
let OddInfo = document.querySelector('.infoO')

//functions
function numSys(){
let uinp = UserInput.value;
// Error handlling system;
    if(uinp == ''){
        alert('Chake what you type!')
    }
// positive and negative info system;
    if(uinp > 0){
        PosInfo.textContent = `Positive: True`
        NegInfo.textContent = `Negative: False`
    }else{
        PosInfo.textContent = `Positive: False`
        NegInfo.textContent = `Negative: True`
    }
// even and odd info system;
    if(uinp % 2 == 0){ // even system;
        EvenInfo.textContent = `Even: True`;
        OddInfo.textContent = `Odd: False`;
        ZeroInfo.textContent = `Zero: False`
    }else{ // odd system;
        EvenInfo.textContent = `Even: False`;
        OddInfo.textContent = `Odd: True`;
    }
//zero system
    if(uinp == 0){
        PosInfo.textContent = `Positive: False`;
        NegInfo.textContent = `Negative: False`;
        EvenInfo.textContent = `Even: False`;
        OddInfo.textContent = `Odd: False`;
        ZeroInfo.textContent = `Zero: true`;
    }else{
      ZeroInfo.textContent = `Zero: False`  
    }
}

ChakeBtn.addEventListener('click' , () =>{
    numSys()
})

ResetBtn.addEventListener('click', () =>{
        PosInfo.textContent = `Positive:`;
        NegInfo.textContent = `Negative:`;
        EvenInfo.textContent = `Even:`;
        OddInfo.textContent = `Odd:`;
        ZeroInfo.textContent = `Zero:`;
        UserInput.value = '';
})