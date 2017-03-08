# Select2 Custom
Consiste em uma adapta��o e um conjunto de corre��es para a biblioteca Select2 (https://select2.github.io/).<br><br>
        Atualmente temos duas fun��es que basicamente funcionam utilizando jQuery:<br>
        1. <b>$('select#selectAjax').select2Ajax();</b> - onde devemos informar alguns atributos data na
        &nbsp;&nbsp;declara��o do objeto HTML:<br>
        &nbsp;&nbsp;&nbsp;&nbsp;<b>data-url=""</b> - url que ser� pesquisada<br>
        &nbsp;&nbsp;&nbsp;&nbsp;<b>data-placeholder=""</b> - texto que fica por default no input<br>
        &nbsp;&nbsp;&nbsp;&nbsp;<b>data-limiteCaracteres=""</b> - quando select multiplo, define o tamanho dos itens selecionados
                    na sua exibi��o (quantidade de caracteres)<br>
        &nbsp;&nbsp;<b style="color: red">OBS: Utilizando o AJAX, sua url requisitada receber� uma requisi��o POST com
            o input de nome "pesquisa" com o texto digitado pelo usu�rio para que seja adaptado os resultados.</b><br>
        2. <b>$('select#selectAjax').select2Ajax(placeholder, semPesquisa);</b> - onde pode se omitir os par�metros placeholder e pesquisa,
        no entanto <b>placeholder</b> define o texto default do campo e <b>semPesquisa</b> quando <b>true</b> desabilita
        o mecanismo de pesquisa do campo.


<h3>Professor Especialista F�bio Eduardo dos Santos</h3>
<p>
Professor/Programador, Cientista da Computa��o, especialista em Desenvolvimento Sistemas para Web baseados em Java, apaixonado por sua noiva Andressa...
</p>
<p>
Lattes: http://lattes.cnpq.br/5862313428296953<br />
Prezi: http://www.prezi.com/user/proffabio<br />
Twitter: https://twitter.com/fabioedusantos<br />
LinkedIn: https://br.linkedin.com/in/fabioedusantos<br />
Lattes: http://lattes.cnpq.br/5862313428296953<br />
Gmail: <a href="mailto:fabioedusantos@gmail.com">fabioedusantos@gmail.com</a><br />
Hotmail: <a href="mailto:fabioedusantos@hotmail.com">fabioedusantos@hotmail.com</a><br />
</p>
