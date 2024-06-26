import axios from "axios";

const api = axios.create({
  baseURL: 'https://blogpessoal-yedv.onrender.com'
})

export const cadastrarUsuario = async(url: string, dados: object, setDados: (data: unknown) => void) => {
  const resposta = await api.post(url, dados)
  setDados(resposta.data)
}

export const login = async(url: string, dados: object, setDados: (data: unknown) => void) => {
  const resposta = await api.post(url, dados)
  setDados(resposta.data)
}

export const buscar = async(url: string, setDados: (data: unknown) => void, header: object) => {
  const resposta = await api.get(url, header)
  setDados(resposta.data)
}

export const cadastrar = async(url: string, dados: object, setDados: (data: unknown) => void, header: object) => {
  const resposta = await api.post(url, dados, header)
  setDados(resposta.data)
}

export const atualizar = async(url: string, dados: object, setDados: (data: unknown) => void, header: object) => {
  const resposta = await api.put(url, dados, header)
  setDados(resposta.data)
}

export const deletar = async(url: string, header: object) => {
  await api.delete(url, header)
}