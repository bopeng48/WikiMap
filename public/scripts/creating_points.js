function submitForm() {
   var frm = document.getElementsByName('submit');
   frm.submit(); // Submit
   frm.reset();  // Reset
   return false; // Prevent page refresh
};