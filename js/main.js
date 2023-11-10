const soundbordEl = document.querySelector("#Soundbord");

/* --------------
!!!!! Array !!!!! 
----------------*/
const sounds = {
  folder: "sounds",
  soundArr: [
    {
      fileName: "hart-beat.mp3",
      hotKey: "1",
    },
    {
      fileName: "knock.mp3",
      hotKey: "2",
    },
    {
      fileName: "monstro.mp3",
      hotKey: "3",
    },
    {
      fileName: "Phasmaphobia.mp3",
      hotKey: "4",
    },
    {
      fileName: "scream.mp3",
      hotKey: "5",
    },
    {
      fileName: "Whispers.mp3",
      hotKey: "6",
    },
  ],
};
/* ---------------------------------------
!!! create soundbord Start !!!
----------------------------------------- */

const soundbordComponent = (sound) => {
  console.log(sound);
  // Creating Buttons
  const buttenEl = document.createElement("button");
  buttenEl.textContent = sound.fileName.replace(".mp3", "");
  soundbordEl.appendChild(buttenEl);

  //  Create audio eliment
  const audioEl = document.createElement("audio");
  const allAudioEl = document.querySelectorAll("audio");
  audioEl.src = `${sounds.folder}/${sound.fileName}`;
  sound.audioEl = audioEl;
  sound.buttenEl = buttenEl;

  //  Create pointer
  buttenEl.addEventListener("pointerup", () => {
    audioEl.currentTime = 0;
    audioEl.play();
    buttenEl.classList.add("btn-clickt");
  });
  buttenEl.addEventListener("pointerdown", () => {
    audioEl.pause();
    buttenEl.classList.remove("btn-clickt");
  });
};
/* ---------------------------------------
  !!! create soundbord component End !!!
----------------------------------------- */

// lopp audio files
sounds.soundArr.forEach((sound) => soundbordComponent(sound));
// Kybord event
window.addEventListener("keyup", (event) => {
  const isSoundFound = sounds.soundArr.find(
    (soundObject) => event.key === soundObject.hotKey
  );

  if (!isSoundFound) return;
  isSoundFound.audioEl.play();
  isSoundFound.buttenEl.classList.add("btn-down");
  console.log("Working");
});
window.addEventListener("keydown", (event) => {
  const isSoundFound = sounds.soundArr.find(
    (soundObject) => event.key === soundObject.hotKey
  );
  if (!isSoundFound) return;
  isSoundFound.audioEl.currentTime = 0;
  isSoundFound.audioEl.pause();
  isSoundFound.buttenEl.classList.remove("btn-down");
});
