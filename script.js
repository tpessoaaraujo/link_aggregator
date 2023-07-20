// Função para exibir citação aleatória da saga Harry Potter
function exibirCitacao() {
    const citacoes = [
        "\"É claro que está acontecendo dentro da sua cabeça, Harry, mas por que isto significaria que não é real?\" — Alvo Dumbledore",
        "\"As palavras são, na minha não tão humilde opinião, nossa inesgotável fonte de magia. Capazes de ferir e de curar.\" — Alvo Dumbledore",
        "\"Não são as nossas habilidades que revelam o que realmente somos, mas as nossas escolhas.\" — Alvo Dumbledore",
        "\"A felicidade pode ser encontrada até mesmo nas horas mais sombrias, se alguém se lembrar de acender a luz.\" — Alvo Dumbledore",
        "\"Nós não precisamos de magia para transformar nosso mundo, já temos o poder que precisamos dentro de nós mesmos. Temos o poder de imaginar melhores.\" — J.K. Rowling",
        "\"Para uma mente bem estruturada, a morte é apenas uma aventura seguinte.\" — Alvo Dumbledore",
        "\"Dobby nunca mais será um elfo livre. Dobby será um elfo livre só quando Dobby encontrar um patrão que não peça para Dobby fazer coisas que Dobby não queria.\" — Dobby",
        "\"Palavras são, na minha não tão humilde opinião, nossa inesgotável fonte de magia.\" — Alvo Dumbledore",
        "\"A compaixão, que é tão comum nas pessoas, é rara nas máquinas.\" — Alvo Dumbledore",
        "\"O tempo é algo que não pode ser comprado, mas pode ser desperdiçado.\" — Dumbledore",
        "\"A verdade é uma coisa bela e terrível, por isso deve ser tratada com grande cautela.\" — Alvo Dumbledore",
        "\"Viva constantemente como se estivesse prestes a morrer.\" — Alvo Dumbledore",
        "\"Você é braver do que acredita, mais forte do que parece, e mais inteligente do que pensa.\" — Alvo Dumbledore",
        "\"Acontece que nem todos os sonhos se tornam realidade.\" — Luna Lovegood",
        "\"Não vale a pena viver sonhando e se esquecer de viver.\" — Alvo Dumbledore",
        "\"A felicidade pode ser encontrada mesmo nas horas mais escuras, se alguém se lembrar de acender a luz.\" — Alvo Dumbledore",
        "\"Você não precisa ser melhor que os outros. Basta ser melhor do que você era ontem.\" — Harry Potter",
        "\"As consequências de nossas ações são sempre tão complexas, tão diversas, que prever o futuro é uma tarefa realmente difícil.\" — Alvo Dumbledore",
        "\"O senso comum nos diz que os dragões não existem. Mas a racionalidade não pode nos impedir de temer quando os vermos nas sombras.\" — Alvo Dumbledore",
        "\"A compaixão, que é tão comum nas pessoas, é rara nas máquinas.\" — Alvo Dumbledore",
        "\"Lutamos com o que temos e, em seguida, sofremos para proteger.\" — Sirius Black",
        "\"O problema é que os seres humanos têm o dom de escolher exatamente as coisas que são piores para eles.\" — Alvo Dumbledore",
        "\"O tempo é algo que não pode ser comprado, mas pode ser desperdiçado.\" — Dumbledore",
        "\"A verdade é uma coisa bela e terrível, por isso deve ser tratada com grande cautela.\" — Alvo Dumbledore",
        "\"Pense no pior que pode acontecer e sempre esteja preparado para quando isso acontecer.\" — Alvo Dumbledore",
        "\"Lembre-se de que somos tão efêmeros quanto as estrelas no céu, somos infinitos e insignificantes em comparação com o universo.\" — Sirius Black",
        "\"Nossas cicatrizes nos lembram que o passado é real.\" — Alvo Dumbledore",
        "\"Cada qual de nós precisa de um tempo para pensar.\" — Sirius Black",
        "\"O mundo não se divide em pessoas boas e más. Todos temos luz e trevas dentro de nós. O que importa é a parte em que decidimos agir.\" — Sirius Black",
        "\"Acontece que nem todos os sonhos se tornam realidade.\" — Luna Lovegood",
        "\"A morte é como um abraço quente e agradável após um longo dia.\" — Lílian Potter",
        "\"Espero que você tenha orgulho de pertencer à sua casa. A Lufa-Lufa levou uma má reputação por anos, bem como a Sonserina.\" — Helga Hufflepuff",
        "\"Viver é a coisa mais rara do mundo. A maioria das pessoas apenas existe.\" — Alvo Dumbledore",
        "\"Não é bom crescer muito rápido.\" — Rubeus Hagrid",
        "\"Se você quer saber o que é um homem, dê uma boa olhada em como ele trata os seus inferiores, não seus iguais.\" — Sirius Black",
        "\"Não tenha pena dos mortos, tenha pena dos vivos, e acima de tudo, daqueles que vivem sem amor.\" — Alvo Dumbledore",
        "\"A história é sempre escrita pelos vencedores.\" — Harry Potter",
        "\"As consequências de nossas ações são sempre tão complexas, tão diversas, que prever o futuro é uma tarefa realmente difícil.\" — Alvo Dumbledore",
        "\"Os tempos difíceis não durarão para sempre, mas as pessoas boas sempre encontrarão uma saída.\" — Sirius Black",
        "\"Não faça ideia do que aconteceu entre vocês, mas fiquei surpreso ao ver que vocês dois se separaram.\" — Minerva McGonagall",
        "\"Quando você sabe o que valoriza mais do que qualquer outra coisa, você pode tomar decisões com confiança.\" — Alvo Dumbledore",
        "\"O mundo não se divide em pessoas boas e más. Todos temos luz e trevas dentro de nós. O que importa é a parte em que decidimos agir.\" — Sirius Black",
        "\"Nunca confie em algo que você não pode ver com os seus próprios olhos.\" — Severus Snape",
        "\"Há coisas piores do que a morte.\" — Sirius Black",
        "\"Nós nos encontramos em tempos turbulentos. E tenho medo, Harry, de que estamos apenas no começo.\" — Alvo Dumbledore",
        "\"A verdade é uma coisa bela e terrível, por isso deve ser tratada com grande cautela.\" — Alvo Dumbledore",
        "\"Não vale a pena viver sonhando e se esquecer de viver.\" — Alvo Dumbledore",
        "\"Você é braver do que acredita, mais forte do que parece, e mais inteligente do que pensa.\" — Alvo Dumbledore",
        "\"Não são as nossas habilidades que revelam o que realmente somos, mas as nossas escolhas.\" — Alvo Dumbledore",
        "\"A felicidade pode ser encontrada até mesmo nas horas mais sombrias, se alguém se lembrar de acender a luz.\" — Alvo Dumbledore"
    ];

    const citacaoAleatoria = citacoes[Math.floor(Math.random() * citacoes.length)];
    const citacaoElement = document.createElement("p");
    citacaoElement.textContent = citacaoAleatoria;

    const h2Element = document.querySelector("h2");
    h2Element.insertAdjacentElement("afterend", citacaoElement);
}

// Chamando a função para exibir a citação aleatória
exibirCitacao();