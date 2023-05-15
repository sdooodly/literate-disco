function fetchQuote() {
  return new Promise((resolve, reject) => {
    fetch('https://api.quotable.io/random')
      .then(response => response.json())
      .then(data => resolve(data.content))
      .catch(error => reject(error.message));
  });
}

async function generateQuote() {
  try {
    const quote = await fetchQuote();
    document.getElementById('quote').textContent = quote;
  } catch (error) {
    console.log('Error:', error);
  }
}

document.getElementById('quoteBtn').addEventListener('click', generateQuote);
