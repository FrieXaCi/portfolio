document.addEventListener('DOMContentLoaded', () => {
  // Get all the info buttons in all card containers
  const infoBtns = document.querySelectorAll('.card-container .info-btn');

  // Loop through each info button
  infoBtns.forEach((infoBtn) => {
    // Add click event listener to each info button
    infoBtn.addEventListener('click', () => {
      // Get the parent card container element
      const cardContainer = infoBtn.closest('.card-container');

      const cardSections = cardContainer.querySelectorAll('.card-section');

      cardSections.forEach((cardSection) => {
        cardSection.remove();
      });

      // Show the card info section
      const cardInfo = cardContainer.querySelector('.card-info');
      cardInfo.classList.remove('hide');
      cardInfo.classList.add('show-info');

      const backBtn = cardContainer.querySelector(' .back-btn');
      backBtn.addEventListener('click', () => {
        cardSections.forEach((cardSection) => {
          cardContainer.appendChild(cardSection);
        });
        cardInfo.classList.remove('show-info');
        cardInfo.classList.add('hide');
      });
    });
  });
});
