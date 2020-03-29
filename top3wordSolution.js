const top_3_words =(input)=> {
  const replacedString = input.replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()]/g,"").toLowerCase();   
  const words = replacedString.match(/\S+/g) || []
  const matchedObj = {};
  if(words.length === 0) return [];
  words.forEach(function(val,index) { 
    if (!val.match(/^[\\']+$/)){
      matchedObj[val] = matchedObj[val] || 0;
      matchedObj[val]++;
    }
  })
  return getSortedItem({matchedObj}).slice(0, 3)
}

const getSortedItem = ({matchedObj}) =>{
  return Object.keys(matchedObj).sort(function (a,b) { return matchedObj[b] -matchedObj[a];});
}

top_3_words(input)
