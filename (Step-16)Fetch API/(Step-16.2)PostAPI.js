//Post API:-
/*Agar data push karna hai server par API kaa use karke toh usse post api kehte hain
If you want to make a POST request instead of a GET request, you can use the fetch function with the method option set to 'POST'
*/

/*
step-16.1 mein hum api se data fect kar rahe thay i.e. get kar rahe thay data ko api se....but Post API mein hum apne khud ke
data ko set kar rahe hain i.e. post kar rahe hain
*/


async function myPostApi(){
    let myCustomPost = {
        method: 'POST',
      body: JSON.stringify({
        title: 'Bhagwad Gita Verse-1.1',
        body: 'धृतराष्ट्र उवाच धर्मक्षेत्रे कुरुक्षेत्रे समवेता युयुत्सव मामका पाण्डवाश्चैव किमकुर्वत सञ्जय',
        userId: 1.1,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    };
    let content = await fetch('https://jsonplaceholder.typicode.com/posts', myCustomPost);
    let response = content.json();
    return response;
}




async function hello(){
    let ans = await myPostApi();
    console.log(ans);
}

hello();