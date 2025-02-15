const buttons = document.querySelectorAll("a");
buttons.forEach((button) => {
    button.onclick = function (e) {
        let x = e.clientX - e.target.offsetLeft;
        let y = e.clientY - e.target.offsetTop;
        let z = e.clientZ - e.target.offsetTopt;
        let ripple = document.createElement("span");
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;
        ripple.style.right = `${z}px`;
        this.appendChild(ripple);
        setTimeout(function () {
            ripple.remove();
        }, 600);
    };
});
