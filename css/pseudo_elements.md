# Pseudo-elements

Pode adicionar elementos HTML, pelo próprio CSS.

> ::pseudo-element-name

💻 Exemplos

    ::before - adiciona um pseudo-element antes do elemento selecionado.

    ```html
        <ul>
        <li>Gratidão</li>
        <li>Esperança</li>
        <li>Fé</li>
        <li>Liberdade</li>
        </ul>
    ```

    ```css
        li::before {
        content: "> "
        }
    ```

    ::after - adiciona depois

    ```css
        li::after{
        content: ";"
        }
    ```


> OBS: tanto para o *::nefore* quanto para o *::after* é preciso adicionar o *content* , mesmo que ele seja vazio - *content=""*