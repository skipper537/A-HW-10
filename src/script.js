const soundKeys = {
    KeyA: getAudio("zvuk-notyi-do"),
    KeyS: getAudio("zvuk-notyi-re"),
    KeyD: getAudio("zvuk-notyi-mi"),
    KeyF: getAudio("zvuk-notyi-fa"),
    KeyG: getAudio("zvuk-notyi-sol"),
    KeyH: getAudio("zvuk-notyi-lya"),
    KeyJ: getAudio("zvuk-notyi-si"),
    KeyK: getAudio("zvuk-notyi-do-vo-vtoroy-oktave"),
  };
  document.addEventListener("keydown", (button) => {
    const key = button.code;
    if (key in soundKeys) {
      playSound(soundKeys[key]);
      let button = Array.from(document.querySelectorAll(`button`)).find(
        (element) => element.textContent === key.charAt(key.length - 1)
      );
      button.classList.add("active");
      setTimeout(() => button.classList.remove("active"), 100);
    }
  });
  
  function getAudio(name) {
    const audio = new Audio(`media/${name}.mp3`);
    return audio;
  }
  
  function keyClick(button) {
    playSound(soundKeys[button]);
  }
  
  function playSound(keyName) {
    keyName.play();
  }