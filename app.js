let categories = [
    {
        name: "Техническое обслуживание (ТО)",
        prices: [
            {
                title: "Замена масла в двигателе",
                price: "от 400"
            },
            {
                title: "Замена воздушного фильтра",
                price: "от 200"
            },
            {
                title: "Замена салонного фильтра",
                price: "от 250"
            },
            {
                title: "Замена цепи ГРМ",
                price: "от 7 500"
            },
            {   
                title: "Замена ремня ГРМ",
                price: "от 2 500"
            },
            {  
                title: "Замена приводного ремня",
                price: "от 500"
            } 
        ]  
    }, 
    {
        name: "Ремонт подвески",
        prices: [
            {
                title: "Диагностика подвески (ходовой части)",
                price: "от 300"
            },
            {
                title: "Замена амортизаторов",
                price: "от 300"
            },
            {
                title: "Замена пружин подвески",
                price: "от 1 200"
            },
            {
                title: "Замена рычагов подвески",
                price: "от 700"
            },
            {   
                title: "Замена сайлентблоков подвески",
                price: "от 400"
            },
            {  
                title: "Замена стабилизатора",
                price: "от 800"
            },
            {  
                title: "Замена подрамника",
                price: "от 1 100"
            },
            {
                title: "Замена стоек амортизаторов",
                price: "от 1 000"
            }, 
            {
                title: "Замена скобы втулки стабилизатора",
                price: "от 250"
            },
            {
                title: "Замена ступицы",
                price: "от 1 100"
            },
            {
                title: "Замена ступичных подшипников",
                price: "от 1 300"
            },
            {
                title: "Замена поворотного кулака",
                price: "от 2 900"
            },
            {
                title: "Замена стоек (тяг) стабилизатора",
                price: "от 500"
            },
            {
                title: "Замена втулок стабилизатора",
                price: "от 400"
            }, 
            {
                title: "Замена балки",
                price: "от 2 000"
            }
        ]
    },
    {
        name: "Ремонт двигателя",
        prices: [
            {
                title: "Диагностика двигателя",
                price: "от 700"
            },
            {
                title: "Замер компрессии двигателя",
                price: "от 800"
            },
            {
                title: "Капитальный ремонт двигателя",
                price: "от 30 000"
            },
            {
                title: "Замена помпы двигателя",
                price: "от 1 800"
            },
            {   
                title: "Замена вкладышей двигателя",
                price: "от 2 000"
            },
            {  
                title: "Замена гидрокомпенсаторов",
                price: "от 7 000"
            },
            {  
                title: "Замена направляющих втулок клапанов",
                price: "от 3 000"
            },
            {
                title: "Замена опор (подушек) двигателя",
                price: "от 500"
            }, 
            {
                title: "Замена масляного поддона",
                price: "от 150"
            },
            {
                title: "Замена поршневых колец",
                price: "от 12 000"
            },
            {
                title: "Замена прокладки головки блока (ГБЦ)",
                price: "от 3 000"
            }
        ]
    },
    {
        name: "Ремонт трансмиссии",
        prices: [
            {
                title: "Замена масла в АКПП (коробке автомат)",
                price: "от 500"
            },
            {
                title: "Ремонт АКПП",
                price: "от 22 000"
            },
            {
                title: "Ремонт МКПП",
                price: "от 14 000"
            },
            {
                title: "Замена сцепления",
                price: "от 2 300"
            },
            {   
                title: "Замена привода",
                price: "от 1 000"
            },
            {  
                title: "Ремонт раздаточной коробки",
                price: "от 5 000"
            },
            {  
                title: "Замена направляющих втулок клапанов",
                price: "от 3 000"
            },
            {
                title: "Замена раздаточной коробки",
                price: "от 2 800"
            }, 
            {
                title: "Замена сальника привода КПП",
                price: "от 1 100"
            },
            {
                title: "Замена шруса",
                price: "от 800"
            },
            {
                title: "Ремонт заднего моста",
                price: "от 2 100"
            },
            {
                title: "Ремонт карданного вала (кардана)",
                price: "от 2 200"
            },
            {
                title: "Ремонт вариатора CVT",
                price: "от 14 000"
            }, 
            {
                title: "Ремонт РКПП (роботизированной коробки передач)",
                price: "от 9 800"
            },
            {
                title: "Ремонт РКПП Easytronic (Изитроник)",
                price: "от 10 000"
            },
            {
                title: "Ремонт РКПП PowerShift (Пауэршифт)",
                price: "от 10 000"
            },
            {
                title: "Ремонт РКПП DSG",
                price: "от 10 000"
            }, 
            {
                title: "Замена сцепления DSG",
                price: "от 9 000"
            }, 
            {
                title: "Ремонт гидротрансформатора АКПП",
                price: "от 7 000"
            },
            {
                title: "Ремонт гидроблока АКПП",
                price: "от 7 000"
            }, 
            {
                title: "Ремонт мехатроника АКПП",
                price: "от 18 000"
            },
            {
                title: "Ремонт переднего моста",
                price: "от 2 300"
            }

        ]
    },
    {
        name: "Ремонт электрооборудования (проводки)",
        prices: [
            {
                title: "Замена аккумулятора автомобиля",
                price: "от 200"
            },
            {
                title: "Ремонт генераторов",
                price: "от 1 500"
            }
        ]
    },
    {
        name: "Ремонт топливной системы",
        prices: [
            {
                title: "Замена свечей накаливания",
                price: "от 400"
            },
            {
                title: "Замена бензонасоса (топливного насоса)",
                price: "от 1 500"
            }
        ]
    },
    {
        name: "Ремонт тормозной системы",
        prices: [
            {
                title: "Диагностика ABS",
                price: "от 800"
            },
            {
                title: "Диагностика тормозной системы",
                price: "от 300"
            },
            {
                title: "Замена вакуумного усилителя тормозов",
                price: "от 1 500"
            }
        ]
    },
    {
        name: "Ремонт выхлопной системы",
        prices: [
            {
                title: "Удаление катализатора",
                price: "от 1 500"
            }
        ]
    }
]

function showPrices(category) {
    if (window.innerWidth <= 768) {

        document.getElementById(`price-menu-${category.name}`).scrollIntoView()
        const containerPriceMenuMobil = document.getElementById(`category-container-${category.name}`)
        containerPriceMenuMobil.innerHTML = ""

        categories.forEach(category =>{
            document.getElementById(`category-container-${category.name}`).innerHTML = ""
        })

        category.prices.forEach((service) => {
            containerPriceMenuMobil.innerHTML = `
            <div class="price-menu-item title-price">
                <p>Вид услуг</p>
                <p>Цена (РУБ)</p>
            </div> 
            `
        })

        category.prices.forEach((service) => {
            containerPriceMenuMobil.innerHTML += `  
                                                              
            <div class="price-menu-item">
                <p class="price-menu-details">${service.title}</p>
                <p>${service.price}</p>
            </div>
            `
        }) 

    } else {
        const containerPriceMenu = document.getElementById('box-price')
        containerPriceMenu.innerHTML = ""
    
        category.prices.forEach((service) => {
            containerPriceMenu.innerHTML += `
            <div class="price-menu-item">
                <p class="price-menu-details">${service.title}</p>
                <p>${service.price}</p>
            </div>
            `
        }) 
    }
}

categories.map((category) => {
    document.getElementById('services').innerHTML += `
    <div>
        <div class="service-flex-item" id="price-menu-${category.name}">
            <p id="title-price">${category.name}</p>
            <button class="service-btn"><i class="fa-solid fa-caret-right service-arrow-icon"></i><i class="fa-solid fa-caret-down service-arrow-icon-down"></i></button>
        </div> 
        <div id="category-container-${category.name}">
        </div>
    </div>
    `
})

categories.map((category) => {
    document.getElementById(`price-menu-${category.name}`).addEventListener('click', () => showPrices(category))
})

if (window.innerWidth > 768) {
    showPrices(categories[0])
}