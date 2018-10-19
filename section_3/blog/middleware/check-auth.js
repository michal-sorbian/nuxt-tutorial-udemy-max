export default function (context) {
   console.log("MID - check auth");
   context.store.dispatch("initAuth", context.req);
}