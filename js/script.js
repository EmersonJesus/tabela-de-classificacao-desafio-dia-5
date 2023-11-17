var times = [
    {
      posicao: 1,
      logo:
        "<img src='https://i.pinimg.com/originals/76/03/1b/76031b97652549715c2e0094a28e9f60.png'>",
      nome: "Real Madrid",
      vitoria: 0,
      empate: 0,
      derrota: 0,
      pontos: 0
    },
    {
      posicao: 2,
      logo:
        "<img src='https://logodetimes.com/times/societa-sportiva-calcio-napoli/societa-sportiva-calcio-napoli-2048.png'>",
      nome: "Napoli",
      vitoria: 0,
      empate: 0,
      derrota: 0,
      pontos: 0
    },
    {
      posicao: 3,
      logo:
        "<img src='https://upload.wikimedia.org/wikipedia/en/thumb/7/79/S.C._Braga_logo.svg/1200px-S.C._Braga_logo.svg.png'>",
      nome: "Braga",
      vitoria: 0,
      empate: 0,
      derrota: 0,
      pontos: 0
    },
    {
      posicao: 4,
      logo:
        "<img src='https://logodetimes.com/times/fc-union-berlin/fc-union-berlin-4096.png'>",
      nome: "Union Berlin",
      vitoria: 0,
      empate: 0,
      derrota: 0,
      pontos: 0
    }
  ];
  
  var elementoTabela = document.getElementById("tabelaTimes");
  
  for (i = 0; i < times.length; i++) {}
  
  function exibirNaTela() {
    times.sort((a, b) => b.pontos - a.pontos);
  
    let tabelaHTML = "";
  
    times.forEach(function (time, i) {
      tabelaHTML += `
        <tr>
          <td>${i + 1}</td>
          <td>${time.logo}</td>
          <td>${time.nome}</td>
          <td>${time.vitoria}</td>
          <td>${time.empate}</td>
          <td>${time.derrota}</td>
          <td>${time.pontos}</td>
          <td><button onClick="adicionarVitoria(${i})">Vitória</button></td>
          <td><button onClick="adicionarEmpate(${i})">Empate</button></td>
          <td><button onClick="adicionarDerrota(${i})">Derrota</button></td>
        </tr>
      `;
    });
    elementoTabela.innerHTML = tabelaHTML;
  }
  
  function adicionarVitoria(i) {
    times[i].vitoria++;
    times[i].pontos += 3;
    exibirNaTela();
  }
  function adicionarEmpate(i) {
    times[i].empate++;
    times[i].pontos++;
    exibirNaTela();
  }
  function adicionarDerrota(i) {
    times[i].derrota++;
    exibirNaTela();
  }
  
  exibirNaTela();
  