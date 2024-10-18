const swiper = new Swiper('.slider', {
  loop: true,
  autoplay: {
    delay: 2000,
  },
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  slidesPerView: 2,
})


$('.accordion-header').click(function () {
  $('.accordion-header').not(this).next().slideUp();
  $('.accordion-header').not(this).removeClass('active');
  $(this).next().slideToggle();
  $(this).toggleClass('active');
});

#header - hamburger {
  background: #d3d3d3;
  cursor: pointer;
  width: 50px;
  aspect - ratio: 1 / 1;
  margin - left: auto;
  position: relative;
  z - index: 10;
}


#header - hamburger span {
  display: inline - block;
  background: #fff;
  width: 50 %;
  height: 2px;
  transition: all .4s;
  position: absolute;
  left: 50 %;

  transform: translateX(-50 %);
}


#header - hamburger span: nth - of - type(1) {
  top: 30 %;
}


#header - hamburger span: nth - of - type(2) {
  top: 50 %;
}


#header - hamburger span: nth - of - type(3) {
  top: 70 %;
}


#header - hamburger.active span: nth - of - type(1) {
  top: 50 %;
  left: 25 %;
  transform: rotate(-45deg);
  width: 50 %;
}

#header - hamburger.active span: nth - of - type(2) {
  opacity: 0;
}

#header - hamburger.active span: nth - of - type(3) {
  top: 50 %;
  left: 25 %;
  transform: rotate(45deg);
  width: 50 %;
}

#hamburger - window {
  transition: 0.3s;
  text - align: center;
  visibility: hidden;
  position: fixed;
  top: 50px;
  right: -100vw;
  z - index: 1;
  width: 100 %;
  height: calc(100vh - 50px);
  overflow - y: scroll;
  -ms - overflow - style: none;
  scrollbar - width: none;
}

.content:: -webkit - scrollbar{
  display: none;
}

#hamburger - window.open {
  visibility: visible;
  right: 0;
}

.hamburger - window__link {
  display: block;
  margin: 0 auto;
  width: 100 %;
  position: relative;
}

.hamburger - window__link:hover {
  background - color: #d3d3d3;
}

.hamburger - window__link: first - child.menu - link {
  border - top: 1px solid #ccc;
}

.menu - link {
  display: flex;
  align - items: center;
  border - bottom: 1px solid #ccc;
  padding: 23px 0 23px 5 %;
  color: #d3d3d3;
}    

.hamburger - window__link::after {
  content: '\f054';
  font - weight: 900;
  font - family: "Font Awesome 6 Free";
  display: inline - block;
  position: absolute;
  right: 5 %;
  top: 50 %;
  transform: translateY(-50 %);
  width: 10px;
  aspect - ratio: 1 / 1;
  color: #d3d3d3;
}

.hamburger - window__title {
  color: #d3d3d3;
}    