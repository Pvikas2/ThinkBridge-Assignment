
// document.addEventListener('DOMContentLoaded', function() {
//     fetch('/api/invoice')
//         .then(resp => resp.json())
//         .then(data => {
//             let html = '<ul>';
//             data.items.forEach(item => {
//                 html += `<li>${item.name} - $${item.price}</li>`;
//             });
//             html += '</ul>';
//             document.getElementById('invoice-container').innerHTML = html;
//         })
//         .catch(err => console.error("Failed to load invoice:", err));
// }); 


document.addEventListener('DOMContentLoaded', function() {
    console.log('Page loaded, fetching invoice...');
    // Change this URL to match your .NET server (e.g., http://localhost:5000/api/invoice)
    fetch('http://localhost:5000/api/invoice')
        .then(resp => {
            console.log('Response status:', resp.status);
            return resp.json();
        })
        .then(data => {
            console.log('Received data:', data);
            let html = '<ul>';
            data.items.forEach(item => {
                html += `<li>${item.name} - $${item.price}</li>`;
            });
            html += '</ul>';
            document.getElementById('invoice-container').innerHTML = html;
            console.log('Invoice rendered');
        })
        .catch(err => {
            console.error("Failed to load invoice:", err);
            document.getElementById('invoice-container').innerHTML = '<p>Error loading invoice. Check console.</p>';
        });
});