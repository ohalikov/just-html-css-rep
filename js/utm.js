        // Добавьте UTM-метку utm_replace к ссылке в рекламной кампании, например
        //site.ru/?utm_campaign=name&utm_replace=moscow

        // moscow, это краткий код заголовка, которому соответствует длинный заголовок, например
        // moscow, это  «Заказать эвакуатор в Москве!»
        var content = {
            moscow: 'Заказать<span style="color: #ffb300;">эвакуатор </span> </br> за 5 минут в Москве',
            spectehnika: 'СНЕГОУБОРОЧНАЯ ТЕХНИКА<span style="color: #ffb300;"> С ЭКИПАЖЕМ </span> В АРЕНДУ <span style="color: #ffb300;">КРУГЛОСУТОЧНО</span>',
        
        };

        //  Здесь нужно между одинарными кавычками вставить селектор http://joxi.ru/GrqZodptNMNlWm
        var selector = 'body > section.first_section.first_bg > div > div > div:nth-child(2) > div.col-12.col-lg-7 > h1';


        // Далее ничего не меняйте, это исполняющий замену скрипт
        function replacer(content) {
            var utm = /utm_replace=([^&]*)/g.exec(document.URL)[1];
            if (utm in content) {
                document.querySelector(selector).innerHTML = content[utm];
            } else {
                console.log('Каталог контента не имеет такой utm метки');
            };
        };

        replacer(content);