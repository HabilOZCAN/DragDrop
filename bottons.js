function wordDivide() {
    const randomWord = Math.ceil(Math.random()*1000000)%words.length;
    let pWord = words[randomWord];
    let temp = [...pWord];
     
    const n = 3;
    const result = [[],[],[]];
    const returnResult = [[],[],[]];
    const letters = Math.ceil(temp.length/n);

    for(let i = 0; i < n; i ++){
        for(let j = 0; j < letters ; j++){
            let value = temp[j+i*letters]
            if(!value)continue;
            result[i].push(value);
        }
    }

    const randomNumber = Math.ceil(Math.random()*1000000);
    returnResult[randomNumber%3] = result[0];
    returnResult[(randomNumber+1)%3] = result[1];
    returnResult[(randomNumber+2)%3] = result[2];
    return returnResult;
}

function fillBoxes(){
    const resultbox = document.getElementById('word-result');
    resultbox.innerHTML = '';
    resultbox.style.backgroundColor= 'bisque';
    const emties = document.querySelectorAll('.draggable');
    const wordParts = wordDivide();
    for(let index = 0; index < wordParts.length; index++){
        emties[index].innerHTML = wordParts[index].join('');
    }
}

function controlBoxes(){
    const emties = document.querySelectorAll('.draggable');
    const resultbox = document.getElementById('word-result');
    let randomWord = '';
    randomWord = emties[0]['innerHTML']+emties[1]['innerHTML']+emties[2]['innerHTML'];
    resultbox.innerHTML = randomWord;

    if(words.includes(randomWord)){
        resultbox.style.backgroundColor= 'yellowgreen';
    }
    else{
        resultbox.style.backgroundColor= 'red';
    }
}