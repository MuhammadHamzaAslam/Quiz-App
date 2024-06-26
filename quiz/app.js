let questionObj = [
    {
        que: 'What Does Html Stands For',
        a: 'Hyper Texture Markup Language',
        b: 'Hyper Text Markup Language',
        c: 'Hyper Color Markup Language',
        d: 'Hyper Text Mark Lang',
        correct: 'Hyper Text Markup Language'
    },
    {
        que: 'What Does Css Stands For',
        a: 'Colorful Style Sheet',
        b: 'Cascading Style Sheet',
        c: 'Cascading Sheet Sheet',
        d: 'Cascading ',
        correct: 'Cascading Style Sheet'
    },
    {
        que: 'Which tag is used to declare a table in html',
        a: "<tablw>",
        b: "<table> </table>",
        c: "<tabl2>",
        d: "<table>",
        correct: '<table> </table>'
    },
    {
        que: 'What is the correct HTML element for the largest heading?',
        a: '<head>',
        b: '<h1>',
        c: '<heading>',
        d: '<h6>',
        correct: '<h1>'
    },
    {
        que: 'Which HTML attribute is used to define inline styles?',
        a: 'class',
        b: 'font',
        c: 'styles',
        d: 'style',
        correct: 'style'
    },
    {
        que: 'Which HTML element is used to define a paragraph?',
        a: '<p>',
        b: '<paragraph>',
        c: '<para>',
        d: '<pg>',
        correct: '<p>'
    },
    {
        que: 'How can you make a numbered list?',
        a: '<ol>',
        b: '<ul>',
        c: '<li>',
        d: '<list>',
        correct: '<ol>'
    },
    {
        que: 'What is the correct HTML element to define important text?',
        a: '<important>',
        b: '<strong>',
        c: '<b>',
        d: '<i>',
        correct: '<strong>'
    },
    {
        que: 'Which HTML element is used for creating a hyperlink?',
        a: '<link>',
        b: '<a>',
        c: '<href>',
        d: '<anchor>',
        correct: '<a>'
    },
    {
        que: 'Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?',
        a: 'src',
        b: 'alt',
        c: 'title',
        d: 'href',
        correct: 'alt'
    },
    {
        que: 'Which HTML element is used to define a footer for a document or section?',
        a: '<bottom>',
        b: '<footer>',
        c: '<foot>',
        d: '<end>',
        correct: '<footer>'
    },
    {
        que: 'What is the correct HTML element for inserting a line break?',
        a: '<lb>',
        b: '<br>',
        c: '<break>',
        d: '<line>',
        correct: '<br>'
    },
    {
        que: 'How do you create a checkbox in HTML?',
        a: '<input type="check">',
        b: '<checkbox>',
        c: '<input type="checkbox">',
        d: '<check>',
        correct: '<input type="checkbox">'
    },
    {
        que: 'Which HTML attribute is used to specify a unique identifier for an element?',
        a: 'class',
        b: 'id',
        c: 'name',
        d: 'key',
        correct: 'id'
    },
    {
        que: 'How do you define an unordered list in HTML?',
        a: '<list>',
        b: '<ul>',
        c: '<ol>',
        d: '<li>',
        correct: '<ul>'
    },
    {
        que: 'Which HTML tag is used to define an internal style sheet?',
        a: '<style>',
        b: '<css>',
        c: '<script>',
        d: '<link>',
        correct: '<style>'
    },
    {
        que: 'What is the correct HTML element for playing video files?',
        a: '<media>',
        b: '<movie>',
        c: '<video>',
        d: '<film>',
        correct: '<video>'
    },
    {
        que: 'Which HTML tag is used to define a list item?',
        a: '<li>',
        b: '<item>',
        c: '<list>',
        d: '<ul>',
        correct: '<li>'
    },
    {
        que: 'How can you make a bulleted list?',
        a: '<ol>',
        b: '<ul>',
        c: '<list>',
        d: '<bullet>',
        correct: '<ul>'
    },
    {
        que: 'Which HTML element is used to specify a header for a document or section?',
        a: '<top>',
        b: '<head>',
        c: '<header>',
        d: '<section>',
        correct: '<header>'
    },
    {
        que: 'What is the correct HTML for making a text area?',
        a: '<input type="textarea">',
        b: '<textarea>',
        c: '<text>',
        d: '<input type="text">',
        correct: '<textarea>'
    },
    {
        que: 'Which HTML tag is used to define a client-side script (JavaScript)?',
        a: '<script>',
        b: '<javascript>',
        c: '<js>',
        d: '<code>',
        correct: '<script>'
    },
    {
        que: 'What is the correct HTML for creating a hyperlink that opens in a new tab?',
        a: '<a href="url" target="new">',
        b: '<a href="url" new>',
        c: '<a href="url" target="_blank">',
        d: '<a href="url" target="_new">',
        correct: '<a href="url" target="_blank">'
    },
    {
        que: 'Which HTML element is used to define a table cell?',
        a: '<td>',
        b: '<tr>',
        c: '<th>',
        d: '<cell>',
        correct: '<td>'
    },
    {
        que: 'How do you create a dropdown list in HTML?',
        a: '<select>',
        b: '<list>',
        c: '<dropdown>',
        d: '<choice>',
        correct: '<select>'
    }
];

let options = document.querySelectorAll('.option');
let index = 0;
let question = document.getElementById('question');
let correctAns = 0;
let wrongAns = 0;
let nextBtn = document.getElementById('nextBtn');
let failImg = document.getElementById('failImg')
let passImg = document.getElementById('passImg')

function initializeQue() {
    if (index < questionObj.length) {
        let data = questionObj[index];
        question.innerText = `${index + 1}) ${data.que}`;
        options[0].nextElementSibling.innerText = data.a;
        options[1].nextElementSibling.innerText = data.b;
        options[2].nextElementSibling.innerText = data.c;
        options[3].nextElementSibling.innerText = data.d;

        // Reset radio buttons
        for (let option of options) {
            option.checked = false;
        }

       
        nextBtn.disabled = true;
    } else {
        let percentage = correctAns / questionObj.length * 100
        if (percentage < 70) {
            
            question.innerHTML = `<div id="final"> <br> ${failImg.style.display = 'block'} <br> Quiz finished! Your Score: ${percentage}%, <br> Wrong answers: ${wrongAns}</div> `;
        }
        else{
            question.innerHTML = `<div id="final"> <br> ${passImg.style.display = 'block'} <br>  Quiz finished! Your Score: ${correctAns / questionObj.length * 100}%, <br> Wrong answers: ${wrongAns}</div>`;
        }
        
        nextBtn.disabled = true;
        hideRadioButtons();
    }
}

for (let option of options) {
    option.addEventListener('change', () => {
        nextBtn.disabled = false; 
    });
}

nextBtn.addEventListener('click', () => {
    if (index < questionObj.length) {
        checkingAns();
        index++;
        initializeQue();
        nextBtn.disabled = true; 
    }
});

function checkingAns() {
    let data = questionObj[index];
    let ans = getAns();
    if (ans === data.correct) {
        correctAns++;
    } else {
        wrongAns++;
        console.log(wrongAns);
    }
}

function getAns() {
    for (let i = 0; i < options.length; i++) {
        if (options[i].checked) {
            return options[i].nextElementSibling.innerText;
        }
    }
    
}

function hideRadioButtons() {
    for (let option of options) {
        option.parentElement.style.display = 'none';
    }
}

initializeQue();

// Your existing code for handling local storage and logout button remains unchanged
if (localStorage.getItem('tr') !== 'true') {
    localStorage.removeItem('tr');
    window.location.href = 'index.html';
} else {
    document.getElementById('span').innerText = localStorage.getItem('name');
}

let btn_2 = document.getElementById('btn_2');
btn_2.addEventListener('click', () => {
    Swal.fire({
        title: "Are you sure?",
        text: "You want to logout",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, logout it!"
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: "Logged Out!",
                text: "Your account has been logged out.",
                icon: "success"
            }).then(() => {
                localStorage.removeItem('tr');
                window.location.href = 'index.html';
            });
        }
    });
});
