document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("text1").innerHTML = "Твоя улыбка это что-то невероятное, теплое и очень милое (улыбайся почаще)\n\nС тобой всё становится особенным, простые разговоры превращаются в самые важные слова, а обычные дни в лучшие воспоминания. Ты делаешь мир вокруг светлее, наполняешь его теплом, и я не устану повторять, как сильно я тебя люблю.";
    
    document.getElementById("text2").innerHTML = "В ее карих глазах столько глубины, что я хочу потеряться в них и не захотеть находиться.\n\nОна тот человек, который делает все вокруг особенным. С ней даже самые обычные моменты становятся незабываемыми, а мир кажется лучше и добрее.\n\nЯ счастлив, что знаю ее, что могу любить ее. Она мое вдохновение, моя нежность, мое все.";

    document.getElementById("text3").innerHTML = "Я понял что настоящая любовь это не только быть рядом, показывать насколько она сильна, но и уметь отпускать. Если так будет лучше для тебя.\n\nЕсли свобода сделает тебя счастливее, значит, так правильно. Спасибо Хади..";

    // Функция для отслеживания прокрутки и появления разделов
    function revealSections() {
        let sections = document.querySelectorAll(".section");
        let windowHeight = window.innerHeight;
        
        sections.forEach((section, index) => {
            let sectionTop = section.getBoundingClientRect().top;
            
            if (sectionTop < windowHeight * 0.9) {
                setTimeout(() => {
                    section.classList.add("visible");
                }, index * 500); // Чуть быстрее, но плавно
            }
        });
    }

    window.addEventListener("scroll", revealSections);
    revealSections(); // Запуск при загрузке
});
