// this function is used to generate form
function generateForm(inputArray,nameArray){
  aUrl = inputArray[0]
    var nVal=0;
    var formTag = $('<form>', {
      target: "_self",
      id: "regForm",
      class: "forms",
      autocomplete:"off",
      action: ''
    });
    
    formTag.append(ip);
    for(var i=1;i<inputArray.length;i++){
      var mainDiv = $('<div>', {
        class: 'main_div',
        id:'q'+i.toString(),
       
        
      });
      var temp = inputArray[i];
      var questionValue = $('<span>', {
        class: 'questionDisplay',
        html: temp[1]
      });
      var Qbreak = $('<div>').append($('<br>'));
  
      mainDiv.append(questionValue, Qbreak);

      // email
      if(temp[0]=='email'){
        var ip = $('<input>', {
          type: 'email',
          name: nameArray[nVal++],
          required: true
        });
        mainDiv.append(ip);
      }

      // text
      else if(temp[0]=='text'){
        var ip = $('<input>', {
          type: 'text',
          name: nameArray[nVal++],
          required: true
        });
        mainDiv.append(ip);
      }

      // text area
      else if(temp[0]=="textarea"){
        var ip = $('<textarea>', {
          name: nameArray[nVal++],
          required: true
        });
        mainDiv.append(ip);
      }

      // radio
      else if(temp[0]=='radio'){
        var opDiv = $('<div>', {
          class: 'fancy-radio-buttons with-image',
          id: 'radio-button-container'
        });
  
        for(var j=0;j<temp[2].length;j++){
          var opSpan = $('<span>', {
            class: 'image-container'
          });
          var opInput = $('<input>', {
            type: 'radio',
            name: nameArray[nVal],
            id: 'q'+i.toString()+'p'+j.toString(),
            value:temp[2][j],
            required: true
          });
          var opLabel = $('<label>', {
            for: 'q'+i.toString()+'p'+j.toString(),
            html: temp[2][j]
          });
          var opLabel2 = $('<label>', {
            for: 'q'+i.toString()+'p'+j.toString(),
            class: 'image-bg'
          });
          opSpan.append(opInput, opLabel, opLabel2);
  
          opDiv.append(opSpan,$('<br>'));
          
          mainDiv.append(opDiv);
        }
        nVal+=1;
      }

      // check box 
      else if(temp[0]=='checkbox'){
        var checkDiv = $('<div>');
  
        for(var j=0;j<temp[2].length;j++){
          var checkOp = $('<input>', {
            type: 'checkbox',
            name: nameArray[nVal],
            id: 'q'+i.toString()+'p'+j.toString(),
            value:temp[2][j],
            
          });
          var checkLabel = $('<label>', {
            for: 'q'+i.toString()+'p'+j.toString(),
            html: temp[2][j]
          });
          checkDiv.append(checkOp,checkLabel,$('<br>'));
        }
        nVal+=1;
        mainDiv.append(checkDiv);
      }

      // select tag or dropdown 
      else if(temp[0]=='select'){
        var selectDiv = $('<div>');
        var selecT = $('<select>',{
          required: true,
          name:nameArray[nVal++]
        });
        var choose = $('<option>', {
          value: "",
          text: "Choose here"
        }).attr({selected: true});
        selecT.append(choose);
  
        for(var j=0;j<temp[2].length;j++){
          var selectOption = $('<option>', {
            value: temp[2][j],
            text: temp[2][j]
          });
          selecT.append(selectOption);
        }
        selectDiv.append(selecT);
        mainDiv.append(selectDiv);
      }
      else{console.log('hiiii');}
      formTag.append(mainDiv);
    }
    var Sbutton = $('<button>', {
      type: 'submit',
      html: 'submit',
      id:'submit_btn',
      disabled:false
    });
    formTag.append(Sbutton);
    $('#myDiv').append(formTag);

   
      $("body").append('<footer class="footer bg-light mt-5 py-3"><div class="container"><p class="text-center">Copyright © 2023. All rights reserved By <a href="https://formmeta.github.io/" target="_blank">formMeta</a>.</p></div></footer>');
 
  }
  

 

// generateForm(testArray);
$(document).ready(function(){
  
  $("#regForm").submit(function(event) {
    document.getElementById('submit_btn').disabled=true;
    event.preventDefault();
    var formData = $(this).serialize();
    $.ajax({
      beforeSend: function(xhr, settings) {
        xhr.setRequestHeader('User-Agent', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3');
        xhr.setRequestHeader('Accept-Language', 'en-US,en;q=0.5');
        xhr.setRequestHeader('Origin', 'https://docs.google.com');
        xhr.setRequestHeader( 'Content-Type', 'application/json')
        // Add any other headers you need here
      },
      type: "POST",
      url: aUrl, // Your server-side script to handle the form data
      data: formData,
      crossDomain: true,
      headers: {
        'Access-Control-Allow-Origin':'http://127.0.0.1:5501/',
        "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3',
        'Accept-Language': 'en-US,en;q=0.5',
        'Origin':'https://docs.google.com',
        'Content-Type': 'application/json',
        'Origin': 'https://docs.google.com'
      },
      success: function(data, textStatus, xhr) {
        if (xhr.status === 200) {
          
        }
      },
      error: function(xhr, textStatus, errorThrown) {
        console.log(xhr,'---',textStatus,'------',errorThrown);
        window.open("https://formmeta.github.io/generateform/thankyou.html",'_self');
      }
    });
  });
  
});