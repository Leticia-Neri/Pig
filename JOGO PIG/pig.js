let Dado = {
    numeroDoDado : 0,
    rodaDadoDeNovo : function(){
        
        this.numeroDoDado = Math.floor(Math.random() * 6) + 1;
        this.imprimirNumDoDadoNaTela();
        
    },
    imprimirNumDoDadoNaTela : function(){
        document.getElementById("numDoDadoTela").innerText = this.numeroDoDado;
    },  
}

let Jogador1 = {
    pontosRodada : 0,
    pontosFixos : 0,
    dadosAtualizados : function(numeroDoDado){
        this.pontosRodada += numeroDoDado;
        this.imprimir();
    },
    imprimir : function(){
        document.getElementById("pontosRodadas1").innerText = this.pontosRodada;
        document.getElementById("pontosFixos1").innerText = this.pontosFixos;///
        
    },
    zerarPontos : function(){
        this.pontosRodada = 0;
        this.imprimir();
    },
    pararOJogo : function(){
        
        this.pontosFixos += this.pontosRodada;//
        //this.imprimir();//
        this.zerarPontos();
        Pig.trocaJogador();

    }  
}


let Jogador2 = {
    pontosFixos : 0,
    pontosRodada : 0,
    
    dadosAtualizados : function(numeroDoDado){
        this.pontosRodada += numeroDoDado;
        this.imprimir();
        
    },
    imprimir : function(){
        document.getElementById("pontosRodadas2").innerText = this.pontosRodada;
        document.getElementById("pontosFixos2").innerText = this.pontosFixos;///
        
    },
    zerarPontos : function(){
        this.pontosRodada = 0;
        this.imprimir();
    },
    pararOJogo : function(){
        this.pontosFixos += this.pontosRodada;//
       // this.imprimir();//
        this.zerarPontos();
        Pig.trocaJogador();
    }
}


let Pig = {
    Jogadores : [Jogador1, Jogador2],
    jogadorAtual  : 0,
    quemEhJodadorAtual : function(){
        return this.Jogadores[this.jogadorAtual];
    },
    rodaDado : function(){
        Dado.rodaDadoDeNovo(); 
        if(Dado.numeroDoDado == 1){
            //zerar os pontos
            this.quemEhJodadorAtual().zerarPontos();
            
            //trocar de joagador
            this.trocaJogador();
        }else{
            this.quemEhJodadorAtual().dadosAtualizados(Dado.numeroDoDado);
        }    
    },
    trocaJogador : function(){
        if(this.jogadorAtual == 0 ){
            this.jogadorAtual = 1;
        }else{
            this.jogadorAtual = 0;
        }
    },
    parar : function(){ 

        //troca de jogador 
        
    
        //os pontos da rodada vai para o fixo
        this.quemEhJodadorAtual().pararOJogo();    
    }
}