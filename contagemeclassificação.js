console.log ("Seja muito bem vindo Jogador!")
console.log ("Lista de jogos Midia Digital:")
console.log ("Memória da Máquina: 170GB/200GB")

for (let espaço=1; espaço<=12; espaço++) {
    console.log ("")
}


let listaDeGames = ["--(Crash Bandicoot)", "--(GodOfWar)", "--(Soul River)", "--(GTA San Andreas)", "--(ShadowOfTheColossus)", "--(Resident Evil 4", "--(Dark Souls)", "--(The Last Of Us)", "--(Little Big Planet)", "--(Horizon Zero Down)", "--(BloodBronwe)", "--(Dark Souls lll)" ]
                    


     for (let Game = 0; Game < listaDeGames.length; Game++){
     var IP = listaDeGames [Game];


    if (Game <= 2){
        console.log(`MD: ${IP} Playstation`)
    }


    else if (Game <= 5){
        console.log(`MD:${IP} Playastation 2`)
    }


    else if (Game <= 8){
        console.log (`MD: ${IP} Playstation 3`)
    }


    else {
        console.log (`MD: ${IP} Playstation 4`)

    }

}
    