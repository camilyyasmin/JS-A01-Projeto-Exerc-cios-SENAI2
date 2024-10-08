function mostrarErro(mensagem) {
    let divErro = document.getElementById('mensagem-erro');

    divErro.style.display = 'block';
    divErro.innerText = mensagem;
}

function esconderErro() {

    let divErro = document.getElementById('mensagem-erro');
    divErro.style.display = 'none';
}

function validarDados() {
    let nome = frmRegistro.inNome.value;
    let telefone = frmRegistro.inFone.value;
    let email = frmRegistro.inMail.value;
    let cargo = frmRegistro.inCargo.value;
    let dept = frmRegistro.inDepto.value;

    esconderErro();

    if (nome.trim() == '') {
        mostrarErro('O campo "Nome" não pode estar vazio!');
        frmRegistro.inNome.focus();
        return false;
    }

    if (telefone.trim() == '') {
        mostrarErro('O campo "Telefone" não pode estar vazio');
        frmRegistro.inFone.focus();
        return false;
    }

    if (email.trim() == '') {
        mostrarErro('O campo "E-mail" não pode estar vazio');
        frmRegistro.inMail.focus();
        return false;
    }

    if (cargo.trim() == '') {
        mostrarErro('O campo "Cargo do Funcionário" não pode estar vazio');
        frmRegistro.inCargo.focus();
        return false;
    }

    if (dept.trim() == '') {
        mostrarErro('O campo "Departamento do Funcionário" não pode estar vazio');
        frmRegistro.inDepto.focus();
        return false;
    }

    document.getElementById('spNome').innerText = nome;
    document.getElementById('spCargo').innerText = cargo;
    document.getElementById('spDepto').innerText = dept;

    const qrCodeContainer = document.getElementById('qrCode');
    qrCodeContainer.style.display = 'block';


    const qrCodeImg = qrCodeContainer.querySelector('img');
    qrCodeImg.style.width = '300px';
    qrCodeImg.style.height = 'auto';
}

document.getElementById('inImg').addEventListener('change', function () {
    let imagemInput = frmRegistro.inImg;
    let imagem = imagemInput.files[0];
    if (imagem) {
        let reader = new FileReader();
        reader.onload = function (e) {
            let imgElement = document.createElement('img');
            imgElement.src = e.target.result;
            imgElement.alt = 'Foto do Funcionário';
            imgElement.style.width = '100px';
            imgElement.style.height = 'auto';
            imgElement.style.marginTop = '15px';
            document.getElementById('area-foto').innerHTML = '';
            document.getElementById('area-foto').appendChild(imgElement);
        }
        reader.readAsDataURL(imagem);
    }
});



