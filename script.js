
let base = document.querySelector(".base") //в переменную base записали ссылку на обЪект с классом base

let data = [ //создаем и заполняем массив data
    {
        name: "Повелитель мух",
        img: "img/2398281_detail.jpg", 
        decription: `«Повели́тель мух» — дебютный аллегорический <br>
        роман английского писателя, лауреата <br>
        Нобелевской премии по литературе, Уильяма <br>
        Голдинга, вышедший в 1954 году. В СССР на <br>
        русском языке роман был впервые опубликован в <br>
        1969 году <br>`,
        wiki: "https://ru.wikipedia.org/wiki/Повелитель_мух",
        buy: "https://www.ozon.ru/product/2020-povelitel-muh-lord-of-the-flies-140538905/?advert=R6lmhD8DEQUnFvbxSzAjvPe2EVOKAUEoU_whTP79D6eKAPXZXTQT7V9VasUIh3BCVJPMIeLjaEBBpgpFZ1UqvsdyglHTgRR2FeUCsK32kLNg6G6YJYn1HcmbnmN6ynhtFds7X7dzL7vxE5XC894UomuIK_Jz4bX2dqNV6e93g2ox_RqydlYdChJQPHbqXhiSva0eONXsiKyWTtV3Aluk35AAAjMMvkBxfXJo_ufYLyISMe9scOxEJTKA_T_GVlgoBRRz8zwGYkCReaTLTdXfjQ83-BljyRuxa3E0PIh7Oj1FPSkn8WToi49uR5PtrI5ckAg_5lHisn5r68VH_Sf53HXBVbooT6iXDTuohHPbnoJaWWm2pwxbTKC7EjVZZjPznc_cjwvskUkCaNdSQQ1r4c8YG0oU9aqV6ZF-Iz0YoTG0IQ62x8Dc_EEH7JcKpMfQXxQKlVPGZUH5523ZHGYymVvn7fpxD-G1EIVRfSqfnr1Lz7QMjanTuwWCu19NL9el5U4ld9EM6NeRq5qeTFkiHSM_vABmzD4q4xF3iM2BwmlzIKLdoeysxV09Eu4wMeGFzkF3VWW5LWPn4sTdkQY6PFDb0ZqXQgnVlaInL_B7alnhkehdfrRa9yZnZlBAKA_ZDQSyouHVUeLbVuO7ntgmLlijqeSCkMPaoGWo4L404-o6tVNfDLll9U16JQ5EV4Ex9MhYhTo03QlheosNTTOz8oPuvrOB6mBaynA_L9y5eej8RipsXki_8YLibvTu8oHH&avtc=1&avte=4&avts=1665939005&keywords=%D0%BF%D0%BE%D0%B2%D0%B5%D0%BB%D0%B8%D1%82%D0%B5%D0%BB%D1%8C+%D0%BC%D1%83%D1%85&sh=odJtMpV4zA",
        menu: "Антиутопия",
    },
    {
        name: "1984",
        img: "img/6280131660.jpg",
        decription: `Своеобразный антипод второй великой <br>
        антиутопии 20-ого века "О дивный новый мир" <br>
        Олдоса Хаксли. Что, в сущности, страшнее: <br>
        доведенное до абсурда "общество потребления" <br>
        или доведенное до абсолюта "общество идеи"? <br>
        По Оруэллу, нет и не может быть ничего ужаснее <br>
        тотальной несвободы... <br>`,
        wiki: "",
        buy: "",
        menu: "Антиутопия",

    },
    {
        name: "Эрагон",
        img: "img/141669-kristofer-paolini-eragon.jpg",
        decription: `Эрагон — мальчик, живущий в деревне Карвахолл.
        Отправившись на охоту, он случайно становится обладателем таинственного камня,
        оставленного захваченной воинами Империи эльфийкой Арьей. Эрагон не подозревает о том,
        что этот камень ищут подданные короля Гальбаторикса, и лишь со временем узнает,
        что камень является драконьим яйцом, так как из него вылупляется дракон.
        Эрагон становится из простого сельского жителя драконьим Всадником и находит наставника в лице
        Брома,
        который берет на себя ответственность за обучение Эрагона. Сюжет первой книги заканчивается сражением варденов, Эрагона и его друзей с ургалами и шейдом при
        Фартхен-Дуре — Городе-Горе гномов и последнем убежищем варденов.`,
        menu: "Фентези",
        wiki: "https://ru.wikipedia.org/wiki/Эрагон_(роман)",
        buy: "https://www.ozon.ru/product/eragon-kniga-1-eragon-148803704/?asb=ozuDA%252FZlVlkCaPvx5WhMIAGduiYpYzLFv9D139%252FPHDtJnqn5T8BYCfjIlVGaI95m&asb2=TkMZpTSkC0p3q_j4Asfma7D0BfmelRSptTeo3hu6n1YdbG6LKaHiS3XCHt6d3xDi-vXEJ_j-Adh0S3VGDyk5DkPgHgDJLnQwCz3oysMGBM-jo8cb5DmisEXPfMbbeS9KFXfVQbTHUZWSmRRIG6KcZ-sRNXGIN8FcVov3tUv0LnU&avtc=1&avte=2&avts=1665937855&keywords=%D1%8D%D1%80%D0%B0%D0%B3%D0%BE%D0%BD&sh=odJtMtuvAw",

    },
    {
        name: "Властелин колец",
        img: "img/2423346_detail.jpg",
        decription: `«Властели́н коле́ц» — роман-эпопея английского писателя Дж. Р. Р. Толкина, <br>
        одно из самых известных произведений жанра фэнтези. «Властелин колец» <br>
        был написан как единая книга, но из-за объёма при первом издании его <br>
        разделили на три части — «Братство Кольца», «Две крепости» и «Возвращение <br>
        короля».`,
        menu: "Фентези",
        wiki: "https://ru.wikipedia.org/wiki/Властелин_колец",
        buy: "https://www.ozon.ru/product/vlastelin-kolets-tolkin-dzhon-ronald-ruel-227780504/?asb=ixppPC02TKaE%252BaxL8dEv9zm%252BBcd5UQQD6UHncpvtj6U%253D&asb2=Tyqt84Ux5cCNSCqh9oMXXuuD410FeRVdsVfqm_ySbcEDOkQ9hmkjN7osvvZIaqRn&avtc=1&avte=2&avts=1665937985&keywords=%D0%B2%D0%BB%D0%B0%D1%81%D1%82%D0%B5%D0%BB%D0%B8%D0%BD+%D0%BA%D0%BE%D0%BB%D0%B5%D1%86&sh=odJtMp-DQw",
    },
    {
        name: "Пляска смерти",
        img: "img/cover1__w340 (1).jpg",
        decription: `Тирион Ланнистер еще не стал заложником жестокого рока, Бран Старк еще не сделался  калекой, а
        голова его отца Неда Старка еще не скатилась с эшафота. Ни один человек  в Королевствах не смеет
        даже предположить, что Дейенерис Таргариен когда-нибудь назовут Матерью Драконов.`,
        menu: "Фентези",
        wiki: "https://www.mirf.ru/book/dzhordzh-martin-plamya-i-krov-plyaska-smerti/",
        buy: "https://www.ozon.ru/product/dom-drakona-plamya-i-krov-plyaska-smerti-martin-dzhordzh-r-r-250451748/?asb=JmL%252BcdMyeZ4bzWnNteboBJ9mDrGL37VqzrFjNIBubYI%253D&asb2=TztPC9bEWkV2SlMQXv1hirNIo3UAVYVArsYqCPcUBe-xe1vJCYq6HI1irb1n7CbF&avtc=1&avte=2&avts=1665938161&keywords=%D0%BF%D0%BB%D1%8F%D1%81%D0%BA%D0%B0+%D1%81%D0%BC%D0%B5%D1%80%D1%82%D0%B8&sh=odJtMj2ThA",  
    },
    {
        name: "Ведьмак",
        img: "img/2312670_detail.jpg",
        decription: `Ведьмак-один из последних «ведьмаков», бродячих охотников на чудовищ. 
        В то время как первые книги цикла представляют собой сборники 
        рассказов о приключениях Геральта, нередко сатирически обыгрывая 
        фольклор и классические литературные сказки, сюжет последующих книг 
        представляет собой более масштабную историю, построенную вокруг Геральта 
        и его воспитанницы Цири, обладающей сверхъестественными способностями.`,
        menu: "Фентези",
        wiki: "https://ru.wikipedia.org/wiki/Ведьмак_(серия_романов)",
        buy: "https://www.ozon.ru/product/vedmak-poslednee-zhelanie-mech-prednaznacheniya-krov-elfov-chas-prezreniya-kreshchenie-ognem-250792045/?asb=JasD%252FQFhSCCST2OJqxOP2%252Buk70rkh9C8igHyTfs3k%252Bw%253D&asb2=IHRbiDgt-MJ6pC04FZum17kgRCGlL6kbUD8cmfTn5vCs0o7NozSFPqC6iPn1XUcQ&avtc=1&avte=2&avts=1665938207&keywords=%D0%B2%D0%B5%D0%B4%D1%8C%D0%BC%D0%B0%D0%BA&sh=odJtMv6cLA",
    },
    {
        name: "Волшебник Земноморья",
        img: "img/124500-ursula-kreber-le-guin-volshebnik-zemnomorya.jpg",
        decription: `Главный герой романа, носивший в детстве имя Дьюни, 
        родился и провёл детство на острове Гонт архипелага Земноморье.
        Его мать рано умерла, из родных у мальчика остались только отец и 
        тётка — деревенская колдунья. В семь лет Дьюни демонстрирует врождённый 
        талант к магии, и тётка решает обучить его тому немногому, что знает сама. 
        За умение подчинять себе диких птиц и, в частности, ястреба-перепелятника Дьюни
        получает прозвище Ястреб (англ. Sparrowhawk), которым будет пользоваться и в дальнейшем.`,
        menu: "Фентези",
        wiki: "https://ru.wikipedia.org/wiki/%D0%92%D0%BE%D0%BB%D1%88%D0%B5%D0%B1%D0%BD%D0%B8%D0%BA_%D0%97%D0%B5%D0%BC%D0%BD%D0%BE%D0%BC%D0%BE%D1%80%D1%8C%D1%8F",
        buy: "https://www.ozon.ru/product/volshebnik-zemnomorya-34748471/?asb=%252BcRvjxOZf2BvqscRUwW2jng4HxKr820yC9DckGNSo%252FE%253D&asb2=2mcY42tCT-hocgMa1uAqRE2hKxnhALbg_lHWH32dViySYolGEd6iVQLWP3tPPUOD&avtc=1&avte=2&avts=1667300148&keywords=%D0%B2%D0%BE%D0%BB%D1%88%D0%B5%D0%B1%D0%BD%D0%B8%D0%BA+%D0%B7%D0%B5%D0%BC%D0%BD%D0%BE%D0%BC%D0%BE%D1%80%D1%8C%D1%8F&sh=odJtMhiB9g",
    },
    {
        name: "9 принцев Амбера",
        img: "img/5ed686e61eaa2e360c5d30c0f4077700.jpg",
        decription:`Главный герой романа Корвин приходит в себя в частной больнице после автомобильной 
        аварии. Он не помнит, кто он такой, но, шантажируя доктора, узнаёт, что у него есть сестра 
        — Эвелин. Он совершает побег из клиники и приходит домой к Эвелин. Разговаривая с ней, он 
        не может вспомнить свою семью, но не подаёт вида. Узнает, что сестру зовут Флоримель. Когда <br>
        Флора уходит из дома, он, обыскивая помещение, находит колоду карт таро с изображениями <br>
        себя и членов своей семьи.`,
        menu: "Фентези",
        wiki:"https://ru.wikipedia.org/wiki/%D0%94%D0%B5%D0%B2%D1%8F%D1%82%D1%8C_%D0%BF%D1%80%D0%B8%D0%BD%D1%86%D0%B5%D0%B2_%D0%90%D0%BC%D0%B1%D0%B5%D1%80%D0%B0",
        buy: "https://www.ozon.ru/product/hroniki-ambera-komplekt-iz-2-knig-zhelyazny-rodzher-316585346/?asb=yxAMh644exeI6%252Bk6e5dLcE%252BEgNoRcLT%252BTC3D8rAK1c0%253D&asb2=A-rl7vZOK3148tJlXF5Qf_vDkBM0_1kVVvUAogpvvbBbi9TUl0nz7nMjPVJD-mQL&avtc=1&avte=2&avts=1667322343&keywords=9+%D0%BF%D1%80%D0%B8%D0%BD%D1%86%D0%B5%D0%B2+%D0%B0%D0%BC%D0%B1%D0%B5%D1%80%D0%B0&sh=odJtMsuwAw",
    },
    {
        name: "Искусство войны",
        img: "img/is.jpg",
        decription: `«Искусство войны» — самый известный 
        древнекитайский трактат, посвящённый военной 
        стратегии и политике и написанный Сунь-Цзы. 
        Состоит из 13 глав. Является основополагающим 
        текстом «школы военной философии», главным в 
        её каноническом Семикнижии.`,
        menu: "Исторические",
        wiki: "https://ru.wikipedia.org/wiki/Искусство_войны",
        buy: "https://www.ozon.ru/product/iskusstvo-voyny-sun-tszy-439445145/?asb=xBPs4QKPT6lr5pJH3ojAzMDSFEppOVAV9baY9%252Fzmlm0%253D&asb2=RDgHzkCXUHmyi3NZEaKnjkEQQYgKBG5nHEbKojycFlJ_Fjf4LzzcUwU5pmsq1-u2&avtc=1&avte=4&avts=1665938567&keywords=%D0%B8%D1%81%D0%BA%D1%83%D1%81%D1%81%D1%82%D0%B2%D0%BE+%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B&sh=odJtMmW8fQ",
    }
]


function setMenu(t) { //сделали функцию setMenu которая принимает параметр в переменную t
    console.log(t) //выводим в консоль t
    base.innerHTML="" //опустошает обЪект base
    data.forEach(book => { //с помощью forEach перебираем массив data (все книги)
        if (book.menu == t) //если поле menu книги равно переменной t
        //то добавить книгу в обЪект base
            base.innerHTML += `
        <tr>
            <td class="td-imd">
                <a target="_blank" href="`+ book.wiki +`">
                    <img src="`+ book.img + `" alt="" class="imd">
                </a>
            </td>
            <td>
                <h3>`+ book.name + `</h3>
                <b>Жанр: </b> `+ book.menu + ` <br>
                <a target="_blank" href="`+ book.buy +`" class="kupit">Купить</a>
                <p> `+ book.decription + ` </p>  <br>

            </td>
        </tr>`
    })

}
