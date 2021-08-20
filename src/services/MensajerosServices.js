import http from "./http-common";
const getAll = () => {
  return http.get("/Mensajeros/listar");
};
const get = id => {
  return http.get(`/Mensajeros/${id}`);
};
const create = data => {
  return http.post("/Mensajeros/crear", data);
};
const update = (id, data) => {
  return http.put(`/Mensajeros/actualizar/${id}`, data);
};
const remove = id => {
  return http.delete(`/Mensajeros/borrar/${id}`);
};

export default {
  getAll,
  get,
  create,
  update,
  remove
};