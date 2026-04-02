// Selecionando os elementos
const tabs = document.querySelectorAll('.tab-btn');
const injectBtn = document.querySelector('.btn-primary');

// 1. Lógica de Troca de Abas
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    // Remove a classe 'active' de todos
    tabs.forEach(t => t.classList.remove('active'));
    // Adiciona no que foi clicado
    tab.classList.add('active');
    
    // Simulação: Avisa qual aba abriu
    console.log("Shadow Hub: Mudou para " + tab.innerText);
  });
});

// 2. Lógica do Botão Injetar
injectBtn.addEventListener('click', () => {
  const originalText = injectBtn.innerText;
  injectBtn.innerText = "INJETANDO...";
  injectBtn.style.borderColor = "#fff";
  
  // Simula o tempo de carregamento
  setTimeout(() => {
    injectBtn.innerText = "SUCESSO! ✅";
    injectBtn.style.backgroundColor = "#ff0000";
    injectBtn.style.color = "#fff";
    
    alert("Shadow Hub 👻\nStatus: Funções Injetadas com Sucesso!");
    
    // Volta ao normal depois de 2 segundos
    setTimeout(() => {
      injectBtn.innerText = originalText;
      injectBtn.style.backgroundColor = "transparent";
      injectBtn.style.color = "#ff0000";
    }, 2000);
  }, 1500);
});

// 3. Lógica dos Toggles (Interruptores)
const switches = document.querySelectorAll('.switch input');
switches.forEach(sw => {
  sw.addEventListener('change', (e) => {
    const status = e.target.checked ? "ATIVADO" : "DESATIVADO";
    const name = e.target.closest('.item').querySelector('.name').innerText;
    console.log(`[SHADOW LOG]: ${name} -> ${status}`);
  });
});
