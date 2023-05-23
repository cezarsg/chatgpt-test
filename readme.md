# Chat GppT
## Parâmetro body
prompt: Esta opção é obrigatória e contém o texto que será usado como entrada para o modelo. 
        É o que você deseja que o modelo complete.
max_tokens: Esta opção controla o número máximo de tokens (palavras ou caracteres) que o 
        modelo pode gerar em resposta à entrada fornecida. O valor padrão é 2048, mas neste exemplo, estamos limitando a 150.
n: Esta opção controla o número de sequências geradas pelo modelo em resposta à entrada
        fornecida. O valor padrão é 1, o que significa que o modelo gera uma única sequência em resposta.
stop: Esta opção é uma sequência de caracteres que informa ao modelo onde parar de gerar tokens. Neste exemplo, 
        definimos \n como nosso caractere de parada, o que significa que o modelo interromperá a geração de tokens 
        quando encontrar uma quebra de linha.
temperature: Esta opção controla a criatividade do modelo. Quanto maior o valor, mais "divergente" será a 
        resposta do modelo em relação à entrada fornecida. Um valor de 0 produzirá respostas muito semelhantes 
        à entrada, enquanto um valor de 1 produzirá respostas muito diferentes. Neste exemplo, estamos usando 
        um valor de 0,5, o que deve produzir respostas um pouco divergentes, mas ainda relacionadas à entrada.    
