$(function () {
	var header = $("#header"),
		introH = $("#intro").innerHeight(),
		scrollOffset = $(window).scrollTop()

	/* Fixed Header */
	checkScroll(scrollOffset)

	$(window).on("scroll", function () {
		scrollOffset = $(this).scrollTop()

		checkScroll(scrollOffset)
	})

	function checkScroll(scrollOffset) {
		if (scrollOffset >= introH) {
			header.addClass("fixed")
		} else {
			header.removeClass("fixed")
		}
	}

	/* Smooth Scroll */
	$("[data-scroll]").on("click", function (event) {
		event.preventDefault()

		var $this = $(this),
			blockId = $this.data("scroll"),
			blockOffset = $(blockId).offset().top

		$("#nav a").removeClass("active")
		$this.addClass("active")

		$("html, body").animate(
			{
				scrollTop: blockOffset,
			},
			200
		)
	})

	/* Menu nav toggle */
	$("#nav_toggle").on("click", function (event) {
		event.preventDefault()

		$(this).toggleClass("active")
		$("#nav").toggleClass("active")
	})

	$("#nav").on("click", function (event) {
		event.preventDefault()

		$("#nav_toggle").removeClass("active")
		$(this).removeClass("active")
	})

	/* Collapse */
	// $("[data-collapse]").on("click", function (event) {
	// 	event.preventDefault()

	// 	var $this = $(this),
	// 		blockId = $this.data("collapse")

	// 	$this.toggleClass("active")
	// })

    $(".collapsik").on("click", function(e) {
        e.preventDefault()

        $(this).toggleClass("active")
    })

    // ! re edited by me, firstly it was commended higher

	/* Slider */
	$("[data-slider]").slick({
		Infinity: true,
		fade: false,
		slidesToShow: 1,
		slidesToScroll: 1,
	})
})
