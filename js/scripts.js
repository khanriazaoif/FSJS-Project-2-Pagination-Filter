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
//creating search bar
function searchBar() {
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
					li[i].style.display = "none";
				}
			}
		}
		searchStudentName();

		function searchStudentEmail() {
			var filter = input.value.toUpperCase();
			ul = document.getElementsByClassName('student-list')[0];
			li = ul.getElementsByClassName('student-item cf');
			for (i = 0; i < li.length; i++) {
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

	function searchPaginationLinks() {
		ul = document.getElementsByClassName('student-list')[0];
		li = ul.getElementsByClassName('student-item cf')[0];
		console.log(li);
		for (i = 0; i < li.length; i++) {
			if (li.style.display === 'block') {
				let pages = Math.ceil(li.length / 10);
				console.log(pages);
			} else {
				let pages = Math.ceil(li.length / 10);
				console.log(pages);
			}
		}
	}
	searchPaginationLinks();
}
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
	for (let i = 0; i <= allStudents.length / 10; i++) {
		let createLi = document.createElement('li');
		createUl.appendChild(createLi);
		let li = document.getElementsByTagName('li');
		let a = document.createElement('a');
		a.setAttribute('href', '#');
		createLi.appendChild(a);
		a.textContent = [i + 1];
		if (i === 0) {
			a.classList.add('active');
		}
	}
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
// Function appendPagelinks with argument allStudents which is the entire list of students.
appendPagelinks(allStudents);