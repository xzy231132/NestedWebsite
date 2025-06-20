// This function is used to store topics and hides other topics when a subject is clicked.

function selectTopics(subjectId) {
  const topics = document.querySelectorAll('.topics');
  topics.forEach(div => {
    // I had to use the === operator for validation purposes when using netbeans for this, as netbeans did not enjoy my usage of ==.
    if (div.id === `${subjectId}-topics`) {
        if (div.style.display === 'block') {
            div.style.display = 'none';
        } else {
            div.style.display = 'block';
        } 
    } else {
      div.style.display = 'none';
    }
  });
}
