const itemsQuestionsAndResponses = document.querySelectorAll(".item")

itemsQuestionsAndResponses.forEach(function (item) {
    item.addEventListener("click", function() {
        const itemActiveCurrent = document.querySelector(".open")

        if (itemActiveCurrent) {
            itemActiveCurrent.classList.remove("open")
        }
        item.classList.add("open")
    })
})