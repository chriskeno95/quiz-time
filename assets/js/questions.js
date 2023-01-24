//this file will contain the questions that will be asked in the quiz. i will add them as objects within an array.

let questions = [
    { // array index 0 = question 1
        "question": "1.Inside which HTML element do we put the JavaScript?",
        "choices": ["<script>","<js>","<scripting>","<javascript>"],
        "answer" : "<script>"
    },
    { // array index 1 = question 2
        "question": "2.Where is the correct place to insert a JavaScript?",
        "choices": ["The <body> section","The <head> section","Both the <head> section and the <body> section"],
        "answer" : "Both the <head> section and the <body> section"
    },
    {// array index 2 = question 3
        "question": "3.The external JavaScript file must contain the <script> tag.",
        "choices": ["True","False"],
        "answer" : "False"
    },
    {// array index 3 = question 4
        'question': '4.How do you write "Hello World" in an alert box?',
        "choices": ['msg("Hello World");','msgBox("Hello World");','alert("Hello World"); '],
        'answer' : 'alert("Hello World"); '
    },
    {// array index 4 = question 5
        "question": '5.How do you create a function in JavaScript?',
        "choices": ["function:myFunction()","function = myFunction()", "function myFunction()"],
        "answer" : "function myFunction()"
    },
]