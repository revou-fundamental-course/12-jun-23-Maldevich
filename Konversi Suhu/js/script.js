// Mengambil element data berdasarkan input dan tombol input
const celsiusInput = document.getElementById('celsius');
const fahrenheitInput = document.getElementById('fahrenheit');
const convertBtn = document.getElementById('convertBtn');
const resetBtn = document.getElementById('resetBtn');
const reverseBtn = document.getElementById('reverseBtn');
const submitBtn = document.getElementById('submitBtn');
const explanationContainer = document.getElementById('explanation');

// Mengaktif atau menonaktifkan tombol konversi input
celsiusInput.addEventListener('input', function () {
  convertBtn.disabled = celsiusInput.value.trim() === '';
});

// Mengkonversi °Celsius ke °Fahrenheit
convertBtn.addEventListener('click', function () {
  const celsius = parseFloat(celsiusInput.value);
  const fahrenheit = (celsius * 9 / 5) + 32;
  fahrenheitInput.value = fahrenheit.toFixed(2);

  // Menampilkan kolom penjelasan konversi °Celcius ke °Fahrenheit
  explanationContainer.textContent = `${celsius} °Celcius*(9/5)+32=${fahrenheit.toFixed(2)} °F`;
});

// Mereset kolom input dan penjelasan
resetBtn.addEventListener('click', function () {
  celsiusInput.value = '';
  fahrenheitInput.value = '';
  convertBtn.disabled = true;
  explanationContainer.textContent = '';
});

// Memutarbalikkan hasil konversi antara °Celcius dan °Fahrenheit ke °Fahrenheit °Celcius
reverseBtn.addEventListener('click', function () {
  const celsius = parseFloat(celsiusInput.value);
  const fahrenheit = parseFloat(fahrenheitInput.value);
  celsiusInput.value = fahrenheit ? ((fahrenheit - 32) * 5 / 9).toFixed(2) : '';
  fahrenheitInput.value = celsius ? ((celsius * 9 / 5) + 32).toFixed(2) : '';

  // Menampilkan kolom penjelasan hasil memutarbalikkan hasil konversi
  if (celsius && fahrenheit) {
    explanationContainer.textContent = `${fahrenheit.toFixed(2)} °F-32*(5/9)=${celsius.toFixed(2)} °C`;
  } else {
    explanationContainer.textContent = '';
  }
});