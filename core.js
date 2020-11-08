//Я бездумно скопировал алгоритм с шарпового варианта, ибо он не мой
var number, text1str, text2str, index, compare, textAmount, final;
var words, words1, wordsNew, words1New;

const detectComparing = () => {
    text1str = document.getElementById("textInput").innerText;
    text2str = document.getElementById("textInput2").innerText;
    words = text1str.split(' ');
    words1 = text2str.split(' ');

    if (words.length < words1.length){
        for (textAmount = 0; textAmount < words.length; textAmount++){
            for (index = 0; index < words1.length; index++)
                if (words[textAmount] == words1[index]) compare++;
        }
    }

    else{
        for (textAmount = 0; textAmount < words1.length; textAmount++){
            for (index = 0; index < words.length; index++)
                if (words[index] == words1[textAmount]) compare++;
        }
    }

    final = (compare / index) * 100;
    compare = 0; 
    console.log(final);
    return final;
}

const setCompareValue = () => 
    document.getElementById("resulter").innerText = detectComparing().toString();
