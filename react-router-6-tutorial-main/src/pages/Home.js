
const Home = () => {
  return (
    <section className='section'>
      {/* this h2 above is shared across all the nested routes,, so because is shared we can use it to set our navbar */}
      {/* we can use index route to prevent parent content from being shared and it will always match the parent route */}
      <h2>non shared home page</h2>
    </section>

  );
};
export default Home;
