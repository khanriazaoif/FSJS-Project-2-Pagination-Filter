//showPage: This smaller function displays a "page" or a list of ten students based which "page number" the user selected.

//The showPage Function
//This function builds a list of ten students and displays it on the page. The students displayed depends on the page number passed to this function. The function should loop through all the students in the list and determine if each student is on this page. It will show all the students on this page and hide the rest. Here are some ideas for how this could work in code:

//Variable allStudents selects the list items with class .student-item
let allStudents = document.querySelectorAll('.student-item');
//console.log(allStudents);
//

//function showPage with two arguments, pageNumber and allStudents. There are two variables upperIndex and lowerIndex that take the pageNumber argument and both times 10. Then on upperIndex - 1 and on the lowerIndex -10. For example if you pass the numberal 1 as the pageNumber argument, then upperIndex = (1*10) - 1 and lowerIndex = (1 * 10) -10 which output upperIndex = 9; lowerIndex = 0; This would output the first 10 students.
function showPage(pageNumber, allStudents) {
    const upperIndex = (pageNumber * 10) - 1;
    const lowerIndex = (pageNumber * 10) -10;
    //For loop that checks the length of the list items (amount of student list items) At first it makes allStudents display nothing so they are hidden and then the IF statement looks at whether the index is >= lowerIndex AND index is <= upperIndex. If so then show the list items. So in this case it is showing the first 10 students
    for(let i = 0; i < allStudents.length; i++) {
    allStudents[i].style.display = 'none';
        if( i >= lowerIndex && i <= upperIndex) {
            allStudents[i].style.display = 'block';
            console.log(allStudents[i]);
        }
  } 
 
} 
//Calling the showPage function, passing the arguments 1 for the pageNumber and allStudents is the document.querySelectorAll('.student-item'); student list items.
 showPage(1, allStudents);


function searchBar(){
    let div = document.createElement('div');
    let h2 = document.querySelector('h2').parentNode;
    h2.appendChild(div).className = 'student-search';
    let studentSearch = document.getElementsByClassName('student-search')[0];
    let createInput = document.createElement('input');
    let button = document.createElement('button');
    button.textContent = 'Search';
    createInput.placeholder = "Search for students...";
    studentSearch.appendChild(createInput);
    studentSearch.appendChild(button);
    
    const input = document.querySelector('input');
    const studentDetails = document.querySelectorAll('.student-details');
    
//     studentSearch.addEventListener('change', (e) => {
//         console.log(studentDetails);
//         console.log(input.value);
//         console.log(studentDetails[0].innerText);
//         e.preventDefault();
//         for(let i = 0; i < studentDetails.length; i++){
//     if(input.value === studentDetails[0].innerText){
//         console.log(studentDetails[i]);
//         studentDetails[0].style.display = 'block';
//         console.log(i);
//     } else {
//        // console.log(studentDetails[i]);
//         studentDetails[i].style.display = 'none';
//         }
//    }
//  });

    studentSearch.addEventListener('keyup', (e) => {
        function searchStudentName() {
            var filter = input.value.toUpperCase();
            ul = document.getElementsByClassName('student-list')[0];
            li = ul.getElementsByClassName('student-item cf');
            console.log(li);
        
            for(i = 0; i < li.length; i++) {
                a = li[i].getElementsByTagName('h3')[0];
                if(a.innerHTML.toUpperCase().indexOf(filter) > -1) {
                    li[i].style.display = "";
                } else {
                    li[i].style.display = "none";
                }
            }
            
        }
        searchStudentName();
    
        function searchStudentEmail() {
            var filter = input.value.toUpperCase();
            ul = document.getElementsByClassName('student-list')[0];
            li = ul.getElementsByClassName('student-item cf');
            console.log(li);
        
            for(i = 0; i < li.length; i++) {
                a = li[i].getElementsByClassName('email')[0];
                if(a.innerHTML.toUpperCase().indexOf(filter) > -1) {
                    li[i].style.display = "";
                } else {
                    li[i].style.display = "none";
                }
            }
            
        }
        searchStudentEmail();

    });
}   




// <!-- student search HTML to add dynamically -->
//         <div class="student-search">
//           <input placeholder="Search for students...">
//           <button>Search</button>
//         </div>
//         <!-- end search -->

searchBar();
//Function appendPagelinks with the argument allStudents which is the list of students
 function appendPagelinks(allStudents) {
    // Variable pages to determine how many pages for this student list
    let pages = Math.ceil(allStudents.length / 10);
    // Variable ul that selects the element ul at index 0
    let ul = document.getElementsByTagName('ul')[0];
    // Variable paginationDiv that is equal to the parentNode of the ul[0]
    let paginationDiv = ul.parentNode;
    // Var div creates a div element
    let div = document.createElement('div');
    // Apend the new div element with class name pagination to the Ul
    paginationDiv.appendChild(div).className = 'pagination';
    // Variable pagination that selects the class pagination that was previously created
    let pagination = document.getElementsByClassName('pagination')[0];
    // Variable createUl creates a ul element
    let createUl = document.createElement('ul');
    // Variable pagination and as a child node the ul created above
    pagination.appendChild(createUl);

    
    let listItems = document.getElementsBy
    for(let i = 0; i <= allStudents.length/10; i++){
        let createLi = document.createElement('li');
        createUl.appendChild(createLi);
        let li = document.getElementsByTagName('li');
        let a = document.createElement('a');
        a.setAttribute('href','#');
             
        createLi.appendChild(a);
        a.textContent = [i + 1];
       if (i === 0){
           a.classList.add('active');
       }
       
    }

  
   
   
    pagination.addEventListener('click', (event) => {
        let anchorTags = document.querySelectorAll('.pagination a');
        for(let i = 0; i < anchorTags.length; i++){
            anchorTags[i].classList.remove('active');
        }
        
                if(event.target.classList.contains('active')) {
                    
                event.target.classList.remove('active');
                } else {
                    event.target.className = 'active';
                    console.log(event.target);
                    
             }
                    function buttonNumber(){
                    let button = parseInt(event.target.textContent);
                    showPage(button, allStudents);
                }
            buttonNumber();
            
        });


        }


    // Function appendPagelinks with argument allStudents which is the entire list of students.
    appendPagelinks(allStudents);