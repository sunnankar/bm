---
layout: default
title: Bitcoin Minería Preguntas Frecuentes
description: Bitcoin Minería Preguntas Frecuentes
---

<h2>Tabla de contenidos</h2>

<ul>
  <li><a href="#what-is-bitcoin-mining">A que se refiere la mineria de Bitcoin?</a></li>
  <li><a href="#how-does-bitcoin-mining-work">Cómo funciona la minería de Bitcoin?</a></li>
  <li><a href="#isnt-bitcoin-mining-a-waste-of-energy">Que el Bitcoin no es un desperdicio de energía?</a></li>
  <li><a href="#how-does-mining-help-secure-bitcoin">¿Cómo ayuda la minería a proteger Bitcoin?</a></li>
  <li><a href="#what-do-i-need-to-start-mining">¿Qué necesito para comenzar la minería?</a></li>
  <li><a href="#what-does-mhs-ghs-mean">¿Qué significa MH/s, GH/s?</a></li>
  <li><a href="#what-does-wgh-mean">¿Qué significa W/Gh y W/Th?</a></li>
  <li><a href="#calculate-bitcoin-mining-profitability">¿Cómo calculo mi rentabilidad de minería de Bitcoin?</a></li>
  <li><a href="#what-does-hashing-mean">¿Qué significa hashing?</a></li>
  <li><a href="#bitcoin-mining-pool">¿Qué es una mancomunidad minera("mining pool") Bitcoin?</a></li>
  <li><a href="#what-does-GPU-stand-for">¿Qué significa GPU?</a></li>
  <li><a href="#bitcoin-mining-share">¿Qué es una participacion de minería de Bitcoin</a></li>
  <li><a href="#bitcoin-mining-module">¿Qué es un módulo de minería de Bitcoin?</a></li>
  <li><a href="#what-does-ASIC-stand-for">¿Qué significa ASIC?</a></li>
  <li><a href="#what-does-FPGA-stand-for">¿Qué significa FPGA?</a></li>
  <li><a href="#data">¿Dónde puedo ver los datos de minería de cada bloque?</a></li>
</ul>

<h3 id="what-is-bitcoin-mining">A que se refiere la mineria de Bitcoin?</h3>

<img src="/images/icons/mining.png" class="pull-left bitcoin-icon">

<p>La minería es el proceso de gastar recursos computacionales para procesar transacciones, asegurar la red, y mantener a cada participante en el sistema mutualmente sincronizado. Se puede percibir como datos de Bitcoin centralizados excepto que el systema fue diseñado para estar totalmente descentralizado con mineros operando y distribuidos en todos los países sin ningún individuo con control exclusivo sobre la red. </p>

<p>Este proceso se conoce como "minería" ya que es una analogía a la minería de oro porque también es un mecanismo temporal usado para emitir nuevos bitcoins. A diferencia de la minería de oro, la minería Bitcoin ofrece una recompensa a cambio de servicios útiles que son necesarios para mantener una red de pago segura. La minería seguirá siendo necesaria aun después de que se emita el ultimo bitcoin.</p>

<h3 id="how-does-bitcoin-mining-work">Cómo funciona la minería de Bitcoin?</h3>
<p>Cualquier persona puede convertirse en un minero de Bitcoin ejecutando el software y los modulos de minería de Bitcoin usando <a href="/bitcoin-mining-hardware/"> hardware especializado para la minería de Bitcoin  </a>. El software de minería escucha las transmisiones de transacciones a través de una red igual-a-igual (peer-to-peer) y realiza ciertas tareas necesarias para procesar y confirmar las transacciones. Los mineros de Bitcoin realizan este trabajo porque pueden ganar honorarios por cada transacción que son pagados por los usuarios con fines de procesamiento de transacciones más rápidas, y los bitcoins recién creados se emiten según una fórmula fija.</p>

<p>Cada nueva transaccion se confirma incluyendo en cada bloque una <a href="/what-is-proof-of-work/"> prueba matemática de trabajo </a>. Tales pruebas son muy difíciles de generar porque no hay forma de crearlas aparte de intentar miles de millones de cálculos por segundo. Esto requiere que los mineros realicen estos cálculos antes de que sus respectivos bloques sean aceptados por la red y antes de que el minero sea recompensado. A medida que más personas comienzan a minar, la dificultad de encontrar bloques válidos es aumentada automáticamente por la red para asegurar que el promedio de tiempo para encontrar un bloque permanezca a la par de 10 minutos. Por consequencia, la minería es un negocio muy competitivo donde ningún minero singular podra controlar lo incluido en toda la cadena de bloques.</p>

<p>El video de abajo de una granja minera de Bitcoin en China le dará una mejor idea en cuan competitivo la minería de Bitcoin se ha convertido:</p>

<iframe width="740" height="360" src="https://www.youtube.com/embed/K8kua5B5K3I?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>

<p>La prueba de trabajo también está diseñada para depender del bloque anterior para forzar un orden cronológico en la cadena de bloques. Esto hace que sea exponencialmente difícil invertir las transacciones anteriores porque esto requiere el recálculo de las pruebas de trabajo de todos los bloques subsiguientes. Cuando dos bloques se encuentran al mismo tiempo, los mineros trabajan en el primer bloque que reciben y cambian a la cadena de bloques más larga tan pronto como se encuentra el bloque siguiente. Esto permite que la minería sea segura y mantenga un consenso global basado en el potencia computacional.</p>
<p>Los mineros de Bitcoin no son capaces de defraudar aumentando la recompensa propia, ni tampoco pueden procesar transacciones fraudulentas que podrían dañar la red de Bitcoin porque todos los nodos de Bitcoin rechazan cualquier bloque que contiene datos inválidos según las reglas del protocolo Bitcoin. En consecuencia, la red permanece segura aun incluso si no todos los mineros de Bitcoin son confiables.</p>

<h3 id="isnt-bitcoin-mining-a-waste-of-energy">Que el Bitcoin no es un desperdicio de energía?</h3>
<p>Gasto de energía para asegurar y operar un sistema de pago no es un desperdicio. Como cualquier otro servicio de pago, el uso de Bitcoin implica costos de procesamiento. Los servicios necesarios para el funcionamiento de los sistemas monetarios actuales mundiales, como los bancos, las tarjetas de crédito y los vehículos blindados, también utilizan mucha energía. Aunque a diferencia de Bitcoin, su consumo total de energía no es transparente y no puede ser tan fácilmente medido. La tasa de hash total de la red Bitcoin es <a href="https://bitcoinwisdom.com/bitcoin/difficulty"> disponible públicamente </a> y puede usarse para estimar los costos totales de electricidad de la red.</p>

<img src="/images/hashrate.png" />

<p>A lo largo del tiempo la minería Bitcoin se ha optimizado con soporte fisico (hardware) especializado que consume menos energía, y los costos operativos de la minería seguiran siendo proporcionales a la demanda. Cuando la minería Bitcoin se vuelve demasiada competitiva y menos rentable, algunos mineros optan por suspender sus actividades. Además, toda la energia gastada en la mineria se transforma finalmente en calor, y los mineros más rentables serán aquellos que han puesto este calor a buen uso. Algunos mineros, por ejemplo, [utilizan el calor generado por mineros bitcoin para complementar sistemas de calefacción regulares] (http://www.waters.nyc/writing/325).</p>

<p>Una red de minería óptimamente eficiente es aquella cual no consume ninguna energía adicional. Si bien esto es un ideal, la economía de la minería es tal que los mineros se esfuerzan individualmente hacia esta meta.</p>

<h3 id="how-does-mining-help-secure-bitcoin">¿Cómo ayuda la minería a proteger Bitcoin?</h3>
<p>La minería crea el equivalente de una lotería competitiva que hace muy difícil que cualqier individuo agrege nuevos bloques de transacciones consecutivos a la cadena. Esto protege la neutralidad de la red impidiendo que cualquier persona obtenga el poder de bloquear ciertas transacciones. Esto también impide que cualquier individuo reemplaze partes de la cadena de bloques para revertir sus propios gastos, que podría ser utilizado para defraudar a otros usuarios. La minería hace que sea exponencialmente más difícil revertir una transacción anterior requiriendo la reescritura de todos los bloques que ocurrieron después de la transacción dirigida.</p>

<h3 id="what-do-i-need-to-start-mining">¿Qué necesito para comenzar la minería?</h3>
<p>En los primeros días de Bitcoin, cualquiera podía encontrar un nuevo bloque usando la CPU de su computadora. A medida que más y más personas empezaron a minar, la dificultad de encontrar nuevos bloques aumentó grandemente hasta el punto donde el único método costo-efectivo de la minería hoy en día es el uso de <a href = "https://www.hobbymining.com/mining-hardware / "> hardware </a>especializado.</p>

<h3 id="what-does-mhs-ghs-mean">¿Qué significa MH/s, GH/s?</h3>
<p>Estas abreviaturas representan el poder de hashing que su minero está generando. MH/s significa <i> megahash por segundo </ i> y GH/s significa <i> gigahash por segundo </ i>. Existe una correlación directa entre la rapidez con la que trabaja su minero y la rentabilidad de la misma. </p>

<h3 id="what-does-wgh-mean">¿Qué significa W/Gh y W/Th?</h3>
<p>W/Gh y W/Th son abreviaturas para <i> vatios por gigahash </ i> y <i> vatios por terahash </ i>. Estas métricas calculan cuántos hashes un minero puede ejecutar por vatio de electricidad. El hardware de minería con menor W/Gh y W/Th son más eficientes. Actualmente, el <a href="http://geni.us/37CM"> Antminer S7 </a> y el <a href="http://geni.us/3upk"> Avalon6 </a> son los más Eficientes mineros disponibles para la compra, a 0,25 W/Gh y 0,29 W/Gh, respectivamente.</p>

<h3 id="calculate-bitcoin-mining-profitability">¿Cómo calculo mi rentabilidad de minería de Bitcoin?</h3>
<p>Puede utilizar <a href="https://alloscomp.com/bitcoin/calculator"> calculadoras de rentabilidad de minería bitcoin </a> para calcular la <a href="/bitcoin-mining-profitability/"> rentabilidad de la minería </a> bajo diversas circunstancias, que pueden incluir, por ejemplo, aumentos de dificultad, consumo de energía, y pormedio de hashrate.</p>

<h3 id="what-does-hashing-mean">¿Qué significa hashing?</h3>
<p>El término "hashing" significa la rapidez con la que el hardware procesa los datos del Blockchain (BloqueCadena) y resuelve las complejas ecuaciones matemáticas necesarias para obtener bitcoins.</p>

<h3 id="bitcoin-mining-pool">¿Qué es una mancomunidad minera("mining pool") Bitcoin?</h3>
<p>Una mancomunidad minera <a href="/bitcoin-mining-pools/"> es un grupo de mineros </a> que comparten recursos de hashing para juntamente resolver bloques.  Los miembros luego disfrutan en distribuyendo las recompenzas entre si mismos.</p>

<p>Digamos que Bob ejecuta una granja minera Bitcoin con un 1% de la tasa de hash de la red de Bitcoin. Sus máquinas sólo encuentran, en promedio, uno de cada 100 bloques. Bob se vuelve impaciente y quiere pagos más frecuentes. Se une a un grupo minero con un 20% de la tasa de hash de la red. En lugar de ser pagado en promedio una vez por cada 100 bloques, Bob ahora recibe pagos más pequeños pero más frecuentes cada cinco bloques.</p>

<h3 id="what-does-GPU-stand-for">¿Qué significa GPU?</h3>
<p>Una Unidad de Procesamiento de Gráficos(GPU) alimenta la mayoría de las tarjetas de video de computadora y puede ser usada para minar Bitcoins.</p>

<h3 id="bitcoin-mining-share">¿Qué es una participacion de minería de Bitcoin?</h3>
<p>Una participacion es simplemente un método de contabilidad para mantener a los mineros honestos y dividir justamente cualquier recompensa ganada por la mancomunidad o grupo.</p>

<h3 id="bitcoin-mining-module">¿Qué es un módulo de minería de Bitcoin?</h3>
<p>Un módulo de minería de Bitcoin normalmente es un trabajador asignado en el software de minería Bitcoin. Por ejemplo, cuatro GPUs están conectadas a la placa madre que constituye el hardware de minería Bitcoin. A continuación, el software de minería Bitcoin identifica cada GPU como un trabajador único. Por lo tanto, este pequeno aparejo de minería de Bitcoin estaría compuesto por cuatro módulos de minería Bitcoin.</p>

<h3 id="what-does-ASIC-stand-for">¿Qué significa ASIC?</h3>
<p>Un Circuito Integrado Específico de Aplicación es un chip especial diseñado específicamente para la minería de Bitcoin y es mucho más eficiente en energía y más rápido que la mineria basada en GPU o FPGA.</p>

<h3 id="what-does-FPGA-stand-for">¿Qué significa FPGA?</h3>
<p>Una matriz de compuertas campo-programables ya era un producto de hardware establecido que podría utilizarse para diferentes propósitos, pero en este caso la tecnología fue reutilizada para la minería de Bitcoin.</p>

<h3 id="data">¿Dónde puedo ver los datos de minería de cada bloque?</h3>
<p>Las recompensas de minería y las comisiones de transacción de cada bloque se pueden ver en línea con cualquier explorador de bloques.</p>

<img src="/images/blockinfo.png" />

<p>En el ejemplo anterior, obtenemos información sobre el bloque <a href="https://blockchain.info/block/00000000000000000459fd9e1ee16c2f10a834bdc5c1b5fd2f1a4485063c8e18">#408450</a>:</p>

<ul>
<li> <b> Número de transacciones: </ b> El bloque # 408450 contenía 185 transacciones. </ li>
<li> <b> Honorarios de transacción: </ b> Había 0,05502059 BTC de honorarios de transacción en el bloque # 408450. El minero o el grupo minero (explicado más adelante) que extrajeron este bloque reciben la totalidad de estos honorarios. </li>
<li><b>Estatura:</b> Estatura es otro nombre para el número de bloque. El primer bloque minado fue <a href="https://blockchain.info/block/00000000839a8e6886ab5951d76f411475428afc90947ee320161bbf18eb6048">bloque #1</a> y es llamado el <a href="https://en.bitcoin.it/wiki/Genesis_block">bloque Genesis </a>. </li>
<li><b>Retransmitido Por:</b> Este bloque fue exitosamente resuelto por <a href="https://antpool.com/home.htm">Antpool</a>, que es una <a href="/bitcoin-mining-pools/">mancomunidad minera Bitcoin</a>. </li>
<li><b>Recompensa del bloque:</b> Este bloque contenía una recompensa de 25 BTC, que es totalmente recompensada al minero que retransmitió el bloque - en este caso Antpool.</li> 
</ul>
