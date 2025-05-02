import {name,age,isOnline} from './task-1';
import {product} from './task-2';
import {usernames,ratings,products} from './task-3';
import {printUserInfo} from './task-4';
import {logStatus} from './task-5';
import {getFirstElement} from './task-6';
import {getMessage} from './task-7';
import {fetchPosts} from './task-8';
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
getFirstElement([1, 2, 3]);
getFirstElement(["a", "b", "c"]);
getFirstElement([true, false, true]);
/* task 7 */
getMessage().then(result => console.log(result)); 
/* task 8 */
fetchPosts().then((posts) => {
    console.log(posts[0].title);
  });