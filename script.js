const read = require("readline-sync")
var DDD_teleph = new Array()
console.log("======================================================================== ==")
console.log("===  para retorna um resultado correto digite todo numero junto sem [55] ==")
console.log("===  e sem espaço por favor                                              ==")
console.log("======================================================================== ==")
var telefone= read.question("digite o numero de telefone aqui: ")
// para um numero ser de sao paulo ele tem qui ser maior que 10 e menor que 19
var regioes ={
    sao_paulo:function(numero){
        numero =+ numero.substr(0,2)
        if (numero > 10 && numero <= 19){
            console.log("esse numero é de sao paulo")
        }//sao paulo
    },rio_de_janeiro:function(numero){
        numero =+ numero.substr(0,2)
        if (numero == 21 || numero == 22 || numero == 24){
            console.log("esse numero é do estado de rio de janeiro")
        }
    }//rio de janeiro
    ,bahia :function(numero){
            numero =+ numero.substr(0,2)
            if (numero == 77 || numero == 74||numero == 75||numero == 79||numero ==71||numero ==73){
                console.log("esse numero é do estado da bahia")
            }
        },parana:function(numero){
            numero =+ numero.substr(0,2)
            if (numero > 40 && numero <= 46){
                console.log("esse numero é do estado do parana")
            }
        }//parana
        ,
        rio_grande_do_sul:function(numero){
            numero =+ numero.substr(0,2)
            if (numero == 51 || numero > 52 && numero <=55){
                console.log("esse numero é do estado do Rio grande do sul")
            }//sao paulo
        }
        ,ceara:function(numero){
                numero =+ numero.substr(0,2)
                if (numero==85 || numero == 88){
                    console.log("esse numero é do estado do Ceará")
                }//sao paulo
            },
            maranhao:function(numero){
                numero =+ numero.substr(0,2)
                if (numero > 98 || numero == 99){
                    console.log("esse numero é do estado do maranhão")
                }//sao paulo
            }
        ,  espirito_santo:function(numero){
            numero =+ numero.substr(0,2)
            if (numero == 27 || numero == 28){
                console.log("esse numero é do estado do espirito santo")
            }//sao paulo
        },  para:function(numero){
            numero =+ numero.substr(0,2)
            if (numero == 91 || numero == 93 || numero == 94){
                console.log("esse numero é do estado do para")
            }//sao paulo
        },
        santa_catarina:function(numero){
            numero =+ numero.substr(0,2)
            if (numero > 46 && numero <= 49){
                console.log("esse numero é do estado de santa catarina")
            }//sao paulo
        },  goias:function(numero){
            numero =+ numero.substr(0,2)
            if (numero ==62  || numero == 64){
                console.log("esse numero é do estado de goias")
            }//sao paulo
        },  pernambuco:function(numero){
            numero =+ numero.substr(0,2)
            if (numero == 81|| numero == 87){
                console.log("esse numero é do estado de pernambuco")
            }//sao paulo
        }
        ,minas_gerais:function(numero){
            numero =+ numero.substr(0,2)
            if (numero > 30&& numero <= 38){
                console.log("esse numero é de minas gerais")
            }//sao paulo

        }
        ,mato_grosso:function(numero){
            numero =+ numero.substr(0,2)
            if (numero > 64 && numero <= 66){
                console.log("esse numero é do estado de mato grosso")
            }//sao paulo
        
        } ,acre:function(numero){
            numero =+ numero.substr(0,2)
            if (numero == 68){
                console.log("esse numero é do acre")
            }//sao paulo
        }
        ,rondonia:function(numero){
            numero =+ numero.substr(0,2)
            if (numero ==69){
                console.log("esse numero é de rondonia")
            }//sao paulo
        }
        ,amazonas:function(numero){
            numero =+ numero.substr(0,2)
            if (numero == 92 || numero == 97){
                console.log("esse numero é do estado do amazonas")
            }//sao paulo
        }
        ,piaui:function(numero){
            numero =+ numero.substr(0,2)
            if (numero == 86 || numero == 89){
                console.log("esse numero é do estado do piaui")
            }//sao paulo
        }
        ,amapa:function(numero){
            numero =+ numero.substr(0,2)
            if (numero == 96){
                console.log("esse numero é do estado do amapa")
            }//sao paulo
        }
        ,rio_grande_do_norte:function(numero){
            numero =+ numero.substr(0,2)
            if (numero == 84){
                console.log("esse numero é do estado do rio grande do norte")
            }//sao paulo
        }
        ,roraima:function(numero){
            numero =+ numero.substr(0,2)
            if (numero == 95){
                console.log("esse numero é do estado de mato grosso")
            }//sao paulo
        },tocantins:function(numero){
            numero =+ numero.substr(0,2)
            if (numero == 63){
                console.log("esse numero é do estado de mato grosso")
            }//sao paulo
        }
}
regioes.sao_paulo(telefone);regioes.bahia(telefone);regioes.rio_de_janeiro(telefone)
regioes.parana(telefone);regioes.rio_grande_do_sul(telefone);;regioes.ceara(telefone);
regioes.maranhao(telefone);regioes.espirito_santo(telefone);regioes.para(telefone)
regioes.santa_catarina(telefone);regioes.pernambuco(telefone);regioes.minas_gerais(telefone)
regioes.mato_grosso(telefone);regioes.acre(telefone);regioes.rondonia(telefone)
regioes.amazonas(telefone);regioes.piaui(telefone);regioes.amapa(telefone);
regioes.rio_grande_do_norte(telefone);regioes.roraima(telefone);regioes