function generate(){
    var quotes = {
        "- Наполеон Хилл" : '"Что разум человека может постигнуть и во что он может поверить, того он способен достичь"',
        "- Флоренс Найтингейл" : '"Своим успехом я обязана тому, что никогда не оправдывалась и не принимала оправданий от других."',"- Майкл Джордан" : '"За свою карьеру я пропустил более 9000 бросков, проиграл почти 300 игр. 26 раз мне доверяли сделать финальный победный бросок, и я промахивался. Я терпел поражения снова, и снова, и снова. И именно поэтому я добился успеха."',
        "- Амелия Эрхарт" : '"Сложнее всего начать действовать, все остальное зависит только от упорства."',
        "- Анна Франк" : '"Как прекрасно, что не нужно ждать ни минуты, чтобы начать делать мир лучше."',
        "- Альберт Эйнштейн" : '"Логика может привести Вас от пункта А к пункту Б, а воображение — куда угодно."',
        "- Марк Твен" : '"Через 20 лет вы будете больше разочарованы теми вещами, которые вы не делали, чем теми, которые вы сделали. Так отчальте от тихой пристани. Почувствуйте попутный ветер в вашем парусе. Двигайтесь вперед, действуйте, открывайте!"',
        "- Борис Стругацкий" : '"Начинать всегда стоит с того, что сеет сомнения."',
        "- Фазиль Искандер" : '"Настоящая ответственность бывает только личной."',
        "- Вуди Аллен" : '"80% успеха - это появиться в нужном месте в нужное время."',
        "- Стив Джобс" : '"Ваше время ограничено, не тратьте его, живя чужой жизнью"',
        "- Винс Ломбарди" : '"Победа - это еще не все, все - это постоянное желание побеждать."',
        "- Махатма Ганди" : '"Свобода ничего не стоит, если она не включает в себя свободу ошибаться."',
        "- Христофор Колумб" : '"Вы никогда не пересечете океан, если не наберетесь мужества потерять берег из виду."',
        "- Фрэнк Синатра" : '"Лучшая месть – огромный успех."',
        "- Ральф Уолдо Эмерсон" : '"Человек, которым вам суждено стать – это только тот человек, которым вы сами решите стать."',
        "- Уоррен Баффет" : '"Лучше быть уверенным в хорошем результате, чем надеяться на отличный."',
        "- Теодор Рузвельт" : '"Стоит только поверить, что вы можете – и вы уже на полпути к цели."',
        "- Моисей Маймонид" : '"Научитесь говорить “Я не знаю”, и это уже будет прогресс."',
        "- Японская поговорка" : '"Упади семь раз и восемь раз поднимись."',
    }
    var authors = Object.keys(quotes);
    
    var author = authors[Math.floor(Math.random() * authors.length)];

    var quote = quotes[author];

    document.getElementById("quote").innerHTML = quote;
    document.getElementById("author").innerHTML = author;
}