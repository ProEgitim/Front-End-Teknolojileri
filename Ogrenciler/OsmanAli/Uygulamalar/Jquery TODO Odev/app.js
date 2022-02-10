    //Tüm görevlerin olaylarını tek bir olay içerisine alalım.
    $(document).ready(function () {

    //Tüm görevlerimizi dolduralım
    const lokalAll = { ...localStorage };
    console.log(lokalAll);

    //Burada lokaldekileri listeye çektiremedim... Hoca ile birlikte bir bakılsın.

    //Tıklayınca üzeri çizili tamamlandı olarak kaydetsin
    $("ul").on("click", "li", function () {
        $(this).toggleClass("completed");
    });

    //Tıklayınca görev kaydını sildirelim
    $("ul").on("click", "span", function (e) {
        $(this).parent().fadeOut(500, function () {
            $(this).remove();
            //Yerel diskten sildirelim.
            localStorage.removeItem(rndmNbr)
        });
        e.stopPropagation();
    });

    //Tıklayınca yeni görev kaydını listeye ve yerel diske ekletelim.
    $("input[type='text']").keypress(function (e) {
        if (e.which === 13) {

            var todoText = $(this).val();
            $(this).val("");

            //Listeye eklettik.
            $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>")

            //Yerel diske ekletelim.
            var setLokal = todoText;
            rndmNbr = Math.floor(Math.random() * 100);
            localStorage.setItem(rndmNbr, JSON.stringify(setLokal));
        }
        
    });


    //Artı butonu ile yeni bir görev alanı ekletelim.
    $(".fa-plus").click(function () {
        $("input[type='text']").fadeToggle();
    });




});