
const sounds=["boo", "applause", "gasp","tada", "victory"];
sounds.forEach((sound)=>{
	let btn=document.createElement("button");
	btn.classList.add("btn");
	btn.innerText=sound;

	btn.addEventListener("click",()=>{
		stopSongs();
		const audio=document.getElementById(sound);
		audio.play();
		
	})
	document.getElementById("buttons").appendChild(btn);
});
function stopSongs(){
	sounds.forEach((sound)=>{
		const audio=document.getElementById(sound);
		audio.pause();
		audio.currentTime=0;
	});
}
