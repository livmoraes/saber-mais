const imagemInput = document.getElementById('imagemInput');
const imagemPreview = document.getElementById('galeriaImagens');

imagemInput.addEventListener('change', function(event) {
    const files = event.target.files;

    for (let i = 0; i < files.length; i++){
        const file = files[i];
         
        if (file){
            const reader = new FileReader();

            reader.onload = function(e){
                const img = document.createElement('img');
                img.src = e.target.result;
galeriaImagens.appendChild(img);
            };
reader.readAsDataURL(file);
        }
 }
});
