
function listartist() {
    console.log(blend.map(blend => blend.artist));
  }

  document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('searchForm');
    const input = document.getElementById('searchInput');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent default form submission behavior
  
      const inputValue = input.value.trim(); // Get the trimmed value of the input
      if (inputValue !== '') {
        // Update the form action with the value entered by the user
        form.action = `/blender#${inputValue}`;
        // Submit the form
        form.submit();
      }
    });
  });


