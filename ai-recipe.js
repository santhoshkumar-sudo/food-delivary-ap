(() => {
  const $ = selector => document.querySelector(selector);
  const foodLogo = document.createElement('a');
  foodLogo.className = 'hero-food-logo';
  foodLogo.href = 'https://www.flaticon.com/free-icon/masala_4780064';
  foodLogo.target = '_blank';
  foodLogo.rel = 'noopener noreferrer';
  foodLogo.setAttribute('aria-label', 'Masala bowl icon by Freepik on Flaticon');
  foodLogo.innerHTML = '<img src="https://cdn-icons-png.flaticon.com/512/4780/4780064.png" alt="Masala spice bowl"><span>INDIAN KITCHEN</span>';
  $('.hero-copy').prepend(foodLogo);

  const matchCraving = craving => {
    const text = craving.toLowerCase();
    if (/veg|veget|light|healthy|dosa|south/.test(text)) return { name: 'Madras Tiffin Room', detail: 'dosa, idli and filter coffee' };
    if (/sweet|dessert|mithai/.test(text)) return { name: 'Mithai Mahal', detail: 'gulab jamun and Bengali sweets' };
    if (/chaat|snack|quick|tangy/.test(text)) return { name: 'Chaat Republic', detail: 'fresh chaat and snacks' };
    if (/butter|creamy|north|tandoor/.test(text)) return { name: 'Delhi Darbar', detail: 'North Indian comfort food' };
    return { name: 'Nawab’s Biryani', detail: 'aromatic Hyderabadi biryani' };
  };

  $('#aiPickButton').onclick = () => {
    const panel = $('#aiPicker');
    panel.hidden = !panel.hidden;
    if (!panel.hidden) $('#aiTasteInput').focus();
  };

  $('#aiTasteForm').onsubmit = event => {
    event.preventDefault();
    const match = matchCraving($('#aiTasteInput').value);
    $('#aiResult').textContent = `SavourAI recommends ${match.name}: ${match.detail}, chosen for your craving.`;
  };

  const steps = ['toast the spices', 'layer the rice', 'add saffron & mint', 'seal in the steam'];
  let index = 0;
  setInterval(() => {
    index = (index + 1) % steps.length;
    $('#recipeStep').textContent = `0${index + 1}`;
    $('#recipeStepName').textContent = steps[index];
  }, 2400);
})();
