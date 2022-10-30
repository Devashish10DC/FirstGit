const posts = [
    { title: 'Post One', body: 'This is post one'},
    { title: 'Post Two', body: 'This is post Two'}
];

function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += post.title;
        });
        document.body.innerHTML = output;
    },1000);
}
function createPost(post) {
    return new Promise((resolve, reject) => {
       setTimeout(() => {
          posts.push(post);
        const error = false;
        
        if (!error) {
          resolve();
        } else{
          reject('Error: Array is empty now')
        } 
      
      },1000);
  
    });
}
function deletePosts(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(posts.length >0){
                const lastvar = posts.pop()
         resolve(lastvar);
         } else{
           reject('Error: Array is empty now')
         } 
       
       },1000);
   

    });
}

createPost({ title: 'Post Three', body: 'This is post three'},getPosts)
.then(() => {
    getPosts()
    deletePosts().then(() => {
        getPosts();
        deletePosts().then(() => {
            getPosts();
        deletePosts().then(() => {
            getPosts();
        deletePosts().then(() => {})
        .catch((err) => {
            console.log(err);
        })

        })

        })
    })
})
.catch(err => console.log(err));

createPost({ title: 'Post Four', body: 'This is post four'},getPosts)
 .then(() => {
            getPosts();
        deletePosts().then(() => {})
        .catch((err) => {
            console.log(err);
        })

 })

 //all promise
const promise1 = Promise.resolve('Hello world');
const promise2 = 10;
const promise3 = new Promise((resolve, reject) => setTimeout(resolve, 2000, 'Goodbye')); 

Promise.all([promise1,promise2,promise3]).then(values => console.log(values));

function createPost(){
    return new Promise(() => { })
}

const user = {
    username: 'Dev',
    lastactivitytime: '30-oct'
}

function updatelastactivitytime(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            user.lastactivitytime = new Date().getTime();
            resolve(user.lastactivitytime)
        },1000)
    })
}

function userupdate(){
    Promise.all([createPo, updatelastactivitytime])
    .then(([createPoresolve, updatelastactivitytimeresolve]) => {
        console.log(updatelastactivitytimeresolve)
    })
    .catch(err => console.log(err))
}