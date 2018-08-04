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
}    

appendPageLinks(allStudents);