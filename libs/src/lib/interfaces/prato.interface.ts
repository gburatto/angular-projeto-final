export interface IPrato {

  /**
   * Identificador único do prato.
   */
  _id: number;

  /**
   * URL da imagem que ilustra o prato.
   */
  imagem: string;

  /**
   * Nome do prato.
   */
  nome: string;

  /**
   * Tipo do prato (ex.: prato principal, entrada, sobremesa).
   */
  tipo: string;

  /**
   * Descrição do prato.
   */
  descricao: string;

  /**
   * Se é um prato vegetariano ou não.
   */
  vegetariano: boolean;

  /**
   * Preço do prato.
   */
  preco: number;

}
