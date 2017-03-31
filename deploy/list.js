import console from 'better-console';
import Ocean from './ocean';


function line(theChar) {
  return `${Array(60).join(theChar)}\n`;
}

const ocean = new Ocean();
console.log(Array(5).join(line('=')));

ocean.listOfDrops()
  .then((drops) => {
    console.log(Ocean.prettyDrops(drops));
  }).catch(err => console.log('error: ', err));
