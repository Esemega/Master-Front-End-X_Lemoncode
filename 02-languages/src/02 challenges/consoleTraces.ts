const delay = <T>(ms:number):Promise<T> => new Promise(resolve => setTimeout(resolve, ms));

type TimeMessage = [time: number, message:string];
const showMessage = async ([time, message]:TimeMessage) => {
  await delay(time);
  console.log(message);
};

const triggers:Function[] = [
  async () => await showMessage([200, "third"]),
  async () => await showMessage([100, "second"]),
];

const run = async (triggers:Function[]) => {
  for (const trigger of triggers) {
    await trigger();
  }
  console.log("first");
};

run(triggers);
//forEach expects a synchronous function.
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach