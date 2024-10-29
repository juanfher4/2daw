function color_cambia() {
	var nums = "0123456789ABCDEF";
	var color = "#";

    for (i = 0; i < 6; i++) {
        color = color + nums[Math.floor(Math.random() * 16)];
    }
    document.body.style.backgroundColor = color;
}
