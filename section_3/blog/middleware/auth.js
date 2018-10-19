export default function (context) {
   console.log("MID - just auth");
   if(!context.store.getters.isAuthenticated) {
      context.redirect('/admin/auth');
   }
}