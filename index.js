class Aluno {
    nome;
    matricula;
    nota1;
    nota2;
    nota3;
    media;

    constructor(nome, matricula, nota1, nota2, nota3,) {
        this.nome = nome;
        this.matricula = matricula;
        this.nota1 = nota1;
        this.nota2 = nota2;
        this.nota3 = nota3;
        this.media = 0;

        this.arrayAlunos = [];

    }

    adicionar(aluno) {
        this.arrayAlunos.push(aluno);
    }

    salvar() {
        let aluno = this.lerDados();

        if (this.validar(aluno) == true) {
            this.adicionar(aluno);
            //alert('Aluno adicionado !')
        }

        this.listaTabela();
        this.limpar();
    }

    listaTabela() {
        let tbody = document.getElementById('tbody');
        tbody.innerText = '';

        for (let i = 0; i < this.arrayAlunos.length; i++) {
            let tr = tbody.insertRow();
            let td_nome = tr.insertCell();
            let td_matricula = tr.insertCell();
            let td_nota1 = tr.insertCell();
            let td_nota2 = tr.insertCell();
            let td_nota3 = tr.insertCell();
            let td_media = tr.insertCell();
            let td_opcoes = tr.insertCell();

            td_nome.innerText = this.arrayAlunos[i].nome;
            td_matricula.innerText = this.arrayAlunos[i].matricula;
            td_nota1.innerText = this.arrayAlunos[i].nota1;
            td_nota2.innerText = this.arrayAlunos[i].nota2;
            td_nota3.innerText = this.arrayAlunos[i].nota3;
            td_media.innerText = this.arrayAlunos[i].media;

            td_matricula.classList.add('center');
            td_nome.classList.add('center');
            td_nota1.classList.add('center');
            td_nota2.classList.add('center');
            td_nota3.classList.add('center');
            td_media.classList.add('center');

            let imgDelete = document.createElement('img');
            imgDelete.src = 'img/delet.png';
            imgDelete.setAttribute("onclick", "aluno.deletar(" + this.arrayAlunos[i].matricula + ")");

            td_opcoes.appendChild(imgDelete);
            td_opcoes.classList.add('center');

            var media = (parseFloat(this.arrayAlunos[i].nota1) + parseFloat(this.arrayAlunos[i].nota2) +
                parseFloat(this.arrayAlunos[i].nota3)) / 3;

            td_media.innerText = media.toFixed(2);
        }
    }

    lerDados() {
        let aluno = {}

        aluno.nome = document.getElementById('aluno').value;
        aluno.matricula = document.getElementById('matricula').value;
        aluno.nota1 = document.getElementById('nota1').value;
        aluno.nota2 = document.getElementById('nota2').value;
        aluno.nota3 = document.getElementById('nota3').value;

        return aluno;
    }

    validar(aluno) {
        let msg = '';

        if (aluno.nome == '') {
            msg += 'Complete o campo: Nome \n';
        }
        if (aluno.matricula == '') {
            msg += 'Complete o campo: Matrícula \n';
        }
        if (aluno.nota1 == '') {
            msg += 'Complete o campo: Primeira Nota \n';
        }
        if (aluno.nota2 == '') {
            msg += 'Complete o campo: Segunda Nota \n';
        }
        if (aluno.nota3 == '') {
            msg += 'Complete o campo: Terceira Nota \n';
        }
        if (msg != '') {
            alert(msg);
            return false;
        }
        for (let i = 0; i < this.arrayAlunos.length; i++) {
            if (aluno.matricula == this.arrayAlunos[i].matricula) {
                alert('Matrícula já existente!');
                return false;
            }
        }
        return true;
    }

    limpar() {
        document.getElementById('aluno').value = '';
        document.getElementById('matricula').value = '';
        document.getElementById('nota1').value = '';
        document.getElementById('nota2').value = '';
        document.getElementById('nota3').value = '';

    }

    deletar(matricula) {

        if (confirm('Deseja Deletar o aluno: ' + aluno + ' ?')) {
            let tbody = document.getElementById('tbody');

            for (let i = 0; i < this.arrayAlunos.length; i++) {
                if (this.arrayAlunos[i].matricula == matricula) {
                    this.arrayAlunos.splice(i, 1);
                    tbody.deleteRow(i);
                }
            }

            console.log(this.arrayAlunos)
        }
    }
}

var aluno = new Aluno();

