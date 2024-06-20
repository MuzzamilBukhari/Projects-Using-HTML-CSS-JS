let string = "";
const buttons = document.querySelectorAll('button')

buttons.forEach(button => {
   button.onclick = () => {
      if (button.innerText == '='){
         string = eval(string)
         document.querySelector('input').value = string
      } else if (button.innerText == 'C'){
         string = ""
         document.querySelector('input').value =string
      } else if (button.innerText == 'X'){
         string += '*'
         document.querySelector('input').value = string
        } else {
      string += button.innerText;
         document.querySelector('input').value = string
      }
   }
})



