const db = require("../models");
const poiRepository = require("../repositories/poi");
const userRepository = require("../repositories/user");
const ResourceNotFound = require("../errors/resourceNotFound");

const create = async (poiAttributes) => {
  const user = await userRepository.searchById(poiAttributes.userId);
  if (!user) throw new ResourceNotFound("User Not Found");
  newPoi = await poiRepository.create(poiAttributes);
};

const list = () => {
  return poiRepository.list();
};

const search = (id) => {
  return poiRepository.search(id);
};

const addComment = (userId, poiId, comment) => {
  return poiRepository.addComment(userId, poiId, comment);
};

const addRate = (userId, poiId, rate) => {
  return poiRepository.addRate(userId, poiId, rate);
};

module.exports = {
  create,
  list,
  addComment,
  addRate,
  search,
};
