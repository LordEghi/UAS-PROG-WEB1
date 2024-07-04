function processBooking() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const hotel = document.getElementById('hotel').value;
    const checkin = document.getElementById('checkin').value;
    const checkout = document.getElementById('checkout').value;

    if (name && email && hotel && checkin && checkout) {
        alert(`Booking successful! Details:\nName: ${name}\nEmail: ${email}\nHotel: ${hotel}\nCheck-in: ${checkin}\nCheck-out: ${checkout}`);
    } else {
        alert('Please fill in all fields');
    }
}
