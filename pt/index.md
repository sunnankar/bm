---
layout: default
title: Tudo o que você precisa saber sobre a mineração Bitcoin
description: Tudo o que você precisa saber sobre a mineração Bitcoin
toc:
  hwc: Comparação entre Hardwares para Mineração
  wibm: O que é Mineração de Bitcoin?
  what-is-blockchain: O que é Blockchain?
  wipow: O que é prova de trabalho?
  md: O que é desafio da Mineração de Bitcoins?
  tcdp: O Desafio de Computação Difícil
  difficulty: A Métrica Difícil da Rede Bitcoin
  bw: A Block-Recompensa
---


<center><iframe width="720" height="394" src="https://www.youtube.com/embed/GmOzih6I1zs" frameborder="0" allowfullscreen></iframe></center>

<div class="home-grid">
	<a href="/getting-started/" class="section">
		<img src="/images/icons/mining.png"> 
		<div class="section-title">Novo na Mineração?</div> 
		<div class="section-view">Vamos lá ›</div> 
	</a>
	<a href="/bitcoin-mining-hardware/" class="section">
		<img src="/images/icons/mining2.png"> 
		<div class="section-title">Hardware para Mineração</div> 
		<div class="section-view">Aprenda mais ›</div> 
	</a>
	<a href="/best-bitcoin-cloud-mining-contract-reviews/" class="section">
		<img src="/images/icons/cloud.png"> 
		<div class="section-title">Mineração em Nuvem</div> 
		<div class="section-view">Aprenda mais ›</div> 
	</a>
</div>

<img class="icon-home" alt="bitcoin mining" src="/images/icons/icon-big-bitcoinfrom.png">
<h2>Como a Mineração de Bitcoins trabalha</h2>
<p>De onde os bitcoins vêm? Com dinheiro em papel, um governo decide quando imprimir e distribuir moeda. Bitcoin não tem um governo central.</p>

<p>Com Bitcoin, mineradores usam <a href="/bitcoin-mining-software/">software especial</a> para resolver problemas matemáticos e receber um número determinado de bitcoins em troca. Isto provê um modo inteligente para emitir a moeda e cria um incentivo para mais pessoas minerarem.</p>

<img class="icon-home" alt="bitcoin is secure" src="/images/icons/icon-big-secure.png">
<h2>Bitcoin é Seguro</h2>

<p>Mineradores de Bitcoin ajudam a manter a rede Bitcoin segura aprovando transações. A mineração é uma parte importante que assegura lisura às transações em bitcoins enquanto mantém a rede Bitcoin estável e segura.</p>

<img class="icon-home" alt="bitcoin is secure" src="/images/icons/icon-big-links.png">
<h2>Links</h2>
<ul>
	<li><a href="https://www.weusecoins.com/" target="_blank">Nós usamos moedas</a> - Aprenda tudo sobre criptomoedas.<br></li>
	<li><a href="https://www.reddit.com/r/Bitcoin/" target="_blank">Notícias Bitcoin</a> - Onde a comunidade Bitcoin vê novidades.<br></li>
	<li><a href="http://www.bitcoin.kn">Podcast De Conhecimento Bitcoin</a> - Entrevistas com os maiores especialistas do mundo Bitcoin</li>
</ul>

<hr id="hwc" style="width: 100%; margin: 20px 0; color: #eee;" />

<h2>Comparação entre Hardwares para Mineração</h2>

<p>Atualmente, baseado em <b>(1)</b> preço por hash e <b>(2)</b> eficiência elétrica, as melhores opções para minerar Bitcoin são:</p>

<div class="hardware-comparison">
{% for miner in site.data.hardware %}
{% if miner.cat contains 'featured' %}
{% include hardware-compare.html %}
{% endif %}
{% endfor %}
</div>

<hr style="width: 100%; margin: 20px 0; color: #eee;" />
<h2 id="wibm">O que é Mineração de Bitcoin?</h2>
<center><img src="/images/what-is-bitcoin-mining.png" width="700" height="auto">
<a href="/images/what-is-bitcoin-mining-high-resolution.png" target="_blank">Visualize e Baixe o Infográfico em Alta-Resolução</a></center>

{% include page-toc.html %}

<p>Mineração de Bitcoin é o processo de adicionar regitros de transação ao livro contábil público de Bitcoins de todas as transações passadas - <b>blockchain</b> (cadeia de blocos). Este livro contábil de transações passadas é chamado cadeia de blocos porque cda conjunto de transações é organizado em um bloco e o livro encadeia os blocos. O encadeamento dos blocos serve para confirmar transações para o resto da rede tome conhecimento.
<p>Nós Bitcoin usam a <b>cadeia de blocos</b> para distinguir transações legítimas de tentativas de "re-gastar" as mesmas moedas que já tenham sido transacionadas (problema do gasto duplo).
<h3 id="what-is-blockchain">O que é Blockchain?</h3>
<center><iframe width="700" height="394" src="https://www.youtube.com/embed/YIVAluSL9SU" frameborder="0" allowfullscreen></iframe></center>
<p><a href="http://bitcoinminer.com/">Mineração de Bitcoin</a> é intencionalmente projetada para ser difícil e intensiva em recursos para que o número de blocos minerados a cada dia permaneça estável. Blocos individuais devem conter uma <a href="/what-is-proof-of-work/">prova de trabalho</a> para serem considerados válidos. Esta prova de trabalho é verificada por outros nós Bitcoin cada vez que eles recebem um bloco. Bitcoin usa a função prova de trabalho <a href="/what-is-hashcash/">hashcash</a>.
<p>O propósito primordial da mineração é permitir que os nós Bitcoin consenso em termos de segurança e resistência a fraudes. Minerar é também o mecanismo usado para introduzir Bitcoins no sistema: Mineradores recebem taxas por transação, bem como um subsídio de novas moedas postas em circulação.
<p>This both serves the purpose of disseminating new coins in a decentralized manner as well as motivating people to provide security for the system.
<p>Mineração de Bitcoin is so called because it resembles the mining of other commodities: it requires exertion and it slowly makes new currency available at a rate that resembles the rate at which commodities like gold are mined from the ground.
<h2 id="wipow">O que é prova de trabalho??</h2>
<center><img src="/images/what-is-proof-of-work.png" width="700" height="auto">
<a href="/images/what-is-proof-of-work-high-resolution.png" target="_blank">Visualize e Baixe o Infográfico em Alta-Resolução</a></center></center>
<p>Uma <a href="/what-is-proof-of-work/">prova de trabalho</a> é um pedaço de dado incluído no bloco que foi difícil (em termos de custo e tempo computacional) a fim de satisfazer certos requisitos. Deve ser trivial checar se o pedaço de dado inserido satisfaz aos requisitos, apesar de muito difícil de solucionar o desafio e obter o pedaço de dados.
<p>Produzir uma prova de trabalho pode ser um processo com baixa probabilidade, de modo que muitos testes e erros são necessários, em média, antes que uma prova de trabalho válida seja gerada. Bitcoin usa a prova de trabalho Hashcash.
<h2 id="md">O que é desafio da Mineração de Bitcoins?</h2>
<center><img src="/images/what-is-bitcoin-mining-difficulty.png" width="700" height="auto">
<a href="/images/what-is-bitcoin-mining-difficulty-high-resolution.png" target="_blank">Visualize e Baixe o Infográfico em Alta-Resolução</a></center>
<h3 id="tcdp">O Desafio de Computação Difícil</h3>
<p>Bitcoin minerando um bloco é difícil porque o hash SHA-256 do cabeçalho de um bloco deve ser menor ou igual ao alvo para que o bloco seja aceito pela rede.
<p>Esse problema pode ser simplificado para fins de explicação: o hash de um bloco deve começar com um certo número de zeros. A probabilidade de calcular um hash que começa com muitos zeros é muito baixa, portanto, muitas tentativas devem ser feitas. Para gerar um novo hash em cada rodada, um nonce (contador para medir a dificuldade) é incrementado. Consulte Prova de trabalho para obter mais informações.
<h3 id="difficulty">A Métrica Difícil da Rede Bitcoin</h3>
<p>A <a href="/what-is-bitcoin-mining-difficulty/">dificuldade de minerar Bitcoin</a> é a medida de quão difícil é encontrar um novo bloco em comparação com o mais fácil que possa ser. É recalculado a cada 2016 blocos para um valor tal que os blocos anteriores de 2016 teriam sido gerados exatamente em duas semanas, se todos estivessem minerando nessa dificuldade. Isso renderá, em média, um bloco a cada dez minutos.
<p>À medida que mais gente se juntar, a taxa de criação de blocos aumentará. À medida que a taxa de geração de blocos aumenta, a dificuldade aumenta para compensar a taxa de criação de blocos. Quaisquer blocos lançados por mineradores maliciosos, que não cumpram o Desafio de Computação Difícil conforme exigido serão sumariamente rejeitados por todos na rede e consequentemente inúteis.
<h3 id="bw">A Block-Recompensa</h3>
<p>Quando um bloco é descoberto, o descobridor pode ganhar um certo número de bitcoins, que é acordado por todos na rede. Atualmente, esta recompensa é de 25 bitcoins. Esse valor reduzirá para metade a cada 210.000 blocos. Veja emissão controlada de moeda. 
<p>Além disso, o minerador recebe as taxas pagas pelos usuários que enviam transações. A taxa é um incentivo para o mineiro incluir a transação em seu bloco. No futuro, à medida que o valor da recompensa diminuir, as taxas irão constituir uma porcentagem muito mais importante da receita de mineração.
