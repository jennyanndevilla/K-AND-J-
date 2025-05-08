 <script>
    function jumpEffect(button) {
      button.classList.add("jumping");

      // Remove the animation class after it finishes
      setTimeout(function() {
        button.classList.remove("jumping");
      }, 300); // 300ms matches the animation duration
    }
  </script>
