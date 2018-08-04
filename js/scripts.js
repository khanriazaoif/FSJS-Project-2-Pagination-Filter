//selects the list items with class .student-item
let allStudents = document.querySelectorAll('.student-item');
const studentDetails = document.querySelectorAll('.student-details');
//function that takes a pageNumber and displays all the students, 10 per page
function showPage(pageNumber, allStudents) {
	const upperIndex = (pageNumber * 10) - 1;
	const lowerIndex = (pageNumber * 10) - 10;
	for (let i = 0; i < allStudents.length; i++) {
		allStudents[i].style.display = 'none';
		if (i >= lowerIndex && i <= upperIndex) {
			allStudents[i].style.display = 'block';
		}
	}
}
//pass the function 2 arguments. 1 for the page and the other is the students
showPage(1, allStudents);

function appendPageLinks(allStudents) {
	let ul = document.getElementsByTagName('ul')[0];
	let paginationDiv = ul.parentNode;
	let div = document.createElement('div');
	paginationDiv.appendChild(div).className = 'pagination';
	let pagination = document.getElementsByClassName('pagination')[0];
	let createUl = document.createElement('ul');
	pagination.appendChild(createUl);
	for (let i = 0; i <= allStudents.length / 10; i++) {
		let createLi = document.createElement('li');
		createUl.appendChild(createLi);
		let a = document.createElement('a');
		a.setAttribute('href', '#');
		createLi.appendChild(a);
		a.textContent = [i + 1];
		if (i === 0) {
			a.classList.add('active');
		}
    }
    function paginationEventListener(){
        pagination.addEventListener('click', (event) => {
            let anchorTags = document.querySelectorAll('.pagination a');
            for (let i = 0; i < anchorTags.length; i++) {
                anchorTags[i].classList.remove('active');
            }
            if (event.target.classList.contains('active')) {
                event.target.classList.remove('active');
            } else {
                event.target.className = 'active';
                console.log(event.target);
            }

            function buttonNumber() {
                let button = parseInt(event.target.textContent);
                showPage(button, allStudents);
            }
            buttonNumber();
        });
        
    }
    paginationEventListener();
}

appendPageLinks(allStudents);


//Exceeds

    function searchBar() {
        //create a div append a div with class name student-search
        function createDiv() {
            let div = document.createElement('div');
            let h2 = document.querySelector('h2').parentNode;
            h2.appendChild(div).className = 'student-search';
            let studentSearch = document.getElementsByClassName('student-search')[0];
        }
        
        function createInput() {
            let studentSearch = document.getElementsByClassName('student-search')[0];
            let createInput = document.createElement('input');
            createInput.placeholder = "Search for students...";
            studentSearch.appendChild(createInput);
        }

        function createButton(){
            let studentSearch = document.getElementsByClassName('student-search')[0];
            console.log(studentSearch);
            let button = document.createElement('button');
            studentSearch.appendChild(button);
            button.textContent = 'Search';
        }
        
        //search a students name
        createDiv();
        createInput();
        createButton();
        let studentSearch = document.getElementsByClassName('student-search')[0];
        console.log(studentSearch);
        const input = document.querySelector('input');
	    studentSearch.addEventListener('keyup', (e) => {
		function searchStudentName() {
			var filter = input.value.toUpperCase();
			ul = document.getElementsByClassName('student-list')[0];
			li = ul.getElementsByClassName('student-item cf');
			for (i = 0; i < li.length; i++) {
				a = li[i].getElementsByTagName('h3')[0];
				if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
					li[i].style.display = "";
				} else {
				//	li[i].style.display = "none";
				}
			}
		}
		searchStudentName();

		function searchStudentEmail() {
			var filter = input.value.toUpperCase();
			ul = document.getElementsByClassName('student-list')[0];
			li = ul.getElementsByClassName('student-item cf');
			for (let i = 0; i < li.length; i++) {
				a = li[i].getElementsByClassName('email')[0];
				if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
					li[i].style.display = "";
				} else {
					li[i].style.display = "none";
				}
			}
		}
		searchStudentEmail();
	});
    }

    searchBar();