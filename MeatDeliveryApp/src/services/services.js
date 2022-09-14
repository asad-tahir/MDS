export default function getDataFromServer(){
    return fetch('https://amc-2022-default-rtdb.europe-west1.firebasedatabase.app/MDS.json')
    .then((response) => response.json())
    .then((json) => {
        //console.log(json)
      return json;
    })
    .catch((error) => {
      console.error(error);
    });
}