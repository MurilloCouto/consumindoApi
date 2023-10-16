async function getAdressByCep() {
    const cep = document.getElementById('cep').value;
    try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const data = await response.json();
        console.log(data);
        document.getElementById('rua').value = data.logradouro;
        document.getElementById('bairro').value = data.bairro;
        document.getElementById('cidade').value = data.localidade;
    } catch (error) {
        alert(error.message);
    };
}

async function getPrevisao() {
    const lat = document.getElementById('lat').value;
    const long = document.getElementById('long').value;
    try {
        const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&hourly=temperature_2m`);
        const data = await response.json();
        console.log(data);
        document.getElementById('resposta').innerHTML = "Previsão para os próximos dias: ";
        for (let i = 0; i < data.hourly.temperature_2m.length; i++) {
            document.getElementById('resposta').innerHTML += `<div>${data.hourly.time[i]} previsto ${data.hourly.temperature_2m[i]} °C</div>`;
        }
    } catch (error) {
        alert(error.message);
    };
}