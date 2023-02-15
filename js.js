
window.onload = function() {
  onload_fuc();
}

// Create the elements
const popup = document.createElement('div');
const heading = document.createElement('h2');
const paragraph = document.createElement('p');
const button = document.createElement('a');
const tabSwitch = document.createElement('div')
tabSwitch.className='circle'
const css = '.circle { \
  position: fixed; \
  top: 20px; \
  right: 20px; \
  width: 50px; \
  height: 50px; \
  border-radius: 25px; \
  background-color: #007bff; \
  color: white; \
  text-align: center; \
  font-size: 20px; \
  display: flex; \
  align-items: center; \
  justify-content: center; \
}';

const style = document.createElement('style');
style.type = 'text/css';
style.appendChild(document.createTextNode(css));
document.head.appendChild(style);

// Add the necessary classes and attributes
popup.classList.add('popup');
heading.style.color = 'red';
button.onclick = full;
tabSwitch.innerHTML = 0;


// Add the text content
heading.textContent = '❗Enable FullScreen❗';
paragraph.textContent = 'We recommend that you use full-screen mode. So click the "Enable" button below.';
button.textContent = 'Enable';

// Append the elements to the popup
popup.appendChild(heading);
popup.appendChild(paragraph);
popup.appendChild(button);

// Add the popup to the document body
document.addEventListener('DOMContentLoaded', function() {
 
  // Add any necessary classes, attributes, and content to the popup element
  document.body.append(popup,tabSwitch);
document.addEventListener("visibilitychange", event => {
  let a = document.getElementById('R_tab').value;
  const element = document.querySelector('#ips');
  if (document.visibilityState === "visible") {
      console.log("tab is active")
  } else {
      alert("tab is switched");
      window.scrollTo(0, 0);
      disableDiv();
      document.querySelector(".popup").style.display = "block";
      document.getElementById('R_tab').value = Number(a) + 1;
      document.querySelector(".circle").innerHTML=Number(a) + 1;
  }

})
});


function onload_fuc(){
  window.scrollTo(0, 0);
      disableDiv();
      document.querySelector(".popup").style.display = "block";
}
function disableDiv() {
    $("#myDiv").removeClass("enabled");
    $("#myDiv").addClass("disabled");
  }
  function enableDiv() {
    $("#myDiv").removeClass("disabled");
    $("#myDiv").addClass("enabled");
  }
  function full(){
    document.documentElement.requestFullscreen().catch((e) => {
            console.log(e)
        });
        
    document.querySelector(".popup").style.display = "none";
    enableDiv();
  }
