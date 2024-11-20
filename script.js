function showSlider(category) {
    // Hide all slider containers
    const sliders = document.querySelectorAll('.slider-container');
    sliders.forEach(slider => slider.style.display = 'none');
  
    // Remove active class from all nav items
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => item.classList.remove('active'));
  
    // Show the selected slider
    document.getElementById(category).style.display = 'block';
  
    // Add active class to the clicked nav item
    document.querySelector(`.nav-item[onclick="showSlider('${category}')"]`).classList.add('active');
  
    // Smooth scroll to the start of the slider container
    const container = document.getElementById(category);
    container.scrollTo({ left: 0, behavior: 'smooth' });
  }
  
  // Automatically display "All" slider on page load
  showSlider('all');
  




  function showTab(tabId) {
    // Hide all tab contents
    document.querySelectorAll('.tab-content').forEach(content => content.style.display = 'none');
    // Remove 'active' class from all buttons
    document.querySelectorAll('.tab-button').forEach(button => button.classList.remove('active'));
    // Show the selected tab and add 'active' class to the corresponding button
    document.getElementById(tabId).style.display = 'block';
    event.currentTarget.classList.add('active');
}




    // Function to show the popup
    function showPopupf1() {
      document.getElementById('popupOverlay1').style.display = 'flex';
    }
    // Function to hide the popup
    function hidePopupf1() {
      document.getElementById('popupOverlay1').style.display = 'none';
    }
    

    // Function to show the popup
    function showPopupf2() {
      document.getElementById('popupOverlay2').style.display = 'flex';
    }
    // Function to hide the popup
    function hidePopupf2() {
      document.getElementById('popupOverlay2').style.display = 'none';
    }


    // Function to show the popup
    function showPopupf3() {
      document.getElementById('popupOverlay3').style.display = 'flex';
    }
    // Function to hide the popup
    function hidePopupf3() {
      document.getElementById('popupOverlay3').style.display = 'none';
    }


    // Function to show the popup
    function showPopupp1() {
      document.getElementById('popupOverlay4').style.display = 'flex';
    }
    // Function to hide the popup
    function hidePopupp1() {
      document.getElementById('popupOverlay4').style.display = 'none';
    }


    // Function to show the popup
    function showPopupp2() {
      document.getElementById('popupOverlay5').style.display = 'flex';
    }
    // Function to hide the popup
    function hidePopupp2() {
      document.getElementById('popupOverlay5').style.display = 'none';
    }


    // Function to show the popup
    function showPopupp3() {
      document.getElementById('popupOverlay6').style.display = 'flex';
    }
    // Function to hide the popup
    function hidePopupp3() {
      document.getElementById('popupOverlay6').style.display = 'none';
    }


    // Function to show the popup
    function showPopupw1() {
      document.getElementById('popupOverlay7').style.display = 'flex' ;
    }
    // Function to hide the popup
    function hidePopupw1() {
      document.getElementById('popupOverlay7').style.display = 'none';
    }


    // Function to show the popup
    function showPopupw2() {
      document.getElementById('popupOverlay8').style.display = 'flex';
    }
    // Function to hide the popup
    function hidePopupw2() {
      document.getElementById('popupOverlay8').style.display = 'none';
    }






