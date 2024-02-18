function attachGradientEvents() {       // 100/100

  const gradient = document.getElementById('gradient');

  gradient.addEventListener('mousemove', onMove);         // .addEventListener

  const output = document.getElementById('result');


  function onMove(event) {
    const offset = Math.floor((event.offsetX / event.target.clientWidth) * 100);    // event.offsetX / event.target.offsetWidth
    output.textContent = `${offset}%`;
    // console.log(event);
    // gradient.removeEventListener('mousemove', onMove);
  }
}

