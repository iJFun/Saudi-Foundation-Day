function scrollToElement(id) {
  var headerHeight = document.getElementById('topheader').offsetHeight; 
  var element = document.getElementById(id);
  var offsetPosition = element.offsetTop - headerHeight; 
  console.log(offsetPosition)
  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'
  });}