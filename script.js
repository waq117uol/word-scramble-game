const msg=document.querySelector('.msg');
const guess=document.querySelector('input');
const btn=document.querySelector('.btn');
let play=false;
let newWords="";
let randWords="";
let sWords=['python','html','css','javascript','java','c++','mongodb','php','angular','react','swift']

const createNewWords=()=>{
let ranNum=Math.floor(Math.random()*sWords.length);
let newTempswords=sWords[ranNum];
//  console.log(newTempswords.split(""));
return newTempswords;
}

const scrambelWords=(arr)=>{
    for (let i =arr.length-1 ; i>0; i--){
        let temp=arr[i];
        // console.log(temp);
        let j=Math.floor(Math.random()*(i+1));
        arr[i]=arr[j];
        arr[j]=temp;
       
    }
    return arr;
}



btn.addEventListener('click', function(){
    if(!play){
        play=true;
        btn.innerHTML="GUESS";
        guess.classList.toggle('hidden');
         newWords=createNewWords();
        randWords=scrambelWords(newWords.split("")).join("");
        // console.log(randWords.join(""));
        msg.innerHTML=`Guess the word :${randWords}`;

    }else{
        let tempWord=guess.value;
        if(tempWord === newWords){
            // console.log("correct");
            play=false;
            msg.innerHTML=`Awesome It's Correct. It is ${newWords}`;
            btn.innerHTML='Start Again';
            guess.classList.toggle('hidden');
            guess.value=""

        }else{
            // console.log("incorrect");
            msg.innerHTML=`sorry Boss... It's incorrect .plz try again ${randWords}`;

        }
    }
})