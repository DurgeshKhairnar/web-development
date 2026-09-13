


export async function postCategory(categoryName){
    try{
        const response = await fetch('http://localhost:3000/api/addcategory',{
            method:'POST',
            credentials:'include',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({categoryName: categoryName})
        });
        const jsonResponse = await response.json();
        return jsonResponse.data;
    }catch (e){
        console.log(`post ${e.message}`);
    }
}


export async function fetchCategory(){
    try{
        const response = await fetch('http://localhost:3000/api/getAllcategory',{
            method:'GET',
            credentials:'include',
            headers:{
                'Content-Type':'application/json'
            },
        });
        const jsonResponse = await response.json();
        return jsonResponse.data;
    }catch (e){
        console.log(`error get ${e.message}`)
    }
}

