import axios from 'axios'
const url = `api/v1/expense`
export async function getList() {
  try {
    const response = await axios.get(url);
    console.log(response);
    return response.data.data;
  } catch (error) {
    console.log(error);
  }
}

export async function postItem(items) {
  try {
    const response = await axios.post(
      url,
      {items},
      {
        headers: {
          'content-type': 'application/json',
        },
      },
    )
    return response.data.data;
  } catch (error) {
    console.log(error);
  }
}

export async function deleteItem(id){
  let deleteurl=`${url}/${id}`;
  await axios.delete(deleteurl);
}