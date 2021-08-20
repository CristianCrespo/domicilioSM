import http from "./http-common";
const getAll = () => {
  return http.get("/Domicilios/listar");
};
const get = id => {
  return http.get(`/Domicilios/${id}`);
};
const create = data => {
  return http.post("/Domicilios/crear", data);
};
const update = (id, data) => {
  return http.put(`/Domicilios/actualizar/${id}`, data);
};
const remove = id => {
  return http.delete(`/Domicilios/borrar/${id}`);
};

export default {
  getAll,
  get,
  create,
  update,
  remove
};