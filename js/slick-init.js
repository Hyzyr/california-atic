const slickSliders = document.querySelectorAll(".slickSlider");
if (slickSliders) {
  const slickSettings = {
    default: {
      slidesToShow: 3,
      speed: 600,
      arrows: true,
      dots: false,
      infinite: false,
      focusOnSelect: true,
      prevArrow: $("#brandSlider .prevArrow"),
      nextArrow: $("#brandSlider .nextArrow"),
      responsive: [
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 2.5,
          },
        },
        {
          breakpoint: 720,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 590,
          settings: {
            slidesToShow: 1.6,
          },
        },
        {
          breakpoint: 520,
          settings: {
            slidesToShow: 1.2,
          },
        },
        {
          breakpoint: 460,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    },
    reviews: {
      slidesToShow: 3.25,
      speed: 600,
      arrows: true,
      dots: false,
      infinite: false,
      focusOnSelect: true,
      prevArrow: $("#brandSlider .prevArrow"),
      nextArrow: $("#brandSlider .nextArrow"),
      responsive: [
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 2.5,
          },
        },
        {
          breakpoint: 720,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 590,
          settings: {
            slidesToShow: 1.6,
          },
        },
        {
          breakpoint: 520,
          settings: {
            slidesToShow: 1.2,
          },
        },
        {
          breakpoint: 460,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    },
  };
  const getSlickSettings = (settings) => {
    return slickSettings[settings] ?? {};
  };
  slickSliders.forEach((slider) => {
    const settings = slider.getAttribute("data-slick") ?? null;
    const nextArrow = slider.parentElement.querySelector(".nextArrow") ?? null;
    const prevArrow = slider.parentElement.querySelector(".prevArrow") ?? null;

    $(slider).slick({
      ...getSlickSettings(settings),
      arrows: !!(nextArrow || prevArrow),
      nextArrow,
      prevArrow,
    });
  });
}
