const rolloverImage = document.getElementById('rolloverImage');

const handleMouseOver = () => {
  rolloverImage.src = 'image2.jpg';
};

const handleMouseOut = () => {
  rolloverImage.src = 'image1.jpg';
};

rolloverImage.addEventListener('mouseover', handleMouseOver);
rolloverImage.addEventListener('mouseout', handleMouseOut);