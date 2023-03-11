/* istanbul ignore file */
var url = new URL(window.location.href);
document.getElementById("user").innerHTML = url.searchParams.get("user");
document.getElementById("pin").innerHTML = url.searchParams.get("pin");
document.getElementById("close").onclick = () => {
	window.close();
};