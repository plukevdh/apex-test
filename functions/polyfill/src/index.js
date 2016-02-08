import 'babel-polyfill'

const string = 'my-string.does';

export default function handle(event, ctx) {
  const test = string.endsWith('does')

  console.log("Does it blend:", test);
  ctx.succeed({ result: test, on: string })
}
