const fields = [
  document.querySelector('#date'),
  document.querySelector('#value'),
  document.querySelector('#amount')
];

const tbody = document.querySelector('table tbody');

document
  .querySelector('.form')
  .addEventListener('submit', function(event) {
    event.preventDefault();

    const tr = document.createElement('tr');

    fields.forEach(function(field) {
      const td = document.createElement('td');

      td.textContent = field.value;

      tr.appendChild(td);
    });

    const tdVolume = document.createElement('td');

    tdVolume.textContent = fields[1].value * fields[2].value;

    tr.appendChild(tdVolume);

    tbody.appendChild(tr);

    fields[0].value = '';
    fields[1].value = '';
    fields[2].value = '';

    fields[0].focus();
  });