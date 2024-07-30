// Declaro mis variables a utilizar
const form = document.getElementById('form');

// Capturo la información del formulario y el evento de submit
form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Declaro mis variables a utilizar
    let total = parseInt(document.getElementById('total').value);
    let porcenP = parseInt(document.getElementById('propina').value);
    let resumen = document.getElementById('resumen');
    let pagarT = 0;
    
    //Valido que los campos no estñen vacíos
    if (isNaN(total) || isNaN(porcenP)) {
        alert('Ambos campos deben ser llenados');
        return;
    } 
    
    //Estoy valiidando que el porcentaje esté entre 0% y 100%
    if (porcenP >=0 && porcenP <=100 ){
        let propina = (total * porcenP) / 100;
        pagarT = (total + propina);

        // Añadir la clase 'card' al resumen
        resumen.classList.add('card');
        resumen.innerHTML = `
            <h2 class="card-title">Resumen</h2>
            <p>Total de la cuenta: $${total}</p>  
            <p>Propina: $${propina}</p>  
            <p>Total a pagar: $${pagarT}</p>
        `;
    } else {
        alert('El porcentaje de propina debe ser entre (0% y 100%) ')
    }

    
    
    

    document.getElementById('total').value = '';
    document.getElementById('propina').value = '';
});
