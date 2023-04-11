const slickSliders = document.querySelectorAll(".slickSlider");
if (slickSliders) {
  const slickSettings = {
    companies: {
      slidesToShow: 6,
      infinite: true,
      autoplay: true,
      speed: 1500,
      centerMode: true,
      focusOnSelect: true,
      arrows: false,
      dots: false,
      responsive: [
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 4,
            speed: 1000,
            autoplay: true,
          },
        },
        {
          breakpoint: 720,
          settings: {
            slidesToShow: 3,
            speed: 1000,
            autoplay: true,
          },
        },
        {
          breakpoint: 590,
          settings: {
            slidesToShow: 2.6,
            speed: 1000,
            autoplay: true,
          },
        },
        {
          breakpoint: 520,
          settings: {
            slidesToShow: 2,
            speed: 1000,
            autoplay: true,
          },
        },
        {
          breakpoint: 460,
          settings: {
            slidesToShow: 2,
            cssEase: "linear",
            speed: 2000,
            autoplay: true,
            autoplaySpeed: 0,
          },
        },
      ],
    },
    default: {
      slidesToShow: 3,
      speed: 600,
      arrows: true,
      dots: false,
      infinite: false,
      prevArrow: $("#brandSlider .prevArrow"),
      nextArrow: $("#brandSlider .nextArrow"),
      responsive: [
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 2.5,
            speed: 1000,
            autoplay: true,
          },
        },
        {
          breakpoint: 720,
          settings: {
            slidesToShow: 2,
            speed: 1000,
            autoplay: true,
          },
        },
        {
          breakpoint: 590,
          settings: {
            slidesToShow: 1.6,
            speed: 1000,
            autoplay: true,
          },
        },
        {
          breakpoint: 520,
          settings: {
            slidesToShow: 1.2,
            speed: 1000,
            autoplay: true,
          },
        },
        {
          breakpoint: 460,
          settings: {
            slidesToShow: 1,
            speed: 1000,
            autoplay: true,
          },
        },
      ],
    },
    feedbacksImages: {
      slidesToShow: 1,
      speed: 300,
      arrows: false,
      dots: false,
      fade: true,
      cssEase: "ease-out",
      asNavFor: "#feedbacksContent",
    },

    feedbacksContent: {
      slidesToShow: 1,
      speed: 0,
      arrows: false,
      dots: true,
      appendDots: $("#feedbacksContentDots"),
      fade: true,
      cssEase: "linear",
      asNavFor: "#feedbacksImages",
    },
  };
  const getSlickSettings = (settings) => {
    return slickSettings[settings] ?? {};
  };
  slickSliders.forEach((slider) => {
    const settings = slider.getAttribute("data-slick") ?? null;
    $(slider).slick(getSlickSettings(settings));
  });
}
