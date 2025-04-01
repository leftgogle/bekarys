$(document).ready(function() {
    let popupOpen = false; // Флаг для отслеживания состояния попапа

    $(".tab-link").click(function() {
        if (popupOpen) return; // Если попап открыт, вкладки не работают
        $(".tab-link").removeClass("active");
        $(this).addClass("active");
        $(".tab-content").hide();
        $("#" + $(this).data("tab")).show();
    });

    $("#openPopup").click(function() {
        popupOpen = true; // Устанавливаем флаг в true
        $("#popup").fadeIn();
    });

    $(".close").click(function() {
        popupOpen = false; // После закрытия попапа снова включаем функции
        $("#popup").fadeOut();
    });

    $(".accordion-header").click(function() {
        if (popupOpen) return; // Если попап открыт, аккордеон не работает
        $(this).next(".accordion-content").slideToggle();
        $(".accordion-content").not($(this).next()).slideUp();
    });
});