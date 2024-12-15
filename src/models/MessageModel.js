module.exports = class MessageModel {
  static getSucess(nome) {
    return `${nome.capitalize()} obtido com sucesso.`;
  }
  static getFail(nome) {
    return `Erro ao obter ${nome}.`;
  }
  static postSucess(nome) {
    return `${nome.capitalize()} adicionado com sucesso.`;
  }
  static postFail(nome) {
    return `Erro ao adicionar o ${nome}.`;
  }
  static putSucess(nome) {
    return `${nome.capitalize()} editado com sucesso.`;
  }
  static putFail(nome) {
    return `Erro ao editar o ${nome}.`;
  }
  static deleteSucess(nome) {
    return `${nome.capitalize()} deletado com sucesso.`;
  }
  static deleteFail(nome) {
    return `Erro ao deletar o ${nome}.`;
  }
};
