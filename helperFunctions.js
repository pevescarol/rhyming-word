
const renderResponse = (res) => {
    if(!res){
      console.log(res.status);
    }
    if(!res.length){
      responseField.innerHTML = "<p>Try again!</p><p>There were no suggestions found!</p>";
      return;
    }
  
    // Creo un array que contenga HTML strings
    let wordList = [];
   
    for(let i = 0; i < Math.min(res.length, 10); i++){
      // Creo una lista de las palabras
      wordList.push(`<li>${res[i].word}</li>`);
    }
    wordList = wordList.join("");
  
    responseField.innerHTML = `<p>You might be interested in:</p><ol>${wordList}</ol>`;
    return
  }
  

  const renderRawResponse = (res) => {
    // Toma las primeras 10 palabras del res
    let trimmedResponse = res.slice(0, 10);

    responseField.innerHTML = `<text>${JSON.stringify(trimmedResponse)}</text>`;
  }
  
  