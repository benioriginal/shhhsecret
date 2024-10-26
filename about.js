const desktopVer = document.getElementById('desktopVer')
const mobileVer = document.getElementById('mobileVer')


function throttle(func, delay) {
    let lastCall = 0;
    return function(...args) {
      const now = new Date().getTime();
      if (now - lastCall < delay) {
        return;
      }
      lastCall = now;
      return func(...args);
    };
  }
  
  if (window.innerWidth <= 768) {
    const mobileVer = document.getElementById('mobileVer');
    const desktopVer = document.getElementById('desktopVer');
    mobileVer.style.display = 'block';
    desktopVer.remove();
    let menuDown = false
    const extendedMenu = document.getElementById('extendedMenu');
    mobileVer.style.transform = `translateY(-${extendedMenu.offsetHeight + 5}px)`;
    console.log(extendedMenu.offsetHeight);
    window.onscroll = function(e) {
      // print "false" if direction is down and "true" if up
      if (this.oldScroll > this.scrollY){
        menuDown = true
        console.log("true")
      }
      else{
        menuDown = false
        console.log('false')
      }
      this.oldScroll = this.scrollY;
      const offsetHeight = extendedMenu.offsetHeight + 5;
      if (!menuDown){
          extendedMenu.style.display = 'none'
          mobileVer.animate([
            { transform: `translateY(-${offsetHeight}px)` },
            { transform: `translateY(0)` }
          ], {
            duration: 0,
            fill: 'forwards'
          });
          menuDown = !menuDown
    }
    else{
        extendedMenu.style.display = 'flex'

        mobileVer.animate([
            { transform: `translateY(0)` },
            { transform: `translateY(-${offsetHeight}px)` }
          ], {
            duration: 0,
            fill: 'forwards'
          });
          menuDown = !menuDown
    }
    }
    
    const menuButton = document.getElementById('menuButton');
    menuButton.addEventListener("click", () => {
      const offsetHeight = extendedMenu.offsetHeight + 5;
      if (!menuDown){

          mobileVer.animate([
            { transform: `translateY(-${offsetHeight}px)` },
            { transform: `translateY(0)` }
          ], {
            duration: 300,
            fill: 'forwards'
          });
          menuDown = !menuDown
    }
    else{
        mobileVer.animate([
            { transform: `translateY(0)` },
            { transform: `translateY(-${offsetHeight}px)` }
          ], {
            duration: 300,
            fill: 'forwards'
          });
          menuDown = !menuDown
    }

  });
  
}
  
else{
    mobileVer.remove()
}