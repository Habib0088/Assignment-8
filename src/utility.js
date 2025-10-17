let getFromLS = () => {
  let data = localStorage.getItem("listItem");

  if (data) {
    let parseData = JSON.parse(data);
    return parseData;
  } else {
    return [];
  }
};

let addDataToLS = (id) => {
  let data = getFromLS();
  if (data.includes(id)) {
    alert("Already exist the data here");
    return
  } else {
    data.push(id);

    let stringifyData = JSON.stringify(data);
    localStorage.setItem("listItem", stringifyData);
  }
};

export { addDataToLS, getFromLS };
