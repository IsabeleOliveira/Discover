# Web Semântica

> Dar significado ao conteúdo

> Importante para acessibilidade 

> Os motores de busca dão preferência à sites que têm sua semântica em dia, um site bem estruturado é um site melhpr encontrado na web

### Importância das tags HTML semânticas

* Exemplo

    <p> 
    Nós (programadores) somos pagos para resolver problemas, não para memorizar soluções.

    - Mayk Brito
    </p>


* Melhor semântica

    <blockquote>
    Nós (programadores) somos pagos para resolver problemas, não para memorizar soluções.

    <cite>- Mayk Brito</cite>
    </blockquote>

### Seções comuns

* Cabeçalho <header>

    - Geralmente fica a logo e o menu

* Navegaçao <nav>

    - oferece links para seções do site, fica dentro do header normalmente, podendo ficar também em uma parte lateral, ou na parte de baixo.

* Conteúdo principal <main>

    - como o próprio nome diz, vai o conteúdo principal da página, em caso de um blog, teremos vários artigos, vários posts.

* Conteúdo relacionado <aside>

    - algo relacionado levemente ao conteúdo principal.

* Rodapé <footer>

    - parte inferior da página
    - costuma ter as redes sociais, autores do site

<!-- <body>
    <header>
        logomarca

        <nav>
            <ul>
                <li>item</li>
            </ul>
        </nav>
    </header>

    <main>
        conteúdo principal
    </main>

    <aside>
        parte lateral
    </aside>

    <footer>rodapé</footer>

</body> -->

### Header

>   - Quando no inicio da página, é visto como um header global, mas pode ser usado em outros elementos semânticos como article, section, entre outros.
>   - Não use header dentro de um header, nem dentro de um footer, pois quebra a semântica.

### Nav

>   - serve para representar uma seção da página que irá apontar para outra página/páginas, normalmente é usada dentro do header

### Main

>   - conteúdo único da página, vai utilizá-la apenas uma vez por página, e é colocada direto do body.
>   - foco central da página, conteúdo principal da aplicação.

* Exemplo:

<!-- <body>

    <main>
        <h1>Receitas</h1>
        <p>Essa é uma página de receitas</p>

        <article>
            <h2>Receita de torta de maçã</h2>
            <p>Essa é uma receita de torta de maçã</p>
        </article>

        <article>
            <h2>Receita de torta de limão</h2>
            <p>Essa é uma receita de torta de maçã</p>
        </article>
    </main>
</body> -->

* Exemplo de <article>

<!-- <body>

    <main>
        <h1>Receitas</h1>
        <p>Essa é uma página de receitas</p>

        <article>
            <h2>Receita de torta de maçã</h2>
            <p>Essa é uma receita de torta de maçã</p>
        </article>

        <article>
            <h2>Receita de torta de limão</h2>
            <p>Essa é uma receita de torta de maçã</p>
        </article>
    </main>
</body> -->

### Aside

>   - glossários, links extras, biografia do autor, informações de perfil...


* Exemplo de <footer>

<!-- <article>
    <h1>Sobre nós</h1>
    <p>Formamos um time de profissionais: </p>

    <ol>
        <li>Capacitados</li>
        <li>Gentis</li>
        <li>Honestos</li>
        <li>Gentils</li>
    </ol>

    <h2>Quem são</h2>
    <ul>
        <li>Harry Hair</li>
        <li>Dora Depiladora</li>
        <li>Massoterapeuta Massa</li>
        <li>Esteticista Ciça</li>
        <li>Pedo Curi</li>
        <li>Bárbara Brabeira</li>
        <li>Cecília (para seus cílios)</li>
    </ul>

</article>

<footer>
    <p>© 2023 Isabele Oliveira</p>
</footer> -->

### Section

>   - Geralmente se coloca um título e conteúdo na tag <section>
>   - Pode ser utilizada dentro de um <article>

* Exemplo:

<!-- <main>
    <h1>Receita 1</h1>
    <p>descrição da receita</p>

    <section>
        <h2> Modo de preparo</h2>
        <p>Modo de preparo</p>
    </section>
</main> -->

