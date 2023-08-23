function LinkedList() {

    let Node = function (element) {
        this.element = element;
        this.next = null;
    };

    let length = 0;
    let head = null;

    this.append = function (element) {
        let node = new Node(element), current;
        if (head === null) { // Primeiro nó da Lista
            head = node;
        } else {
            current = head;
            while (current.next) { // Percorre a lista com um laço até encontrar o último item
                current = current.next;
            }
            current.next = node; // Obtém o último item e faz next reebe o node para fazer a ligação
        }
        length++; // Atualiza o tamanho da lista
    };

    this.size = function () {
        return length;
    };

    this.toString = function () {
        let current = head, string = ''
        while (current) {
            string += current.element + (current.next ? ' -> ' : '')
            current = current.next
        }
        return string
    }
}

lista = new LinkedList();
lista.append(10);
lista.append(12);
lista.append(5);
console.log(lista.size());
console.log(lista.toString())