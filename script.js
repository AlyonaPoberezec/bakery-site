document.addEventListener("DOMContentLoaded", function() {
    
    const btn = document.getElementById("magic-btn");
    const secretText = document.getElementById("secret-text");

    if (btn && secretText) {
        btn.addEventListener("click", function() {
            if (secretText.style.display === "none") {
                secretText.style.display = "block";
                btn.textContent = "Скрыть секрет";
            } else {
                secretText.style.display = "none";
                btn.textContent = "Узнать главный секрет выпечки ✨";
            }
        });
    }

    const tipBtn = document.getElementById("tip-btn");
    const randomTip = document.getElementById("random-tip");
    
    const tips = [
        "Совет: Все ингредиенты для выпечки должны быть комнатной температуры, если не указано иное.",
        "Совет: Обязательно просеивайте муку перед добавлением в тесто — оно станет воздушнее.",
        "Совет: Не открывайте духовку первые 20 минут выпечки, иначе бисквит осядет!",
        "Совет: Смазывайте форму маслом и присыпайте мукой, чтобы выпечка легко вынималась."
    ];

    if (tipBtn && randomTip) {
        tipBtn.addEventListener("click", function() {
            const randomIndex = Math.floor(Math.random() * tips.length);
            randomTip.textContent = tips[randomIndex];
        });
    }

    const contactForm = document.getElementById("contact-form");

    if (contactForm) {
        contactForm.addEventListener("submit", function(event) {
            event.preventDefault(); 
            const name = document.getElementById("name").value;
            alert("Спасибо, " + name + "! Ваше сообщение отправлено. (Это учебная форма).");
            contactForm.reset(); 
        });
    }
});
