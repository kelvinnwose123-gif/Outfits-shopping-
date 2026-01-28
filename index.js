let activeWrapper = null;

document.querySelectorAll(".pin").forEach(pin => {
  pin.addEventListener("click", () => {

    // remove old wrapper if it exists
    if (activeWrapper) {
      activeWrapper.remove();
    }

    // create new wrapper
    const wrapper = document.createElement("div");
    wrapper.className = "pin-wrapper";

    // create the HTML content
    wrapper.innerHTML = `
      <strong>${pin.dataset.name}</strong>
      <span>₦${pin.dataset.price}</span>
    `;

    // create WhatsApp link element
    const link = document.createElement("a");

    // WhatsApp number in international format (Nigeria +234)
    const phoneNumber = "2348029321892"; 

    // Construct message with product name and price
    const message = `I want to order ${pin.dataset.name} for ₦${pin.dataset.price}`;

    // Encode the message for URL
    const encodedMessage = encodeURIComponent(message);

    // Set WhatsApp URL
    link.href = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    // Link text and styling
    link.textContent = " Tap To Order"; 
    link.style.display = "block";     
    link.style.color = "#00bfff";     
    link.style.textDecoration = "underline";
    link.target = "_blank"; // open in new tab

    // append the link to the wrapper
    wrapper.appendChild(link);

    // attach wrapper to clicked pin
    pin.appendChild(wrapper);

    // track current wrapper
    activeWrapper = wrapper;
  });
});

 const shoes = document.getElementById('shoe').addEventListener('click', () => {
  window.location.href = "shoe.html"
});

 const jackets = document.getElementById('jacket').addEventListener('click', () => {
  window.location.href = "jacket.html"
});