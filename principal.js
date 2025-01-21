// Esperar o carregamento completo do DOM
document.addEventListener('DOMContentLoaded', () => {
  // Selecionar os botões pelo ID
  const lightModeBtn = document.getElementById('lightModeBtn');
  const darkModeBtn = document.getElementById('darkModeBtn');
  const body = document.body;

  // Carregar o tema salvo no localStorage (ou padrão para "light")
  const savedTheme = localStorage.getItem('theme') || 'light';
  body.setAttribute('data-bs-theme', savedTheme);

  // Atualizar o estado dos botões com base no tema salvo
  updateButtonStates(savedTheme);

  // Função para ativar o tema claro
  lightModeBtn.addEventListener('click', () => {
      body.setAttribute('data-bs-theme', 'light'); // Define o tema claro
      localStorage.setItem('theme', 'light'); // Salva o tema no localStorage
      updateButtonStates('light'); // Atualiza os estados dos botões
  });

  // Função para ativar o tema escuro
  darkModeBtn.addEventListener('click', () => {
      body.setAttribute('data-bs-theme', 'dark'); // Define o tema escuro
      localStorage.setItem('theme', 'dark'); // Salva o tema no localStorage
      updateButtonStates('dark'); // Atualiza os estados dos botões

  });

  // Função para atualizar os estados dos botões
  function updateButtonStates(theme) {
      if (theme === 'light') {
          lightModeBtn.classList.add('active'); // Marca o botão de modo claro como ativo
          darkModeBtn.classList.remove('active'); // Remove o estado ativo do botão de modo escuro
      } else {
          darkModeBtn.classList.add('active'); // Marca o botão de modo escuro como ativo
          lightModeBtn.classList.remove('active'); // Remove o estado ativo do botão de modo claro
      }
  }
});

function hover(){

  
}





function mOver(obj) {
    
  }
  
  function mOut(obj) {
    obj.innerHTML = "Mouse Over Me"
  }

  function myFunction(x) {
    x.style.background = "yellow";

    x.style.whidth= "600px"
  }