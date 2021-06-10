$('#btnInsert').click(function () {

    const key = $('#inpKey').val();
    const value = $('#inpValue').val();

    if (key && value) {
        localStorage.setItem(key, value);
        setTimeout(reload, 900)
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Notitie succesvol opgeslagen!',
            showConfirmButton: false,
            timer: 1500
        });
    }
});
function reload() {
    location.reload();

}

const lsOutput = document.getElementById("lsOutput");
for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);

    lsOutput.innerHTML += `<button type="button" class="btn btn-danger paddingr click"  id="refresh" onclick="localStorage.removeItem(localStorage.key(${i}))" >Delete</button><b>${key}</b>: ${value} <hr>`;

}

$('.click').click(function () {
    location.reload();
});



