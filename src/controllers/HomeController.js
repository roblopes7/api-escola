import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Aluno',
      sobrenome: 'Teste',
      email: 'mail@mail.com',
      idade: 100,
      peso: 100.0,
      altura: 2.00,
    });
    res.json({
      novoAluno,
    });
  }
}

export default new HomeController();
