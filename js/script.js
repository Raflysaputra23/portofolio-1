document.addEventListener('DOMContentLoaded', () => {
	const navbar = document.querySelector('#navbar');
	navbar.style.transition = 'all .3s ease';
	const buttonUp = document.querySelector('#button-up');
	buttonUp.style.transition = 'all .3s ease';
	const link = navbar.querySelectorAll('.nav-link');
	const linku = navbar.querySelectorAll('.linku');
	const navbarToggler = navbar.querySelector('.hamburger'); 
	const navbarHamburger = navbar.querySelector('.navbar-hamburger');
	const judulHero = document.querySelector('#judul-hero');

	window.addEventListener('click', function(e) {
		if (e.target.classList.contains('hamburger') || e.target.classList.contains('navbar-hamburger')) {
			
		} else {
			navbarHamburger.classList.remove('show-navbar');
			navbarToggler.classList.remove('hamburger-close');
		}
	});

	navbarToggler.addEventListener('click', () => {
		navbarHamburger.classList.toggle('show-navbar');
		navbarToggler.classList.toggle('hamburger-close');
	});

	buttonUp.addEventListener('click', function() {
		link.forEach((el) => {
			el.classList.remove('active-line-bottom');
			if (el.innerHTML == 'Home') {
				el.classList.add('active-line-bottom');
			}
		});

	});

	navbar.addEventListener('click', (e) => {
		if (e.target.classList.contains('nav-link')) {
			link.forEach((el) => {
				el.classList.remove('active-line-bottom');
			});
			e.target.classList.add('active-line-bottom');
		}

		if (e.target.classList.contains('linku')) {
			linku.forEach((el) => {
				el.classList.remove('active');
			});
			e.target.classList.add('active');
		}
	});

	window.addEventListener('scroll', function () {
		console.log(this.scrollY)
		if(this.scrollY >= 1550) {
			link.forEach((el) => {
				el.classList.remove('active-line-bottom');
				if (el.innerHTML == 'Contact') {
					el.classList.add('active-line-bottom');
				}
			});
			linku.forEach((el) => {
				el.classList.remove('active');
				if (el.innerHTML == 'Contact') {
					el.classList.add('active');
				}
			});
		} else if(this.scrollY >= 940) {
			link.forEach((el) => {
				el.classList.remove('active-line-bottom');
				if (el.innerHTML == 'Skill') {
					el.classList.add('active-line-bottom');
				}
			});
			linku.forEach((el) => {
				el.classList.remove('active');
				if (el.innerHTML == 'Skill') {
					el.classList.add('active');
				}
			});
		} else if (this.scrollY >= 730) {
			link.forEach((el) => {
				el.classList.remove('active-line-bottom');
				if (el.innerHTML == 'Portofolio') {
					el.classList.add('active-line-bottom');
				}
			});
			linku.forEach((el) => {
				el.classList.remove('active');
				if (el.innerHTML == 'Portofolio') {
					el.classList.add('active');
				}
			});
		} else if (this.scrollY == 0) {
			link.forEach((el) => {
				el.classList.remove('active-line-bottom');
				if (el.innerHTML == 'Home') {
					el.classList.add('active-line-bottom');
				}
			});
			linku.forEach((el) => {
				el.classList.remove('active');
				if (el.innerHTML == 'Home') {
					el.classList.add('active');
				}
			});
			navbar.classList.remove('shadow-sm');
			buttonUp.classList.add('invisible');
		} else if(this.scrollY >= 540) {
			link.forEach((el) => {
				el.classList.remove('active-line-bottom');
				if (el.innerHTML == 'About') {
					el.classList.add('active-line-bottom');
				}
			});
			linku.forEach((el) => {
				el.classList.remove('active');
				if (el.innerHTML == 'About') {
					el.classList.add('active');
				}
			});
		} else if(this.scrollY >= 5) {
			navbar.classList.add('shadow-sm');
			buttonUp.classList.remove('invisible');
		} 
	});

	typeWriting(judulHero.innerHTML);
	
});


function typeWriting(text) {
	let myText = text;
	let jumlahText = text.length;
	let operasi = false;
	let hasil = '';
	let waktu = 500;

	setInterval(() => {
		if (operasi) {
			document.querySelector('#judul-hero').innerHTML = myText.slice(0, jumlahText);
			jumlahText++;
		} else {
			document.querySelector('#judul-hero').innerHTML = myText.slice(0, jumlahText);
			jumlahText--;
		}

		if (jumlahText == 0) {
			operasi = true;
		} 
		if (jumlahText == text.length) {
			operasi = false;
		}

	}, waktu);
	
}