// async function apiFetch(){
//     let content = await fetch('https://jsonplaceholder.typicode.com/posts/1');
//     let output =  await content.json();
//     console.log(output);
// };

// apiFetch();


//best pratice to use try and catch block while fetching API
async function apiFetch() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        if (!response.ok) {
            throw new Error('Network response was not ok.');
        }
        let data = await response.json();
        console.log(data);
        console.log(data.title);
    } catch (error) {
        console.error('Error aayi hai:', error);
    }
}

apiFetch();

