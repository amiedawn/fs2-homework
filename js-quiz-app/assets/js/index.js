const counterEl = document.getElementById("#counter");
const timerEl = document.getElementById("#timer");

// quiz questions array
var arrQuestions = [
    {
      showQuestion: 
        "In which element do we put JavaScript? ",
      choices: [
        "a.  <javascript>", 
        "b.  <scripting>", 
        "c.  <script>", 
        "d.  none of the above"
      ],
      rightChoice: "c.  <script>"

    },
    {
      showQuestion:
        "Which of the following is the correct syntax for referring to an external script called 'xxx.js'?",
      choices: [
        "a.  <script src='xxx.js'>",
        "b.  <script href='xxx.js'>",
        "c.  <script name='xxx.js'>",
        "d.  none of the above"
      ],
      rightChoice: "a.  <script src='xxx.js'>"
    },
    {
      showQuestion:
        "How do we write 'Hello World' in an alert box?",
      choices: [
        "a.  alertBox('Hello World');",
        "b.  msgBox('Hello World');",
        "c.  msg('Hello World');",
        "d.  alert('Hello World');"
      ],
      rightChoice: "d.  alert('Hello World');"
    },
    {
      showQuestion:
        "Which of the following is an IF statement in JavaScript?",
      choices: [
        "a.  if i=5",
        "b.  if i=5 then",
        "c.  if (i==5)",
        "d.  all of the above"
      ],
      rightChoice: "c.  if (i==5)"
    },
    {
      showQuestion:
        "Which of the following events occurs when the user clicks on an HTML element?",
      choices: [
        "a.  onmouseclick",
        "b.  onmouseover",
        "c.  onclick",
        "d.  none of the above"
      ],  
      rightChoice: "c.  onclick",
    },
  ];