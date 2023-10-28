let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: #76161b;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #76161b;">Estudiante de turismo | Aprendiendo desarrollo web Front-End.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
