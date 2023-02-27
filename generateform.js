// this function is used to generate form
function generateForm({inputArray,nameArray,emailDomain="Null",limitResponse=false,shuffle=[false,0]}={}){
  aUrl = inputArray[0]
    var nVal=0;
    var formTag = $('<form>', {
      target: "formview",
      id: "regForm",
      class: "forms",
      autocomplete:"off",
      action: aUrl
    });
    
    formTag.append(ip);
    for(var i=1;i<inputArray.length;i++){
      var mainDiv = $('<div>', {
        class: i<=shuffle[1]?'main_div':'shuffleClass main_div' ,
        id:'q'+i.toString(),
       
        
      });
      var temp = inputArray[i];
      var questionValue = $('<span>', {
        class: 'questionDisplay',
        html: `${temp[1]}${emailDomain !== 'Null' && temp[0] === 'email' ? '('+emailDomain+')' : ''}`
      });
      var Qbreak = $('<div>').append($('<br>'));
  
      mainDiv.append(questionValue, Qbreak);

      // email
      if (temp[0] == 'email') {
        const ip = $('<input>', {
          type: 'email',
          name: nameArray[nVal++],
          required: true,
          pattern: emailDomain !== 'Null' ? new RegExp(`^[a-zA-Z0-9._%+-]+@${emailDomain}$`).source : undefined
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
          class: 'form-check'
        });
  
        for(var j=0;j<temp[2].length;j++){
          var opSpan = $('<span>', {
            class: 'container'
          });
          var opInput = $('<input>', {
            type: 'radio',
            class:'form-check-input',
            name: nameArray[nVal],
            id: 'q'+i.toString()+'p'+j.toString(),
            value:temp[2][j],
            required: true
          });
          var opLabel = $('<label>', {
            for: 'q'+i.toString()+'p'+j.toString(),
            html: temp[2][j],
            class:'form-check-label'
          });
          opSpan.append(opInput, opLabel);
  
          opDiv.append(opSpan,$('<br>'));
          
          mainDiv.append(opDiv);
        }
        nVal+=1;
      }

      // check box 
      else if(temp[0]=='checkbox'){
        var checkDiv = $('<div>',{
          class:'form-check',

        });
  
        for(var j=0;j<temp[2].length;j++){
          var checkOp = $('<input>', {
            type: 'checkbox',
            class:'form-check-input',
            name: nameArray[nVal],
            id: 'q'+i.toString()+'p'+j.toString(),
            value:temp[2][j],
            
          });
          var checkLabel = $('<label>', {
            class:'form-check-label',
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
          name:nameArray[nVal++],
          class:'form-select'
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
  
      if(shuffle[0]==true){
        var forms = $(".shuffleClass");
        console.log(forms);
        for(var i = 0; i < forms.length; i++){
            var target = Math.floor(Math.random() * forms.length -1) + 1;
            var target2 = Math.floor(Math.random() * forms.length -1) +1;
            forms.eq(target).before(forms.eq(target2));
        }
      }
  }
  function disableDiv() {
    $("#myDiv").removeClass("enabled");
    $("#myDiv").addClass("disabled");
  }
  function enableDiv() {
    $("#myDiv").removeClass("disabled");
    $("#myDiv").addClass("enabled");
  }


$(document).ready(function(){

 {$(document).on("contextmenu", function(e) {
    e.preventDefault();
  });
  
  $(document).on("keydown", function(e) {
    if (e.ctrlKey && ["U"] || e.ctrlKey && e.shiftKey && ["I", "J", "C"].includes(e.key.toUpperCase())) {
      e.preventDefault();
    }
  });}
  $("#regForm").submit(function(event) {
    document.getElementById('submit_btn').disabled=true;
    window.scrollTo(0, 0);
    disableDiv();
    document.querySelector(".iframePopup").style.display = "block";
   
  });
  
});



function setCookie(cname,cvalue,exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*2*60*60*1000));
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie() {
  let user = getCookie("isCompleted");
  if (user != "") {
    window.open("https:\/\/formmeta.github.io/generateform/thankyou.html", "_self");
  } }


  