import {name,age,isOnline} from './src/task-1';
import {product} from './src/task-2';
import {usernames,ratings,products} from './src/task-3';
import {printUserInfo} from './src/task-4';
import {logStatus} from './src/task-5';
import {getFirstElement} from './src/task-6';
import {getMessage} from './src/task-7';
import {fetchPosts} from './src/task-8';
/* task 1 */
console.log(`Name: ${name}`);
console.log(`Age: ${age}`);
console.log(`Online: ${isOnline}`);
/* task 2 */
console.log(`Product: ${JSON.stringify(product)}`);
/* task 3 */
console.log(`Usernames: ${JSON.stringify(usernames)}`);
console.log(`Ratings: ${JSON.stringify(ratings)}`);
console.log(`Products: ${JSON.stringify(products)}`);
/* task 4 */
printUserInfo("Alice", 30);
printUserInfo("Bob", 25, "bob@mail.com");
/* task 5 */
logStatus("loading");
/* task 6 */
getFirstElement<number>([1, 2, 3]);
getFirstElement<string>(["a", "b", "c"]);
getFirstElement<boolean>([true, false, true]);
/* task 7 */
getMessage().then(result => console.log(result)); 
/* task 8 */
fetchPosts().then((posts) => {
    console.log(posts[0].title);
  });