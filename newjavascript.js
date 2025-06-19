function selectTopics(subjectId) {
  const topics = document.querySelectorAll('.topics');
  topics.forEach(div => {
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
