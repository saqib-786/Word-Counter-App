let char = document.getElementById('char');
let word = document.getElementById('word');
let textBox = document.getElementById('text-box');
let UpperCase = document.getElementById('upperCase');
let LowerCase = document.getElementById('lowerCase');
let capitilize = document.getElementById('capitilize');
let trim = document.getElementById('trim');
let darkMode = document.getElementById('dark-mode');
let header = document.getElementById('flex-box');
let btns = document.querySelectorAll('.btn');
let icon = document.querySelector('#icon');
let copyText = document.getElementById('copy-text');
let lightMode = document.getElementById('light-mode');
let words;
let wordsList = [];



textBox.addEventListener('input',()=>{
    char.innerText = textBox.value.length;
    wordsList.push(textBox.value);
    getWords(textBox.value);
});


function getWords(data){
    data = data.split(' ');
    words = data.length;
    for(let i = 0; i < data.length; i++){
        if(data[i] === ''){
            word.innerText = words -1
        }else{
            word.innerText = words;
        }
    }
    
   


}

UpperCase.addEventListener('click',()=>{
    text = textBox.value;
    text = text.toUpperCase();
    textBox.value = text
});

LowerCase.addEventListener('click',()=>{
    text = textBox.value;
    text = text.toLowerCase();
    textBox.value = text

});

capitilize.addEventListener('click',()=>{
   let text = textBox.value;
    let words = text.split(' ');
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    };
    textBox.value = words;
})

trim.addEventListener('click',()=>{
    text = textBox.value;
    text = text.trim();
    textBox.value = text

});

function toastifyAlert(value){
    Toastify({
        text: value,
        duration: 3000,
        destination: "",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
        onClick: function(){} // Callback after click
      }).showToast();
}

copyText.addEventListener('click',()=>{
    textBox.select();
    textBox.setSelectionRange(0,99999);
    navigator.clipboard.writeText(textBox.value);
    setTimeout(()=>{
    // alert('Copy to Clipboard');
    toastifyAlert('Copy to Clipboard');

    },300)
})

darkMode.addEventListener('click',()=>{
    document.body.style.backgroundColor = '#00002C';
    document.body.style.color = '#EEFF0E';
    header.style.backgroundColor ='#0A0025';
    textBox.style.backgroundColor = '#0A0025';
    textBox.style.color = '#EEFF0E';
    header.style.color = '#EEFF0E';
    darkMode.style.display = 'none';
    lightMode.style.display = 'block';

    btns.forEach((btn)=>{
        btn.classList.add('dark-mode-btn')
    });


});

lightMode.addEventListener('click',()=>{
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
    header.style.backgroundColor ='crimson';
    textBox.style.backgroundColor = 'whitesmoke';
    textBox.style.color = 'black';
    header.style.color = 'white';
    darkMode.style.display = 'block';
    lightMode.style.display = 'none';

    btns.forEach((btn)=>{
        btn.classList.remove('dark-mode-btn');
        btn.classList.add('btn')
    });
    
})

$(document).ready(function(){
    $('#about-btn').click(function(){
        $('#hidden-sec').fadeIn('slow').css({'display':'flex'});
        setTimeout(()=>{
            // $(this).css({'display':'none'}).fadeOut()
        },300);
    });
    $('#back-btn').click(function(){
        $('#hidden-sec').fadeOut('slow').css({'display':'none'});
        // $('#about-btn').css({'display':'block'})
    });
    $('#btn-about').click(function(){
        $('#hidden-sec').fadeIn('slow').css({'display':'flex'});
        setTimeout(()=>{
            // $(this).css({'display':'none'}).fadeOut()
        },300);
    });

    $('#menu-btn').click(function(){
        $('#hidden-container').slideToggle('slow').css({'display':'flex'});
    })
    

})

