function wikiAPI(){   
        //define variables 
            var searchTerm = document.getElementById('searchTerm').value; //name variable (get from html)
            var xhr = new XMLHttpRequest();    //create XML Http Request object
            var url = "https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&generator=search&gsrnamespace=0&gsrlimit=20&gsrsearch=" + searchTerm; //create base URLfor API
    //open API call
            xhr.open('GET', url);  //use XHR.open to GET a file from the API
    //parse and display data
       xhr.onload = function(){
           var wikiObject = JSON.parse(this.response); //load and parse the response as a JSON data object
          // console.log(wikiObject); //Console.log the data object to see what you got as a response
          //console.log(wikiObject.query.pages);
           var pages=wikiObject.query.pages  //locate the branch of the object that is of interest
            for(var i in pages) {    //loop through the branch and output the Wiki pages to the HTML page
               // var newDiv = document.createElement("div");
               // newDiv.setAttribute('class', 'row h4');
             //   document.getElementById("wiki").appendChild(newDiv);
               // newDiv.innerText = pages[i].title;

                var pageURL = "https://en.wikipedia.org/?curid="
                var newAnchor = document.createElement("a");
                newAnchor.href = pageURL+pages[i].pageid;
                newAnchor.className = 'd-block';
                newAnchor.innerText = pages[i].title
                document.getElementById("wiki").appendChild(newAnchor); };
            }
     //send API request to serverSEND THE API REQUEST TO THE SERVER

    xhr.send();}

    //SUPER CHALLENGE
        // display links to the Wikipedia HTML pages as results
        //use the pageid property in the JSON file
        //the base URL for loading Wikipedia pages by pageid is the following: https://en.wikipedia.org/?curid=
        //add the pageid to the URL

function acceptUsersText(){
  var wordArray = new Array();
  var userenteredText=document.getElementById("userenteredText").value;
  var textToString = userenteredText.toString();
  var smallerStrings = textToString.split(',' || ' ' || ', ');
  wordArray.push(smallerStrings);
  document.getElementById("seeArray").append(wordArray);}

function parseArray(){
  var wordsInput = document.getElementById("seeArray").innerHTML;
  var inputToString = wordsInput.toString();
  var individualWords = inputToString.split(',' || ' ' || ', ');
  individualWords.sort();
  document.getElementById("alphabetized").append(individualWords);}
