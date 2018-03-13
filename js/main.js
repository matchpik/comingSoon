const countdown = document.querySelector('.countdown');

// set Launch Date
const launchDate = new Date('Mar 1, 2019 13:00:00').getTime();

// Update every second
const interval = setInterval(() => {
	// Get today's date and time (ms)
	const now = new Date().getTime();

	// Get Distance from now to the launch date
	const distance = launchDate - now;

	// Time calculations
	const days = Math.floor(distance / (1000 * 60 * 60 * 24));
	const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	const seconds = Math.floor((distance % (1000 * 60)) / 1000);

	// Display result
	countdown.innerHTML = `
		<div>${days}<span>Days</span></div>
		<div>${hours}<span>Hours</span></div>
		<div>${mins}<span>Minutes</span></div>
		<div>${seconds}<span>Seconds</span></div>
	`;

	// If launch date has passed
	if (distance < 0) {
		// Stop countdown
		clearInterval(interval);
		// Style and output text
		countdown.style.color = '#17A2B8';
		countdown.innerHTML = 'Launched!';
	}
}, 1000);