
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
        wiki: "https://ru.wikipedia.org/wiki/1984_(роман)",
        buy: "https://www.ozon.ru/search/?deny_category_prediction=true&from_global=true&text=1984+%7C+Оруэлл+Джордж&product_id=601903722",
        menu: "Антиутопия",

    },
    {
        name: "Голодные игры",
        img: "img/3090095-suzen-kollinz-golodnye-igry.jpg",
        decription: `Действие происходит в постапокалиптическом мире, где после
        неизвестной глобальной катастрофы на территории бывшей Северной
        Америки образовалось антиутопичное государство Панем (англ. Panem).
        Его столица Капитолий расположена в районе Скалистых гор, разделявших
        когда-то США и Канаду, а вокруг неё сосредоточены двенадцать (изначально тринадцать)
        округов — дистриктов, снабжающих столицу разнообразным сырьём.`,
        menu: "Антиутопия",
        wiki: "https://ru.wikipedia.org/wiki/Голодные_игры_(трилогия)",
        buy: "https://www.ozon.ru/product/golodnye-igry-novoe-izdanie-kollinz-syuzen-250456687/?asb=Nf2coSfhPHF6EOvb9ZGf4KTmql0f3yFvvWbl6zAJweg%253D&asb2=mi92FbFMEhEl5x1Bop-lfG4-5y2CuN8aeFb58r8504mQ_eMyb7MSlR5RFEZC9cy0&avtc=1&avte=2&avts=1665938905&keywords=голодные+игры&sh=odJtMjVtiw",
    },
    {
        name: "О дивный новый мир",
        img: "img/2398273_detail.jpg",
        decription: `«О дивный новый мир» — антиутопический
        сатирический роман английского писателя Олдоса
        Хаксли, опубликованный в 1932 году. В заглавие
        вынесена строчка из трагикомедии: О чудо! Какое
        множество прекрасных лиц! Как род людской
        красив! И как хорош Тот новый мир, где есть такие
        люди! — Уильям Шекспир. «Буря»`,
        menu: "Антиутопия",
        wiki: "https://ru.wikipedia.org/wiki/О_дивный_новый_мир",
        buy: "https://www.ozon.ru/search/?deny_category_prediction=true&from_global=true&text=Возвращение+в+дивный+новый+мир+%7C+Хаксли+Олдос&product_id=146082853",
    },
    {
        name: "Рассказ служанки",
        img: "img/cover1__w600.jpg",
        decription: `«Рассказ служанки» — антиутопический роман канадской
        писательницы Маргарет Этвуд, впервые опубликованный в 1985
        году. Действие романа происходит в фантастической версии Новой
        Англии близкого будущего — жестоком кастовом обществе под названием
        Республика Гилеад, где к власти пришли религиозные радикалы.`,
        menu: "Антиутопия",
        wiki: "https://ru.wikipedia.org/wiki/Рассказ_служанки",
        buy: "https://www.ozon.ru/search/?deny_category_prediction=true&from_global=true&text=Рассказ+Служанки+%7C+Этвуд+Маргарет&product_id=253325131",
    },
    {
        name: "Не отпускай меня",
        img: "img/boocover (1).jpg",
        decription: `Роман является воспоминаниями Кэти Х, молодой
        женщины около 30 лет, о её детстве в необычной
        школе-интернате и последующей взрослой жизни.
        Действие происходит в антиутопической Великобритании
        конца XX века, в которой люди клонируются для создания
        живых доноров органов для пересадки, что началось в 1950-х.
        Кэти и её друзья по интернату как раз такие доноры. До того,
        как стать донорами, все они в течение более или менее
        продолжительного времени работают «помощниками», заботясь
        и поддерживая тех, кто уже стал донорами. Как и в других
        работах Исигуро, правда становится ясной далеко не сразу и
        раскрывается постепенно, через намёки.`,
        menu: "Антиутопия",
        wiki: "https://ru.wikipedia.org/wiki/Не_отпускай_меня",
        buy: "https://www.ozon.ru/product/ne-otpuskay-menya-isiguro-kadzuo-250057831/?asb=MEB7NzU40lljY%252FJWnkWpV94FcEsFNc5cDRCRjzfuPGk%253D&asb2=ZSSO2ei2w38s9s8AuPSux2IkB2tLWK263Y6FK0kwqkusugSKKHgwIWyaT9_RV13o&avtc=1&avte=2&avts=1667321721&keywords=не+отпускай+меня&sh=odJtMrQhTA",
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
    },
    {
        name: "Нарния",
        img: "img/ррр.jpg",
        decription: `Нарния — это мир в стиле фэнтези, созданный англо-ирландским автором Клайвом Стейплзом Льюисом, являющийся местом действия в большинстве книг серии Хроники Нарнии, эпопеи из семи книг. Также страна в этом мире, имеющая определяющее значение в космогонии и имеющая особое сакральное значение.
        `,
        menu: "Фентези",
        wiki:"https://ru.wikipedia.org/wiki/Нарния",
        buy: "https://www.ozon.ru/product/lev-koldunya-i-platyanoy-shkaf-il-k-birmingema-lyuis-klayv-steyplz-249292018/?asb=jHRLhkZj8%252FS%252BqL8KPdXE%252FSBdyYGFpWvcbhya66PF1kt%252FpUgYzwWLNEHvJ3gzuTvY&asb2=g4Hz078VfADWwZO3b0GTyHjIs0GIf3rC2W9tawSQkleuCyzrnT0dgfDZmXH6hliRSkon2vxlWI5-7OUd5Ldg9TObLcli3yZNuq68EJriMGzxp5F_Ienbxj5KaHUk2CDCh9yretzj-I_Ew80h-zJgkQ&avtc=1&avte=2&avts=1671037281&keywords=нарния+книга&sh=FJInc5eL2g",
    },
    {
        name: "Дюна",
        img: "img/6065262130.jpg",
        decription: `Действие «Дюны» происходит в галактике далёкого будущего
        под властью межзвёздной империи, в которой феодальные семейства
        владеют целыми планетами. «Дюна» рассказывает историю молодого
        аристократа по имени Пол Атрейдес, чья семья получает в управление
        планету Арракис. В пустынях Арракиса добывают особое вещество — «пряность»,
        необходимое для космических перелётов. После военного переворота Пол вынужден
        скрываться среди жителей пустынь — фременов — и в итоге поднимает их на священную
        войну против империи. «Дюна» соединяет в себе черты научно-фантастического и фило-
        софского романа, используя экзотические для американской фантастики 1960-х годов
        ближневосточные (арабские и персидские) имена и образы для создания многослойного
        повествования, затрагивающего, среди прочего, темы политики, религии, технологии и экологии.`,
        menu: "Фантастика",
        wiki:"https://ru.wikipedia.org/wiki/Дюна_(роман)",
        buy: "https://www.ozon.ru/product/dyuna-gerbert-frenk-250791917/?asb=Lgk6xkeEOlnN3szAQVMtQkIx62UZyLfNtgRRhwAn7oU%253D&asb2=E2fzNfEUeR_PPNG54qdIbT1iKCFX0YIBEJ0J-XDiasRW526n30oGcHGDNWpcoDm4&avtc=1&avte=4&avts=1665938362&keywords=дюна+книга&sh=odJtMpF3VA",
    },
    {
        name: "Пикник на обочине",
        img: "img/123321.jpg",
        decription: `Действие повести происходит на Земле предположительно в 1970-е годы в городке
        Хармонт, в выдуманной англоязычной стране[14].
        
        Примерно за 13 лет[15] до начала описываемых в книге событий в нескольких местах
        на земном шаре возникает шесть «зон» — областей, в которых начинают происходить
        странные явления, нарушающие известные законы физики. Зоны расположены вдоль плавной
        линии на поверхности Земли, проекции так называемого радианта Пильмана — точки, лежащей
        на прямой, соединяющей Землю и Денеб. Быстро выяснилось, что людям и животным проживать
        в Зонах очень опасно, и всё население было из них срочно эвакуировано. Территории Зон
        были обнесены ограждением, взяты под строгую охрану и официально стали предметом осторо-
        жного научного изучения. Также очень быстро обнаруживается, что в Зонах много артефактов
        непонятного предназначения. Некоторые из них весьма полезны — например, могут лечить болезни,
        некоторые просто странные игрушки, а некоторые — крайне опасны.`,
        menu: "Фантастика",
        wiki: "https://ru.wikipedia.org/wiki/Пикник_на_обочине",
        buy: "https://www.ozon.ru/search/?deny_category_prediction=true&from_global=true&text=Пикник+на+обочине+%7C+Стругацкий+Борис+Натанович%2C+Стругацкий+Аркадий+Натанович&product_id=32288128",
    },
    {
        name: "Зов Ктулху",
        img: "img/321.jpeg",
        decription: `В первой части сюжет разворачивается вокруг таинственного
        глиняного барельефа с изображением древнего божества Ктулху.
        Рассказчик находит барельеф в вещах своего двоюродного деда
        профессора Энджелла. Изображение было сделано скульптором
        Уилкоксом в марте 1925 года. Скульптор сделал барельеф в
        состоянии полусна. В это время Уилкокса преследовали загадочные
        галлюцинации циклопических городов. Подобные кошмары в тот период
        испытывали и многие жители. В основном это были художники, скульпторы,
        архитекторы, и прочие люди с чувствительной психикой.
        Наутро Уилкокс поразился своему творению и отнёс его профессору
        Энджеллу. Оказалось, что барельеф очень напоминал статуэтку,
        изъятую полицией у членов религиозной секты в Новом Орлеане в 1907 году.`,
        menu: "Фантастика",
        wiki: "https://ru.wikipedia.org/wiki/Зов_Ктулху",
        buy: "https://www.ozon.ru/product/zov-ktulhu-lavkraft-govard-fillips-138136488/?asb=eSzA%252BkilOijcRAWV8cVZi0Sn%252Bff4ckPv3VGmCDOSXUA%253D&asb2=KUW5EDCsUjXfEg_OivY89pacn0D9a3oGPaEuktZmICaBqXp0gVzswzJr3YIbP706&avtc=1&avte=2&avts=1665938469&keywords=зов+ктулху&sh=odJtMsTQuA",
    },
    {
        name: "Дракула",
        img: "img/cover1__w340.jpg",
        decription: `Произведение является эпистолярным романом, повествование
        в нём складывается из писем и записей в дневниках его героев,
        а также из газетных вырезок, действие же романа происходит
        в конце XIX века. Всё начинается с того, что молодой стряпчий
        из Великобритании Джонатан Харкер отправляется в австро-венгерскую
        область Трансильвания к некоему графу Дракуле, с целью продажи ему
        недвижимости в Англии[комм. 1]. Харкер добирается до городка Бистрица,
        а оттуда дилижанс довозит его до перевала Борго, где после захода солнца
        Джонатана встречает экипаж со странным кучером, который и привозит стряпчего
        в замок графа, находящегося в безлюдной глуши Карпатских гор.`,
        menu: "Фантастика",
        wiki: "https://ru.wikipedia.org/wiki/Дракула_(роман)",
        buy: "https://www.ozon.ru/product/drakula-stoker-brem-139101016/?asb=i5Wew8hR9mSm5FyHWHG3uZh4qRg%252FIeLfVaynOMGcZcI%253D&asb2=jAq5da7krwIRP2yCphk0FdF44jLYEWIuJh1GJBEZ6oUdolsDMc2XS2p1mjULYYYB&avtc=1&avte=2&avts=1665938510&keywords=дракула&sh=odJtMmyq5g",
    },
    {
        name: "По ту сторону звезд",
        img: "img/66557788-kristofer-paolini-po-tu-storonu-zvezd (1).jpg",
        decription: `Первая часть захватывающей космооперы от Кристофера
        Паолини – одного из самых известных мастеров фанта-
        стики и фэнтези для взрослых и детей! Ксенобиолог
        Кира во время рутинной миссии находит артефакт
        древней цивилизации. Когда он случайно активируется,
        Кира становится его носителем и обретает невероятные
        способности. Поначалу девушка приходит в ужас от
        перспективы утратить человеческую сущность. Однако
        вскоре именно от нее будет зависеть судьба всего
        людского рода.`,
        menu: "Фантастика",
        wiki: "https://www.livelib.ru/book/1006760698/quotes-po-tu-storonu-zvjozd-kniga-1-kristofer-paolini",
        buy: "https://www.ozon.ru/product/po-tu-storonu-zvezd-kniga-1-paolini-kristofer-306680184/?sh=odJtMromYA",
    },
    {
        name: "Герметикон",	
        img: "img/cover1__w820.jpg",
        decription: `Романы описывают приключения адигена (аристократа), мессера Помпилио
        Чезаре Фаха дер Даген Тур, командора астрологического флота планеты
        Герметикон и бамбадао — стрелка экстра-класса. Помпилио — брат правителя
        планеты Линга и в первой книге цикла прибывает по личной просьбе короля
        мира Заграта, стоящего на пороге гражданской войны из-за открытия в южной
        пустыне гигантских залежей нефы (нефти). Цель Помпилио — спасти детей короля,
        пока до них не добрался лидер мятежников генерал Нестор. Ситуация осложнена тем,
        что за мятежниками стоят интересы могущественной межзвездной Компании.`,
        menu: "Фантастика",
        wiki: "https://ru.wikipedia.org/wiki/Герметикон",
        buy: "https://www.ozon.ru/search/?deny_category_prediction=true&from_global=true&text=Не+видя+звёзд+%28Герметикон+%238%29&product_id=406786388",
    },
    {
        name: "Бусидо",
        img: "img/i696993.jpg",
        decription: `Бусидо́ — кодекс самурая, свод правил,
        рекомендаций и норм поведения истинного воина
        в обществе, в бою и наедине с собой, воинская
        философия и мораль, уходящая корнями в
        глубокую древность.`,
        menu: "Исторические",
        wiki: "https://ru.wikipedia.org/wiki/Бусидо",
        buy: "https://www.ozon.ru/search/?deny_category_prediction=true&from_global=true&text=Бусидо.+Кодекс+самурая+%7C+Ямамото+Цунэтомо%2C+Такуан+Сохо&product_id=232959973",
    },
    {
        name: "О войне",
        img: "img/1004795763.jpg",
        decription: `«О войне» — трактат о военном искусстве, над которым с 1816 года до самой смерти работал прусский
        офицер Карл фон Клаузевиц (1780—1831). Хотя сочинение не было доведено до конца, вдова Клаузевица опубликовала его
        magnum opus в 1832 году. Принято считать, что трактат Клаузевица оказал большее влияние на военачальников конца XIX и
        XX веков, чем любая другая книга.`,
        menu: "Исторические",
        wiki: "https://ru.wikipedia.org/wiki/О_войне",
        buy: "https://www.ozon.ru/product/klauzevits-k-f-o-voyne-klauzevits-karl-fon-659053297/?asb=NAescxUDRgdgDSfycOhMEmW0mLbrWimjMLkuiWhw3Ks%253D&asb2=lUFrbf81WDHKM2GR3PSURrni_AqwDxLPQsB50LYj_ruDYSyyKlpXoL0_0faOwDT2&avtc=1&avte=2&avts=1665938781&keywords=j+войне+клаузевиц+фон&sh=odJtMusQdA",
    },
    {
        name: "Наука побеждать",
        img: "img/2600392_detail.jpg",
        decription: `«Наука побеждать» — книга генералиссимуса
        российской армии А. В. Суворова, где собраны его
        мысли и инструкции, относящиеся к военному
        делу в России.`,
        menu: "Исторические",
        wiki: "https://ru.wikipedia.org/wiki/Наука_побеждать",
        buy: "https://www.ozon.ru/product/nauka-pobezhdat-ispr-i-pererab-biografii-memuary-suvorov-aleksandr-vasilevich-249166419/?asb=v18dP2RfJ4Emq9KE1MP7QkDPiaP%252FJnfBdOFhL83%252Bg6I%253D&asb2=xguwP0UfoV8HCzfqxuB6iTsos4SJZzjJHjQJV4J79rzRoNn-sX-0EbPiiD1mlAv6&avtc=1&avte=2&avts=1665938823&keywords=наука+побеждать&sh=odJtMkaWGQ",
    },
    {
        name: "Айвенго",
        img: "img/auvengo.jpg",
        decription: `По завершении третьего крестового похода многие рыцари возвращаются в Европу. Король
        Ричард Львиное Сердце находится в плену у австрийского герцога Леопольда. Принц
        Джон сеет смуту в стране между норманнами исаксами и ведёт интриги против короля,
        подготавливая захват власти. Седрик Ротервудский, богатый землевладелец, внадежде
        возродить былое могущество саксов намеревается поставить во главе их сэра Ательстана,
        потомка короля Альфреда. Апатичный Ательстан не вызывает ни у кого доверия, и Седрик,
        дабы придать ещё большего весаего фигуре, мечтает женить его на своей воспитаннице,
        прекрасной леди Ровене, предком которой тоже является король Альфред Великий. Но на
        пути к заветной мечте старого тэна встал его сын Уилфред Айвенго, полюбивший Ровену.
        Седрик, верный своемуидеалу, изгнал сына из отчего дома и лишил наследства.`,
        menu: "Исторические",
        wiki: "https://ru.wikipedia.org/wiki/Айвенго",
        buy: "https://www.ozon.ru/product/ayvengo-34092055/?asb=2mS563fA6IbZXmcNeTI3XUIYtZf4XXztlTlcsdUHj5I%253D&asb2=LuFX_rRzPZX8UIkmemTPg2nMiCEJLOPUOASuNX0Qif1DT26HznVT6OK0gGGI8j1m&avtc=1&avte=2&avts=1667297976&keywords=айвенго&sh=odJtMgfYBA",
    },
    {
        name: "Политика",
        img: "img/1016661602.jpg",
        decription: `«Поли́тика» — трактат Аристотеля о государстве,
        содержащий начала социальной и политической
        философии. Трактат написан в последние годы
        жизни Аристотеля в Афинах, попавших под
        влияние Македонии.`,
        menu: "Исторические",
        wiki: "https://ru.wikipedia.org/wiki/Политика_(Аристотель)",
        buy: "https://www.ozon.ru/product/politika-aristotel-320521942/?asb=I5BPeKbad7H%252BCXGEG4t9FD5M4u5KqVmCWA0KnWOU25E%253D&asb2=UOnKIb0yybrB-W5c8zYv1mXJollGcqIWtnfzalBdQsx5K6SsddcEuNZRdxdPFthd&avtc=1&avte=2&avts=1667324774&keywords=политика+аристотель&sh=odJtMmTa1A",
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
