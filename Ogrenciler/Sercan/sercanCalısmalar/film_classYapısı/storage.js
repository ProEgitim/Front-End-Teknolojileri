class AddStorage {

static addStorage(key, myArr) {
  localStorage.setItem(key, JSON.stringify(myArr));
};
}


class GetStorage{

static getFromStorage(key) {
  let myArr;
  myArr = JSON.parse(localStorage.getItem(key));
  return myArr;
};
}