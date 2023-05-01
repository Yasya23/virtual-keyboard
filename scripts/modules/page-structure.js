function createPageStructure() {
  const body = document.querySelector('.body');
  body.innerHTML = ` <h1>Virtual Keyboard</h1>
  <main class="wrapper">
    <textarea class="textarea" name="" id=""></textarea>
    <div class="container">
    </div>
  </main>
  <p>The keyboard was created on the Mac OS system. To change the language from English to Ukrainian, you can use the key combination <b>Control + Option (Alt + Ctrl).</b></p>
  `;
}

export default createPageStructure;
